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
  const SORTS = { az: "A → Z", za: "Z → A", lesson: "Theo buổi học" };

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
        _ex: norm((v.ex || "") + " " + (v.exVi || "") + " " + (v.note || "")),
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
        _t: norm([g.title, g.subtitle, g.formula, g.note, ...(g.examples || []).map((x) => x.en)].join(" ")) });
      (g.items || []).forEach((it, ii) => {
        grammarIdx.push({ id: gid + "-" + ii, lesson: l, title: it.word + " — " + it.vi, sub: g.title, word: norm(it.word),
          _t: norm([it.word, it.vi, it.use, it.en, it.exVi].join(" ")) });
      });
    });
  });

  const topics = [...new Set(live.map((l) => l.topic).filter(Boolean))];
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
    const u = new SpeechSynthesisUtterance(String(text).replace(/\s*\/\s*/g, ", ").replace(/…|\.\.\.|_+/g, " "));
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
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
  };

  const posBadge = (pos) => {
    const p = POS[pos] || { short: pos, label: pos };
    return `<span class="pos pos-${esc(pos)}" title="${esc(p.label)}">${esc(p.short)}</span>`;
  };
  const speakBtn = (text, label = "Nghe phát âm") =>
    `<button class="speak" type="button" data-speak="${esc(text)}" aria-label="${esc(label)}" title="${esc(label)}">${ICON.speak}</button>`;

  function wordCard(w, opts = {}) {
    const q = opts.q || "";
    const forms = w.forms
      ? `<div class="forms">
          <div class="forms-label">Dạng từ${w.formsOf ? ` <span>· ${hl(w.formsOf, q)}</span>` : ""}</div>
          <dl class="forms-grid">${FORM_KEYS.map(([k, s, l]) => `
            <div class="form form-${k}${w.forms[k] ? "" : " is-empty"}"><dt title="${l}">${s}</dt><dd>${w.forms[k] ? hl(w.forms[k], q) : "—"}</dd></div>`).join("")}
          </dl>
        </div>`
      : "";
    return `<article class="word" id="w-${esc(w.id)}">
      <header class="word-head">
        <div class="word-title"><h3>${hl(w.w, q)}</h3>${speakBtn(w.w)}</div>
        ${posBadge(w.pos)}
      </header>
      ${w.ipa ? `<div class="ipa">${esc(w.ipa)}</div>` : ""}
      <p class="word-vi">${hl(w.vi, q)}</p>
      ${forms}
      ${w.note ? `<p class="word-note">${hl(w.note, q)}</p>` : ""}
      ${w.ex ? `<div class="ex"><p class="ex-en">${hl(w.ex, q)} ${speakBtn(w.ex, "Nghe câu ví dụ")}</p>${w.exVi ? `<p class="ex-vi">${hl(w.exVi, q)}</p>` : ""}</div>` : ""}
      ${opts.showLesson ? `<footer class="word-meta"><a href="#/buoi/${w.lesson.id}?w=${esc(w.id)}" class="tag tag-lesson">Buổi ${w.lesson.id}</a><span class="tag">${esc(w.lesson.topic)}</span>${w.groupName ? `<span class="tag tag-ghost">${esc(w.groupName)}</span>` : ""}</footer>` : ""}
    </article>`;
  }

  function wordSections(list, mode, opts) {
    if (!list.length) return "";
    if (mode === "pos") {
      return POS_ORDER.filter((p) => list.some((w) => w.pos === p)).map((p) => {
        const items = list.filter((w) => w.pos === p);
        return `<section class="wgroup">
          <h3 class="wgroup-title">${posBadge(p)} ${esc(POS[p].label)} <span class="muted">· ${esc(POS[p].en)}</span><span class="count">${items.length}</span></h3>
          <div class="word-grid">${items.map((w) => wordCard(w, opts)).join("")}</div>
        </section>`;
      }).join("");
    }
    if (mode === "group") {
      const groups = opts.groups || [];
      return groups.filter((g) => list.some((w) => w.group === g.id)).map((g) => {
        const items = list.filter((w) => w.group === g.id);
        return `<section class="wgroup">
          <h3 class="wgroup-title">${esc(g.name)}<span class="count">${items.length}</span></h3>
          <div class="word-grid">${items.map((w) => wordCard(w, opts)).join("")}</div>
        </section>`;
      }).join("");
    }
    return `<div class="word-grid">${list.map((w) => wordCard(w, opts)).join("")}</div>`;
  }

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
    const ls = live.filter((l) => norm([l.title, l.titleVi, l.topic, "buoi " + l.id].join(" ")).includes(nq));
    if (!ws.length && !ss.length && !gs.length && !ls.length) {
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
        <div class="block-head"><h2>Tra theo chủ đề</h2><p class="muted">Bấm vào chủ đề hoặc nhóm từ để lọc</p></div>
        <div class="topic-grid">${topics.map((t) => {
          const ls = live.filter((l) => l.topic === t);
          const n = words.filter((w) => w.lesson.topic === t).length;
          return `<div class="topic-card">
            <a class="topic-name" href="#/tu-dien?t=${encodeURIComponent(t)}">${esc(t)} <span class="count">${n}</span></a>
            <div class="topic-groups">${ls.flatMap((l) => (l.groups || []).map((g) =>
              `<a class="tag" href="#/tu-dien?t=${encodeURIComponent(t)}&g=${l.id}:${g.id}">${esc(g.name)}</a>`)).join("")}</div>
            <div class="muted small">${ls.map((l) => `Buổi ${l.id}`).join(" · ")}</div>
          </div>`;
        }).join("")}</div>
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
        ${l.sample ? `<span>Bài nói mẫu</span>` : ""}
      </div>
      <span class="lc-go">Vào học ${ICON.arrow}</span>
    </a>`;
  }

  /* ---------- Trang từ điển ---------- */
  function renderDict(params) {
    document.title = "Từ điển · Yose Home";
    const st = {
      q: params.get("q") || "",
      b: params.get("b") || "",
      t: params.get("t") || "",
      g: params.get("g") || "",
      p: params.get("p") || "",
      s: SORTS[params.get("s")] ? params.get("s") : "az",
      v: params.get("v") === "flat" ? "flat" : "pos"
    };

    app.innerHTML = `
      <section class="page-head">
        <h1>Từ điển khóa học</h1>
        <p class="muted">Tra tất cả từ vựng theo từ khóa, buổi học, chủ đề và loại từ.</p>
      </section>
      <div class="dict-search field field-lg">
        ${ICON.search}
        <input id="dictInput" type="search" placeholder="Gõ từ tiếng Anh, nghĩa tiếng Việt hoặc dạng từ…" value="${esc(st.q)}" autocomplete="off" spellcheck="false" aria-label="Tìm trong từ điển">
      </div>
      <div class="filters" id="filters"></div>
      <div id="dictOut">
        <div class="result-bar" id="resultBar"></div>
        <div id="results"></div>
      </div>`;

    const input = $("#dictInput");
    const sync = () => {
      const p = new URLSearchParams();
      Object.entries(st).forEach(([k, v]) => {
        if (v && !(k === "s" && v === "az") && !(k === "v" && v === "pos")) p.set(k, v);
      });
      const qs = p.toString();
      history.replaceState(null, "", "#/tu-dien" + (qs ? "?" + qs : ""));
    };
    const draw = () => { drawFilters(st); drawResults(st); };

    let timer;
    input.addEventListener("input", () => {
      clearTimeout(timer);
      timer = setTimeout(() => { st.q = input.value; sync(); drawResults(st); }, 80);
    });
    $("#filters").addEventListener("click", (e) => {
      const b = e.target.closest("[data-f]");
      if (!b) return;
      const k = b.dataset.f, v = b.dataset.v;
      st[k] = st[k] === v && k !== "s" && k !== "v" ? "" : v;
      if (k === "b" || k === "t") st.g = "";
      sync(); draw();
    });
    $("#filters").addEventListener("change", (e) => {
      if (e.target.id === "sortSel") { st.s = e.target.value; sync(); drawResults(st); }
    });
    $("#dictOut").addEventListener("click", (e) => {
      if (e.target.closest("[data-reset]")) {
        Object.assign(st, { q: "", b: "", t: "", g: "", p: "" });
        input.value = "";
        sync(); draw(); input.focus();
      }
    });
    draw();
    if (!st.q && !("ontouchstart" in window)) input.focus();
  }

  function scopeWords(st, skip) {
    return words.filter((w) =>
      (skip === "b" || !st.b || String(w.lesson.id) === st.b) &&
      (skip === "t" || !st.t || w.lesson.topic === st.t) &&
      (skip === "g" || !st.g || `${w.lesson.id}:${w.group}` === st.g) &&
      (skip === "p" || !st.p || w.pos === st.p));
  }

  function drawFilters(st) {
    const chip = (k, v, label, count, extra = "") =>
      `<button type="button" class="chip ${st[k] === v ? "on" : ""}" data-f="${k}" data-v="${esc(v)}" aria-pressed="${st[k] === v}">${extra}${label}${count != null ? `<span class="chip-count">${count}</span>` : ""}</button>`;
    const inQuery = (list) => searchWords(st.q, list);
    const lc = countBy(inQuery(scopeWords(st, "b")), (w) => w.lesson.id);
    const tc = countBy(inQuery(scopeWords(st, "t")), (w) => w.lesson.topic);
    const pc = countBy(inQuery(scopeWords(st, "p")), (w) => w.pos);
    const gc = countBy(inQuery(scopeWords(st, "g")), (w) => `${w.lesson.id}:${w.group}`);
    const groupLessons = live.filter((l) => (!st.b || String(l.id) === st.b) && (!st.t || l.topic === st.t));
    const showGroups = (st.b || st.t) && groupLessons.some((l) => (l.groups || []).length);

    $("#filters").innerHTML = `
      <div class="frow"><span class="flabel">Buổi</span><div class="chips">
        ${chip("b", "", "Tất cả")}
        ${live.map((l) => chip("b", String(l.id), `Buổi ${l.id}`, lc[l.id] || 0)).join("")}
      </div></div>
      <div class="frow"><span class="flabel">Chủ đề</span><div class="chips">
        ${chip("t", "", "Tất cả")}
        ${topics.map((t) => chip("t", t, esc(t), tc[t] || 0)).join("")}
      </div></div>
      ${showGroups ? `<div class="frow"><span class="flabel">Nhóm từ</span><div class="chips">
        ${chip("g", "", "Tất cả")}
        ${groupLessons.flatMap((l) => (l.groups || []).map((g) => chip("g", `${l.id}:${g.id}`, esc(g.name), gc[`${l.id}:${g.id}`] || 0))).join("")}
      </div></div>` : ""}
      <div class="frow"><span class="flabel">Loại từ</span><div class="chips">
        ${chip("p", "", "Tất cả")}
        ${POS_ORDER.filter((p) => words.some((w) => w.pos === p)).map((p) => chip("p", p, esc(POS[p].label), pc[p] || 0, `<i class="dot dot-${p}"></i>`)).join("")}
      </div></div>
      <div class="frow frow-tools">
        <label class="select"><span>Sắp xếp</span>
          <select id="sortSel">${Object.entries(SORTS).map(([k, v]) => `<option value="${k}" ${st.s === k ? "selected" : ""}>${v}</option>`).join("")}</select>
        </label>
        <div class="seg" role="group" aria-label="Kiểu hiển thị">
          <button type="button" data-f="v" data-v="pos" class="${st.v === "pos" ? "on" : ""}">Nhóm theo loại từ</button>
          <button type="button" data-f="v" data-v="flat" class="${st.v === "flat" ? "on" : ""}">Danh sách</button>
        </div>
      </div>`;
  }

  function drawResults(st) {
    let list = searchWords(st.q, scopeWords(st));
    // khi có từ khóa và sắp xếp A→Z ở dạng danh sách, ưu tiên độ khớp; còn lại sắp theo lựa chọn
    if (!(st.q.trim() && st.v === "flat" && st.s === "az")) {
      if (st.s === "az") list.sort(byWord);
      else if (st.s === "za") list.sort((a, b) => byWord(b, a));
      else list.sort((a, b) => a.lesson.id - b.lesson.id || a.order - b.order);
    }
    const active = [st.q && `“${esc(st.q)}”`, st.b && `Buổi ${esc(st.b)}`, st.t && esc(st.t), st.p && esc(POS[st.p]?.label)].filter(Boolean);
    $("#resultBar").innerHTML = `<span><b>${list.length}</b> kết quả${active.length ? ` cho ${active.join(" · ")}` : ""}</span>
      ${active.length || st.g ? `<button type="button" class="link-btn" data-reset>${ICON.x} Xóa bộ lọc</button>` : ""}`;
    $("#results").innerHTML = list.length
      ? wordSections(list, st.v === "pos" ? "pos" : "flat", { q: st.q, showLesson: true })
      : `<div class="empty">
          <div class="empty-icon">${ICON.search}</div>
          <h3>Chưa có từ nào khớp</h3>
          <p class="muted">Thử gõ không dấu, gõ một phần của từ, hoặc xóa bớt bộ lọc.</p>
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
    const sections = [
      ["sec-vocab", "Từ vựng", lw.length],
      ["sec-structures", "Cấu trúc câu", (l.structures || []).length],
      ["sec-grammar", "Ngữ pháp", (l.grammar || []).length],
      ["sec-sample", "Bài nói mẫu", l.sample ? 1 : 0],
      ["sec-practice", "Tự luyện", (l.practice || []).length],
      ["sec-notes", "Lưu ý", (l.notes || []).length]
    ].filter((s) => s[2]);
    let mode = store.get("yose-lesson-view", "pos");

    app.innerHTML = `
      <a class="crumb" href="#/">${ICON.back} Trang chủ</a>
      <header class="lesson-hero">
        <div class="lh-meta"><span class="lc-num">Buổi ${l.id}</span><a class="tag" href="#/tu-dien?t=${encodeURIComponent(l.topic)}">${esc(l.topic)}</a></div>
        <h1>${esc(l.title)}</h1>
        <p class="lh-vi">${esc(l.titleVi)}</p>
        ${l.summary ? `<p class="muted lh-sum">${esc(l.summary)}</p>` : ""}
      </header>
      <nav class="section-nav" aria-label="Mục trong buổi học">
        ${sections.map(([sid, name, n]) => `<button type="button" data-jump="${sid}">${name}${sid === "sec-vocab" || sid === "sec-structures" ? `<span class="chip-count">${n}</span>` : ""}</button>`).join("")}
      </nav>

      <section class="lsec" id="sec-vocab">
        <div class="lsec-head">
          <h2>Từ vựng</h2>
          <div class="lsec-tools">
            <div class="field field-sm">${ICON.search}<input id="lessonFilter" type="search" placeholder="Lọc từ trong buổi…" autocomplete="off" aria-label="Lọc từ trong buổi"></div>
            <div class="seg" role="group" aria-label="Sắp xếp từ vựng">
              <button type="button" data-mode="pos">Theo loại từ</button>
              <button type="button" data-mode="group">Theo nhóm chủ đề</button>
            </div>
          </div>
        </div>
        <div id="lessonWords"></div>
      </section>

      ${(l.structures || []).length ? `<section class="lsec" id="sec-structures">
        <div class="lsec-head"><h2>Cấu trúc câu</h2></div>
        ${l.structuresIntro ? `<p class="muted">${esc(l.structuresIntro)}</p>` : ""}
        <ol class="struct-list">${l.structures.map((s, i) => `
          <li class="struct">
            <span class="struct-n">${i + 1}</span>
            <div>
              <p class="struct-en">${fmtPattern(s.en)} ${speakBtn(s.en, "Nghe mẫu câu")}</p>
              ${s.usage ? `<p class="struct-use">${esc(s.usage)}</p>` : ""}
              ${s.ex ? `<div class="ex"><p class="ex-en">${esc(s.ex)} ${speakBtn(s.ex, "Nghe câu ví dụ")}</p>${s.exVi ? `<p class="ex-vi">${esc(s.exVi)}</p>` : ""}</div>` : ""}
            </div>
          </li>`).join("")}
        </ol>
      </section>` : ""}

      ${(l.grammar || []).length ? `<section class="lsec" id="sec-grammar">
        <div class="lsec-head"><h2>Ngữ pháp</h2></div>
        <div class="grammar-grid">${l.grammar.map((g, gi) => `
          <article class="grammar ${g.items ? "grammar-wide" : ""}" id="b${l.id}-g${gi}">
            <h3>${esc(g.title)}</h3>
            ${g.subtitle ? `<p class="muted">${esc(g.subtitle)}</p>` : ""}
            ${g.acronym ? `<div class="acronym">${[...g.acronym].map((c) => `<span>${esc(c)}</span>`).join("")}</div>` : ""}
            ${g.formula ? `<div class="formula">${esc(g.formula)}</div>` : ""}
            ${g.note ? `<p class="small">${esc(g.note)}</p>` : ""}
            ${g.items ? `<div class="g-items">${g.items.map((it, ii) => `
              <div class="g-item" id="b${l.id}-g${gi}-${ii}">
                <div class="g-word"><span class="g-letter">${esc(it.word[0].toUpperCase())}</span><b>${esc(it.word)}</b></div>
                <div class="g-body">
                  <p><b class="g-vi">${esc(it.vi)}</b>${it.use ? ` <span class="muted">— ${esc(it.use)}</span>` : ""}</p>
                  <p class="ex-en">${esc(it.en)} ${speakBtn(it.en, "Nghe câu")}</p>
                  ${it.exVi ? `<p class="ex-vi">${esc(it.exVi)}</p>` : ""}
                </div>
              </div>`).join("")}</div>` : ""}
            ${(g.examples || []).length ? `<ul class="g-examples">${g.examples.map((x) => `
              <li><p class="ex-en">${esc(x.en)} ${speakBtn(x.en, "Nghe câu")}</p><p class="ex-vi">${esc(x.vi)}</p></li>`).join("")}
            </ul>` : ""}
            ${(g.notes || []).length ? `<ul class="g-notes">${g.notes.map((n) => `<li>${esc(n)}</li>`).join("")}</ul>` : ""}
          </article>`).join("")}
        </div>
        ${l.grammarTip ? `<div class="tip"><b>Nhớ nhanh</b><p>${esc(l.grammarTip)}</p></div>` : ""}
      </section>` : ""}

      ${l.sample ? `<section class="lsec" id="sec-sample">
        <div class="lsec-head"><h2>Bài nói mẫu</h2>
          <div class="lsec-tools">
            <button type="button" class="btn btn-soft" data-speak="${esc(l.sample.en)}" data-rate="0.9">${ICON.speak} Nghe bài mẫu</button>
            ${l.sample.vi ? `<button type="button" class="btn btn-ghost" id="toggleVi" aria-expanded="false">Hiện bản dịch</button>` : ""}
          </div>
        </div>
        <div class="sample">
          <p class="sample-en">${slots(highlightVocab(l.sample.en, lw))}</p>
          ${l.sample.vi ? `<p class="sample-vi" id="sampleVi" hidden><b>Dịch:</b> ${slots(esc(l.sample.vi))}</p>` : ""}
        </div>
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
        <ul class="notes">${l.notes.map((n) => `<li>${esc(n)}</li>`).join("")}</ul>
      </section>` : ""}
      ${pager}`;

    const box = $("#lessonWords"), filter = $("#lessonFilter");
    const drawWords = () => {
      $$("[data-mode]").forEach((b) => b.classList.toggle("on", b.dataset.mode === mode));
      let list = searchWords(filter.value, lw);
      if (mode === "pos") list.sort(byWord); else list.sort((a, b) => a.order - b.order);
      box.innerHTML = list.length
        ? wordSections(list, mode, { q: filter.value, groups: l.groups })
        : `<div class="empty"><p class="muted">Không có từ nào khớp “${esc(filter.value)}”.</p></div>`;
    };
    filter.addEventListener("input", drawWords);
    $$("[data-mode]").forEach((b) => b.addEventListener("click", () => { mode = b.dataset.mode; store.set("yose-lesson-view", mode); drawWords(); }));
    drawWords();

    $("#toggleVi")?.addEventListener("click", (e) => {
      const vi = $("#sampleVi");
      vi.hidden = !vi.hidden;
      e.currentTarget.textContent = vi.hidden ? "Hiện bản dịch" : "Ẩn bản dịch";
      e.currentTarget.setAttribute("aria-expanded", String(!vi.hidden));
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
    if (el) flash(el);
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
      const parts = w.w.split("/").map((s) => s.trim()).filter(Boolean);
      const last = parts[parts.length - 1].split(/\s+/);
      parts.forEach((s, i) => {
        // "lead / have a healthy lifestyle" → "lead a healthy lifestyle"
        if (i === 0 && parts.length > 1 && !/\s/.test(s) && last.length >= 3) s += " " + last.slice(1).join(" ");
        if (s.length < 3) return;
        // "recharge your batteries" → khớp cả "recharge our batteries"
        const pattern = s.split(/\s+/).map((tok) =>
          /^(a|an|the|your|my|our|his|her|their)$/i.test(tok) ? "(?:a|an|the|your|my|our|his|her|their)" : tok.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
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

  // ô trống [..] trong bài mẫu: học viên thay bằng thông tin của mình
  const slots = (html) => html.replace(/\[([^\]]+)\]/g, '<span class="slot">$1</span>');

  // làm nổi các ô trống [..] và ký hiệu S + V trong mẫu câu
  function fmtPattern(s) {
    return esc(s)
      .replace(/\[([^\]]+)\]/g, '<span class="slot">$1</span>')
      .replace(/\b(S|V|noun|reason|frequency)\b(?=[\s.,+…]|$)/g, '<span class="sym">$1</span>');
  }

  function renderNotFound() {
    document.title = "Không tìm thấy · Yose Home";
    app.innerHTML = `<div class="empty empty-lg"><h1>Không tìm thấy trang</h1><p class="muted">Đường dẫn không tồn tại.</p><a class="btn" href="#/">Về trang chủ</a></div>`;
  }

  route();
})();
