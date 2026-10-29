/* Bài tập Buổi 4 — Shopping */
YOSE.addHomework(4, [
  {
    type: "match",
    title: "Matching – Nối từ với định nghĩa",
    intro: "Match each word (1–8) with its English definition (A–H).",
    options: [
      { k: "A", t: "To look at products in a shop without necessarily buying anything." },
      { k: "B", t: "Something bought for a lower price than usual." },
      { k: "C", t: "The feeling or atmosphere that a place or person gives you." },
      { k: "D", t: "A person who sells things, especially at a market stall or on the street." },
      { k: "E", t: "The bad part or disadvantage of something." },
      { k: "F", t: "A piece of paper showing what you bought and how much you paid." },
      { k: "G", t: "Made in very large numbers by machines in a factory." },
      { k: "H", t: "Shopping to make yourself feel better when you are sad or stressed." }
    ],
    items: [
      { q: "browse", a: "A" },
      { q: "bargain", a: "B" },
      { q: "vibe", a: "C" },
      { q: "vendor", a: "D" },
      { q: "downside", a: "E" },
      { q: "receipt", a: "F" },
      { q: "mass-produced", a: "G" },
      { q: "retail therapy", a: "H" }
    ]
  },
  {
    type: "mcq",
    title: "Multiple choice – Chọn đáp án đúng",
    intro: "Choose the correct answer.",
    items: [
      { q: "This colour really ___ you.", options: ["fits", "suits", "matches with", "wears"], a: 1, explain: "suit = hợp về kiểu dáng, màu sắc." },
      { q: "These jeans don’t ___ me – I need a bigger size.", options: ["suit", "fit", "match", "look"], a: 1, explain: "fit = vừa về kích cỡ." },
      { q: "$72 for this dress sounds ___ for the quality.", options: ["affordable", "reasonable", "cheap", "expensive"], a: 1, explain: "reasonable = giá xứng với chất lượng." },
      { q: "We have run ___ of coffee, so I need to go shopping.", options: ["away", "off", "out", "over"], a: 2, explain: "run out of = hết." },
      { q: "When I receive my salary, I treat ___ to a nice meal.", options: ["me", "myself", "mine", "my"], a: 1, explain: "treat yourself / myself (đại từ phản thân)." },
      { q: "Can I ___ this dress on?", options: ["wear", "try", "put", "test"], a: 1, explain: "try sth on = mặc thử." },
      { q: "Can I pay ___ card?", options: ["with", "in", "by", "on"], a: 2, explain: "pay by card / pay in cash." },
      { q: "Don’t forget your ___! (the money you get back)", options: ["changes", "change", "a change", "changing"], a: 1, explain: "change (tiền thối) là danh từ không đếm được." }
    ]
  },
  {
    type: "gap",
    title: "Dialogue completion – Mua quần áo",
    intro: "Complete the dialogue with the words in the box.",
    bank: ["discount", "try it on", "fitting room", "fit", "reasonable", "pay by card", "receipt"],
    items: [
      { who: "Customer", q: "Excuse me, how much is this dress?" },
      { who: "Assistant", q: "It’s $80, but today we have a 10% ___ on party dresses.", a: ["discount"], explain: "a 10% discount = giảm 10%." },
      { who: "Customer", q: "Great! Can I ___? I want to see how it looks.", a: ["try it on"], explain: "try sth on = mặc thử." },
      { who: "Assistant", q: "Of course. The ___ is over there.", a: ["fitting room"], explain: "fitting room = phòng thử đồ." },
      { who: "Customer", q: "Hmm, it doesn’t ___ me. Do you have a smaller size?", a: ["fit"], explain: "fit = vừa về kích cỡ." },
      { who: "Customer", q: "Perfect! $72 sounds ___.", a: ["reasonable"], explain: "reasonable = hợp lý." },
      { who: "Customer", q: "Can I ___, or do you only take cash?", a: ["pay by card"], explain: "pay by card = trả bằng thẻ." },
      { who: "Assistant", q: "Yes, please insert your card. Here’s your ___.", a: ["receipt"], explain: "receipt = hóa đơn (chữ p câm)." }
    ]
  },
  {
    type: "gap",
    title: "Word forms – Dạng đúng của từ",
    intro: "Write the correct form of the word in brackets.",
    items: [
      { q: "The prices at this store are ___ for students.", hint: "AFFORD", a: ["affordable"], explain: "Tính từ: affordable = vừa túi tiền." },
      { q: "The mall has a ___ and modern vibe.", hint: "GLAMOUR", a: ["glamorous"], explain: "Tính từ: glamorous." },
      { q: "The flea market has a very ___ vibe.", hint: "NOSTALGIA", a: ["nostalgic"], explain: "Tính từ: nostalgic = hoài niệm." },
      { q: "Many people prefer supermarkets because they are ___.", hint: "HYGIENE", a: ["hygienic"], explain: "Tính từ: hygienic = hợp vệ sinh." },
      { q: "Nice clothes can improve your ___.", hint: "APPEAR", a: ["appearance"], explain: "your + danh từ → appearance." },
      { q: "I need a ___ dress for the party.", hint: "BRAND", a: ["branded"], explain: "branded = hàng hiệu." },
      { q: "There is a wide ___ of items to choose from.", hint: "VARY", a: ["variety"], explain: "a wide variety of." },
      { q: "Buying something small always makes me feel ___.", hint: "CHEER", a: ["cheerful"], explain: "feel + tính từ → cheerful." }
    ]
  },
  {
    type: "tf",
    title: "True / False – Nơi mua sắm",
    intro: "Dựa vào bảng “Nơi mua sắm”, ghi True hoặc False.",
    items: [
      { q: "At a traditional market, you can bargain with the vendors.", a: true, explain: "Chợ truyền thống: you can bargain with the sellers/vendors." },
      { q: "Supermarkets usually have fixed prices.", a: true, explain: "Supermarket: fixed price." },
      { q: "A flea market mainly sells new, branded items.", a: false, explain: "Flea market bán đồ cũ, vintage, đồ thủ công." },
      { q: "The main downside of shopping malls is that they are quite expensive.", a: true, explain: "Mall: quite expensive (khá đắt)." },
      { q: "Traditional markets are usually quiet and very organized.", a: false, explain: "Chợ truyền thống thường crowded and messy." },
      { q: "“Hit” (= go to) is a formal word for writing.", a: false, explain: "hit là cách nói thân mật; văn viết dùng go to / visit." }
    ]
  },
  {
    type: "order",
    title: "Ordering – Kể một trải nghiệm tệ",
    intro: "Put the sentences (A–F) in the correct order. Bấm lần lượt vào từng câu theo thứ tự.",
    items: [
      { k: "A", t: "But when I looked in the mirror, I realized I had spilled coffee on it earlier in the day." },
      { k: "B", t: "It was a disaster!" },
      { k: "C", t: "And then, to top it off, I couldn’t find my car in the parking lot for half an hour." },
      { k: "D", t: "I went to the mall to buy a new dress, but I couldn’t find anything I liked." },
      { k: "E", t: "But then, I finally found a dress I liked and tried it on." },
      { k: "F", t: "I went to four different stores, but everything was either too expensive or looked like a clown outfit." }
    ],
    a: "BDFEAC",
    explain: "It was a disaster! (B) → mục đích (D) → diễn biến (F) → tìm được váy (E) → sự cố (A) → tệ hơn nữa (C)."
  },
  {
    type: "writing",
    title: "Speaking / Writing – Do you like shopping?",
    intro: "Answer “Do you like shopping? Why do you go shopping?” in 80–120 words. Use at least 6 words/phrases from this lesson.",
    words: [80, 120],
    target: 6,
    steps: ["Do you like shopping? How often?", "Reasons (buy essentials / unwind / catch up with friends / find good deals…)", "Favourite place to shop and why", "One downside"],
    criteria: ["Trả lời rõ có/không và tần suất", "Có ít nhất 2 lý do", "Có nơi mua sắm yêu thích + đặc điểm", "Dùng ≥ 6 từ/cụm từ của bài"]
  }
]);
