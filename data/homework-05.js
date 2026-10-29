/* Bài tập Buổi 5 — theo tài liệu "Lesson 5 – Shopping P2" (có đáp án) */
YOSE.addHomework(5, [
  {
    type: "match",
    title: "Matching – Nối từ với định nghĩa",
    intro: "Match each word (1–10) with its English definition (A–J). / Chọn chữ cái định nghĩa phù hợp cho mỗi từ.",
    options: [
      { k: "A", t: "Comments, ratings and photos about a product written by real buyers, not by the company." },
      { k: "B", t: "Too expensive; costing more than it is worth." },
      { k: "C", t: "Likely to last for a long time without breaking or getting weaker." },
      { k: "D", t: "A model of a human body used for displaying clothes in shops." },
      { k: "E", t: "Looking at goods in shop windows without intending to buy anything." },
      { k: "F", t: "Having a fault, so it does not work properly." },
      { k: "G", t: "A short trip or time out with other people, for fun." },
      { k: "H", t: "A shop that exists in a real building, not only online." },
      { k: "I", t: "Seen, felt or experienced directly by yourself, not through other people." },
      { k: "J", t: "Helpful; making sure that people have what they need." }
    ],
    items: [
      { q: "durable", a: "C" },
      { q: "attentive", a: "J" },
      { q: "brick-and-mortar store", a: "H" },
      { q: "window shopping", a: "E" },
      { q: "overpriced", a: "B" },
      { q: "first-hand", a: "I" },
      { q: "mannequin", a: "D" },
      { q: "defective", a: "F" },
      { q: "social outing", a: "G" },
      { q: "user-generated reviews", a: "A" }
    ]
  },
  {
    type: "mcq",
    title: "Multiple choice – Chọn đáp án đúng",
    intro: "Choose the correct answer A, B, C or D.",
    items: [
      { q: "What ___ me most was the excellent customer service.", options: ["impress", "impressed", "impressing", "impressive"], a: 1, explain: "What impressed me most was… (quá khứ đơn)." },
      { q: "The shoes were not only stylish but also reasonably ___.", options: ["price", "pricing", "priced", "prices"], a: 2, explain: "reasonably priced = có giá phải chăng (trạng từ + V3)." },
      { q: "I bought a new pair because my old ones were worn ___.", options: ["on", "in", "out", "up"], a: 2, explain: "wear out → be worn out = mòn, cũ." },
      { q: "Thanks ___ the quick service, I didn’t have to wait long.", options: ["for", "to", "of", "with"], a: 1, explain: "Thanks to + noun = nhờ có…" },
      { q: "I ended up ___ the store without buying anything.", options: ["leave", "to leave", "leaving", "left"], a: 2, explain: "end up + V-ing = rốt cuộc lại…" },
      { q: "Online shopping offers ___ availability – you can buy things at midnight.", options: ["around-the-clock", "first-hand", "brick-and-mortar", "well-designed"], a: 0, explain: "around-the-clock availability = sẵn sàng 24/7." },
      { q: "Luckily, I managed ___ a good bargain.", options: ["finding", "to find", "find", "found"], a: 1, explain: "manage + to V = xoay xở làm được." },
      { q: "I was really annoyed ___ the slow service.", options: ["by", "of", "on", "for"], a: 0, explain: "annoyed by sth = bực mình vì…" },
      { q: "I regretted ___ the jacket from that store.", options: ["buy", "to buy", "buying", "bought"], a: 2, explain: "regret + V-ing = hối tiếc đã làm gì." },
      { q: "___, the jacket was not available in my size.", options: ["To my disappointment", "Thanks to", "Luckily", "In the end"], a: 0, explain: "Câu nói về điều không như mong muốn → điều làm tôi thất vọng là…" },
      { q: "A pair of blue sneakers ___ my eye, so I tried them on.", options: ["took", "caught", "got", "made"], a: 1, explain: "catch sb’s eye = thu hút ánh nhìn; quá khứ: caught." },
      { q: "The shop assistant was a good ___ and understood my needs.", options: ["listen", "listening", "listener", "listened"], a: 2, explain: "a good listener = người biết lắng nghe (danh từ sau “a good”)." }
    ]
  },
  {
    type: "gap",
    title: "Gap fill – Điền từ vào chỗ trống",
    intro: "Complete the sentences with the words in the box. Change the form if necessary. Each word is used once.",
    bank: ["catch sb’s eye", "make a purchase", "user-generated reviews", "discount", "fitting room", "delivery", "in person", "spacious", "cashless payment", "satisfied", "browse through", "social outing"],
    items: [
      { q: "A red jacket in the shop window ___, so I went in to look at it.", a: ["caught my eye"], explain: "Quá khứ đơn → catch – caught; sb’s → my." },
      { q: "Before buying online, I always read the ___ to see photos from real buyers.", a: ["user-generated reviews"], explain: "Đánh giá do người mua thật viết." },
      { q: "Luckily, the sneakers were on sale with a 30% ___.", a: ["discount"], explain: "on sale with a 30% discount = đang giảm giá 30%." },
      { q: "You can try it on in the ___ over there.", a: ["fitting room"], explain: "Phòng thử đồ." },
      { q: "This app offers free ___ on orders over $50.", a: ["delivery"], explain: "free delivery = miễn phí giao hàng." },
      { q: "I prefer to shop ___ so that I can touch the material.", a: ["in person"], explain: "shop in person = mua trực tiếp." },
      { q: "The store was clean and ___, so it didn’t feel crowded.", a: ["spacious"], explain: "clean and spacious = sạch sẽ, rộng rãi." },
      { q: "More and more people use ___ such as QR codes and e-wallets.", a: ["cashless payment", "cashless payments"], explain: "Thanh toán không dùng tiền mặt." },
      { q: "I felt really ___ with the excellent customer service.", a: ["satisfied"], explain: "feel satisfied with sth = hài lòng với…" },
      { q: "I usually ___ products on my phone before I add them to my cart.", a: ["browse through"], explain: "browse through products = lướt xem sản phẩm." },
      { q: "Shopping with friends is a nice ___ at the weekend.", a: ["social outing"], explain: "a social outing = buổi ra ngoài chơi cùng mọi người." },
      { q: "Luckily, I managed to ___ before the store closed.", a: ["make a purchase"], explain: "manage to make a purchase = mua được hàng." }
    ]
  },
  {
    type: "gap",
    title: "Word forms – Dạng đúng của từ",
    intro: "Write the correct form of the word in brackets.",
    items: [
      { q: "The staff were friendly and very ___.", hint: "ATTENTION", a: ["attentive"], explain: "Sau “very” cần tính từ." },
      { q: "I was not ___ with the quality of the bag.", hint: "SATISFY", a: ["satisfied"], explain: "satisfied with sth (tính từ -ed chỉ cảm xúc của người)." },
      { q: "___, I found a pair of sneakers on sale.", hint: "FORTUNE", a: ["Fortunately"], explain: "Trạng từ đứng đầu câu, = Luckily." },
      { q: "These boots are made of very ___ leather.", hint: "DURABILITY", a: ["durable"], explain: "Tính từ đứng trước danh từ “leather”." },
      { q: "To my ___, the jacket was not available in my size.", hint: "DISAPPOINT", a: ["disappointment"], explain: "To my + danh từ." },
      { q: "The prices here are very ___ – even students can buy things.", hint: "AFFORD", a: ["affordable"], explain: "Sau “very” cần tính từ; affordable = vừa túi tiền." },
      { q: "The supermarket is clean and well-___.", hint: "ORGANIZATION", a: ["organized", "organised"], explain: "well-organized = được sắp xếp ngăn nắp." },
      { q: "Overall, it was a really ___ experience.", hint: "PLEASANT", a: ["unpleasant"], explain: "Ngữ cảnh tiêu cực → thêm tiền tố un-: unpleasant = khó chịu." },
      { q: "I love the ___ customer service here – they understand my needs.", hint: "PERSON", a: ["personalized", "personalised"], explain: "personalized customer service = dịch vụ cá nhân hóa." },
      { q: "The shop has very ___ displays in its windows.", hint: "ATTRACT", a: ["attractive"], explain: "Tính từ đứng trước danh từ “displays”." },
      { q: "The bag was ___, so I had to return it.", hint: "DEFECT", a: ["defective"], explain: "Sau “was” cần tính từ; defective = bị lỗi." },
      { q: "The 24/7 ___ of online shops is very convenient.", hint: "AVAILABLE", a: ["availability"], explain: "Sau “The 24/7” cần danh từ." }
    ]
  },
  {
    type: "error",
    title: "Error correction – Tìm và sửa lỗi sai",
    intro: "Each sentence has ONE mistake. Write the corrected word(s). / Mỗi câu có MỘT lỗi sai — gõ phần đã sửa (vd: worn out).",
    items: [
      { q: "My old shoes were wear out, so I bought a new pair.", a: ["worn out", "were worn out", "worn"], show: "wear out → worn out", fixed: "My old shoes were worn out, so I bought a new pair.", explain: "be + V3: were worn out." },
      { q: "What impress me most was the excellent customer service.", a: ["impressed", "what impressed"], show: "impress → impressed", fixed: "What impressed me most was the excellent customer service.", explain: "What impressed me most was… (quá khứ đơn)." },
      { q: "Thanks to the quick service, I didn’t have to waiting long.", a: ["wait", "have to wait", "to wait"], show: "waiting → wait", fixed: "Thanks to the quick service, I didn’t have to wait long.", explain: "have to + V nguyên mẫu." },
      { q: "The jacket was very reasonable priced.", a: ["reasonably", "reasonably priced"], show: "reasonable → reasonably", fixed: "The jacket was very reasonably priced.", explain: "Trạng từ bổ nghĩa cho “priced”." },
      { q: "First thing first, I shopped around and compared prices.", a: ["first things first", "things"], show: "First thing first → First things first", fixed: "First things first, I shopped around and compared prices.", explain: "Thành ngữ cố định, “things” ở số nhiều." },
      { q: "I regretted to buy the jacket from that store.", a: ["buying", "regretted buying"], show: "to buy → buying", fixed: "I regretted buying the jacket from that store.", explain: "regret + V-ing = hối tiếc đã làm gì; regret to V = lấy làm tiếc phải (thông báo)." },
      { q: "I was really annoyed of the slow service.", a: ["by", "annoyed by", "with", "annoyed with", "at", "annoyed at"], show: "of → by", fixed: "I was really annoyed by the slow service.", explain: "annoyed by/with/at sth – không dùng “of”." },
      { q: "I couldn’t be happy with my purchase.", a: ["happier", "be happier"], show: "happy → happier", fixed: "I couldn’t be happier with my purchase.", explain: "I couldn’t be happier with… = tôi không thể hài lòng hơn (so sánh hơn)." }
    ]
  },
  {
    type: "order",
    title: "Ordering – Sắp xếp câu thành đoạn văn",
    intro: "Put the sentences (A–F) in the correct order to make a story about a bad shopping experience, following the 5 steps. Bấm lần lượt vào từng câu theo thứ tự.",
    items: [
      { k: "A", t: "To make matters worse, the cashier charged me the wrong price." },
      { k: "B", t: "A few weeks ago, I went to a shopping mall with my sister." },
      { k: "C", t: "Overall, it was a really unpleasant experience, and I would never shop there again." },
      { k: "D", t: "Unfortunately, the store was extremely crowded, and the staff ignored me when I asked for help." },
      { k: "E", t: "I was hoping to find an affordable jacket for work." },
      { k: "F", t: "After waiting for 20 minutes, I finally got to the checkout counter." }
    ],
    a: "BEDFAC",
    explain: "STEP 1 B (mở đầu) → STEP 2 E (mục đích) → STEP 3 D, F (diễn biến) → STEP 4 A (điểm tệ nhất) → STEP 5 C (kết thúc, đánh giá)."
  },
  {
    type: "tf",
    title: "True / False – Đúng hay sai",
    intro: "Câu 1–8 về từ vựng; câu 9–12 về đoạn văn mẫu trên lớp (xem phần Bài nói mẫu).",
    items: [
      { q: "“Window shopping” means looking at goods in shops without intending to buy anything.", a: true, explain: "window shopping = ngắm đồ, không định mua." },
      { q: "A brick-and-mortar store only sells products online.", a: false, explain: "brick-and-mortar store = cửa hàng có mặt bằng thật, không chỉ bán online." },
      { q: "“Time-consuming” means helping you save time.", a: false, explain: "time-consuming = tốn thời gian; tiết kiệm thời gian là time-saving." },
      { q: "User-generated reviews are written by real buyers, not by the company.", a: true, explain: "user-generated reviews = đánh giá do chính người mua viết." },
      { q: "If you do something “in person”, you ask somebody else to do it for you.", a: false, explain: "in person = tự mình đến và làm trực tiếp, không nhờ người khác." },
      { q: "“Around-the-clock availability” means you can shop 24 hours a day.", a: true, explain: "around-the-clock = suốt 24 giờ." },
      { q: "“Overpriced” products are cheaper than they should be.", a: false, explain: "overpriced = đắt hơn giá trị thật." },
      { q: "An “attentive” shop assistant makes sure customers have what they need.", a: true, explain: "attentive staff = nhân viên chu đáo, để ý đến nhu cầu của khách." },
      { q: "In the sample paragraph, the writer was looking for a new pair of sneakers.", a: true, explain: "I was looking for a new pair of sneakers at an affordable price." },
      { q: "The writer bought the first pair of sneakers he/she saw.", a: false, explain: "At first, I shopped around and compared prices to find the best deal." },
      { q: "The sneakers were on sale with a 30% discount.", a: true, explain: "I came across a pair that was on sale with a 30% discount." },
      { q: "The writer thinks the sneakers were not worth the money.", a: false, explain: "I think they were really good value for money." }
    ]
  },
  {
    type: "gap",
    title: "Dialogue completion – Hoàn thành hội thoại",
    intro: "Complete the dialogue with the phrases in the box.",
    bank: ["window shopping", "first-hand", "time-consuming", "around-the-clock", "from the comfort of my own home", "brick-and-mortar stores", "user-generated reviews"],
    items: [
      { who: "Mia", q: "Do you want to go to the mall with me on Saturday?" },
      { who: "Leo", q: "Not really. I prefer shopping online ___.", a: ["from the comfort of my own home"], explain: "Mua online ngay tại nhà cho thoải mái." },
      { who: "Mia", q: "Why? It’s fun to go out!" },
      { who: "Leo", q: "Going to the mall is so ___. I can spend half a day there!", a: ["time-consuming"], explain: "Tốn thời gian (“spend half a day there”)." },
      { who: "Mia", q: "But how do you know if the products are good?" },
      { who: "Leo", q: "I always read the ___ and look at photos from real buyers.", a: ["user-generated reviews"], explain: "Đánh giá và ảnh từ người mua thật." },
      { who: "Mia", q: "I still prefer ___.", a: ["brick-and-mortar stores"], explain: "Cửa hàng có mặt bằng thật, đối lập với mua online." },
      { who: "Mia", q: "I like to feel the material ___ before I buy anything.", a: ["first-hand"], explain: "feel the material first-hand = sờ chất liệu tận tay." },
      { who: "Leo", q: "Fair enough. But online shops have ___ availability, so I can shop at midnight!", a: ["around-the-clock"], explain: "around-the-clock availability = mua được 24/7 (“shop at midnight”)." },
      { who: "Mia", q: "OK, but come with me anyway. We can just do some ___ and grab a coffee.", a: ["window shopping"], explain: "do some window shopping = ngắm đồ, không định mua." }
    ]
  },
  {
    type: "writing",
    title: "Speaking / Writing – Kể một trải nghiệm mua sắm",
    intro: "Describe a good OR bad shopping experience in 120–160 words. Follow the 5 steps and use at least 8 words/phrases from this lesson.",
    words: [120, 160],
    target: 8,
    steps: ["STEP 1 – When / where / who?", "STEP 2 – Purpose / why?", "STEP 3 – What happened?", "STEP 4 – What was special?", "STEP 5 – Feelings / reflection?"],
    criteria: [
      "Có đủ 5 bước",
      "Dùng ≥ 8 từ/cụm từ của bài",
      "Có từ nối (At first, After that, Luckily, In the end…)",
      "Dùng đúng thì quá khứ đơn",
      "Có câu nêu cảm xúc và kết luận"
    ],
    sample: {
      en: "I remember the time when I went to a sports store near my office to buy a pair of running shoes, because my old ones were completely **worn out**. The first thing I noticed was the clean and **spacious** environment, with **well-organized shelves** and **attractive displays**. I started by **browsing different styles**, and a pair of light blue shoes **caught my eye**. What impressed me most was the **excellent customer service**. The shop assistant was very **attentive** and **a good listener**; she **understood my needs** and **recommended a suitable size**. I **tried them on**, and they **fitted** perfectly. **Luckily**, there was a 20% **discount**, so they were really **reasonably priced**. Thanks to the **quick checkout** and **cashless payment**, I didn’t have to wait long. Overall, I couldn’t be happier with my **purchase** – the shoes are **durable** and really **worth the money**. I would definitely recommend this store to my friends.",
      vi: "Tôi nhớ lần đến một cửa hàng thể thao gần công ty để mua giày chạy bộ, vì đôi cũ đã mòn hẳn. Điều đầu tiên tôi để ý là không gian sạch sẽ, rộng rãi, kệ hàng ngăn nắp và trưng bày bắt mắt. Tôi bắt đầu bằng việc xem nhiều kiểu dáng, và một đôi màu xanh nhạt thu hút ánh nhìn của tôi. Điều làm tôi ấn tượng nhất là dịch vụ khách hàng xuất sắc. Nhân viên rất chu đáo và biết lắng nghe; cô ấy hiểu nhu cầu của tôi và gợi ý size phù hợp. Tôi mặc thử và đôi giày vừa vặn hoàn hảo. May mắn là đang giảm 20%, nên giá thật sự phải chăng. Nhờ thanh toán nhanh và không dùng tiền mặt, tôi không phải chờ lâu. Nhìn chung, tôi không thể hài lòng hơn với món đồ đã mua – đôi giày bền và thật sự đáng đồng tiền. Tôi chắc chắn sẽ giới thiệu cửa hàng này cho bạn bè."
    }
  }
]);
