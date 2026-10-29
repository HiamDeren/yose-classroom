/* Bài tập Buổi 3 — Describing a Trip */
YOSE.addHomework(3, [
  {
    type: "match",
    title: "Matching – Nối từ với định nghĩa",
    intro: "Match each word (1–8) with its English definition (A–H).",
    options: [
      { k: "A", t: "Having beautiful views of nature." },
      { k: "B", t: "Taking a lot of time." },
      { k: "C", t: "Real and true to the original; not a copy." },
      { k: "D", t: "Extremely beautiful or surprising." },
      { k: "E", t: "A short holiday away from home." },
      { k: "F", t: "To rest and relax so that you get your energy back." },
      { k: "G", t: "Warm, comfortable and relaxing." },
      { k: "H", t: "A wide road built for fast travel over long distances." }
    ],
    items: [
      { q: "scenic", a: "A" },
      { q: "time-consuming", a: "B" },
      { q: "authentic", a: "C" },
      { q: "breathtaking", a: "D" },
      { q: "getaway", a: "E" },
      { q: "recharge your batteries", a: "F" },
      { q: "cozy", a: "G" },
      { q: "expressway", a: "H" }
    ]
  },
  {
    type: "mcq",
    title: "Multiple choice – Chọn đáp án đúng",
    intro: "Choose the correct answer.",
    items: [
      { q: "We rented bicycles to get ___ the town.", options: ["over", "around", "along", "across"], a: 1, explain: "get around = đi lại quanh một nơi." },
      { q: "The mountain ___ was beautiful.", options: ["scenic", "sceneries", "scenery", "scene"], a: 2, explain: "scenery là danh từ không đếm được (không thêm -s)." },
      { q: "We enjoyed ___ views along the way.", options: ["scenery", "scenic", "scenically", "scene"], a: 1, explain: "Trước danh từ dùng tính từ scenic." },
      { q: "We ate ___ caught seafood at the homestay.", options: ["fresh", "freshly", "freshness", "freshen"], a: 1, explain: "freshly (trạng từ) bổ nghĩa cho caught." },
      { q: "Taking the expressway is a ___ choice.", options: ["time-saving", "time-consuming", "time-spending", "time-wasting"], a: 0, explain: "Đi cao tốc giúp tiết kiệm thời gian → time-saving." },
      { q: "Travelling together helped us ___ our friendship.", options: ["deep", "depth", "deepen", "deeply"], a: 2, explain: "deepen a friendship = thắt chặt tình bạn (động từ)." },
      { q: "The sunset was the most ___ part of the trip.", options: ["memory", "memorize", "memorable", "memorably"], a: 2, explain: "the most + tính từ → memorable." },
      { q: "Quang noodles are a local ___ in Da Nang.", options: ["special", "speciality", "specially", "specialize"], a: 1, explain: "a local speciality = đặc sản địa phương (danh từ)." }
    ]
  },
  {
    type: "gap",
    title: "Word forms – Dạng đúng của từ",
    intro: "Write the correct form of the word in brackets.",
    items: [
      { q: "Riding along the coast gave us a sense of ___.", hint: "FREE", a: ["freedom"], explain: "a sense of + danh từ → freedom." },
      { q: "We had a ___ walk after dinner.", hint: "PEACE", a: ["peaceful"], explain: "Tính từ trước danh từ “walk”." },
      { q: "The small restaurant served ___ local food.", hint: "AUTHENTICITY", a: ["authentic"], explain: "Tính từ trước cụm danh từ." },
      { q: "We tried ___ noodle soups during the trip.", hint: "REGION", a: ["regional"], explain: "regional = thuộc vùng miền." },
      { q: "The old ___ road can be time-consuming.", hint: "COAST", a: ["coastal"], explain: "Tính từ: coastal = ven biển." },
      { q: "My friends wore ___ outfits for the photos.", hint: "TREND", a: ["trendy"], explain: "trendy = hợp mốt." },
      { q: "The view was ___ beautiful.", hint: "BREATHTAKING", a: ["breathtakingly"], explain: "Trạng từ bổ nghĩa cho tính từ “beautiful”." },
      { q: "We had a ___ seafood dinner at our homestay.", hint: "COZINESS", a: ["cozy", "cosy"], explain: "Tính từ: cozy (Anh-Anh: cosy)." }
    ]
  },
  {
    type: "gap",
    title: "FANBOYS – Chọn liên từ phù hợp",
    intro: "Complete each sentence with one of the FANBOYS. Each word is used once.",
    bank: ["for", "and", "nor", "but", "or", "yet", "so"],
    items: [
      { q: "The seafood was freshly caught, ___ it tasted amazing.", a: ["so"], explain: "so → nêu kết quả." },
      { q: "The trip was short, ___ it was truly memorable.", a: ["yet"], explain: "yet → đối lập bất ngờ." },
      { q: "We could take the expressway, ___ we could follow the coastal road.", a: ["or"], explain: "or → lựa chọn." },
      { q: "The coastal road was time-consuming, ___ the views were breathtaking.", a: ["but"], explain: "but → đối lập." },
      { q: "We didn't go to fancy restaurants, ___ did we stay in a big hotel.", a: ["nor"], explain: "nor → hai ý phủ định, sau nor đảo ngữ (did we)." },
      { q: "We travelled by minivan, ___ the journey took about three hours.", a: ["and"], explain: "and → thêm ý." },
      { q: "We left early, ___ we wanted to avoid the traffic.", a: ["for"], explain: "for → nêu lý do (trang trọng)." }
    ]
  },
  {
    type: "order",
    title: "Ordering – Sắp xếp câu thành bài kể chuyến đi",
    intro: "Put the sentences (A–F) in the correct order. Bấm lần lượt vào từng câu theo thứ tự.",
    items: [
      { k: "A", t: "The trip helped us recharge our batteries and deepen our friendship." },
      { k: "B", t: "Whenever someone asks about my most memorable trip, the first place that comes to mind is Nha Trang." },
      { k: "C", t: "We travelled by minivan via the expressway, which took around three hours." },
      { k: "D", t: "It took place last summer, when my close friends and I decided to head there for a short getaway." },
      { k: "E", t: "The next day, we watched a breathtaking crimson sunset by the shore." },
      { k: "F", t: "Instead of going to fancy restaurants, we had a cozy seafood dinner at our homestay." }
    ],
    a: "BDCFEA",
    explain: "Mở đầu (B) → thời gian (D) → phương tiện (C) → trải nghiệm ngày đầu (F) → hôm sau (E) → cảm nhận (A)."
  },
  {
    type: "writing",
    title: "Speaking / Writing – Kể một chuyến đi đáng nhớ",
    intro: "Describe a memorable trip in 100–150 words. Use at least 8 words/phrases from this lesson and at least 3 FANBOYS.",
    words: [100, 150],
    target: 8,
    steps: ["Where and when", "Transport and journey", "Food and sights", "Activities and feelings", "The most memorable part and why"],
    criteria: ["Có địa điểm, thời gian, người đi cùng", "Có phương tiện và thời gian di chuyển", "Dùng ít nhất 3 liên từ FANBOYS", "Dùng ≥ 8 từ/cụm từ của bài", "Có câu kết nêu cảm nhận"]
  }
]);
