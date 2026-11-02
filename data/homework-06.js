/* Bài tập Buổi 6 — theo tài liệu "Lesson 6 – Shopping P3 & Giving Directions" (có đáp án) */
YOSE.addHomework(6, [
  {
    type: "match",
    title: "Matching – Nối từ với định nghĩa",
    intro: "Match each word (1–10) with its English definition (A–J).",
    options: [
      { k: "A", t: "A dishonest plan to get money from people by tricking them." },
      { k: "B", t: "A road that is closed at one end." },
      { k: "C", t: "Money that is paid back to you because you returned something." },
      { k: "D", t: "A place where one road joins another but does not cross it." },
      { k: "E", t: "Buying something and being able to take it home immediately." },
      { k: "F", t: "The rules a shop has about taking back products that customers do not want." },
      { k: "G", t: "A place where several roads meet and traffic goes round a central circle." },
      { k: "H", t: "To give something back and receive a different thing in its place." },
      { k: "I", t: "Extra charges that you did not expect to pay." },
      { k: "J", t: "Delivery of goods right to the door of your home." }
    ],
    items: [
      { q: "return policy", a: "F" },
      { q: "refund", a: "C" },
      { q: "exchange", a: "H" },
      { q: "doorstep delivery", a: "J" },
      { q: "instant purchase", a: "E" },
      { q: "hidden costs", a: "I" },
      { q: "scam", a: "A" },
      { q: "roundabout", a: "G" },
      { q: "T-junction", a: "D" },
      { q: "dead end", a: "B" }
    ]
  },
  {
    type: "mcq",
    title: "Multiple choice – Chọn đáp án đúng",
    intro: "Choose the correct answer A, B, C or D.",
    items: [
      { q: "The shirt was too big, so the shop assistant ___ it for a smaller size.", options: ["exchanged", "returned", "refunded", "delivered"], a: 0, explain: "exchange sth for sth = đổi lấy món khác." },
      { q: "I sent the dress back last week, and I’m still waiting for my ___.", options: ["receipt", "refund", "exchange", "scam"], a: 1, explain: "Gửi trả hàng rồi chờ tiền hoàn lại → refund." },
      { q: "The package was delivered ___ the wrong address.", options: ["for", "at", "to", "in"], a: 2, explain: "deliver sth to an address." },
      { q: "___, online shopping offers many choices. ___, shopping in stores lets you try on clothes.", options: ["Firstly / Secondly", "On the one hand / On the other hand", "Because / So", "Although / But"], a: 1, explain: "So sánh hai phía đối lập → On the one hand… On the other hand…" },
      { q: "Go straight ahead and take the third ___ at the roundabout.", options: ["exit", "turn", "junction", "corner"], a: 0, explain: "take the third exit at the roundabout." },
      { q: "The bank is ___ the post office, just across the street.", options: ["opposite", "between", "behind", "next"], a: 0, explain: "“just across the street” → đối diện; “next” cần “to”." },
      { q: "“Take the second left” means: turn left at the ___ intersection.", options: ["first", "second", "third", "last"], a: 1, explain: "Bỏ qua ngã thứ nhất, rẽ trái ở ngã thứ hai." },
      { q: "When you get to the supermarket, ___ the second left.", options: ["make", "take", "go", "do"], a: 1, explain: "take the first/second left/right." },
      { q: "I have a poor ___ of direction, so I often get lost.", options: ["feel", "sense", "idea", "way"], a: 1, explain: "a poor sense of direction = định hướng kém." },
      { q: "Never share your bank details with unknown sellers, or you may ___.", options: ["scam", "be scammed", "scamming", "have scammed"], a: 1, explain: "may + V nguyên mẫu; nghĩa bị động → be scammed." },
      { q: "___ is a place where one road joins another but does not cross it.", options: ["A roundabout", "A T-junction", "A bridge", "A dead end"], a: 1, explain: "Định nghĩa T-junction." },
      { q: "Excuse me, ___ tell me the way to the museum?", options: ["can you", "do you", "are you", "will I"], a: 0, explain: "Can you tell me the way to…? = hỏi đường lịch sự." }
    ]
  },
  {
    type: "gap",
    title: "Gap fill – Điền từ vào chỗ trống",
    intro: "Complete the sentences with the words in the box. Each word is used once.",
    bank: ["express delivery", "hidden costs", "description", "dead end", "return label", "instant purchase", "face-to-face", "go past", "after-sales service", "doorstep delivery"],
    items: [
      { q: "The dress didn’t match the ___ on the website at all.", a: ["description"], explain: "not match the description = không giống mô tả." },
      { q: "I had to print a ___ and stick it on the box.", a: ["return label"], explain: "Nhãn gửi trả hàng." },
      { q: "At a local shop, you can talk to the staff ___ and get your money back right away.", a: ["face-to-face", "face to face"], explain: "Nói chuyện trực tiếp với nhân viên." },
      { q: "I forgot my friend’s birthday, so I chose ___ – the gift arrived in two hours.", a: ["express delivery"], explain: "Giao hàng hỏa tốc, “in two hours”." },
      { q: "On a rainy day, ___ is great because I don’t need to leave home.", a: ["doorstep delivery"], explain: "Giao tận nhà, “don’t need to leave home”." },
      { q: "In-store shopping has no ___ like shipping fees.", a: ["hidden costs"], explain: "no hidden costs = không có chi phí ẩn." },
      { q: "I need the shoes today, so I prefer an ___ in a store.", a: ["instant purchase"], explain: "Mua và mang về ngay; “an” đứng trước nguyên âm i." },
      { q: "This brand has excellent ___ – they repair your phone for free within a year.", a: ["after-sales service"], explain: "Dịch vụ hậu mãi (sửa chữa, bảo hành)." },
      { q: "Don’t drive into that street – it’s a ___.", a: ["dead end"], explain: "Đường cụt." },
      { q: "___ the bank, and the cinema is on your right.", a: ["Go past"], explain: "Đi qua ngân hàng (câu mệnh lệnh, viết hoa đầu câu)." }
    ]
  },
  {
    type: "gap",
    title: "Word forms – Dạng đúng của từ",
    intro: "Write the correct form of the word in brackets.",
    items: [
      { q: "Sorry, this jacket is not ___ in your size.", hint: "AVAILABILITY", a: ["available"], explain: "Sau “be not” cần tính từ." },
      { q: "My parcel was ___ to the wrong address.", hint: "DELIVERY", a: ["delivered"], explain: "Bị động: was + V3." },
      { q: "The online return process was very ___ and took many steps.", hint: "COMPLEXITY", a: ["complex"], explain: "Sau “very” cần tính từ." },
      { q: "My personal information was ___ on a fake website.", hint: "REVELATION", a: ["revealed"], explain: "Bị động: was + V3." },
      { q: "In-store shopping is ___ better for returns!", hint: "DEFINITE", a: ["definitely"], explain: "Trạng từ bổ nghĩa cho “better”." },
      { q: "Online shopping is very ___ when you are busy.", hint: "CONVENIENCE", a: ["convenient"], explain: "Sau “very” cần tính từ." },
      { q: "I love the vibrant ___ of the night market.", hint: "ATMOSPHERIC", a: ["atmosphere"], explain: "Sau tính từ “vibrant” cần danh từ." },
      { q: "Turn left at the next ___.", hint: "INTERSECT", a: ["intersection"], explain: "Sau “the next” cần danh từ." },
      { q: "Members can get ___ online discounts.", hint: "EXCLUDE", a: ["exclusive"], explain: "Tính từ đứng trước cụm danh từ “online discounts”." },
      { q: "Many people were ___ by fake online shops last year.", hint: "SCAM", a: ["scammed"], explain: "Bị động: were + V3." }
    ]
  },
  {
    type: "error",
    title: "Error correction – Tìm và sửa lỗi sai",
    intro: "Each sentence has ONE mistake. Write the corrected word(s). / Mỗi câu có MỘT lỗi sai — gõ phần đã sửa.",
    items: [
      { q: "The products can be delivered for the wrong address.", a: ["to", "delivered to", "to the wrong address"], show: "for → to", fixed: "The products can be delivered to the wrong address.", explain: "be delivered to an address." },
      { q: "The shirt was too big, so I exchanged it to a smaller size.", a: ["for", "exchanged it for", "for a smaller size"], show: "to → for", fixed: "The shirt was too big, so I exchanged it for a smaller size.", explain: "exchange sth for sth." },
      { q: "I’m still waiting my refund.", a: ["waiting for", "for", "waiting for my refund"], show: "waiting → waiting for", fixed: "I’m still waiting for my refund.", explain: "wait for sth." },
      { q: "Go past to the bank and turn left.", a: ["go past the bank", "past the bank"], show: "go past to the bank → go past the bank", fixed: "Go past the bank and turn left.", explain: "“go past” đi thẳng với tân ngữ, không có “to”." },
      { q: "Take the three exit at the roundabout.", a: ["third", "the third exit"], show: "three → third", fixed: "Take the third exit at the roundabout.", explain: "Dùng số thứ tự: the third exit." },
      { q: "The cinema is opposite of the school.", a: ["opposite", "opposite the school"], show: "opposite of → opposite", fixed: "The cinema is opposite the school.", explain: "“opposite” là giới từ, không cần “of”." },
      { q: "I have a poor sense of directions, so I always get lost.", a: ["direction", "sense of direction"], show: "directions → direction", fixed: "I have a poor sense of direction, so I always get lost.", explain: "sense of direction luôn ở số ít." },
      { q: "Have you ever buy anything online at a 50% discount?", a: ["bought", "have you ever bought"], show: "buy → bought", fixed: "Have you ever bought anything online at a 50% discount?", explain: "Have you ever + V3?" }
    ]
  },
  {
    type: "order",
    title: "Ordering – Sắp xếp câu theo 6 bước",
    intro: "Situation 3 – Tech Student on a Budget. Put the sentences (A–F) in the correct order following the 6 steps. Bấm lần lượt vào từng câu theo thứ tự.",
    items: [
      { k: "A", t: "Another advantage is that I can use exclusive online discounts and vouchers." },
      { k: "B", t: "I think I should choose online shopping." },
      { k: "C", t: "While shopping in person lets me do a direct quality inspection, online shopping saves me more money." },
      { k: "D", t: "One reason is that I can compare prices across various websites." },
      { k: "E", t: "So, I believe online shopping is the better choice for a student on a budget." },
      { k: "F", t: "This is because price-comparison tools help me find the cheapest laptop quickly." }
    ],
    a: "BDFACE",
    explain: "1 Opinion (B) → 2 First reason (D) → 3 Explain (F) → 4 Another reason (A) → 5 Compare (C) → 6 Final decision (E)."
  },
  {
    type: "tf",
    title: "True / False – Đúng hay sai",
    intro: "Decide if the statements are True or False.",
    items: [
      { q: "A “dead end” is a road that is closed at one end.", a: true, explain: "dead end = đường cụt." },
      { q: "“Take the second left” means turn left at the first intersection.", a: false, explain: "Rẽ trái ở giao lộ thứ HAI." },
      { q: "In a store, you usually need a receipt to return or exchange a product.", a: true, explain: "In-store returns: need a receipt." },
      { q: "“Doorstep delivery” means you have to go to the post office to collect your parcel.", a: false, explain: "doorstep delivery = giao tận cửa nhà." },
      { q: "If the bank is “opposite” the school, it is on the other side of the street, facing the school.", a: true, explain: "opposite = đối diện." },
      { q: "A refund is a new product you get instead of the old one.", a: false, explain: "Đó là exchange; refund = tiền hoàn lại." },
      { q: "“Instant purchase” means you can take the product home immediately.", a: true, explain: "instant purchase = mua và mang về ngay." },
      { q: "“Revealing clothes” are clothes that show parts of the body that are usually covered.", a: true, explain: "revealing clothes = quần áo hở hang." },
      { q: "A roundabout is a road with no way out.", a: false, explain: "Đó là dead end; roundabout = vòng xoay." },
      { q: "“Stay on + street name” means continue along that street.", a: true, explain: "stay on + street name = tiếp tục đi trên đường đó." }
    ]
  },
  {
    type: "gap",
    title: "Dialogue completion – Hoàn thành hội thoại chỉ đường",
    intro: "Complete the dialogue with the words in the box.",
    bank: ["welcome", "straight ahead", "until", "way", "past", "traffic lights", "along"],
    items: [
      { who: "Jane", q: "Excuse me! Can you tell me the ___ to the museum?", a: ["way"], explain: "Can you tell me the way to…?" },
      { who: "Mike", q: "It’s this way. Go ___ …", a: ["straight ahead"], explain: "Go straight ahead = đi thẳng." },
      { who: "Mike", q: "… at the ___.", a: ["traffic lights"], explain: "at the traffic lights = ở đèn giao thông." },
      { who: "Mike", q: "Turn right and go ___ the street.", a: ["along"], explain: "go along the street = đi dọc con đường." },
      { who: "Mike", q: "Walk ___ the park, …", a: ["past"], explain: "walk past the park = đi qua công viên." },
      { who: "Mike", q: "… and keep going straight ___ you see the sign for the museum.", a: ["until"], explain: "keep going straight until… = cứ đi thẳng cho đến khi…" },
      { who: "Jane", q: "Great! Thanks for your help." },
      { who: "Mike", q: "You’re ___.", a: ["welcome"], explain: "You’re welcome = không có gì." }
    ]
  },
  {
    type: "writing",
    title: "Speaking / Writing – Online hay mua trực tiếp?",
    intro: "Choose ONE of the 8 situations (mục “8 tình huống”). Write 80–120 words following the 6 steps and use at least 5 hints. / Chọn MỘT tình huống, viết 80–120 từ theo 6 bước, dùng ít nhất 5 cụm gợi ý.",
    words: [80, 120],
    target: 5,
    steps: [
      "State your opinion → I think we should choose ___.",
      "Give your first reason → One reason is that ___.",
      "Explain your reason → This is because ___.",
      "Give another reason → Another advantage is that ___.",
      "Compare the two options → While ___, ___.",
      "Make a final decision → So, I believe ___ is the better choice for this situation."
    ],
    criteria: ["Đủ 6 bước", "Dùng ≥ 5 cụm gợi ý", "Có “While …, …” để so sánh", "Kết luận rõ ràng", "Đúng ngữ pháp"],
    sample: {
      en: "I think I should choose **in-person shopping**. One reason is that the party is tomorrow, so I need a gift immediately. This is because in a store I can make an **instant purchase** and **take the gift home immediately**. Another advantage is that I can **avoid the hassle of shipping** – I don’t have to worry about late delivery or a **damaged** parcel. While online shopping offers **express delivery** and **24/7 availability**, the gift might still arrive late. So, I believe shopping in person is the better choice for this situation.",
      vi: "Bài mẫu – Situation 4: Birthday Gift for Best Friend. Tôi nghĩ mình nên mua trực tiếp. Một lý do là tiệc diễn ra vào ngày mai nên tôi cần quà ngay. Vì ở cửa hàng tôi có thể mua và mang quà về liền. Một ưu điểm khác là tránh được rắc rối giao hàng – không phải lo giao trễ hay hàng bị hư. Dù mua online có giao hỏa tốc và mua được 24/7, quà vẫn có thể đến trễ. Vì vậy tôi tin mua trực tiếp là lựa chọn tốt hơn trong tình huống này."
    }
  }
]);
