/* MẪU THÊM BUỔI HỌC MỚI
   1. Sao chép file này thành data/lesson-XX.js (XX = số buổi, vd: lesson-04.js)
   2. Điền nội dung bên dưới
   3. Thêm 1 dòng <script src="data/lesson-XX.js"></script> vào index.html
      (đặt cạnh các dòng lesson-02.js, lesson-03.js)

   Loại từ (pos) dùng một trong các giá trị:
     "noun"    – Danh từ (N)
     "verb"    – Động từ (V)
     "adj"     – Tính từ (Adj)
     "adv"     – Trạng từ (Adv)
     "phrasal" – Cụm động từ / phrasal verb (get around, stay up…)
     "vphrase" – Cụm từ với động từ / collocation (eat a balanced diet…)
     "nphrase" – Cụm danh từ (local market, sense of freedom…)
     "idiom"   – Thành ngữ (recharge your batteries…)
     "expr"    – Cụm cố định (a range of, within easy walking distance…)

   Dạng từ (forms): ghi null nếu không có dạng thông dụng.
   Các trường không bắt buộc: ipa, formsOf, forms, note, ex, exVi,
   structures, grammar, sample, practice, notes. */

YOSE.addLesson({
  id: 4,
  title: "Lesson title in English",
  titleVi: "Tên bài bằng tiếng Việt",
  topic: "Tên chủ đề",            // vd: "Du lịch", "Công việc"… (cùng chủ đề sẽ gom chung khi lọc)
  summary: "Mô tả ngắn về buổi học.",
  groups: [
    { id: "group1", name: "Nhóm từ 1" },
    { id: "group2", name: "Nhóm từ 2" }
  ],

  vocab: [
    { w: "word", ipa: "/wɜːd/", pos: "noun", group: "group1", vi: "nghĩa tiếng Việt",
      forms: { adj: null, n: "word", v: "word", adv: null },
      ex: "Example sentence.", exVi: "Câu ví dụ." }
  ],

  structuresIntro: "",             // không bắt buộc
  structures: [
    { en: "Sentence pattern…", usage: "Cách dùng / nghĩa", ex: "Example.", exVi: "Ví dụ." }
  ],

  grammar: [
    { title: "Tên điểm ngữ pháp", subtitle: "", formula: "Công thức", note: "Ghi chú",
      // tùy chọn — công thức chia 2 vế (tô màu tím / xanh), clauses: true để tô màu mệnh đề If trong ví dụ
      parts: [{ label: "Mệnh đề If", value: "If + S + V", hint: "hiện tại đơn" }, { label: "Mệnh đề chính", value: "S + will + V" }],
      clauses: true,
      uses: ["Dùng khi…"],
      examples: [{ en: "Example.", vi: "Ví dụ." }],
      variants: [{ label: "Biến thể", en: "Example.", vi: "Ví dụ." }],
      mistakes: [{ wrong: "Câu sai.", right: "Câu đúng.", why: "Giải thích." }] }
  ],
  grammarCompare: { title: "So sánh", cols: ["", "A", "B"], rows: [["Tiêu chí", "…", "…"]] },  // tùy chọn
  grammarTip: "",

  // tùy chọn — bài luyện tập điền từ, học viên tự kiểm tra
  exercises: {
    title: "Luyện tập", intro: "Điền dạng đúng của động từ…",
    items: [{ q: "If you ___ late, you will feel tired.", hint: "stay up", a: ["stay up"], explain: "Giải thích đáp án." }]
  },

  sample: { en: "Sample answer in English.", vi: "Bản dịch." },
  // hoặc nhiều bài mẫu: samples: [{ title: "Bài 1: …", en: "…", vi: "…" }, …]

  /* ---- Tùy chọn (xem data/lesson-04.js để có ví dụ đầy đủ) ----
     Viết **chữ đậm** để đánh dấu từ được nhấn mạnh trên lớp (dùng được ở ví dụ, bài mẫu, hội thoại, lưu ý).

     warmup: { q: "Câu hỏi khởi động?", a: "Câu trả lời → …", vi: "Dịch" },

     sections: [   // các mục riêng, hiện sau phần Từ vựng
       { id: "reasons", nav: "Tên trên thanh mục", type: "phrases", title: "…", intro: "…",
         items: [{ title: "…", vi: "…", phrases: ["cụm 1", "**cụm nhấn mạnh**"], ex: "…", exVi: "…" }] },
       { id: "places", type: "table", title: "…", cols: ["A", "B", "C"],
         rows: [["dòng 1\ndòng phụ", "…", "+ ưu điểm\n- nhược điểm"]] },
       { id: "dialogues", type: "dialogue", title: "Hội thoại mẫu",
         dialogues: [{ title: "…", intro: "", lines: [{ who: "Anna", en: "…", vi: "…" }], after: "" }] },
       { id: "story", type: "story", title: "…", intro: "…", lines: [{ en: "…", vi: "…" }] }
     ],
  */

  practice: [
    { label: "Ý 1", text: "I ___ because ___." }
  ],

  notes: [
    "Lưu ý dùng từ…"
  ]
});
