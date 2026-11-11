/* Bài tập Buổi 9 — theo tài liệu "Lesson 9 – Technology" (có đáp án) */
YOSE.addHomework(9, [
  {
    type: "match",
    title: "Matching – Nối từ với định nghĩa",
    intro: "Match each word (1–10) with its English definition (A–J).",
    options: [
      { k: "A", t: "A device used for measuring temperature, especially of the air or a person’s body." },
      { k: "B", t: "Light and small enough to be easily carried or moved." },
      { k: "C", t: "Arriving or happening at the expected, correct time; not late." },
      { k: "D", t: "Simple for people to use." },
      { k: "E", t: "Designed to be practical and useful rather than attractive." },
      { k: "F", t: "Unable to give your attention to something because of something else." },
      { k: "G", t: "Using very little space; small and neat." },
      { k: "H", t: "Able to make yourself do things you should do even when you do not want to." },
      { k: "I", t: "A device that keeps a building within a limited temperature range automatically." },
      { k: "J", t: "The rate at which goods are produced or work is done." }
    ],
    items: [
      { q: "portable", a: "B" },
      { q: "compact", a: "G" },
      { q: "user-friendly", a: "D" },
      { q: "thermostat", a: "I" },
      { q: "productivity", a: "J" },
      { q: "functional", a: "E" },
      { q: "punctual", a: "C" },
      { q: "distracted", a: "F" },
      { q: "self-disciplined", a: "H" },
      { q: "thermometer", a: "A" }
    ]
  },
  {
    type: "mcq",
    title: "Multiple choice – Chọn đáp án đúng",
    intro: "Choose the correct answer A, B, C or D.",
    items: [
      { q: "It is mainly used ___ tracking daily activities.", options: ["for", "to", "with", "by"], a: 0, explain: "be mainly used for + V-ing." },
      { q: "People use it ___ to music.", options: ["listen", "to listen", "listening", "listened"], a: 1, explain: "use sth to + V." },
      { q: "It is equipped ___ a touchscreen.", options: ["by", "of", "with", "for"], a: 2, explain: "be equipped with." },
      { q: "It helps people save time ___ cleaning the floor automatically.", options: ["by", "with", "for", "to"], a: 0, explain: "save time by + V-ing = tiết kiệm thời gian bằng cách." },
      { q: "It is particularly popular ___ young people.", options: ["among", "at", "on", "between"], a: 0, explain: "popular among + nhóm người." },
      { q: "One major ___ is that it can be expensive.", options: ["drawback", "benefit", "feature", "function"], a: 0, explain: "drawback = nhược điểm (nói về chi phí đắt)." },
      { q: "It allows users ___ the device remotely.", options: ["control", "controlling", "to control", "controlled"], a: 2, explain: "allow sb to + V." },
      { q: "I am easily ___ by social media when I study online.", options: ["distract", "distracted", "distracting", "distraction"], a: 1, explain: "Tính từ -ed chỉ cảm giác của người: be distracted by." },
      { q: "My sweater ___ after I washed it in hot water.", options: ["shrank", "shrink", "shrinking", "to shrink"], a: 0, explain: "Quá khứ đơn: shrink – shrank – shrunk." },
      { q: "You can control a smart speaker with voice ___.", options: ["commands", "buttons", "remotes", "screens"], a: 0, explain: "voice commands = lệnh bằng giọng nói." },
      { q: "I use Zalo to talk ___ my customers.", options: ["to", "at", "for", "on"], a: 0, explain: "talk to sb." },
      { q: "It makes it easier ___ people to find directions.", options: ["to", "for", "with", "of"], a: 1, explain: "make it easier for sb to + V." }
    ]
  },
  {
    type: "gap",
    title: "Gap fill – Điền từ vào chỗ trống",
    intro: "Complete the sentences with the words in the box. Each word is used once.",
    bank: ["notifications", "power bank", "sensors", "remote area", "built-in camera", "chores", "heart rate", "power cut", "rechargeable battery", "streaming services"],
    items: [
      { q: "My phone has a ___, so I can take photos anywhere.", a: ["built-in camera"], explain: "Camera tích hợp trong điện thoại." },
      { q: "The robot vacuum cleaner uses smart ___ to avoid furniture.", a: ["sensors"], explain: "smart sensors = cảm biến thông minh." },
      { q: "A ___ can be charged again and used many times.", a: ["rechargeable battery"], explain: "Pin sạc dùng nhiều lần." },
      { q: "If there is a ___, the smart fridge sends a message to my phone.", a: ["power cut"], explain: "Cúp điện → tủ lạnh gửi tin báo." },
      { q: "My smartwatch sends me ___ when I get new messages.", a: ["notifications"], explain: "send notifications = gửi thông báo." },
      { q: "A fitness tracker can measure your ___ while you run.", a: ["heart rate"], explain: "Nhịp tim." },
      { q: "My phone’s battery is low, so I need to use my ___.", a: ["power bank"], explain: "Sạc dự phòng khi pin yếu." },
      { q: "We watch films on a smart TV using online ___.", a: ["streaming services"], explain: "Dịch vụ xem phim trực tuyến." },
      { q: "A robot vacuum cleaner saves time on household ___.", a: ["chores"], explain: "household chores = việc nhà." },
      { q: "People living in a ___ may not have good Internet access.", a: ["remote area"], explain: "Vùng sâu vùng xa." }
    ]
  },
  {
    type: "gap",
    title: "Word forms – Dạng đúng của từ",
    intro: "Write the correct form of the word in brackets.",
    items: [
      { q: "The robot cleans the floor ___.", hint: "AUTOMATIC", a: ["automatically"], explain: "Trạng từ bổ nghĩa cho “cleans”." },
      { q: "___ advances have changed our daily lives.", hint: "TECHNOLOGY", a: ["Technological"], explain: "Tính từ đứng trước danh từ “advances”." },
      { q: "I can’t study online for long because I lose ___.", hint: "CONCENTRATE", a: ["concentration"], explain: "lose concentration (danh từ)." },
      { q: "A good laptop can increase your ___ at work.", hint: "PRODUCE", a: ["productivity"], explain: "Sau “your” cần danh từ." },
      { q: "My smartwatch helps me stay ___ for meetings.", hint: "PUNCTUALITY", a: ["punctual"], explain: "stay + tính từ." },
      { q: "Online learners need to be ___.", hint: "SELF-DISCIPLINE", a: ["self-disciplined"], explain: "be + tính từ." },
      { q: "This air fryer is small and ___, so it doesn’t take up much space.", hint: "COMPACTNESS", a: ["compact"], explain: "Nối với tính từ “small” bằng “and”." },
      { q: "Smart TVs are very ___ to use.", hint: "CONVENIENCE", a: ["convenient"], explain: "Sau “very” cần tính từ." },
      { q: "Social media can be very ___ if you use it too much.", hint: "ADDICT", a: ["addictive"], explain: "Sau “very” cần tính từ; addictive = gây nghiện." },
      { q: "I prefer ___ devices to beautiful ones.", hint: "FUNCTION", a: ["functional"], explain: "Tính từ đứng trước danh từ “devices”." }
    ]
  },
  {
    type: "error",
    title: "Error correction – Tìm và sửa lỗi sai",
    intro: "Each sentence has ONE mistake. Write the corrected word(s). / Mỗi câu có MỘT lỗi sai — gõ phần đã sửa hoặc cả câu đúng.",
    items: [
      { q: "It is mainly used for track daily activities.", a: ["tracking", "for tracking"], show: "track → tracking", fixed: "It is mainly used for tracking daily activities.", explain: "be used for + V-ing." },
      { q: "It allows people communicate more easily.", a: ["to communicate", "people to communicate"], show: "communicate → to communicate", fixed: "It allows people to communicate more easily.", explain: "allow sb to + V." },
      { q: "It is equipped by a touchscreen.", a: ["with", "equipped with"], show: "by → with", fixed: "It is equipped with a touchscreen.", explain: "be equipped with." },
      { q: "Honestly, I am easily distracting by others.", a: ["distracted", "easily distracted"], show: "distracting → distracted", fixed: "Honestly, I am easily distracted by others.", explain: "Cảm giác của người dùng -ed." },
      { q: "He uses Zalo to remind his team important meetings.", a: ["of", "remind his team of", "his team of", "about", "remind his team about", "his team about"], show: "remind his team important meetings → remind his team of important meetings", fixed: "He uses Zalo to remind his team of important meetings.", explain: "remind sb of/about sth." },
      { q: "She spends about five hours a day to use her phone.", a: ["using", "a day using"], show: "to use → using", fixed: "She spends about five hours a day using her phone.", explain: "spend + time + V-ing." },
      { q: "Both of us prefers studying offline.", a: ["prefer", "both of us prefer"], show: "prefers → prefer", fixed: "Both of us prefer studying offline.", explain: "“Both of us” đi với động từ số nhiều." },
      { q: "It helps users finding directions.", a: ["find", "users find", "to find"], show: "finding → find", fixed: "It helps users find directions.", explain: "help sb + V nguyên mẫu." }
    ]
  },
  {
    type: "order",
    title: "Ordering – Sắp xếp bài miêu tả theo 6 ý",
    intro: "Put the sentences (A–F) about a smartwatch in the correct order: Appearance → Features → Functions → Users → Benefits → Disadvantages. Bấm lần lượt vào từng câu theo thứ tự.",
    items: [
      { k: "A", t: "One major drawback is that it requires regular charging." },
      { k: "B", t: "It is a small, lightweight device that you wear on your wrist." },
      { k: "C", t: "It is particularly popular among fitness enthusiasts and office workers." },
      { k: "D", t: "It comes with a touchscreen and is connected to a smartphone." },
      { k: "E", t: "It is mainly used for checking messages and tracking health and fitness." },
      { k: "F", t: "Thanks to this device, people can be more health-conscious and punctual." }
    ],
    a: "BDECFA",
    explain: "1 Appearance (B) → 2 Features (D) → 3 Functions (E) → 4 Users (C) → 5 Benefits (F) → 6 Disadvantages (A)."
  },
  {
    type: "tf",
    title: "True / False – Đúng hay sai",
    intro: "Decide if the statements are True or False.",
    items: [
      { q: "A power bank stores electricity to power your phone.", a: true, explain: "This device stores electricity to power your phone." },
      { q: "A GPS helps you find directions when you are driving.", a: true, explain: "This device helps you find directions when you are driving." },
      { q: "A thermostat is used to measure a person’s body temperature.", a: false, explain: "Đó là thermometer; thermostat điều chỉnh nhiệt độ trong nhà." },
      { q: "A graphics tablet has a flat surface and a digital pen for drawing.", a: true, explain: "Features: flat surface, digital pen." },
      { q: "An e-reader is heavy and not easy to carry.", a: false, explain: "e-reader: lightweight, easy to carry." },
      { q: "A walkie-talkie is used to talk to people far away in another country.", a: false, explain: "walkie-talkie: talk over a short distance." },
      { q: "“Punctual” means usually late.", a: false, explain: "punctual = đúng giờ." },
      { q: "A smart scale can connect to an app to track fitness progress.", a: true, explain: "smart scale: connects to an app; track health and fitness progress." },
      { q: "A projector creates a large image on a wall or screen.", a: true, explain: "projector: creates a large image on a wall or screen." },
      { q: "“Shrink” means to become bigger.", a: false, explain: "shrink = co lại, nhỏ đi." }
    ]
  },
  {
    type: "gap",
    title: "Dialogue completion – Technology survey",
    intro: "Complete the survey interview with the words in the box.",
    bank: ["remind", "hours", "distracted", "user-friendly", "track", "prefer", "concentration"],
    items: [
      { who: "Student A", q: "How many ___ do you use your phone a day?", a: ["hours"], explain: "How many hours…?" },
      { who: "Student B", q: "About five or six. I use it to contact my customers and study English." },
      { who: "Student A", q: "What app do you use most often?" },
      { who: "Student B", q: "Zalo. It’s popular and very ___.", a: ["user-friendly"], explain: "Dễ sử dụng." },
      { who: "Student A", q: "Do you ___ studying online or offline?", a: ["prefer"], explain: "Do you prefer + V-ing…?" },
      { who: "Student B", q: "Offline. When I study online, I easily lose ___ …", a: ["concentration"], explain: "lose concentration." },
      { who: "Student B", q: "… and get ___ by social media.", a: ["distracted"], explain: "get distracted by." },
      { who: "Student A", q: "What piece of technology would you like to buy?" },
      { who: "Student B", q: "An Apple Watch. It can ___ my health, …", a: ["track"], explain: "track my health = theo dõi sức khỏe." },
      { who: "Student B", q: "… and it can ___ me of important meetings.", a: ["remind"], explain: "remind sb of sth." }
    ]
  },
  {
    type: "writing",
    title: "Speaking / Writing – Describe a technological device",
    intro: "Describe a device you use or would like to buy in 120–160 words. Follow the 6 parts (mục “Khung 6 ý”) and use at least 8 words/phrases from this lesson.",
    words: [120, 160],
    target: 8,
    steps: [
      "Appearance – What does it look like?",
      "Features – What special features does it have?",
      "Functions – What can people do with it?",
      "Users – Who usually uses it?",
      "Benefits – How does it help people?",
      "Disadvantages – What problems can it cause?"
    ],
    criteria: [
      "Đủ 6 ý (Appearance – Features – Functions – Users – Benefits – Disadvantages)",
      "Dùng ≥ 8 từ/cụm từ của bài",
      "Dùng đúng giới từ (used for, equipped with, popular among, save time by)",
      "Có ít nhất 1 nhược điểm"
    ],
    sample: {
      en: "A robot vacuum cleaner is a small, **compact** device. It is usually shaped like a circle and is made of plastic. It **comes with** smart **sensors** and a **rechargeable battery**, and it **allows users to** control it **remotely** with an app. It **is mainly used for** cleaning the floor **automatically**. It **is particularly popular among** busy office workers and families with young children. It **helps people save time by** cleaning the house while they are at work, so they don’t have to do the **chores** themselves. One of the biggest advantages is that it is very **convenient** and **user-friendly**. However, **one major drawback is that** it can be quite **expensive**, and it **requires regular charging**. Overall, I think it is a **practical** device for modern homes.",
      vi: "Bài mẫu – Robot vacuum cleaner. Bản dịch có ở phần Bài nói mẫu."
    }
  }
]);
