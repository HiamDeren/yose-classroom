/* Bài tập Buổi 1 — Hometown (soạn thêm, dựa trên từ vựng và cấu trúc của buổi) */
YOSE.addHomework(1, [
  {
    type: "match",
    title: "Matching – Nối từ với định nghĩa",
    intro: "Match each word (1–8) with its English definition (A–H).",
    options: [
      { k: "A", t: "A very large and busy city." },
      { k: "B", t: "Having too many people in one place." },
      { k: "C", t: "Basic services for a home, such as electricity, water and gas." },
      { k: "D", t: "An area of grass, trees or plants in a town or city, such as a park." },
      { k: "E", t: "The number of crimes that happen in a place during a period of time." },
      { k: "F", t: "A food or product that a place is famous for." },
      { k: "G", t: "Land outside towns and cities, with fields, farms and trees." },
      { k: "H", t: "A place to live or stay." }
    ],
    items: [
      { q: "metropolis", a: "A" },
      { q: "countryside", a: "G" },
      { q: "overcrowded", a: "B" },
      { q: "utilities", a: "C" },
      { q: "accommodation", a: "H" },
      { q: "green space", a: "D" },
      { q: "crime rate", a: "E" },
      { q: "local speciality", a: "F" }
    ]
  },
  {
    type: "mcq",
    title: "Multiple choice – Chọn đáp án đúng",
    intro: "Choose the correct answer.",
    items: [
      { q: "I was born and ___ in Da Nang.", options: ["rise", "raised", "rose", "raising"], a: 1, explain: "be born and raised = được sinh ra và lớn lên." },
      { q: "My hometown is located ___ the central part of Vietnam.", options: ["on", "at", "in", "to"], a: 2, explain: "located in + khu vực." },
      { q: "My hometown is famous ___ its street food.", options: ["of", "for", "with", "about"], a: 1, explain: "be famous for = nổi tiếng về." },
      { q: "There is a lot of ___ in the city centre during rush hour.", options: ["traffics", "a traffic", "traffic", "many traffic"], a: 2, explain: "Traffic là danh từ không đếm được — không nói “many traffics”." },
      { q: "Some rural areas have limited access ___ medical facilities.", options: ["for", "to", "with", "on"], a: 1, explain: "limited access to sth." },
      { q: "Many hotels are within easy ___ distance of the beach.", options: ["walk", "walked", "walking", "to walk"], a: 2, explain: "within easy walking distance = đi bộ đến dễ dàng." },
      { q: "My neighbours are always ready to give a ___.", options: ["hand", "help", "finger", "arm"], a: 0, explain: "give a hand = giúp một tay." },
      { q: "I often hang ___ with my friends after class.", options: ["up", "on", "out", "off"], a: 2, explain: "hang out with = đi chơi cùng." }
    ]
  },
  {
    type: "gap",
    title: "Gap fill – Điền từ vào chỗ trống",
    intro: "Complete the sentences with the words in the box. Each word is used once.",
    bank: ["lively", "convenient", "pollution", "job opportunities", "peace and quiet", "high-rise buildings", "living costs", "willing to help"],
    items: [
      { q: "The city has a ___ atmosphere, with music and people everywhere.", a: ["lively"], explain: "lively = sôi động, náo nhiệt." },
      { q: "Public transport makes it ___ to get around.", a: ["convenient"], explain: "convenient = thuận tiện." },
      { q: "Air and noise ___ are common urban problems.", a: ["pollution"], explain: "pollution = ô nhiễm." },
      { q: "Big cities often offer more ___.", a: ["job opportunities"], explain: "job opportunities = cơ hội việc làm." },
      { q: "I love the ___ of my village – there is no traffic noise.", a: ["peace and quiet"], explain: "peace and quiet = sự yên bình và tĩnh lặng." },
      { q: "The city centre is full of ___ with more than 30 floors.", a: ["high-rise buildings"], explain: "high-rise building = tòa nhà cao tầng." },
      { q: "___ are higher in large cities, especially rent.", a: ["Living costs"], explain: "living costs = chi phí sinh hoạt." },
      { q: "People in my hometown are friendly and always ___ each other.", a: ["willing to help"], explain: "willing to help = sẵn lòng giúp đỡ." }
    ]
  },
  {
    type: "gap",
    title: "Word forms – Dạng đúng của từ",
    intro: "Write the correct form of the word in brackets.",
    items: [
      { q: "My hometown is ___ near the coast.", hint: "LOCATION", a: ["located"], explain: "be located = nằm ở." },
      { q: "Ho Chi Minh City is a busy ___ area.", hint: "METROPOLIS", a: ["metropolitan"], explain: "Tính từ đứng trước danh từ “area”." },
      { q: "Many people in the area are highly ___.", hint: "EDUCATION", a: ["educated"], explain: "highly educated = có học vấn cao." },
      { q: "The city is ___ – there are too many people.", hint: "CROWD", a: ["overcrowded", "crowded"], explain: "overcrowded = quá đông đúc." },
      { q: "Factories should not ___ the river with wastewater.", hint: "POLLUTION", a: ["pollute"], explain: "Sau “should not” cần động từ nguyên mẫu." },
      { q: "Good street lighting makes residents feel ___.", hint: "SECURITY", a: ["secure"], explain: "feel + tính từ → secure." },
      { q: "The local market is ___ located, right next to my house.", hint: "CONVENIENT", a: ["conveniently"], explain: "Trạng từ bổ nghĩa cho “located”." },
      { q: "The street food is ___ and quite cheap.", hint: "TASTE", a: ["tasty"], explain: "Tính từ: tasty = ngon." }
    ]
  },
  {
    type: "tf",
    title: "True / False – Đúng hay sai",
    intro: "Decide if the statements are True or False.",
    items: [
      { q: "“Countryside” is a noun; the adjective we use for country areas is “rural” (rural areas).", a: true, explain: "Countryside là danh từ; tính từ là rural." },
      { q: "“Lively” is an adverb.", a: false, explain: "Lively là tính từ dù có đuôi -ly." },
      { q: "A “metropolis” is a very small village.", a: false, explain: "metropolis = đô thị lớn." },
      { q: "“Utilities” include electricity, water and gas.", a: true, explain: "utilities = dịch vụ tiện ích (điện, nước, gas…)." },
      { q: "We say “many traffics” when there are a lot of cars.", a: false, explain: "Traffic không đếm được: heavy traffic / a lot of traffic." },
      { q: "“Give a hand” means to help someone.", a: true, explain: "give a hand = giúp một tay." }
    ]
  },
  {
    type: "writing",
    title: "Speaking / Writing – Giới thiệu quê hương của bạn",
    intro: "Describe your hometown in 80–120 words. Use at least 6 words/phrases from this lesson.",
    words: [80, 120],
    target: 6,
    steps: ["Location: Where is it?", "Features: What is it famous for? What can you find there?", "People: What are the people like?", "What I like most and why", "One problem (traffic, noise, job opportunities…)"],
    criteria: ["Nói được vị trí (located in / in the north/central/south of Vietnam)", "Có ít nhất 1 đặc sản hoặc điểm nổi bật", "Có điều mình thích nhất và lý do", "Có 1 điểm hạn chế (However, …)", "Dùng ≥ 6 từ/cụm từ của bài"]
  }
]);
