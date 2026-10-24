/* Yose Home — ứng dụng một trang, không cần build.
   Dữ liệu nằm trong data/lesson-XX.js (gọi YOSE.addLesson). */
(function () {
  "use strict";

  /* ---------- Cấu hình ---------- */
  const POS = {
    noun:    { short: "N",     label: "Danh từ",            en: "Noun" },
    nphrase: { short: "N-phr", label: "Cụm danh từ",        en: "Noun phrase" },
    verb:    { short: "V",     label: "Động từ",            en: "Verb" },
    phrasal: { short: "Phr.V", label: "Cụm động từ",        en: "Phrasal verb" },
    vphrase: { short: "V-phr", label: "Cụm từ với động từ", en: "Verb collocation" },
    adj:     { short: "Adj",   label: "Tính từ",            en: "Adjective" },
    adv:     { short: "Adv",   label: "Trạng từ",           en: "Adverb" },
    idiom:   { short: "Idiom", label: "Thành ngữ",          en: "Idiom" },
    expr:    { short: "Expr",  label: "Cụm cố định",        en: "Fixed expression" }
  };
  const POS_ORDER = Object.keys(POS);
  const FORM_KEYS = [["adj", "Adj", "Tính từ"], ["n", "N", "Danh từ"], ["v", "V", "Động từ"], ["adv", "Adv", "Trạng từ"]];

  /* ---------- Tiện ích ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = (s) => String(s ?? "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/[’‘]/g, "'");
  const slug = (s) => norm(s).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const byWord = (a, b) => a.w.localeCompare(b.w, "en", { sensitivity: "base" });
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : v; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  // **chữ đậm** trong dữ liệu = từ được nhấn mạnh trên lớp
  const plain = (s) => String(s ?? "").replace(/\*\*/g, "");
  const rich = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  // khi đang tìm kiếm thì tô sáng từ khóa, còn không thì giữ chữ đậm
  const fmt = (s, q) => (q && q.trim() ? hl(plain(s), q) : rich(s));

  // tô sáng từ khóa, không phân biệt dấu tiếng Việt
  function hl(text, q) {
    text = String(text ?? "");
    const toks = norm(q).split(/\s+/).filter((t) => t.length > 0);
    if (!toks.length) return esc(text);
    let n = "";
    const map = [];
    for (let i = 0; i < text.length; i++) {
      const c = norm(text[i]);
      for (let k = 0; k < c.length; k++) { n += c[k]; map.push(i); }
    }
    const ranges = [];
    toks.forEach((t) => {
      let from = 0, idx;
      while ((idx = n.indexOf(t, from)) !== -1) {
        ranges.push([map[idx], map[idx + t.length - 1] + 1]);
        from = idx + t.length;
      }
    });
    if (!ranges.length) return esc(text);
    ranges.sort((a, b) => a[0] - b[0]);
    const merged = [ranges[0]];
    ranges.slice(1).forEach((r) => {
      const last = merged[merged.length - 1];
      if (r[0] <= last[1]) last[1] = Math.max(last[1], r[1]); else merged.push(r);
    });
    let out = "", pos = 0;
    merged.forEach(([s, e]) => { out += esc(text.slice(pos, s)) + "<mark>" + esc(text.slice(s, e)) + "</mark>"; pos = e; });
    return out + esc(text.slice(pos));
  }

  /* ---------- Dữ liệu ---------- */
  const lessons = (window.YOSE?.lessons || []).slice().sort((a, b) => a.id - b.id);
  const live = lessons.filter((l) => !l.comingSoon);
  const words = [];
  const structures = [];
  const grammarIdx = [];
  const phraseIdx = [];

  live.forEach((l) => {
    const gmap = Object.fromEntries((l.groups || []).map((g) => [g.id, g.name]));
    (l.vocab || []).forEach((v, i) => {
      const formsText = v.forms ? Object.values(v.forms).filter(Boolean).join(" ") : "";
      words.push(Object.assign({}, v, {
        id: "b" + l.id + "-" + slug(v.w),
        lesson: l,
        groupName: gmap[v.group] || "",
        order: i,
        _w: norm(v.w),
        _vi: norm(v.vi),
        _forms: norm(formsText + " " + (v.formsOf || "")),
        _ex: norm(plain((v.ex || "") + " " + (v.exVi || "") + " " + (v.note || ""))),
        _meta: norm(l.topic + " " + (gmap[v.group] || "") + " " + (POS[v.pos]?.label || ""))
      }));
    });
    (l.structures || []).forEach((s, i) => {
      structures.push(Object.assign({}, s, {
        id: "b" + l.id + "-s" + i, lesson: l,
        _t: norm([s.en, s.usage, s.ex, s.exVi].join(" "))
      }));
    });
    (l.grammar || []).forEach((g, gi) => {
      const gid = "b" + l.id + "-g" + gi;
      grammarIdx.push({ id: gid, lesson: l, title: g.title, sub: g.subtitle || g.formula || "",
        _t: norm([g.title, g.subtitle, g.formula, g.note, ...(g.parts || []).map((x) => x.value), ...(g.uses || []),
          ...(g.examples || []).map((x) => x.en), ...(g.variants || []).map((x) => x.label + " " + x.en)].join(" ")) });
      (g.items || []).forEach((it, ii) => {
        grammarIdx.push({ id: gid + "-" + ii, lesson: l, title: it.word + " — " + it.vi, sub: g.title, word: norm(it.word),
          _t: norm([it.word, it.vi, it.use, it.en, it.exVi].join(" ")) });
      });
    });
  });

  // cụm từ trong các mục "phrases" (vd. Lý do mua sắm) cũng tìm được
  live.forEach((l) => (l.sections || []).filter((sec) => sec.type === "phrases").forEach((sec) =>
    sec.items.forEach((it) => it.phrases.forEach((ph) => phraseIdx.push({
      lesson: l, sec: sec.id, title: plain(ph), sub: it.title + " · " + it.vi, _t: norm(plain(ph))
    })))));

  const lessonById = (id) => lessons.find((l) => String(l.id) === String(id));
  const countBy = (arr, fn) => arr.reduce((m, x) => { const k = fn(x); m[k] = (m[k] || 0) + 1; return m; }, {});

  /* ---------- Tìm kiếm ---------- */
  // khớp ở đầu một từ — tránh "yet" khớp nhầm "tuyệt" (không dấu: "tuyet")
  const hasWord = (text, t) => (" " + text).replace(/[^a-z0-9' ]/g, " ").includes(" " + t);

  function scoreWord(w, q) {
    if (!q) return 1;
    if (w._w === q) return 1000;
    if (w._w.startsWith(q)) return 700;
    if ((" " + w._w).includes(" " + q) || w._w.includes("/" + q)) return 600;
    if (w._w.includes(q)) return 400;
    if (w._forms.includes(q)) return 300;
    if (hasWord(w._vi, q)) return 250;
    if (hasWord(w._ex, q)) return 80;
    if (hasWord(w._meta, q)) return 60;
    const toks = q.split(/\s+/).filter(Boolean);
    if (toks.length > 1) {
      const all = [w._w, w._forms, w._vi, w._ex, w._meta].join(" ");
      if (toks.every((t) => hasWord(all, t))) return 40;
    }
    return 0;
  }
  function searchWords(q, list = words) {
    const nq = norm(q).trim();
    if (!nq) return list.slice();
    return list
      .map((w) => [w, scoreWord(w, nq)])
      .filter(([, s]) => s > 0)
      .sort((a, b) => b[1] - a[1] || byWord(a[0], b[0]))
      .map(([w]) => w);
  }
  function searchStructures(q) {
    const nq = norm(q).trim();
    if (!nq) return [];
    const toks = nq.split(/\s+/);
    return structures.filter((s) => toks.every((t) => hasWord(s._t, t)));
  }

  function searchGrammar(q) {
    const nq = norm(q).trim();
    if (!nq) return [];
    const toks = nq.split(/\s+/);
    // khớp đúng từ (vd. "so", "or") được ưu tiên lên đầu
    return grammarIdx
      .filter((g) => g.word === nq || toks.every((t) => hasWord(g._t, t)))
      .sort((a, b) => (b.word === nq) - (a.word === nq));
  }

  /* ---------- Phát âm ---------- */
  let voice = null;
  function pickVoice() {
    if (!("speechSynthesis" in window)) return;
    const vs = speechSynthesis.getVoices();
    voice = vs.find((v) => v.lang === "en-GB") || vs.find((v) => /^en/i.test(v.lang)) || null;
  }
  if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text, rate) {
    if (!("speechSynthesis" in window)) { toast("Trình duyệt chưa hỗ trợ đọc phát âm"); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(plain(text).replace(/\s*\/\s*/g, ", ").replace(/…|\.\.\.|_+/g, " "));
    u.lang = "en-GB";
    if (voice) u.voice = voice;
    u.rate = rate || 0.9;
    speechSynthesis.speak(u);
  }

  let toastTimer;
  function toast(msg) {
    let t = $(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
  }

  /* ---------- Thành phần giao diện ---------- */
  const ICON = {
    speak: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M8 7h7"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    filter: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M7 12h10M10 18h4"/></svg>',
    grid: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>',
    rows: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>'
  };

  const posBadge = (pos) => {
    const p = POS[pos] || { short: pos, label: pos };
    return `<span class="pos pos-${esc(pos)}" title="${esc(p.label)}">${esc(p.short)}</span>`;
  };
  const speakBtn = (text, label = "Nghe phát âm") =>
    `<button class="speak" type="button" data-speak="${esc(text)}" aria-label="${esc(label)}" title="${esc(label)}">${ICON.speak}</button>`;

  // chỉ hiện các dạng từ có thật, mỗi dạng một chip màu
  function formChips(w, q) {
    const items = w.forms ? FORM_KEYS.filter(([k]) => w.forms[k]) : [];
    if (!items.length) return "";
    return `<div class="fchips">${items.map(([k, s, l]) =>
      `<span class="fchip fchip-${k}" title="${l}"><b>${s}</b>${hl(w.forms[k], q)}</span>`).join("")}</div>`;
  }
  const exampleHTML = (w, q) => w.ex
    ? `<div class="ex"><p class="ex-en">${fmt(w.ex, q)} ${speakBtn(w.ex, "Nghe câu ví dụ")}</p>${w.exVi ? `<p class="ex-vi">${hl(w.exVi, q)}</p>` : ""}</div>`
    : "";
  const lessonLink = (w) =>
    `<a href="#/buoi/${w.lesson.id}?w=${esc(w.id)}" class="tag tag-lesson">Buổi ${w.lesson.id}</a>${w.groupName ? `<span class="muted small">${esc(w.groupName)}</span>` : ""}`;

  function wordCard(w, opts = {}) {
    const q = opts.q || "";
    const chips = formChips(w, q);
    return `<article class="word" id="w-${esc(w.id)}">
      <header class="word-head">
        <div class="word-title"><h3>${hl(w.w, q)}</h3>${speakBtn(w.w)}</div>
        ${posBadge(w.pos)}
      </header>
      ${w.ipa ? `<div class="ipa">${esc(w.ipa)}</div>` : ""}
      <p class="word-vi">${hl(w.vi, q)}</p>
      ${chips ? `<div class="forms"><span class="forms-label">Dạng từ${w.formsOf ? ` · <i>${hl(w.formsOf, q)}</i>` : ""}</span>${chips}</div>` : ""}
      ${w.note ? `<p class="word-note">${hl(w.note, q)}</p>` : ""}
      ${exampleHTML(w, q)}
      ${opts.showLesson ? `<footer class="word-meta">${lessonLink(w)}</footer>` : ""}
    </article>`;
  }

  // dạng bảng: mỗi từ một dòng, bấm để mở ví dụ
  function wordRow(w, opts = {}) {
    const q = opts.q || "";
    return `<details class="wrow" id="w-${esc(w.id)}">
      <summary>
        <span class="wr-word"><b>${hl(w.w, q)}</b>${w.ipa ? `<small class="ipa">${esc(w.ipa)}</small>` : ""}</span>
        <span class="wr-pos">${posBadge(w.pos)}</span>
        <span class="wr-vi">${hl(w.vi, q)}</span>
        <span class="wr-forms">${formChips(w, q) || '<span class="muted">—</span>'}</span>
        <span class="wr-end">${speakBtn(w.w)}<span class="chev">${ICON.chevron}</span></span>
      </summary>
      <div class="wr-detail">
        ${w.formsOf ? `<p class="muted small">Dạng từ của <b>${hl(w.formsOf, q)}</b></p>` : ""}
        ${w.note ? `<p class="word-note">${hl(w.note, q)}</p>` : ""}
        ${exampleHTML(w, q) || '<p class="muted small">Chưa có ví dụ.</p>'}
        ${opts.showLesson ? `<div class="word-meta">${lessonLink(w)}</div>` : ""}
      </div>
    </details>`;
  }

  function groupWords(list, mode, opts) {
    const pick = (fn) => list.filter(fn);
    if (mode === "pos") {
      return POS_ORDER.filter((p) => list.some((w) => w.pos === p)).map((p) => ({
        head: `${posBadge(p)} ${esc(POS[p].label)} <span class="muted">· ${esc(POS[p].en)}</span>`,
        items: pick((w) => w.pos === p)
      }));
    }
    if (mode === "group") {
      return (opts.groups || []).filter((g) => list.some((w) => w.group === g.id)).map((g) => ({
        head: esc(g.name), items: pick((w) => w.group === g.id)
      }));
    }
    if (mode === "lesson") {
      return live.filter((l) => list.some((w) => w.lesson === l)).map((l) => ({
        head: `<span class="lc-num">Buổi ${l.id}</span> ${esc(l.title)}`, items: pick((w) => w.lesson === l)
      }));
    }
    return [{ head: "", items: list }];
  }

  function wordSections(list, mode, opts = {}) {
    const body = (items) => opts.layout === "table"
      ? `<div class="wtable"><div class="wtable-head"><span>Từ</span><span>Loại</span><span>Nghĩa</span><span>Dạng từ</span><span></span></div>${items.map((w) => wordRow(w, opts)).join("")}</div>`
      : `<div class="word-grid">${items.map((w) => wordCard(w, opts)).join("")}</div>`;
    return groupWords(list, mode, opts).map((g) => `<section class="wgroup">
        ${g.head ? `<h3 class="wgroup-title">${g.head}<span class="count">${g.items.length}</span></h3>` : ""}
        ${body(g.items)}
      </section>`).join("");
  }

  // nút chuyển dạng Thẻ / Bảng (dùng chung cho Từ điển và trang buổi học)
  const layoutSeg = (cur) => `<div class="seg" role="group" aria-label="Kiểu hiển thị">
      <button type="button" data-layout="card" class="${cur === "card" ? "on" : ""}" title="Dạng thẻ">${ICON.grid}<span>Thẻ</span></button>
      <button type="button" data-layout="table" class="${cur === "table" ? "on" : ""}" title="Dạng bảng">${ICON.rows}<span>Bảng</span></button>
    </div>`;

  /* ---------- Tìm nhanh (dùng chung cho hộp tìm kiếm & trang chủ) ---------- */
  function quickResultsHTML(q) {
    const nq = norm(q).trim();
    if (!nq) {
      return `<div class="qr-section"><div class="qr-label">Buổi học</div>
        ${lessons.map((l) => l.comingSoon
          ? `<div class="qr-item is-disabled"><span class="qr-num">${l.id}</span><span class="qr-main"><b>Buổi ${l.id}</b><small>Sắp cập nhật</small></span></div>`
          : `<a class="qr-item" href="#/buoi/${l.id}"><span class="qr-num">${l.id}</span><span class="qr-main"><b>${esc(l.title)}</b><small>${esc(l.titleVi)} · ${esc(l.topic)}</small></span></a>`).join("")}
      </div>
      <div class="qr-section"><div class="qr-label">Loại từ</div><div class="qr-chips">
        ${POS_ORDER.filter((p) => words.some((w) => w.pos === p)).map((p) => `<a class="qr-item qr-chip" href="#/tu-dien?p=${p}">${posBadge(p)} ${esc(POS[p].label)}</a>`).join("")}
      </div></div>`;
    }
    const ws = searchWords(q).slice(0, 8);
    const ss = searchStructures(q).slice(0, 4);
    const gs = searchGrammar(q).slice(0, 4);
    const ps = phraseIdx.filter((x) => x._t.includes(nq)).slice(0, 4);
    const ls = live.filter((l) => norm([l.title, l.titleVi, l.topic, "buoi " + l.id].join(" ")).includes(nq));
    if (!ws.length && !ss.length && !gs.length && !ps.length && !ls.length) {
      return `<div class="qr-empty">Không tìm thấy “${esc(q)}”.<br><small>Thử gõ không dấu, từ ngắn hơn, hoặc nghĩa tiếng Việt.</small></div>`;
    }
    let html = "";
    const grammarHTML = gs.length ? `<div class="qr-section"><div class="qr-label">Ngữ pháp</div>${gs.map((g) => `
        <a class="qr-item" href="#/buoi/${g.lesson.id}?g=${esc(g.id)}">
          <span class="qr-main"><b>${hl(g.title, q)}</b><small>${hl(g.sub, q)}</small></span>
          <span class="qr-side">Buổi ${g.lesson.id}</span>
        </a>`).join("")}</div>` : "";
    // gõ đúng một liên từ (so, but…) thì đưa ngữ pháp lên đầu
    const grammarFirst = gs[0] && gs[0].word === nq;
    if (grammarFirst) html += grammarHTML;
    if (ws.length) {
      html += `<div class="qr-section"><div class="qr-label">Từ vựng</div>${ws.map((w) => `
        <a class="qr-item" href="#/buoi/${w.lesson.id}?w=${esc(w.id)}">
          ${posBadge(w.pos)}
          <span class="qr-main"><b>${hl(w.w, q)}</b><small>${hl(w.vi, q)}</small></span>
          <span class="qr-side">Buổi ${w.lesson.id}</span>
        </a>`).join("")}
        <a class="qr-item qr-all" href="#/tu-dien?q=${encodeURIComponent(q)}">${ICON.search}<span class="qr-main"><b>Xem tất cả kết quả trong Từ điển</b></span>${ICON.arrow}</a>
      </div>`;
    }
    if (ss.length) {
      html += `<div class="qr-section"><div class="qr-label">Cấu trúc câu</div>${ss.map((s) => `
        <a class="qr-item" href="#/buoi/${s.lesson.id}?s=structures">
          <span class="qr-main"><b>${hl(s.en, q)}</b><small>${hl(s.usage, q)}</small></span>
          <span class="qr-side">Buổi ${s.lesson.id}</span>
        </a>`).join("")}</div>`;
    }
    if (!grammarFirst) html += grammarHTML;
    if (ps.length) {
      html += `<div class="qr-section"><div class="qr-label">Cụm từ theo chủ đề</div>${ps.map((x) => `
        <a class="qr-item" href="#/buoi/${x.lesson.id}?s=${esc(x.sec)}">
          <span class="qr-main"><b>${hl(x.title, q)}</b><small>${esc(x.sub)}</small></span>
          <span class="qr-side">Buổi ${x.lesson.id}</span>
        </a>`).join("")}</div>`;
    }
    if (ls.length) {
      html += `<div class="qr-section"><div class="qr-label">Buổi học</div>${ls.map((l) => `
        <a class="qr-item" href="#/buoi/${l.id}"><span class="qr-num">${l.id}</span><span class="qr-main"><b>${hl(l.title, q)}</b><small>${hl(l.titleVi, q)} · ${hl(l.topic, q)}</small></span></a>`).join("")}</div>`;
    }
    return html;
  }

  // gắn điều hướng bàn phím ↑ ↓ Enter cho một ô nhập + vùng kết quả
  function bindQuickSearch(input, box, onPick, onEnterEmpty) {
    let active = -1;
    const items = () => $$("a.qr-item", box);
    const setActive = (i) => {
      const list = items();
      list.forEach((el) => el.classList.remove("active"));
      if (!list.length) { active = -1; return; }
      active = (i + list.length) % list.length;
      list[active].classList.add("active");
      list[active].scrollIntoView({ block: "nearest" });
    };
    const render = () => { box.innerHTML = quickResultsHTML(input.value); active = -1; if (input.value.trim()) setActive(0); };
    input.addEventListener("input", render);
    input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") { e.preventDefault(); setActive(active + 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); setActive(active - 1); }
      else if (e.key === "Enter") {
        e.preventDefault();
        const el = items()[active];
        if (el) { location.hash = el.getAttribute("href"); onPick && onPick(); }
        else if (onEnterEmpty) onEnterEmpty();
      }
    });
    box.addEventListener("click", (e) => { if (e.target.closest("a")) onPick && onPick(); });
    return render;
  }

  /* ---------- Hộp tìm nhanh (bàn phím: / hoặc Ctrl+K) ---------- */
  const palette = $("#palette");
  const pInput = $("#paletteInput");
  const pResults = $("#paletteResults");
  const renderPalette = bindQuickSearch(pInput, pResults, closePalette, () => {
    if (pInput.value.trim()) { location.hash = "#/tu-dien?q=" + encodeURIComponent(pInput.value.trim()); closePalette(); }
  });
  function openPalette(prefill) {
    palette.hidden = false;
    document.body.classList.add("no-scroll");
    if (typeof prefill === "string") pInput.value = prefill;
    renderPalette();
    requestAnimationFrame(() => { pInput.focus(); pInput.select(); });
  }
  function closePalette() {
    palette.hidden = true;
    document.body.classList.remove("no-scroll");
    if (document.activeElement === pInput) pInput.blur();
  }
  $("#openSearch").addEventListener("click", () => openPalette());
  palette.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closePalette(); });
  document.addEventListener("keydown", (e) => {
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName) || document.activeElement?.isContentEditable;
    if ((e.key === "k" || e.key === "K") && (e.ctrlKey || e.metaKey)) { e.preventDefault(); palette.hidden ? openPalette() : closePalette(); }
    else if (e.key === "/" && !typing && palette.hidden) { e.preventDefault(); openPalette(); }
    else if (e.key === "Escape" && !palette.hidden) closePalette();
    else if (e.key === "Escape") document.body.classList.remove("sheet-open");
  });

  /* ---------- Giao diện sáng / tối ---------- */
  $("#themeToggle").addEventListener("click", () => {
    const root = document.documentElement;
    const cur = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    store.set("yose-theme", next);
  });

  /* ---------- Menu buổi học ---------- */
  $("#navLessons").innerHTML = `<details class="dropdown">
      <summary>Buổi học <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></summary>
      <div class="menu">${lessons.map((l) => l.comingSoon
        ? `<span class="menu-item is-disabled"><b>Buổi ${l.id}</b><small>Sắp cập nhật</small></span>`
        : `<a class="menu-item" href="#/buoi/${l.id}" data-nav="lesson-${l.id}"><b>Buổi ${l.id}</b><small>${esc(l.title)}</small></a>`).join("")}
      </div></details>`;
  document.addEventListener("click", (e) => {
    const dd = $("#navLessons details");
    if (dd && dd.open && (!dd.contains(e.target) || e.target.closest(".menu-item"))) dd.open = false;
  });

  // phát âm / chuyển mục — dùng ủy quyền sự kiện
  document.addEventListener("click", (e) => {
    const all = e.target.closest("[data-speak-all]");
    if (all) { e.preventDefault(); speakAll(JSON.parse(all.dataset.speakAll)); return; }
    const vt = e.target.closest("[data-vi-toggle]");
    if (vt) {
      const sec = vt.closest(".lsec");
      const hide = sec.classList.toggle("hide-vi");
      vt.textContent = hide ? "Hiện bản dịch" : "Ẩn bản dịch";
      vt.setAttribute("aria-pressed", String(!hide));
      return;
    }
    const sp = e.target.closest("[data-speak]");
    if (sp) { e.preventDefault(); speak(sp.dataset.speak, sp.dataset.rate ? +sp.dataset.rate : undefined); return; }
    const jump = e.target.closest("[data-jump]");
    if (jump) { e.preventDefault(); document.getElementById(jump.dataset.jump)?.scrollIntoView({ behavior: "smooth", block: "start" }); }
  });

  /* ---------- Bộ định tuyến ---------- */
  const app = $("#app");
  function parseHash() {
    const raw = location.hash.replace(/^#/, "") || "/";
    const [path, qs] = raw.split("?");
    return { path: path || "/", params: new URLSearchParams(qs || "") };
  }
  function setNav(key) {
    $$("[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === key));
    $(".nav-lessons summary")?.classList.toggle("active", key.startsWith("lesson"));
  }
  function route() {
    const { path, params } = parseHash();
    closePalette();
    document.body.classList.remove("sheet-open");
    let m;
    if (path === "/") { setNav("home"); renderHome(); window.scrollTo(0, 0); }
    else if (path === "/tu-dien") { setNav("dict"); renderDict(params); window.scrollTo(0, 0); }
    else if ((m = path.match(/^\/buoi\/(\d+)$/))) { setNav("lesson-" + m[1]); renderLesson(m[1], params); }
    else { setNav(""); renderNotFound(); }
  }
  window.addEventListener("hashchange", route);

  /* ---------- Trang chủ ---------- */
  function renderHome() {
    document.title = "Yose Home · Kho kiến thức tiếng Anh";
    const posCounts = countBy(words, (w) => w.pos);
    const grammarCount = live.reduce((n, l) => n + (l.grammar || []).length, 0);
    app.innerHTML = `
      <section class="hero">
        <p class="eyebrow">Trung tâm Anh ngữ Yose Home</p>
        <h1>Kho kiến thức <span>của khóa học</span></h1>
        <p class="lead">Từ vựng, dạng từ, cấu trúc câu, ngữ pháp và bài nói mẫu của từng buổi — gom về một chỗ để tra cứu và ôn tập.</p>
        <div class="hero-search">
          <div class="field">
            ${ICON.search}
            <input id="heroInput" type="search" placeholder="Tìm từ: scenic, tiết kiệm thời gian, healthy…" autocomplete="off" spellcheck="false" aria-label="Tìm từ nhanh">
          </div>
          <div class="hero-results" id="heroResults" hidden></div>
        </div>
        <div class="stats">
          <div class="stat"><b>${live.length}</b><span>buổi học</span></div>
          <div class="stat"><b>${words.length}</b><span>từ & cụm từ</span></div>
          <div class="stat"><b>${structures.length}</b><span>cấu trúc câu</span></div>
          <div class="stat"><b>${grammarCount}</b><span>điểm ngữ pháp</span></div>
        </div>
      </section>

      <section class="block">
        <div class="block-head"><h2>Các buổi học</h2><p class="muted">Mỗi buổi là một chủ đề riêng</p></div>
        <div class="lesson-grid">${lessons.map(lessonCard).join("")}</div>
      </section>

      <section class="block">
        <div class="block-head"><h2>Tra theo loại từ</h2><p class="muted">Danh từ, động từ, tính từ, trạng từ, cụm từ…</p></div>
        <div class="pos-grid">${POS_ORDER.filter((p) => posCounts[p]).map((p) => `
          <a class="pos-card" href="#/tu-dien?p=${p}">${posBadge(p)}<span><b>${esc(POS[p].label)}</b><small>${esc(POS[p].en)}</small></span><span class="count">${posCounts[p]}</span></a>`).join("")}
        </div>
      </section>`;

    const input = $("#heroInput"), box = $("#heroResults");
    bindQuickSearch(input, box, null, () => { if (input.value.trim()) location.hash = "#/tu-dien?q=" + encodeURIComponent(input.value.trim()); });
    const toggle = () => { box.hidden = !input.value.trim(); };
    input.addEventListener("input", toggle);
    input.addEventListener("focus", toggle);
    document.addEventListener("click", function off(e) {
      if (!document.body.contains(input)) { document.removeEventListener("click", off); return; }
      if (!e.target.closest(".hero-search")) box.hidden = true;
    });
  }

  function lessonCard(l) {
    if (l.comingSoon) {
      return `<div class="lesson-card is-soon">
        <div class="lc-top"><span class="lc-num">Buổi ${l.id}</span><span class="tag tag-soon">${ICON.clock} Sắp cập nhật</span></div>
        <h3>Đang chuẩn bị tài liệu</h3>
        <p class="muted">${esc(l.summary || "Nội dung sẽ được bổ sung sau.")}</p>
      </div>`;
    }
    const n = (k) => (l[k] || []).length;
    return `<a class="lesson-card" href="#/buoi/${l.id}">
      <div class="lc-top"><span class="lc-num">Buổi ${l.id}</span><span class="tag">${esc(l.topic)}</span></div>
      <h3>${esc(l.title)}</h3>
      <p class="muted">${esc(l.titleVi)}</p>
      <div class="lc-stats">
        <span><b>${n("vocab")}</b> từ</span>
        <span><b>${n("structures")}</b> cấu trúc</span>
        ${n("grammar") ? `<span><b>${n("grammar")}</b> ngữ pháp</span>` : ""}
        ${l.sample || l.samples ? `<span>Bài nói mẫu</span>` : ""}
      </div>
      ${(l.groups || []).length ? `<div class="lc-groups">${l.groups.map((g) => `<span>${esc(g.name)}</span>`).join("")}</div>` : ""}
      <span class="lc-go">Vào học ${ICON.arrow}</span>
    </a>`;
  }

  /* ---------- Trang từ điển ---------- */
  const GROUPINGS = { pos: "Loại từ", lesson: "Buổi học", none: "Không nhóm" };

  function renderDict(params) {
    document.title = "Từ điển · Yose Home";
    const st = {
      q: params.get("q") || "",
      b: params.get("b") || "",
      g: params.get("g") || "",
      p: (params.get("p") || "").split(",").filter((x) => POS[x])
    };
    const pref = {
      group: GROUPINGS[store.get("yose-dict-group")] ? store.get("yose-dict-group") : "pos",
      layout: store.get("yose-layout", "card") === "table" ? "table" : "card"
    };

    app.innerHTML = `<div class="dict-page">
      <section class="page-head">
        <h1>Từ điển</h1>
        <p class="muted">${words.length} từ & cụm từ của ${live.length} buổi học. Gõ tiếng Anh hoặc tiếng Việt — có dấu hay không đều được.</p>
      </section>
      <div class="dict">
        <aside class="fpanel" id="fpanel" aria-label="Bộ lọc"></aside>
        <div class="dict-main">
          <div class="dict-top">
            <div class="field field-lg">
              ${ICON.search}
              <input id="dictInput" type="search" placeholder="Tìm từ, nghĩa hoặc dạng từ…" value="${esc(st.q)}" autocomplete="off" spellcheck="false" aria-label="Tìm trong từ điển">
            </div>
            <button type="button" class="btn-filter" id="openFilters" aria-controls="fpanel">${ICON.filter}<span>Bộ lọc</span><span class="badge" id="fBadge" hidden></span></button>
          </div>
          <div class="pills" id="pills"></div>
          <div class="toolbar" id="toolbar"></div>
          <div id="results"></div>
        </div>
      </div>
      <div class="fpanel-backdrop" data-close></div>
    </div>`;

    const input = $("#dictInput");
    const sync = () => {
      const p = new URLSearchParams();
      if (st.q) p.set("q", st.q);
      if (st.b) p.set("b", st.b);
      if (st.g) p.set("g", st.g);
      if (st.p.length) p.set("p", st.p.join(","));
      const qs = p.toString().replace(/%2C/g, ",");
      history.replaceState(null, "", "#/tu-dien" + (qs ? "?" + qs : ""));
    };
    const draw = () => { drawPanel(st); drawPills(st); drawResults(st, pref); };
    const sheet = (open) => document.body.classList.toggle("sheet-open", open);

    let timer;
    input.addEventListener("input", () => {
      clearTimeout(timer);
      timer = setTimeout(() => { st.q = input.value; sync(); draw(); }, 80);
    });
    $("#openFilters").addEventListener("click", () => sheet(true));

    const root = $(".dict-page");
    root.addEventListener("click", (e) => {
      const t = e.target;
      const f = t.closest("[data-f]");
      if (f) {
        const k = f.dataset.f, v = f.dataset.v;
        if (k === "p") st.p = st.p.includes(v) ? st.p.filter((x) => x !== v) : POS_ORDER.filter((x) => x === v || st.p.includes(x));
        else st[k] = v;
        if (k === "b") st.g = "";
        sync(); draw(); return;
      }
      const rm = t.closest("[data-rm]");
      if (rm) {
        const k = rm.dataset.rm;
        if (k === "p") st.p = st.p.filter((x) => x !== rm.dataset.v);
        else st[k] = "";
        if (k === "b") st.g = "";
        if (k === "q") input.value = "";
        sync(); draw(); return;
      }
      if (t.closest("[data-reset]")) {
        Object.assign(st, { q: "", b: "", g: "", p: [] });
        input.value = "";
        sync(); draw(); return;
      }
      if (t.closest("[data-close]")) { sheet(false); return; }
      const lay = t.closest("[data-layout]");
      if (lay) { pref.layout = lay.dataset.layout; store.set("yose-layout", pref.layout); drawResults(st, pref); }
    });
    root.addEventListener("change", (e) => {
      if (e.target.id === "groupSel") { pref.group = e.target.value; store.set("yose-dict-group", pref.group); drawResults(st, pref); }
    });
    draw();
    if (!st.q && !("ontouchstart" in window)) input.focus();
  }

  // danh sách từ theo bộ lọc; skip = bỏ qua một bộ lọc để đếm số lượng cho chính nó
  function filtered(st, skip) {
    return searchWords(st.q, words.filter((w) =>
      (skip === "b" || !st.b || String(w.lesson.id) === st.b) &&
      (skip === "b" || skip === "g" || !st.g || `${w.lesson.id}:${w.group}` === st.g) &&
      (skip === "p" || !st.p.length || st.p.includes(w.pos))));
  }

  function drawPanel(st) {
    const allB = filtered(st, "b");
    const lc = countBy(allB, (w) => w.lesson.id);
    const gc = countBy(filtered(st, "g"), (w) => `${w.lesson.id}:${w.group}`);
    const pc = countBy(filtered(st, "p"), (w) => w.pos);
    const total = filtered(st).length;
    const opt = (kind, on, k, v, inner, n) =>
      `<button type="button" class="opt opt-${kind}${on ? " on" : ""}" data-f="${k}" data-v="${esc(v)}" aria-pressed="${on}"${!on && !n ? " disabled" : ""}>
        <i class="mark" aria-hidden="true"></i>${inner}<span class="n">${n}</span></button>`;
    const nActive = (st.b ? 1 : 0) + (st.g ? 1 : 0) + st.p.length;

    $("#fpanel").innerHTML = `
      <div class="fp-head">
        <h2>Bộ lọc</h2>
        ${nActive ? `<button type="button" class="link-btn" data-reset>Xóa lọc</button>` : ""}
        <button type="button" class="icon-btn fp-close" data-close aria-label="Đóng bộ lọc">${ICON.x}</button>
      </div>
      <div class="fp-body">
        <section class="fp-sec">
          <h3>Buổi học</h3>
          ${opt("radio", !st.b, "b", "", `<span class="opt-text">Tất cả các buổi</span>`, allB.length)}
          ${live.map((l) => {
            const on = String(l.id) === st.b;
            const groups = on && (l.groups || []).length
              ? `<div class="opt-sub">
                  ${opt("radio", !st.g, "g", "", `<span class="opt-text">Tất cả nhóm từ</span>`, lc[l.id] || 0)}
                  ${l.groups.map((g) => opt("radio", st.g === `${l.id}:${g.id}`, "g", `${l.id}:${g.id}`, `<span class="opt-text">${esc(g.name)}</span>`, gc[`${l.id}:${g.id}`] || 0)).join("")}
                </div>`
              : "";
            return opt("radio", on, "b", String(l.id), `<span class="opt-num">${l.id}</span><span class="opt-text">${esc(l.title)}<small>${esc(l.topic)}</small></span>`, lc[l.id] || 0) + groups;
          }).join("")}
        </section>
        <section class="fp-sec">
          <h3>Loại từ <small>chọn được nhiều</small></h3>
          ${POS_ORDER.filter((p) => words.some((w) => w.pos === p)).map((p) =>
            opt("check", st.p.includes(p), "p", p, `${posBadge(p)}<span class="opt-text">${esc(POS[p].label)}</span>`, pc[p] || 0)).join("")}
        </section>
      </div>
      <div class="fp-foot"><button type="button" class="btn btn-block" data-close>Xem ${total} kết quả</button></div>`;

    const badge = $("#fBadge");
    badge.hidden = !nActive;
    badge.textContent = nActive;
  }

  function drawPills(st) {
    const pills = [];
    if (st.q) pills.push(["q", "", `${ICON.search}“${esc(st.q)}”`]);
    if (st.b) pills.push(["b", "", `Buổi ${esc(st.b)}`]);
    if (st.g) {
      const [lid, gid] = st.g.split(":");
      const g = (lessonById(lid)?.groups || []).find((x) => x.id === gid);
      if (g) pills.push(["g", "", esc(g.name)]);
    }
    st.p.forEach((p) => pills.push(["p", p, `<i class="dot dot-${p}"></i>${esc(POS[p].label)}`]));
    $("#pills").innerHTML = pills.length
      ? pills.map(([k, v, label]) => `<button type="button" class="pill" data-rm="${k}" data-v="${esc(v)}" aria-label="Bỏ lọc">${label}${ICON.x}</button>`).join("") +
        (pills.length > 1 ? `<button type="button" class="link-btn" data-reset>Xóa tất cả</button>` : "")
      : "";
  }

  function drawResults(st, pref) {
    const list = filtered(st);
    // có từ khóa và không nhóm: giữ thứ tự theo độ khớp; còn lại A → Z
    if (!(st.q.trim() && pref.group === "none")) list.sort(byWord);
    $("#toolbar").innerHTML = `
      <div class="tb-count"><b>${list.length}</b> từ & cụm từ</div>
      <div class="tb-tools">
        <label class="tb-select"><span>Nhóm theo</span>
          <select id="groupSel">${Object.entries(GROUPINGS).map(([k, v]) => `<option value="${k}"${pref.group === k ? " selected" : ""}>${v}</option>`).join("")}</select>
        </label>
        ${layoutSeg(pref.layout)}
      </div>`;
    $("#results").innerHTML = list.length
      ? wordSections(list, pref.group === "none" ? "flat" : pref.group, { q: st.q, showLesson: true, layout: pref.layout })
      : `<div class="empty">
          <div class="empty-icon">${ICON.search}</div>
          <h3>Chưa có từ nào khớp</h3>
          <p class="muted">Thử gõ không dấu, gõ một phần của từ, hoặc bỏ bớt bộ lọc.</p>
          <button type="button" class="btn" data-reset>Xóa bộ lọc</button>
        </div>`;
  }

  /* ---------- Trang buổi học ---------- */
  function renderLesson(id, params) {
    const l = lessonById(id);
    if (!l) return renderNotFound();
    const idx = lessons.indexOf(l);
    const prev = lessons[idx - 1], next = lessons[idx + 1];
    const pager = `<nav class="pager">
        ${prev ? `<a href="#/buoi/${prev.id}" class="pager-link">${ICON.back}<span><small>Buổi trước</small><b>Buổi ${prev.id}${prev.comingSoon ? "" : " · " + esc(prev.title)}</b></span></a>` : "<span></span>"}
        ${next ? `<a href="#/buoi/${next.id}" class="pager-link next"><span><small>Buổi sau</small><b>Buổi ${next.id}${next.comingSoon ? "" : " · " + esc(next.title)}</b></span>${ICON.arrow}</a>` : "<span></span>"}
      </nav>`;

    if (l.comingSoon) {
      document.title = `Buổi ${l.id} · Yose Home`;
      app.innerHTML = `
        <a class="crumb" href="#/">${ICON.back} Trang chủ</a>
        <div class="empty empty-lg">
          <div class="empty-icon">${ICON.clock}</div>
          <p class="eyebrow">Buổi ${l.id}</p>
          <h1>Nội dung đang được cập nhật</h1>
          <p class="muted">${esc(l.summary || "Tài liệu buổi này sẽ được bổ sung sau.")}</p>
          <a class="btn" href="#/tu-dien">Tra từ các buổi khác</a>
        </div>${pager}`;
      window.scrollTo(0, 0);
      return;
    }

    document.title = `Buổi ${l.id}: ${l.title} · Yose Home`;
    const lw = words.filter((w) => w.lesson === l);
    const samples = l.samples || (l.sample ? [l.sample] : []);
    const sections = [
      ["sec-vocab", "Từ vựng", lw.length],
      ...(l.sections || []).map((x) => ["sec-" + x.id, x.nav || x.title, 1]),
      ["sec-structures", "Cấu trúc câu", (l.structures || []).length],
      ["sec-grammar", "Ngữ pháp", (l.grammar || []).length],
      ["sec-exercises", "Luyện tập", l.exercises ? l.exercises.items.length : 0],
      ["sec-sample", "Bài nói mẫu", samples.length],
      ["sec-practice", "Tự luyện", (l.practice || []).length],
      ["sec-notes", "Lưu ý", (l.notes || []).length]
    ].filter((s) => s[2]);
    let mode = store.get("yose-lesson-view", "pos");

    app.innerHTML = `
      <a class="crumb" href="#/">${ICON.back} Trang chủ</a>
      <header class="lesson-hero">
        <div class="lh-meta"><span class="lc-num">Buổi ${l.id}</span><a class="tag" href="#/tu-dien?b=${l.id}" title="Tra từ của buổi này trong Từ điển">${esc(l.topic)}</a></div>
        <h1>${esc(l.title)}</h1>
        <p class="lh-vi">${esc(l.titleVi)}</p>
        ${l.summary ? `<p class="muted lh-sum">${esc(l.summary)}</p>` : ""}
      </header>
      ${l.warmup ? `<div class="warmup">
        <span class="warm-tag">Khởi động</span>
        <p class="warm-q">${esc(l.warmup.q)} ${speakBtn(l.warmup.q, "Nghe câu hỏi")}</p>
        <p class="warm-a">${rich(l.warmup.a).replace(/→/g, '<span class="warm-arrow">→</span>')}</p>
        ${l.warmup.vi ? `<p class="muted small">${esc(l.warmup.vi)}</p>` : ""}
      </div>` : ""}
      <nav class="section-nav" aria-label="Mục trong buổi học">
        ${sections.map(([sid, name, n]) => `<button type="button" data-jump="${sid}">${name}${sid === "sec-vocab" || sid === "sec-structures" ? `<span class="chip-count">${n}</span>` : ""}</button>`).join("")}
      </nav>

      <section class="lsec" id="sec-vocab">
        <div class="lsec-head">
          <h2>Từ vựng</h2>
          <div class="lsec-tools">
            <div class="field field-sm">${ICON.search}<input id="lessonFilter" type="search" placeholder="Lọc từ trong buổi…" autocomplete="off" aria-label="Lọc từ trong buổi"></div>
            <div class="seg" role="group" aria-label="Nhóm từ vựng theo">
              <button type="button" data-mode="pos">Loại từ</button>
              <button type="button" data-mode="group">Nhóm chủ đề</button>
            </div>
            <span id="lessonLayout"></span>
          </div>
        </div>
        <div id="lessonWords"></div>
      </section>

      ${(l.sections || []).map((x) => customSection(x, lw)).join("")}

      ${(l.structures || []).length ? `<section class="lsec" id="sec-structures">
        <div class="lsec-head"><h2>Cấu trúc câu</h2></div>
        ${l.structuresIntro ? `<p class="muted">${esc(l.structuresIntro)}</p>` : ""}
        <ol class="struct-list">${l.structures.map((s, i) => `
          <li class="struct">
            <span class="struct-n">${i + 1}</span>
            <div>
              <p class="struct-en">${fmtPattern(s.en)} ${speakBtn(s.en, "Nghe mẫu câu")}</p>
              ${s.usage ? `<p class="struct-use">${esc(s.usage)}</p>` : ""}
              ${s.ex ? `<div class="ex"><p class="ex-en">${rich(s.ex)} ${speakBtn(s.ex, "Nghe câu ví dụ")}</p>${s.exVi ? `<p class="ex-vi">${esc(s.exVi)}</p>` : ""}</div>` : ""}
            </div>
          </li>`).join("")}
        </ol>
      </section>` : ""}

      ${(l.grammar || []).length ? `<section class="lsec" id="sec-grammar">
        <div class="lsec-head"><h2>Ngữ pháp</h2></div>
        <div class="grammar-grid">${l.grammar.map((g, gi) => grammarCard(l, g, gi)).join("")}</div>
        ${l.grammarCompare ? compareTable(l.grammarCompare) : ""}
        ${l.grammarTip ? `<div class="tip"><b>Nhớ nhanh</b><p>${esc(l.grammarTip)}</p></div>` : ""}
      </section>` : ""}

      ${l.exercises ? `<section class="lsec" id="sec-exercises">
        <div class="lsec-head"><h2>${esc(l.exercises.title || "Luyện tập")}</h2></div>
        ${exercisesHTML(l.exercises)}
      </section>` : ""}

      ${samples.length ? `<section class="lsec" id="sec-sample">
        <div class="lsec-head"><h2>Bài nói mẫu</h2>
          <div class="lsec-tools">
            ${samples.some((x) => x.vi) ? `<button type="button" class="btn btn-ghost" id="toggleVi" aria-expanded="false">Hiện bản dịch</button>` : ""}
          </div>
        </div>
        ${samples.map((x) => `<div class="sample">
          ${x.title || samples.length > 1 ? `<div class="sample-head"><h3>${esc(x.title || "")}</h3>
            <button type="button" class="btn btn-soft btn-sm" data-speak="${esc(x.en)}" data-rate="0.9">${ICON.speak} Nghe</button></div>`
            : `<div class="sample-head sample-head-solo"><button type="button" class="btn btn-soft btn-sm" data-speak="${esc(x.en)}" data-rate="0.9">${ICON.speak} Nghe bài mẫu</button></div>`}
          <p class="sample-en">${slots(vocabText(x.en, lw))}</p>
          ${x.vi ? `<p class="sample-vi" hidden><b>Dịch:</b> ${slots(esc(x.vi))}</p>` : ""}
        </div>`).join("")}
        <p class="muted small">Các từ được tô màu là từ vựng của buổi này — bấm vào để xem nghĩa.</p>
      </section>` : ""}

      ${(l.practice || []).length ? `<section class="lsec" id="sec-practice">
        <div class="lsec-head"><h2>Khung tự luyện trả lời</h2></div>
        <ol class="practice">${l.practice.map((p) => `
          <li><span class="practice-label">${esc(p.label)}</span><span class="practice-text">${esc(p.text).replace(/_{2,}/g, '<span class="blank"></span>')}</span></li>`).join("")}
        </ol>
      </section>` : ""}

      ${(l.notes || []).length ? `<section class="lsec" id="sec-notes">
        <div class="lsec-head"><h2>Lưu ý dùng từ</h2></div>
        <ul class="notes">${l.notes.map((n) => `<li>${rich(n)}</li>`).join("")}</ul>
      </section>` : ""}
      ${pager}`;

    const box = $("#lessonWords"), filter = $("#lessonFilter");
    let layout = store.get("yose-layout", "card") === "table" ? "table" : "card";
    const drawWords = () => {
      $$("[data-mode]").forEach((b) => b.classList.toggle("on", b.dataset.mode === mode));
      $("#lessonLayout").innerHTML = layoutSeg(layout);
      let list = searchWords(filter.value, lw);
      if (mode === "pos") list.sort(byWord); else list.sort((a, b) => a.order - b.order);
      box.innerHTML = list.length
        ? wordSections(list, mode, { q: filter.value, groups: l.groups, layout })
        : `<div class="empty"><p class="muted">Không có từ nào khớp “${esc(filter.value)}”.</p></div>`;
    };
    filter.addEventListener("input", drawWords);
    $$("[data-mode]").forEach((b) => b.addEventListener("click", () => { mode = b.dataset.mode; store.set("yose-lesson-view", mode); drawWords(); }));
    $("#lessonLayout").addEventListener("click", (e) => {
      const b = e.target.closest("[data-layout]");
      if (b) { layout = b.dataset.layout; store.set("yose-layout", layout); drawWords(); }
    });
    drawWords();

    if (l.exercises) bindExercises($("#sec-exercises"), l.exercises);
    $("#toggleVi")?.addEventListener("click", (e) => {
      const vis = $$(".sample-vi");
      const hide = !vis[0]?.hidden;
      vis.forEach((v) => { v.hidden = hide; });
      e.currentTarget.textContent = hide ? "Hiện bản dịch" : "Ẩn bản dịch";
      e.currentTarget.setAttribute("aria-expanded", String(!hide));
    });
    $$(".vocab-link").forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); focusWord(a.dataset.word); }));

    // nhảy tới từ / mục được chỉ định trong URL
    const target = params.get("w");
    const sec = params.get("s");
    const gram = params.get("g");
    if (target) {
      requestAnimationFrame(() => focusWord(target));
    } else if (gram && document.getElementById(gram)) {
      requestAnimationFrame(() => flash(document.getElementById(gram)));
    } else if (sec && document.getElementById("sec-" + sec)) {
      requestAnimationFrame(() => document.getElementById("sec-" + sec).scrollIntoView({ block: "start" }));
    } else window.scrollTo(0, 0);
  }

  function focusWord(id) {
    let el = document.getElementById("w-" + id);
    if (!el) {
      // từ có thể đang bị ẩn bởi bộ lọc — xóa bộ lọc rồi thử lại
      const f = $("#lessonFilter");
      if (f && f.value) { f.value = ""; f.dispatchEvent(new Event("input")); el = document.getElementById("w-" + id); }
    }
    if (!el) return;
    if (el.tagName === "DETAILS") el.open = true;
    flash(el);
  }

  function flash(el) {
    el.scrollIntoView({ block: "center", behavior: "smooth" });
    el.classList.remove("flash");
    void el.offsetWidth;
    el.classList.add("flash");
  }

  // tô màu các cụm từ vựng xuất hiện trong bài nói mẫu
  function highlightVocab(text, list) {
    const phrases = [];
    list.forEach((w) => {
      const base = w.w.replace(/\([^)]*\)/g, " ").replace(/\b(sth|sb)\b/g, " ").replace(/[!?]/g, "").replace(/\s+/g, " ");
      const parts = base.split("/").map((s) => s.trim()).filter(Boolean);
      const last = parts[parts.length - 1].split(/\s+/);
      parts.forEach((s, i) => {
        // "lead / have a healthy lifestyle" → "lead a healthy lifestyle"
        if (i === 0 && parts.length > 1 && !/\s/.test(s) && last.length >= 3) s += " " + last.slice(1).join(" ");
        if (s.length < 3) return;
        // "recharge your batteries" → khớp cả "recharge our batteries"
        const pattern = s.split(/\s+/).map((tok) =>
          /^(a|an|the|your|my|our|his|her|their)$/i.test(tok) ? "(?:a|an|the|your|my|our|his|her|their)" :
          /^(yourself|myself|ourselves|himself|herself|themselves)$/i.test(tok) ? "(?:yourself|myself|ourselves|himself|herself|themselves)" : tok.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        ).join("\\s+");
        phrases.push({ re: pattern, id: w.id, len: s.length });
      });
    });
    phrases.sort((a, b) => b.len - a.len);
    const ranges = [];
    phrases.forEach((p) => {
      const re = new RegExp("\\b" + p.re + "(?:e?s|d)?\\b", "gi");
      let m;
      while ((m = re.exec(text))) {
        const s = m.index, e = s + m[0].length;
        if (!ranges.some((r) => s < r[1] && e > r[0])) ranges.push([s, e, p.id]);
      }
    });
    ranges.sort((a, b) => a[0] - b[0]);
    let out = "", pos = 0;
    ranges.forEach(([s, e, id]) => {
      out += esc(text.slice(pos, s)) + `<a href="#" class="vocab-link" data-word="${esc(id)}">${esc(text.slice(s, e))}</a>`;
      pos = e;
    });
    return out + esc(text.slice(pos));
  }

  // văn bản có **chữ đậm**: phần đậm được giữ, và thành link nếu là từ vựng của buổi
  function vocabText(text, list) {
    if (!text.includes("**")) return highlightVocab(text, list);
    return text.split(/\*\*(.+?)\*\*/g).map((seg, i) => i % 2 ? `<strong>${highlightVocab(seg, list)}</strong>` : esc(seg)).join("");
  }

  /* ---------- Các mục riêng của buổi: phrases / table / dialogue / story ---------- */
  function customSection(x, lw) {
    const head = `<div class="lsec-head"><h2>${esc(x.title)}</h2>${x.type === "dialogue" || x.type === "story"
      ? `<div class="lsec-tools"><button type="button" class="btn btn-ghost btn-sm" data-vi-toggle aria-pressed="true">Ẩn bản dịch</button></div>` : ""}</div>
      ${x.intro ? `<p class="muted sec-intro">${rich(x.intro)}</p>` : ""}`;
    let body = "";
    if (x.type === "phrases") {
      body = `<div class="phrase-grid">${x.items.map((it, i) => `
        <article class="phrase-card">
          <header><span class="phrase-n">${i + 1}</span><div><h3>${esc(it.title)}</h3><p class="muted">${esc(it.vi)}</p></div></header>
          <div class="phrase-chips">${it.phrases.map((ph) =>
            `<button type="button" class="pchip${ph.includes("**") ? " em" : ""}" data-speak="${esc(plain(ph))}" title="Nghe">${rich(ph)}</button>`).join("")}</div>
          ${it.ex ? `<div class="ex"><p class="ex-en">${vocabText(it.ex, lw)} ${speakBtn(it.ex, "Nghe câu")}</p>${it.exVi ? `<p class="ex-vi">${esc(it.exVi)}</p>` : ""}</div>` : ""}
        </article>`).join("")}</div>`;
    } else if (x.type === "table") {
      const cell = (c, ci) => c.split("\n").map((line, li) => {
        const m = /^([+-])\s*(.*)$/.exec(line);
        if (m) return `<span class="tc-line ${m[1] === "+" ? "tc-pro" : "tc-con"}"><i>${m[1] === "+" ? "+" : "−"}</i><span>${rich(m[2])}</span></span>`;
        return `<span class="tc-line${ci === 0 && li > 0 ? " muted small" : ""}">${rich(line)}</span>`;
      }).join("");
      body = `<div class="dtable-wrap"><table class="dtable">
        <thead><tr>${x.cols.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
        <tbody>${x.rows.map((r) => `<tr>${r.map((c, ci) => `<td data-label="${esc(x.cols[ci])}">${cell(c, ci)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>`;
    } else if (x.type === "dialogue") {
      body = (x.dialogues || [x]).map((d) => {
        const who = [...new Set(d.lines.map((ln) => ln.who))];
        return `<article class="dialogue">
          <div class="dl-head"><h3>${esc(d.title)}</h3>
            <button type="button" class="btn btn-soft btn-sm" data-speak-all="${esc(JSON.stringify(d.lines.map((ln) => plain(ln.en).replace(/^\([^)]*\)\s*/, ""))))}">${ICON.speak} Nghe cả bài</button></div>
          ${d.intro ? `<p class="muted small">${rich(d.intro)}</p>` : ""}
          <div class="dl-lines">${d.lines.map((ln) => {
            const k = who.indexOf(ln.who);
            return `<div class="dl-line ${k % 2 ? "dl-right" : "dl-left"} dl-c${k % 3}">
              <span class="dl-who">${esc(ln.who)}</span>
              <div class="dl-bubble"><p class="dl-en">${vocabText(ln.en, lw)} ${speakBtn(ln.en, "Nghe câu")}</p>${ln.vi ? `<p class="dl-vi">${esc(ln.vi)}</p>` : ""}</div>
            </div>`;
          }).join("")}</div>
          ${d.after ? `<p class="dl-after">${rich(d.after)}</p>` : ""}
        </article>`;
      }).join("");
    } else if (x.type === "story") {
      body = `<ol class="story">${x.lines.map((ln) => `
        <li><p class="ex-en">${vocabText(ln.en, lw)} ${speakBtn(ln.en, "Nghe câu")}</p>${ln.vi ? `<p class="dl-vi">${esc(ln.vi)}</p>` : ""}</li>`).join("")}</ol>`;
    }
    return `<section class="lsec" id="sec-${esc(x.id)}">${head}${body}</section>`;
  }

  // đọc lần lượt từng câu của hội thoại
  function speakAll(lines) {
    if (!("speechSynthesis" in window)) { toast("Trình duyệt chưa hỗ trợ đọc phát âm"); return; }
    speechSynthesis.cancel();
    const vs = speechSynthesis.getVoices().filter((v) => /^en/i.test(v.lang));
    lines.forEach((t, i) => {
      const u = new SpeechSynthesisUtterance(t);
      u.lang = "en-GB";
      if (vs.length) u.voice = vs[i % Math.min(vs.length, 2)];
      u.rate = 0.9;
      speechSynthesis.speak(u);
    });
  }

  /* ---------- Ngữ pháp ---------- */
  // tô màu mệnh đề If / mệnh đề chính trong câu điều kiện
  function clauseHL(en) {
    const m = /^((?:If|Unless)\b[^,]*,)\s*(.+)$/.exec(en);
    return m ? `<span class="cl-if">${esc(m[1])}</span> <span class="cl-main">${esc(m[2])}</span>` : esc(en);
  }
  const gSub = (t) => `<h4 class="g-sub">${t}</h4>`;

  function grammarCard(l, g, gi) {
    const sent = (en) => (g.clauses ? clauseHL(en) : esc(en)) + " " + speakBtn(en, "Nghe câu");
    const uses = (g.uses || []).length
      ? `<div class="g-block">${gSub("Dùng khi")}<ul class="g-uses">${g.uses.map((u) => `<li>${esc(u)}</li>`).join("")}</ul></div>` : "";
    const items = g.items
      ? `<div class="g-items">${g.items.map((it, ii) => `
          <div class="g-item" id="b${l.id}-g${gi}-${ii}">
            <div class="g-word"><span class="g-letter">${esc(it.word[0].toUpperCase())}</span><b>${esc(it.word)}</b></div>
            <div class="g-body">
              <p><b class="g-vi">${esc(it.vi)}</b>${it.use ? ` <span class="muted">— ${esc(it.use)}</span>` : ""}</p>
              <p class="ex-en">${esc(it.en)} ${speakBtn(it.en, "Nghe câu")}</p>
              ${it.exVi ? `<p class="ex-vi">${esc(it.exVi)}</p>` : ""}
            </div>
          </div>`).join("")}</div>` : "";
    const examples = (g.examples || []).length
      ? `<div class="g-block">${g.parts ? gSub("Ví dụ") : ""}<ul class="g-examples">${g.examples.map((x) => `
          <li><p class="ex-en">${sent(x.en)}</p><p class="ex-vi">${esc(x.vi)}</p></li>`).join("")}</ul></div>` : "";
    const variants = (g.variants || []).length
      ? `<div class="g-block">${gSub("Mở rộng")}<div class="g-variants">${g.variants.map((v) => `
          <div class="g-variant"><span class="g-vlabel">${esc(v.label)}</span><p class="ex-en">${sent(v.en)}</p><p class="ex-vi">${esc(v.vi)}</p></div>`).join("")}</div></div>` : "";
    const mistakes = (g.mistakes || []).length
      ? `<div class="g-block">${gSub("Lỗi thường gặp")}<div class="g-mistakes">${g.mistakes.map((m) => `
          <div class="mistake">
            <p class="mk-wrong"><span aria-label="Sai">✗</span><s>${esc(m.wrong)}</s></p>
            <p class="mk-right"><span aria-label="Đúng">✓</span>${esc(m.right)}</p>
            ${m.why ? `<p class="mk-why">${esc(m.why)}</p>` : ""}
          </div>`).join("")}</div></div>` : "";
    const parts = g.parts
      ? `<div class="g-parts">${g.parts.map((pt, i) => `
          <div class="g-part ${i ? "g-part-main" : "g-part-if"}"><small>${esc(pt.label)}</small><b>${esc(pt.value)}</b>${pt.hint ? `<span>${esc(pt.hint)}</span>` : ""}</div>`).join('<span class="g-join">,</span>')}</div>` : "";

    return `<article class="grammar ${g.items || g.parts ? "grammar-wide" : ""}" id="b${l.id}-g${gi}">
      <header class="g-head">
        <h3>${esc(g.title)}</h3>
        ${g.subtitle ? `<p class="muted">${esc(g.subtitle)}</p>` : ""}
      </header>
      ${g.acronym ? `<div class="acronym">${[...g.acronym].map((c) => `<span>${esc(c)}</span>`).join("")}</div>` : ""}
      ${parts}
      ${g.formula ? `<div class="formula">${esc(g.formula)}</div>` : ""}
      ${g.note ? `<p class="small g-note">${esc(g.note)}</p>` : ""}
      ${g.parts
        ? `<div class="g-cols"><div>${uses}${examples}</div><div>${variants}${mistakes}</div></div>`
        : uses + items + examples + variants + mistakes}
      ${(g.notes || []).length ? `<ul class="g-notes">${g.notes.map((n) => `<li>${esc(n)}</li>`).join("")}</ul>` : ""}
    </article>`;
  }

  function compareTable(c) {
    return `<div class="g-compare">
      ${c.title ? `<h3>${esc(c.title)}</h3>` : ""}
      <div class="g-compare-scroll"><table>
        <thead><tr>${c.cols.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
        <tbody>${c.rows.map((r) => `<tr>${r.map((cell, i) => i ? `<td>${esc(cell)}</td>` : `<th scope="row">${esc(cell)}</th>`).join("")}</tr>`).join("")}</tbody>
      </table></div>
    </div>`;
  }

  /* ---------- Bài luyện tập (điền từ, tự chấm) ---------- */
  const normAns = (s) => String(s || "").toLowerCase().replace(/[’‘]/g, "'").replace(/[.!?]/g, "").replace(/\s+/g, " ").trim();

  function exercisesHTML(ex) {
    return `<p class="muted">${esc(ex.intro || "")}</p>
      <div class="quiz-bar"><span id="quizScore">Đã đúng <b>0</b>/${ex.items.length}</span>
        <span class="quiz-actions"><button type="button" class="btn btn-ghost btn-sm" data-quiz="all">Xem tất cả đáp án</button><button type="button" class="btn btn-ghost btn-sm" data-quiz="reset">Làm lại</button></span></div>
      <ol class="quiz">${ex.items.map((it, i) => {
        const [before, after] = it.q.split(/_{2,}/);
        return `<li class="q" data-i="${i}">
          <p class="q-text">${esc(before)}<input class="q-in" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Câu ${i + 1}: điền từ" size="${Math.max(8, (it.a[0] || "").length + 2)}">${esc(after || "")}</p>
          <div class="q-row">
            ${it.hint ? `<span class="q-hint">(${esc(it.hint)})</span>` : ""}
            <button type="button" class="btn btn-soft btn-sm" data-quiz="check">Kiểm tra</button>
            <button type="button" class="link-btn" data-quiz="show">Xem đáp án</button>
          </div>
          <p class="q-fb" hidden></p>
        </li>`;
      }).join("")}</ol>`;
  }

  function bindExercises(root, ex) {
    const score = () => {
      const n = $$(".q.ok", root).length;
      $("#quizScore").innerHTML = `Đã đúng <b>${n}</b>/${ex.items.length}${n === ex.items.length ? " 🎉" : ""}`;
    };
    const check = (li, reveal) => {
      const it = ex.items[+li.dataset.i];
      const input = $(".q-in", li), fb = $(".q-fb", li);
      if (reveal) input.value = it.a[0];
      const val = normAns(input.value);
      if (!val) { input.focus(); return; }
      const ok = it.a.some((a) => normAns(a) === val);
      li.classList.toggle("ok", ok && !reveal);
      li.classList.toggle("bad", !ok);
      li.classList.toggle("shown", !!reveal);
      fb.hidden = false;
      fb.innerHTML = (reveal ? `<b>Đáp án: ${esc(it.a[0])}</b>` : ok ? "<b>Chính xác!</b>" : `<b>Chưa đúng.</b> Thử lại hoặc bấm “Xem đáp án”.`) +
        (it.explain && (ok || reveal) ? ` ${esc(it.explain)}` : "");
      score();
    };
    root.addEventListener("click", (e) => {
      const b = e.target.closest("[data-quiz]");
      if (!b) return;
      const act = b.dataset.quiz;
      if (act === "check" || act === "show") check(b.closest(".q"), act === "show");
      else if (act === "all") $$(".q", root).forEach((li) => check(li, true));
      else if (act === "reset") {
        $$(".q", root).forEach((li) => { li.className = "q"; $(".q-in", li).value = ""; $(".q-fb", li).hidden = true; });
        score();
      }
    });
    root.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.target.classList.contains("q-in")) {
        e.preventDefault();
        const li = e.target.closest(".q");
        check(li, false);
        if (li.classList.contains("ok")) $(".q-in", li.nextElementSibling || li)?.focus();
      }
    });
  }

  // ô trống [..] trong bài mẫu: học viên thay bằng thông tin của mình
  const slots = (html) => html.replace(/\[([^\]]+)\]/g, '<span class="slot">$1</span>');

  // làm nổi các ô trống [..] và ký hiệu S + V trong mẫu câu
  function fmtPattern(s) {
    return rich(s)
      .replace(/\[([^\]]+)\]/g, '<span class="slot">$1</span>')
      .replace(/\b(S|V|N|noun|reason|frequency)\b(?=[\s.,+…)]|$)/g, '<span class="sym">$1</span>');
  }

  function renderNotFound() {
    document.title = "Không tìm thấy · Yose Home";
    app.innerHTML = `<div class="empty empty-lg"><h1>Không tìm thấy trang</h1><p class="muted">Đường dẫn không tồn tại.</p><a class="btn" href="#/">Về trang chủ</a></div>`;
  }

  route();
})();
