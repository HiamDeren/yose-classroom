/* Bài tập Buổi 2 — Healthy and Unhealthy Habits */
YOSE.addHomework(2, [
  {
    type: "match",
    title: "Matching – Nối cụm từ với định nghĩa",
    intro: "Match each phrase (1–8) with its English definition (A–H).",
    options: [
      { k: "A", t: "To drink enough water so that your body has the liquid it needs." },
      { k: "B", t: "To go to bed later than usual." },
      { k: "C", t: "To eat or drink less sugar." },
      { k: "D", t: "To eat more food than your body needs." },
      { k: "E", t: "To live in a way that involves a lot of sitting and very little exercise." },
      { k: "F", t: "To eat the right amounts of different kinds of food." },
      { k: "G", t: "To not eat a meal." },
      { k: "H", t: "To keep moving and doing physical activities." }
    ],
    items: [
      { q: "stay hydrated", a: "A" },
      { q: "stay up late", a: "B" },
      { q: "cut down on sugar", a: "C" },
      { q: "overeat", a: "D" },
      { q: "live a sedentary lifestyle", a: "E" },
      { q: "eat a balanced diet", a: "F" },
      { q: "skip meals", a: "G" },
      { q: "stay active", a: "H" }
    ]
  },
  {
    type: "gap",
    title: "Gap fill – Điền từ vào chỗ trống",
    intro: "Complete the sentences with the words in the box. Each word is used once.",
    bank: ["home-cooked", "regularly", "stretch", "screens", "back pain", "processed", "enough sleep", "rely on"],
    items: [
      { q: "I prefer ___ meals because they are healthier.", a: ["home-cooked"], explain: "home-cooked meals = món nấu ở nhà." },
      { q: "I exercise ___, about three times a week.", a: ["regularly"], explain: "exercise regularly = tập thể dục thường xuyên." },
      { q: "I ___ before exercising to reduce the risk of injury.", a: ["stretch"], explain: "stretch = khởi động, giãn cơ." },
      { q: "Spending too much time on ___ can cause eye strain.", a: ["screens"], explain: "spend too much time on screens." },
      { q: "A sedentary lifestyle can lead to ___.", a: ["back pain"], explain: "back pain = đau lưng." },
      { q: "He avoids ___ food and cooks at home.", a: ["processed"], explain: "processed food = thực phẩm chế biến sẵn." },
      { q: "If I get ___, I feel more energetic.", a: ["enough sleep"], explain: "get enough sleep = ngủ đủ giấc." },
      { q: "I used to ___ instant food when I was busy.", a: ["rely on"], explain: "rely on = dựa vào." }
    ]
  },
  {
    type: "mcq",
    title: "Multiple choice – Cấu trúc nói về thói quen",
    intro: "Choose the correct answer.",
    items: [
      { q: "I exercise three times a week, ___ helps me stay fit.", options: ["that", "which", "what", "who"], a: 1, explain: "…, which helps me + V = điều này giúp tôi…" },
      { q: "___ my sedentary lifestyle, I sometimes have back pain.", options: ["Because", "Because of", "Although", "So"], a: 1, explain: "Because of + danh từ/cụm danh từ." },
      { q: "I usually eat home-cooked meals ___ they are healthier.", options: ["because", "because of", "so", "but"], a: 0, explain: "because + mệnh đề (S + V)." },
      { q: "It is important ___ hydrated in hot weather.", options: ["stay", "staying", "to stay", "stayed"], a: 2, explain: "It is important to + V." },
      { q: "Spending too much time sitting can lead ___ back pain.", options: ["to", "for", "in", "on"], a: 0, explain: "lead to + noun = dẫn đến." },
      { q: "I try to cut ___ on sugary drinks.", options: ["off", "up", "down", "out"], a: 2, explain: "cut down on = giảm." },
      { q: "I feel tired when I stay ___ late.", options: ["on", "up", "out", "in"], a: 1, explain: "stay up late = thức khuya." },
      { q: "Too much sugar may increase the ___ of health problems.", options: ["risk", "danger", "chance", "fear"], a: 0, explain: "increase the risk of = tăng nguy cơ." }
    ]
  },
  {
    type: "gap",
    title: "Câu điều kiện loại 1 & 2 – Chia động từ",
    intro: "Điền dạng đúng của động từ trong ngoặc (hoặc chọn từ gợi ý).",
    items: [
      { q: "If you ___ too much fast food, you will gain weight.", hint: "eat", a: ["eat"], explain: "Loại 1: mệnh đề If dùng hiện tại đơn." },
      { q: "If I ___ you, I would drink more water.", hint: "be", a: ["were"], explain: "Loại 2: “If I were you” — dùng were cho mọi chủ ngữ." },
      { q: "If she exercises regularly, she ___ more energetic.", hint: "feel", a: ["will feel", "'ll feel", "can feel"], explain: "Loại 1: mệnh đề chính dùng will + V." },
      { q: "If he ___ so late, he wouldn't feel tired.", hint: "not / stay up", a: ["didn't stay up", "did not stay up"], explain: "Loại 2: mệnh đề If dùng quá khứ đơn, phủ định với didn't + V." },
      { q: "If I had a bike, I ___ to work.", hint: "cycle", a: ["would cycle", "'d cycle", "could cycle"], explain: "Loại 2: mệnh đề chính dùng would + V." },
      { q: "___ you get enough sleep, you will feel exhausted.", hint: "If / Unless", a: ["Unless"], explain: "Unless = If … not: nếu không ngủ đủ thì sẽ kiệt sức." },
      { q: "If you ___ breakfast, you may overeat at lunch.", hint: "skip", a: ["skip"], explain: "Loại 1: hiện tại đơn với chủ ngữ you." },
      { q: "What ___ you do if you had more free time?", hint: "will / would", a: ["would"], explain: "Loại 2 (had) nên câu hỏi dùng would." }
    ]
  },
  {
    type: "error",
    title: "Error correction – Sửa lỗi câu điều kiện",
    intro: "Each sentence has ONE mistake. Write the corrected word(s).",
    items: [
      { q: "If you will exercise regularly, you will be healthier.", a: ["exercise", "you exercise"], show: "will exercise → exercise", fixed: "If you exercise regularly, you will be healthier.", explain: "Không dùng will trong mệnh đề If." },
      { q: "If she eat more vegetables, she will feel better.", a: ["eats", "she eats"], show: "eat → eats", fixed: "If she eats more vegetables, she will feel better.", explain: "Chủ ngữ ngôi thứ ba số ít → động từ thêm -s." },
      { q: "If I would have more time, I would cook at home.", a: ["had", "i had"], show: "would have → had", fixed: "If I had more time, I would cook at home.", explain: "Không dùng would trong mệnh đề If." },
      { q: "If I had more time, I will exercise every day.", a: ["would", "would exercise", "i would exercise"], show: "will → would", fixed: "If I had more time, I would exercise every day.", explain: "Không trộn loại 1 và loại 2." },
      { q: "Unless you don't sleep enough, you will feel tired.", a: ["sleep", "you sleep", "unless you sleep"], show: "don't sleep → sleep", fixed: "Unless you sleep enough, you will feel tired.", explain: "Unless đã mang nghĩa phủ định." },
      { q: "Because of I sit for long hours, I have back pain.", a: ["because", "because i sit"], show: "Because of → Because", fixed: "Because I sit for long hours, I have back pain.", explain: "Trước mệnh đề (I sit…) dùng because, không dùng because of." }
    ]
  },
  {
    type: "writing",
    title: "Speaking / Writing – Thói quen của bạn",
    intro: "Talk about your healthy and unhealthy habits in 80–120 words. Use at least 6 words/phrases from this lesson and one conditional sentence.",
    words: [80, 120],
    target: 6,
    steps: ["A healthy habit + how often", "Why you do it / how it helps you", "An unhealthy habit and its result", "What you are trying to change", "A conditional sentence (If I…, I will/would…)"],
    criteria: ["Có thói quen tốt + tần suất", "Có thói quen chưa tốt + hậu quả (which can lead to…)", "Có ít nhất 1 câu điều kiện đúng", "Dùng ≥ 6 từ/cụm từ của bài"],
    sample: {
      en: "I try to lead a healthy lifestyle. I usually have home-cooked meals because I can choose fresh ingredients and control my portions. I also eat plenty of vegetables and exercise about three times a week, which helps me stay fit and reduce stress. I stay hydrated by drinking water throughout the day, and I try to get enough sleep. I used to stay up late and spend too much time on my phone, so I often felt tired. Now I am changing my routine one step at a time. If I keep these habits, I will feel healthier and more energetic."
    }
  }
]);
