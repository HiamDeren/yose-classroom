/* MẪU BÀI TẬP CHO MỘT BUỔI
   1. Sao chép file này thành data/homework-XX.js (XX = số buổi)
   2. Đổi số 99 thành số buổi, điền bài tập
   3. Thêm <script src="data/homework-XX.js"></script> vào index.html (phần "Bài tập từng buổi")

   Mỗi bài có "type" là một trong:
     match   – nối từ với định nghĩa (chọn A, B, C…)
     mcq     – trắc nghiệm A/B/C/D (a = số thứ tự đáp án đúng, bắt đầu từ 0)
     gap     – điền từ (dùng ___ cho chỗ trống); có thể thêm bank (khung từ gợi ý), hint (từ gốc), who (người nói)
     error   – sửa lỗi sai: học viên gõ phần đã sửa; fixed = cả câu đúng (gõ cả câu cũng được tính đúng)
     order   – sắp xếp câu (a = chuỗi chữ cái đúng thứ tự, vd "BEDFAC")
     tf      – đúng / sai (a: true hoặc false)
     writing – bài viết tự do: đếm số từ, đếm từ vựng của buổi đã dùng, có bài mẫu và tiêu chí tự chấm
   a: luôn là danh sách các đáp án được chấp nhận (với gap / error). Không phân biệt hoa thường. */

YOSE.addHomework(99, [
  { type: "match", title: "Matching – Nối từ với định nghĩa", intro: "Match each word with its definition.",
    options: [{ k: "A", t: "Definition A" }, { k: "B", t: "Definition B" }],
    items: [{ q: "word 1", a: "B" }, { q: "word 2", a: "A" }] },

  { type: "mcq", title: "Multiple choice", intro: "Choose the correct answer.",
    items: [{ q: "I was annoyed ___ the slow service.", options: ["by", "of", "on", "for"], a: 0, explain: "annoyed by sth" }] },

  { type: "gap", title: "Gap fill", intro: "Complete the sentences.", bank: ["discount", "receipt"],
    items: [{ q: "Could I have the ___, please?", a: ["receipt"], explain: "receipt = hóa đơn" },
            { q: "The staff were very ___.", hint: "ATTENTION", a: ["attentive"] }] },

  { type: "error", title: "Error correction", intro: "Each sentence has ONE mistake.",
    items: [{ q: "I regretted to buy it.", a: ["buying"], show: "to buy → buying", fixed: "I regretted buying it.", explain: "regret + V-ing" }] },

  { type: "order", title: "Ordering", intro: "Put the sentences in order.",
    items: [{ k: "A", t: "Second sentence." }, { k: "B", t: "First sentence." }], a: "BA" },

  { type: "tf", title: "True / False", items: [{ q: "A statement.", a: true, explain: "Giải thích." }] },

  { type: "writing", title: "Writing", intro: "Write 80–120 words.", words: [80, 120], target: 6,
    steps: ["Ý 1", "Ý 2"], criteria: ["Tiêu chí 1", "Tiêu chí 2"], sample: { en: "Sample answer.", vi: "Bản dịch." } }
]);
