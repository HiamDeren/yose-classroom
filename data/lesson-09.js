/* Buổi 9 — Technology (All about the Internet – Technology – Social media)
   **chữ đậm** = từ/cụm được nhấn mạnh trên lớp */
YOSE.addLesson({
  id: 9,
  title: "Technology",
  titleVi: "Công nghệ và thiết bị công nghệ",
  topic: "Công nghệ",
  summary:
    "All about the Internet – Technology – Social media: thiết bị công nghệ hằng ngày, khảo sát thói quen dùng công nghệ, miêu tả thiết bị theo 5 nhóm và khung 6 ý để miêu tả một thiết bị. Cuối trang có bài tập tự chấm. Chữ in đậm là từ được nhấn mạnh trên lớp.",

  warmup: {
    q: "Technology in our daily lives",
    a: "**Which device do you use every day?** • **What do you usually use it for?** • **What would you do without your smartphone for one day?** • **Do you think technology makes our lives easier?**",
    vi: "Trò chơi đoán thiết bị [baamboozle.com/game/4227839](https://www.baamboozle.com/game/4227839). Chủ đề buổi học: **All about the Internet – Technology – Social media**, nhóm từ **technological devices** (thiết bị công nghệ)."
  },

  groups: [
    { id: "devices", name: "Thiết bị công nghệ" },
    { id: "survey", name: "Technology survey" },
    { id: "describe", name: "Miêu tả thiết bị" }
  ],

  vocab: [
    // ---- Thiết bị công nghệ ----
    { w: "technological", ipa: "/ˌtek.nəˈlɒdʒ.ɪ.kəl/", pos: "adj", group: "devices", vi: "(thường đứng trước danh từ) thuộc về công nghệ",
      def: "Relating to technology.",
      forms: { adj: "technological", n: "technology", v: null, adv: "technologically" },
      ex: "There have been huge **technological** advances in the last ten years.", exVi: "Mười năm qua có những tiến bộ công nghệ vượt bậc." },
    { w: "device", ipa: "/dɪˈvaɪs/", pos: "noun", group: "devices", vi: "thiết bị",
      def: "An object or a piece of equipment designed to do a particular job.",
      forms: { adj: null, n: "device", v: "devise (nghĩ ra)", adv: null },
      ex: "Which **device** do you use every day?", exVi: "Bạn dùng thiết bị nào hằng ngày?" },
    { w: "automatically", ipa: "/ˌɔː.təˈmæt.ɪ.kli/", pos: "adv", group: "devices", vi: "một cách tự động",
      def: "Without needing a person to operate controls.",
      forms: { adj: "automatic", n: "automation", v: "automate", adv: "automatically" },
      ex: "The heating switches off **automatically**.", exVi: "Máy sưởi tự động tắt." },
    { w: "vacuum cleaner", ipa: "/ˈvæk.juːm ˌkliː.nər/", pos: "nphrase", group: "devices", vi: "máy hút bụi (còn gọi vacuum; thân mật vac; BrE Hoover)",
      def: "A machine that cleans floors and other surfaces by sucking up dust and dirt.",
      forms: { adj: null, n: "vacuum (cleaner)", v: "vacuum", adv: null },
      ex: "A robot **vacuum cleaner** cleans the floor while I’m at work.", exVi: "Robot hút bụi lau sàn trong lúc tôi đi làm." },
    { w: "remote", ipa: "/rɪˈməʊt/", pos: "adj", group: "devices", vi: "(adj) xa xôi; remote area = vùng sâu vùng xa; (n) điều khiển từ xa",
      def: "(adj) Far away from places where most people live; (n) a remote control, used to control a TV from a distance.",
      forms: { adj: "remote", n: "remote · remoteness", v: null, adv: "remotely" },
      ex: "People in **remote areas** can study online thanks to the Internet.", exVi: "Người ở vùng sâu vùng xa có thể học online nhờ Internet." },
    { w: "portable", ipa: "/ˈpɔː.tə.bəl/", pos: "adj", group: "devices", vi: "dễ mang theo, xách tay",
      def: "Light and small enough to be easily carried or moved.",
      forms: { adj: "portable", n: "portability", v: null, adv: null },
      ex: "A USB is very small and **portable**.", exVi: "USB rất nhỏ và dễ mang theo." },

    // ---- Technology survey ----
    { w: "user-friendly", ipa: "/ˌjuː.zəˈfrend.li/", pos: "adj", group: "survey", vi: "dễ sử dụng, thân thiện với người dùng",
      def: "If something, especially something related to a computer, is user-friendly, it is simple for people to use.",
      forms: { adj: "user-friendly", n: "user", v: "use", adv: null },
      ex: "Zalo is popular and very **user-friendly**.", exVi: "Zalo phổ biến và rất dễ dùng." },
    { w: "concentration", ipa: "/ˌkɒn.sənˈtreɪ.ʃən/", pos: "noun", group: "survey", vi: "sự tập trung; lose concentration = mất tập trung",
      def: "The ability to think carefully about something you are doing and nothing else.",
      forms: { adj: "concentrated", n: "concentration", v: "concentrate (on)", adv: null },
      ex: "When I study online, I easily **lose concentration**.", exVi: "Khi học online, tôi dễ mất tập trung." },
    { w: "self-disciplined", ipa: "/ˌselfˈdɪs.ə.plɪnd/", pos: "adj", group: "survey", vi: "có tính kỷ luật tự giác",
      def: "Able to make yourself do things you know you should do even when you do not want to.",
      forms: { adj: "self-disciplined", n: "self-discipline", v: null, adv: null },
      ex: "Online learners need to be **self-disciplined**.", exVi: "Người học online cần có tính tự giác." },
    { w: "distracted", ipa: "/dɪˈstræk.tɪd/", pos: "adj", group: "survey", vi: "bị xao nhãng; easily distracted by sth/sb",
      def: "Unable to give your attention to something because you are thinking about or looking at something else.",
      forms: { adj: "distracted · distracting", n: "distraction", v: "distract", adv: "distractedly" },
      ex: "Honestly, I am easily **distracted** by social media.", exVi: "Thật lòng mà nói, tôi rất dễ bị mạng xã hội làm xao nhãng." },
    { w: "feel sleepy / fall asleep", ipa: "/ˈsliː.pi/ /əˈsliːp/", pos: "vphrase", group: "survey", vi: "buồn ngủ / ngủ thiếp đi",
      def: "To feel tired and want to sleep / to start sleeping.",
      forms: { adj: "sleepy · asleep", n: "sleep", v: "sleep · fall asleep", adv: "sleepily" },
      ex: "In long online lessons, I **feel sleepy** and sometimes **fall asleep**.", exVi: "Trong các buổi học online dài, tôi buồn ngủ và đôi khi ngủ gật." },
    { w: "remind", ipa: "/rɪˈmaɪnd/", pos: "verb", group: "survey", vi: "nhắc nhở; remind sb of/about sth, remind sb to do sth",
      def: "To make someone remember something they must do or something that will happen.",
      forms: { adj: null, n: "reminder", v: "remind", adv: null },
      ex: "He creates schedules in Zalo to **remind** his team **of** important meetings.", exVi: "Anh ấy tạo lịch trên Zalo để nhắc nhóm về các cuộc họp quan trọng." },

    // ---- Miêu tả thiết bị ----
    { w: "productivity", ipa: "/ˌprɒd.ʌkˈtɪv.ə.ti/", pos: "noun", group: "describe", vi: "năng suất",
      def: "The rate at which goods are produced or work is done, judged by the time, people and materials used.",
      forms: { adj: "productive", n: "productivity · product", v: "produce", adv: "productively" },
      ex: "If a working environment is pleasant, **productivity** increases.", exVi: "Nếu môi trường làm việc dễ chịu, năng suất sẽ tăng." },
    { w: "compact", ipa: "/kəmˈpækt/", pos: "adj", group: "describe", vi: "nhỏ gọn",
      def: "Consisting of parts that are positioned together closely or in a tidy way, using very little space.",
      forms: { adj: "compact", n: "compactness", v: null, adv: "compactly" },
      ex: "An air fryer is **compact** and easy to use.", exVi: "Nồi chiên không dầu nhỏ gọn và dễ dùng." },
    { w: "rectangular", ipa: "/rekˈtæŋ.ɡjə.lər/", pos: "adj", group: "describe", vi: "hình chữ nhật",
      def: "Shaped like a rectangle (a shape with four straight sides and four 90° angles).",
      forms: { adj: "rectangular", n: "rectangle", v: null, adv: null },
      ex: "It is usually **rectangular** in shape.", exVi: "Nó thường có hình chữ nhật." },
    { w: "lightweight", ipa: "/ˈlaɪt.weɪt/", pos: "adj", group: "describe", vi: "nhẹ",
      def: "Not weighing much; light.",
      forms: { adj: "lightweight", n: "weight", v: "weigh", adv: null },
      ex: "An e-reader is a **lightweight** device designed for reading digital books.", exVi: "Máy đọc sách là thiết bị nhẹ dành cho việc đọc sách điện tử." },
    { w: "voice command", ipa: "/vɔɪs kəˈmɑːnd/", pos: "nphrase", group: "describe", vi: "lệnh bằng giọng nói",
      def: "An instruction that you speak to a device to make it do something.",
      forms: { adj: null, n: "voice · command", v: "command", adv: null },
      ex: "You can control a smart speaker with **voice commands**.", exVi: "Bạn có thể điều khiển loa thông minh bằng giọng nói." },
    { w: "immersive", ipa: "/ɪˈmɜː.sɪv/", pos: "adj", group: "describe", vi: "nhập vai, chân thực như đang ở trong đó",
      def: "Seeming to surround you so that you feel completely involved in it.",
      forms: { adj: "immersive", n: "immersion", v: "immerse", adv: null },
      ex: "A VR headset gives you an **immersive** 3D experience.", exVi: "Kính thực tế ảo mang lại trải nghiệm 3D chân thực." },
    { w: "streaming service", ipa: "/ˈstriː.mɪŋ ˌsɜː.vɪs/", pos: "nphrase", group: "describe", vi: "dịch vụ xem/nghe trực tuyến",
      def: "An online service that lets you watch films, TV shows or listen to music without downloading them.",
      forms: { adj: null, n: "stream · streaming", v: "stream", adv: null },
      ex: "We watch films on a smart TV using online **streaming services**.", exVi: "Chúng tôi xem phim trên smart TV qua các dịch vụ trực tuyến." },
    { w: "chore", ipa: "/tʃɔːr/", pos: "noun", group: "describe", vi: "việc nhà",
      def: "A job or piece of work that you do regularly at home, such as cleaning.",
      forms: { adj: null, n: "chore", v: null, adv: null },
      ex: "A robot vacuum cleaner helps me save time on **chores**.", exVi: "Robot hút bụi giúp tôi tiết kiệm thời gian làm việc nhà." },
    { w: "thermostat", ipa: "/ˈθɜː.mə.stæt/", pos: "noun", group: "describe", vi: "bộ điều nhiệt",
      def: "A device that keeps a building, engine, etc. within a limited temperature range by automatically switching the supply of heat on and off.",
      forms: { adj: null, n: "thermostat", v: null, adv: null },
      ex: "A smart **thermostat** helps you save energy easily.", exVi: "Bộ điều nhiệt thông minh giúp bạn tiết kiệm năng lượng dễ dàng." },
    { w: "functional", ipa: "/ˈfʌŋk.ʃən.əl/", pos: "adj", group: "describe", vi: "thiết thực, chú trọng công năng",
      def: "Designed to be practical and useful rather than attractive.",
      forms: { adj: "functional", n: "function", v: "function", adv: "functionally" },
      ex: "I prefer **functional** devices to beautiful ones.", exVi: "Tôi thích thiết bị thiết thực hơn là thiết bị đẹp." },
    { w: "shrink", ipa: "/ʃrɪŋk/", pos: "verb", group: "describe", vi: "co lại, thu nhỏ (shrink – shrank – shrunk)",
      def: "To become smaller, or to make something smaller.",
      forms: { adj: "shrunken", n: null, v: "shrink – shrank – shrunk", adv: null },
      ex: "Your sweater will **shrink** if you wash it at too high a temperature.", exVi: "Áo len sẽ co lại nếu bạn giặt ở nhiệt độ quá cao." },
    { w: "power cut", ipa: "/ˈpaʊə kʌt/", pos: "nphrase", group: "describe", vi: "cúp điện (AmE: power outage)",
      def: "(BrE) A period of time when the electricity supply stops. (AmE: power outage)",
      forms: { adj: null, n: "power cut", v: null, adv: null },
      ex: "During a **power cut**, the smart fridge sends a message to my phone.", exVi: "Khi cúp điện, tủ lạnh thông minh gửi tin nhắn đến điện thoại tôi." },
    { w: "notification", ipa: "/ˌnəʊ.tɪ.fɪˈkeɪ.ʃən/", pos: "noun", group: "describe", vi: "thông báo",
      def: "A message on a phone or computer that tells you something new has happened.",
      forms: { adj: null, n: "notification", v: "notify", adv: null },
      ex: "The fridge can **send notifications** about problems.", exVi: "Tủ lạnh có thể gửi thông báo khi có sự cố." },
    { w: "heart rate", ipa: "/ˈhɑːt reɪt/", pos: "nphrase", group: "describe", vi: "nhịp tim",
      def: "The number of times your heart beats in one minute.",
      forms: { adj: null, n: "heart rate", v: null, adv: null },
      ex: "A fitness tracker can measure your **heart rate**.", exVi: "Vòng đeo sức khỏe có thể đo nhịp tim." },
    { w: "health-conscious", ipa: "/ˈhelθ ˌkɒn.ʃəs/", pos: "adj", group: "describe", vi: "quan tâm đến sức khỏe; be conscious of sth = nhận thấy",
      def: "Caring about your health and trying to do things that keep you healthy. (conscious of sth: noticing that something exists)",
      forms: { adj: "conscious", n: "consciousness", v: null, adv: "consciously" },
      ex: "A smartwatch helps people become more **health-conscious**.", exVi: "Đồng hồ thông minh giúp mọi người quan tâm hơn đến sức khỏe." },
    { w: "punctual", ipa: "/ˈpʌŋk.tʃu.əl/", pos: "adj", group: "describe", vi: "đúng giờ",
      def: "Arriving, doing something, or happening at the expected, correct time; not late.",
      forms: { adj: "punctual", n: "punctuality", v: null, adv: "punctually" },
      ex: "Checking the time on my smartwatch helps me stay **punctual**.", exVi: "Xem giờ trên đồng hồ thông minh giúp tôi luôn đúng giờ." },
    { w: "thermometer", ipa: "/θəˈmɒm.ɪ.tər/", pos: "noun", group: "describe", vi: "nhiệt kế",
      def: "A device used for measuring temperature, especially of the air or a person’s body.",
      forms: { adj: null, n: "thermometer", v: null, adv: null },
      ex: "A digital **thermometer** measures body temperature accurately.", exVi: "Nhiệt kế điện tử đo thân nhiệt chính xác." }
  ],

  sections: [
    {
      id: "devices", nav: "Thiết bị hằng ngày", type: "phrasebank",
      title: "Technological devices – Thiết bị công nghệ hằng ngày",
      intro: "**Câu hỏi thảo luận:** 1. Which device do you use every day? 2. What do you usually use it for? 3. What would you do without your smartphone for one day? 4. Do you think technology makes our lives easier?",
      categories: [
        { title: "Everyday devices", vi: "Thiết bị quen thuộc", subs: [ { phrases: [
          { en: "smartphone", vi: "điện thoại thông minh", def: "A mobile phone that can connect to the Internet and run apps.", note: "**Features:** has a touchscreen · **Uses:** call people, watch videos, send messages" },
          { en: "smart watch", vi: "đồng hồ thông minh", def: "A watch that works like a small computer and connects to your phone.", note: "**Features:** worn on your wrist · **Uses:** show the time, count your steps" },
          { en: "laptop", vi: "máy tính xách tay", def: "A small computer that you can carry with you.", note: "**Features:** has a keyboard and a screen · **Uses:** students often use it for homework" },
          { en: "headphones", vi: "tai nghe", def: "A device you wear over your ears to listen to sound.", note: "**Features:** worn on your ears · **Uses:** listen to music" },
          { en: "camera", vi: "máy ảnh", def: "A device for taking photographs or videos.", note: "**Features:** most smartphones have one · **Uses:** take photos and videos" },
          { en: "television", vi: "tivi", def: "A device with a screen for watching programmes.", note: "**Features:** usually sits in your living room · **Uses:** watch movies and TV shows" } ] } ] },
        { title: "Small & useful devices", vi: "Thiết bị nhỏ, tiện dụng", subs: [ { phrases: [
          { en: "printer", vi: "máy in", def: "A machine that prints documents or pictures on paper.", note: "**Features:** needs paper and ink · **Uses:** print documents or pictures" },
          { en: "power bank", vi: "sạc dự phòng", def: "A portable device that stores electricity to charge your phone.", note: "**Features:** small, portable · **Uses:** store electricity to power your phone" },
          { en: "USB (flash drive)", vi: "USB", def: "A very small portable device for storing files.", note: "**Features:** very small and portable · **Uses:** store files and information" },
          { en: "remote (control)", vi: "điều khiển từ xa", def: "A device for controlling a TV or machine from a distance.", note: "**Features:** has buttons, held in your hand · **Uses:** control your TV from a distance" },
          { en: "tablet", vi: "máy tính bảng", def: "A small, flat computer with a large touchscreen.", note: "**Features:** large screen · **Uses:** draw or write on it with a pen" },
          { en: "GPS", vi: "thiết bị định vị", def: "A system that uses satellites to show where you are and how to get somewhere.", note: "**Features:** shows a map · **Uses:** find directions when you are driving" } ] } ] }
      ]
    },
    {
      id: "survey", nav: "Technology survey", type: "table",
      title: "Technology survey (Khảo sát cặp)",
      intro: "Hỏi bạn cùng cặp 5 câu, rồi báo cáo kết quả bằng các mẫu câu ở phần Cấu trúc câu (My partner usually uses… • She spends about … hours a day + V-ing • Both of us prefer…).",
      cols: ["Câu hỏi", "Ý cần trả lời", "Ghi chú trên lớp"],
      rows: [
        ["**How many hours do you use your phone a day?**", "hours → purpose (studying / relaxing) → activities", "Busy → 5–6 hours; contact my customers; study English; relaxing by playing games; practise English"],
        ["**What app do you use most often?**", "app → activities → why", "Zalo: popular, **user-friendly**; with his team, create schedules to **remind** him of important meetings"],
        ["**Do you prefer studying online or offline?**", "online / offline → reason → compare", "Online: he can have fun, gain more knowledge.\nOffline: online learners can **lose concentration**, need to be **self-disciplined**; Personally / Honestly, I am easily **distracted** by others; **talk to** sb; **fall asleep / feel sleepy**"],
        ["**Do you use technology to learn English?**", "Yes / No → How? → personal example", "uses apps and videos"],
        ["**What technology / piece of technology would you like to buy?**", "what → why → how? when? (promise)", "Apple Watch – **track** his health – wants to buy it next year"]
      ]
    },
    {
      id: "groups", nav: "5 nhóm thiết bị", type: "phrasebank",
      title: "Miêu tả thiết bị theo nhóm",
      intro: "Làm việc nhóm theo 4 bước: **1. Device names** (2–3 thiết bị) → **2. Appearance & Features** (shape? adj) → **3. Functions** (What can people do with these devices?) → **4. Benefits** (How do these devices help people?).",
      categories: [
        { title: "Group 1 – Communication & Staying Connected", vi: "Giao tiếp & kết nối",
          note: "**Mẫu:** A smart speaker is a modern device that people can use to communicate with technology through **voice commands**. It can play music and answer simple questions.\n**What does it look like?** → Small, portable, modern. • **How does it work?** → Connect to the Internet / use voice commands. • **What can it do?** → Make calls / send messages / talk to people. • **Who uses it?** → Students, workers, families.",
          subs: [ { phrases: [
            { en: "smartphone", vi: "điện thoại thông minh", def: "A mobile phone that can connect to the Internet and run apps.", note: "**Features:** small, portable, with a touchscreen · **Uses:** make voice and video calls; send messages to friends; browse social media" },
            { en: "smart speaker", vi: "loa thông minh", def: "A speaker that is controlled by your voice and connects to the Internet.", note: "**Features:** voice-controlled, wireless, connects to Wi-Fi · **Uses:** play your favourite music; answer everyday questions; control other smart home devices" },
            { en: "video doorbell", vi: "chuông cửa có camera", def: "A doorbell with a small camera that lets you see and talk to visitors through your phone.", note: "**Features:** small camera, connected to the Internet · **Uses:** see and talk to visitors at your door; check who is outside anytime; keep your home safe" },
            { en: "walkie-talkie", vi: "bộ đàm", def: "A small portable radio for talking to someone over a short distance.", note: "**Features:** portable, wireless, with an antenna · **Uses:** communicate instantly with others; talk over a short distance; great for outdoor activities and security" } ] } ] },
        { title: "Group 2 – Work, Study & Productivity", vi: "Công việc, học tập & năng suất",
          note: "**Ghi chú trên lớp:** portable – easy to carry → convenient to use it anywhere → at home, at school, at the library… • Function: work / study • Relaxation: play games, read news… • Work: **Thanks to the laptop, we can…** / we can … **by using the laptop** • rectangular shape • fixed /t/ (đuôi -ed sau /s/ đọc /t/) • need electricity to use it + blank paper • **look professional**\n**What can people do with it?** → Study / work / design / read. • **Why is it useful?** → Save time / work faster / organize information. • **Who needs it?** → Students / teachers / office workers / designers.\n**Mẫu:** An e-reader is a lightweight device **designed for** reading digital books. It is useful **for** students because they can carry many books in one small device.",
          subs: [ { phrases: [
            { en: "desktop computer", vi: "máy tính để bàn", def: "A computer that stays on a desk and is not designed to be moved.", note: "**Features:** large screen, powerful, not very portable · **Uses:** work and study; create designs; play video games" },
            { en: "e-reader", vi: "máy đọc sách điện tử", def: "A small device for reading digital books.", note: "**Features:** lightweight, small screen, easy to carry · **Uses:** read digital books; read on the bus" },
            { en: "digital voice recorder", vi: "máy ghi âm kỹ thuật số", def: "A small device that records sound digitally.", note: "**Features:** small, portable, easy to use · **Uses:** record lessons and lectures; record meetings or interviews" },
            { en: "document scanner", vi: "máy scan tài liệu", def: "A machine that makes digital copies of paper documents.", note: "**Features:** scans paper documents · **Uses:** make digital copies of papers; save important documents" },
            { en: "graphics tablet", vi: "bảng vẽ điện tử", def: "A flat device with a digital pen used for drawing on a computer.", note: "**Features:** flat surface, digital pen · **Uses:** draw and design on a computer; edit digital art easily" },
            { en: "portable microphone", vi: "micro cầm tay/không dây", def: "A small microphone you can carry and use anywhere.", note: "**Features:** battery, recording, noise filter · **Uses:** make your voice louder; record your voice" } ] } ] },
        { title: "Group 3 – Entertainment & Relaxation", vi: "Giải trí & thư giãn",
          subs: [ { phrases: [
            { en: "game console", vi: "máy chơi game", def: "A piece of electronic equipment for playing games on.", note: "**Features:** comes with a controller, connected to a TV · **Uses:** play exciting video games; play with friends at home" },
            { en: "VR headset", vi: "kính thực tế ảo", def: "A device worn on the head that shows a 3D virtual world.", note: "**Features:** worn on the head, immersive 3D experience · **Uses:** play virtual reality games; explore 3D virtual worlds" },
            { en: "smart TV", vi: "tivi thông minh", def: "A television that connects to the Internet.", note: "**Features:** large screen, connected to the Internet · **Uses:** watch movies and TV shows; use online streaming services" },
            { en: "Bluetooth speaker", vi: "loa bluetooth", def: "A wireless speaker that connects to your phone by Bluetooth.", note: "**Features:** wireless, portable, easy to carry · **Uses:** listen to music anywhere; connect to your phone easily" },
            { en: "projector", vi: "máy chiếu", def: "A machine that shows a large image on a wall or screen.", note: "**Features:** creates a large image on a wall or screen · **Uses:** watch movies at home; give presentations at work or school" } ] } ] },
        { title: "Group 4 – Home & Daily Life", vi: "Nhà cửa & sinh hoạt",
          note: "**Ghi chú trên lớp (smart refrigerator):** control the temperature to keep food fresh automatically → convenient; in unexpected conditions / situations such as a **power cut** → smart, connected to our phone → **notify** us / **send notifications** about problems. Từ thêm: **touchscreen**, **shrink**.\n**Khung:** A robot vacuum cleaner is useful because ___. It helps people ___. For example, ___.\n**Mẫu:** A robot vacuum cleaner is useful because it saves time. It helps people clean the floor without doing it themselves. For example, it can clean the floor while people are working.",
          subs: [ { phrases: [
            { en: "robot vacuum cleaner", vi: "robot hút bụi", def: "A small machine that moves by itself and cleans the floor.", note: "**Features:** automatic, small, smart sensors · **Uses:** clean the floor automatically; save time on chores" },
            { en: "smart refrigerator", vi: "tủ lạnh thông minh", def: "A fridge with a digital screen and smart functions.", note: "**Features:** digital screen, smart functions · **Uses:** store food and drinks; monitor food and temperature" },
            { en: "air fryer", vi: "nồi chiên không dầu", def: "A kitchen machine that cooks food with hot air and little oil.", note: "**Features:** compact, easy to use · **Uses:** cook food with little or no oil; make quick and healthy meals" },
            { en: "smart thermostat", vi: "bộ điều nhiệt thông minh", def: "A digital device that controls the temperature in a home automatically.", note: "**Features:** digital, automatic, smart · **Uses:** control the temperature at home; save energy easily" },
            { en: "smart washing machine", vi: "máy giặt thông minh", def: "A washing machine with automatic programs that you can control from your phone.", note: "**Features:** automatic programs, smart controls · **Uses:** wash clothes efficiently; control washing from anywhere" } ] } ] },
        { title: "Group 5 – Health & Personal Care", vi: "Sức khỏe & chăm sóc cá nhân",
          note: "**Ghi chú trên lớp:** **check the time** → **punctual** • **heart rate** → **health-conscious**.",
          subs: [ { phrases: [
            { en: "fitness tracker", vi: "vòng đeo theo dõi sức khỏe", def: "A small device worn on the wrist that records exercise and health data.", note: "**Features:** small, worn on the wrist · **Uses:** count everyday steps; track exercise and heart rate" },
            { en: "smartwatch", vi: "đồng hồ thông minh", def: "A watch that works like a small computer and connects to your phone.", note: "**Features:** touchscreen, connected to smartphone · **Uses:** check messages and notifications; track health and fitness; check the time" },
            { en: "digital thermometer", vi: "nhiệt kế điện tử", def: "A device with a digital display for measuring body temperature.", note: "**Features:** digital display, easy to use · **Uses:** measure body temperature accurately; monitor health when sick" },
            { en: "electric toothbrush", vi: "bàn chải điện", def: "A battery-powered toothbrush with a moving head.", note: "**Features:** battery-powered, vibrating head · **Uses:** clean teeth thoroughly; keep gums healthy" },
            { en: "smart scale", vi: "cân thông minh", def: "A digital scale that connects to an app to record your weight.", note: "**Features:** digital, connects to an app · **Uses:** measure body weight; track health and fitness progress" } ] } ] }
      ]
    },
    {
      id: "frame6", nav: "Khung 6 ý", type: "frames",
      title: "Khung miêu tả một thiết bị công nghệ (6 ý)",
      intro: "Appearance → Features → Functions → Users → Benefits → Disadvantages. Mỗi ý có mẫu câu, ví dụ và từ hữu ích. Bài mẫu Robot vacuum cleaner ở phần Bài nói mẫu.",
      sets: [ { label: "6 ý", groups: [
        { title: "Appearance – What does it look like?", wordsTitle: "Useful adjectives", items: [
          { en: "**It is a + adjective + device.**", ex: "It is a small, portable device.", exVi: "Nó là một thiết bị nhỏ, dễ mang theo." },
          { en: "**It is usually shaped like…**", ex: "It is usually shaped like a rectangle.", exVi: "Nó thường có hình chữ nhật." },
          { en: "**It is made of…**", ex: "It is made of plastic and metal.", exVi: "Nó được làm bằng nhựa và kim loại." },
          { en: "**It comes in different sizes / colours.**", ex: "It comes in / has different sizes and colours.", exVi: "Nó có nhiều kích cỡ và màu sắc." },
          { en: "**It is designed to be…**", ex: "It is designed to be lightweight and easy to carry.", exVi: "Nó được thiết kế nhẹ và dễ mang theo." } ],
          words: [
            { en: "portable", vi: "dễ mang theo", def: "Light and small enough to be easily carried or moved." },
            { en: "lightweight", vi: "nhẹ", def: "Not weighing much." },
            { en: "compact", vi: "nhỏ gọn", def: "Using very little space; small and neat." },
            { en: "rectangular", vi: "hình chữ nhật", def: "Shaped like a rectangle." },
            { en: "touchscreen", vi: "màn hình cảm ứng", def: "A screen that you touch with your finger to give instructions to a device." } ] },
        { title: "Features – What special features does it have?", wordsTitle: "Useful vocabulary", items: [
          { en: "**It comes with…**", ex: "It comes with a built-in camera.", exVi: "Nó đi kèm camera tích hợp." },
          { en: "**It is equipped with…**", ex: "It is equipped with a touchscreen.", exVi: "Nó được trang bị màn hình cảm ứng." },
          { en: "**One of its main features is…**", ex: "One of its main features is voice control.", exVi: "Một trong những tính năng chính là điều khiển bằng giọng nói." },
          { en: "**It has a built-in…**", ex: "It has a built-in microphone.", exVi: "Nó có micro tích hợp." },
          { en: "**It allows users to…**", ex: "It allows users to control the device remotely.", exVi: "Nó cho phép người dùng điều khiển thiết bị từ xa." } ],
          words: [
            { en: "built-in camera", vi: "camera tích hợp", def: "A camera that is part of the device, not added separately." },
            { en: "voice control", vi: "điều khiển bằng giọng nói", def: "The ability to operate a device by speaking to it." },
            { en: "sensor", vi: "cảm biến", def: "A device that notices changes such as movement, heat or light." },
            { en: "rechargeable battery", vi: "pin sạc", def: "A battery that can be charged again and used many times." } ] },
        { title: "Functions – What can people do with it?", wordsTitle: "Useful verbs", items: [
          { en: "**It is mainly used for + V-ing.**", ex: "It is mainly used for tracking daily activities.", exVi: "Nó chủ yếu dùng để theo dõi hoạt động hằng ngày." },
          { en: "**People use it to + V.**", ex: "People use it to listen to music.", exVi: "Mọi người dùng nó để nghe nhạc." },
          { en: "**It allows people to + V.**", ex: "It allows people to communicate more easily.", exVi: "Nó giúp mọi người giao tiếp dễ dàng hơn." },
          { en: "**It can be used to + V.**", ex: "It can be used to clean the floor automatically.", exVi: "Nó có thể dùng để lau sàn tự động." },
          { en: "**It helps users + V.**", ex: "It helps users find directions.", exVi: "Nó giúp người dùng tìm đường." } ],
          words: [
            { en: "track", vi: "theo dõi", def: "To record the progress or movement of something over time." },
            { en: "monitor", vi: "giám sát, theo dõi", def: "To watch or check something carefully over a period of time." },
            { en: "connect", vi: "kết nối", def: "To join two devices or a device and a network together." },
            { en: "control", vi: "điều khiển", def: "To make a machine work in the way you want." },
            { en: "record", vi: "ghi âm, ghi lại", def: "To store sounds or pictures so they can be heard or seen later." },
            { en: "scan", vi: "quét", def: "To make a digital copy of a document or picture using a machine." },
            { en: "navigate", vi: "tìm đường, định hướng", def: "To find the way to get to a place." } ] },
        { title: "Users – Who usually uses it?", wordsTitle: "Useful vocabulary", items: [
          { en: "**It is commonly used by…**", ex: "It is commonly used by students.", exVi: "Nó thường được học sinh, sinh viên sử dụng." },
          { en: "**It is particularly popular among…**", ex: "It is particularly popular among young people.", exVi: "Nó đặc biệt phổ biến với giới trẻ." },
          { en: "**It is suitable for people who…**", ex: "It is suitable for people who travel frequently.", exVi: "Nó phù hợp với người hay đi du lịch." },
          { en: "**It is designed for…**", ex: "It is designed for people who enjoy gaming.", exVi: "Nó được thiết kế cho người thích chơi game." },
          { en: "**People from different age groups use it to…**", ex: "People from different age groups use it to communicate.", exVi: "Mọi lứa tuổi đều dùng nó để giao tiếp." } ],
          words: [
            { en: "students", vi: "học sinh, sinh viên", def: "People who are studying at a school, college or university." },
            { en: "office workers", vi: "nhân viên văn phòng", def: "People who work in an office." },
            { en: "fitness enthusiasts", vi: "người yêu thích tập luyện", def: "People who are very interested in exercise and keeping fit." },
            { en: "frequent travellers", vi: "người thường xuyên đi du lịch", def: "People who travel often." },
            { en: "elderly people", vi: "người cao tuổi", def: "Old people." } ] },
        { title: "Benefits – How does it help people?", wordsTitle: "Useful adjectives", items: [
          { en: "**It helps people save time by + V-ing.**", ex: "It helps people save time by cleaning the floor automatically.", exVi: "Nó giúp tiết kiệm thời gian nhờ tự động lau sàn." },
          { en: "**It makes it easier for people to + V.**", ex: "It makes it easier for people to find directions.", exVi: "Nó giúp mọi người tìm đường dễ hơn." },
          { en: "**It allows people to… without having to…**", ex: "It allows people to read books without having to carry physical copies.", exVi: "Nó cho phép đọc sách mà không phải mang sách giấy." },
          { en: "**One of the biggest advantages is that…**", ex: "One of the biggest advantages is that it is very convenient.", exVi: "Một trong những ưu điểm lớn nhất là nó rất tiện lợi." },
          { en: "**Thanks to this device, people can…**", ex: "Thanks to this device, people can communicate more quickly.", exVi: "Nhờ thiết bị này, mọi người giao tiếp nhanh hơn." } ],
          words: [
            { en: "convenient", vi: "tiện lợi", def: "Easy to use and fitting well with your needs or plans." },
            { en: "time-saving", vi: "tiết kiệm thời gian", def: "Helping you do something more quickly." },
            { en: "efficient", vi: "hiệu quả", def: "Working well without wasting time, money or energy." },
            { en: "user-friendly", vi: "dễ sử dụng", def: "Simple for people to use." },
            { en: "practical", vi: "thiết thực", def: "Useful and suitable for real situations." } ] },
        { title: "Disadvantages – What problems can it cause?", wordsTitle: "Useful vocabulary", items: [
          { en: "**One major drawback is that…**", ex: "One major drawback is that it can be expensive.", exVi: "Một nhược điểm lớn là nó có thể đắt." },
          { en: "**It can be quite + adjective.**", ex: "It can be quite difficult to use.", exVi: "Nó có thể khá khó dùng." },
          { en: "**Users may have problems with…**", ex: "Users may have problems with battery life.", exVi: "Người dùng có thể gặp vấn đề về thời lượng pin." },
          { en: "**It requires…**", ex: "It requires regular charging.", exVi: "Nó cần sạc thường xuyên." },
          { en: "**Spending too much time using it can…**", ex: "Spending too much time using it can affect people’s health.", exVi: "Dùng quá nhiều có thể ảnh hưởng sức khỏe." } ],
          words: [
            { en: "expensive", vi: "đắt đỏ", def: "Costing a lot of money." },
            { en: "inconvenient", vi: "bất tiện", def: "Causing problems or difficulties; not easy to use." },
            { en: "complicated", vi: "phức tạp", def: "Having many parts, so it is difficult to understand or use." },
            { en: "addictive", vi: "gây nghiện", def: "Making you want to do or use something more and more, so it is hard to stop." },
            { en: "short battery life", vi: "thời lượng pin ngắn", def: "When a battery only works for a short time before it needs charging." },
            { en: "require regular charging", vi: "cần sạc thường xuyên", def: "To need to be charged often." } ] }
      ] } ]
    }
  ],

  structuresIntro: "Báo cáo kết quả khảo sát (1–3) và mẫu câu miêu tả thiết bị trên lớp (4–7).",
  structures: [
    { en: "My partner usually uses his/her phone for …", usage: "Bạn cùng cặp của tôi thường dùng điện thoại để…", ex: "My partner usually uses his phone for contacting customers and studying English.", exVi: "Bạn cùng cặp của tôi thường dùng điện thoại để liên lạc với khách hàng và học tiếng Anh." },
    { en: "She spends about … hours a day + V-ing", usage: "Cô ấy dành khoảng … giờ mỗi ngày để…", ex: "She spends about five hours a day using her phone.", exVi: "Cô ấy dành khoảng năm tiếng mỗi ngày để dùng điện thoại." },
    { en: "Both of us prefer … (+ V-ing)", usage: "Cả hai chúng tôi đều thích…", ex: "Both of us prefer studying offline.", exVi: "Cả hai chúng tôi đều thích học trực tiếp hơn." },
    { en: "**Thanks to the [device], we can…** / we can … **by using the [device]**", usage: "Nhờ có…, chúng ta có thể… / … bằng cách dùng…", ex: "Thanks to the laptop, we can work from anywhere.", exVi: "Nhờ có laptop, chúng ta có thể làm việc ở bất cứ đâu." },
    { en: "A/An [device] is a [adj] device **designed for** + V-ing. It is useful **for** + people…", usage: "… là thiết bị … được thiết kế để… Nó hữu ích cho…", ex: "An e-reader is a lightweight device designed for reading digital books. It is useful for students.", exVi: "Máy đọc sách là thiết bị nhẹ được thiết kế để đọc sách điện tử. Nó hữu ích cho học sinh." },
    { en: "A/An [device] is a modern device that people can use to + V…", usage: "… là thiết bị hiện đại mà mọi người có thể dùng để…", ex: "A smart speaker is a modern device that people can use to communicate with technology through voice commands.", exVi: "Loa thông minh là thiết bị hiện đại mà mọi người có thể dùng để giao tiếp với công nghệ qua lệnh giọng nói." },
    { en: "A/An [device] is useful because ___. It helps people ___. For example, ___.", usage: "Khung 3 câu: lợi ích → giúp được gì → ví dụ.", ex: "A robot vacuum cleaner is useful because it saves time. It helps people clean the floor without doing it themselves.", exVi: "Robot hút bụi hữu ích vì tiết kiệm thời gian. Nó giúp mọi người lau sàn mà không phải tự làm." }
  ],

  samples: [
    {
      title: "Bài mẫu: Robot vacuum cleaner (6 ý)",
      en: "[Appearance] A robot vacuum cleaner is a small, **compact** device. It is usually shaped like a circle and is made of plastic. [Features] It **comes with** smart **sensors** and a **rechargeable battery**, and it **allows users to** control it **remotely** with an app. [Functions] It **is mainly used for** cleaning the floor **automatically**. [Users] It **is particularly popular among** busy office workers and families with young children. [Benefits] It **helps people save time by** cleaning the house while they are at work, so they don’t have to do the **chores** themselves. One of the biggest advantages is that it is very **convenient** and **user-friendly**. [Disadvantages] However, **one major drawback is that** it can be quite **expensive**, and it **requires regular charging**. Overall, I think it is a **practical** device for modern homes.",
      vi: "Robot hút bụi là một thiết bị nhỏ gọn. Nó thường có hình tròn và làm bằng nhựa. Nó có cảm biến thông minh và pin sạc, cho phép người dùng điều khiển từ xa qua app. Nó chủ yếu dùng để lau sàn tự động. Nó đặc biệt phổ biến với nhân viên văn phòng bận rộn và gia đình có con nhỏ. Nó giúp mọi người tiết kiệm thời gian bằng cách dọn nhà trong lúc họ đi làm, nên không phải tự làm việc nhà. Một ưu điểm lớn nhất là nó rất tiện lợi và dễ dùng. Tuy nhiên, nhược điểm lớn là nó khá đắt và cần sạc thường xuyên. Nhìn chung, tôi nghĩ đây là thiết bị thiết thực cho nhà hiện đại."
    }
  ],

  practice: [
    { label: "Appearance", text: "It is a ___ device. It is usually shaped like ___ and is made of ___." },
    { label: "Features", text: "It comes with ___. It is equipped with ___." },
    { label: "Functions", text: "It is mainly used for ___. People use it to ___." },
    { label: "Users", text: "It is particularly popular among ___." },
    { label: "Benefits", text: "It helps people save time by ___. Thanks to this device, people can ___." },
    { label: "Disadvantages", text: "One major drawback is that ___. It requires ___." }
  ],

  notes: [
    "“**Portable**” = dễ mang theo; “**lightweight**” = nhẹ; “**compact**” = nhỏ gọn, ít tốn chỗ. Một thiết bị có thể vừa compact vừa lightweight.",
    "“**Remote**” (adj) = xa xôi: a remote area (vùng sâu vùng xa); “a **remote** (control)” (n) = cái điều khiển từ xa; “control sth **remotely**” = điều khiển từ xa.",
    "“**User-friendly**” luôn có gạch nối khi đứng trước danh từ: a user-friendly app.",
    "“**Distracted**” (bị xao nhãng – cảm giác của người) ≠ “**distracting**” (gây xao nhãng): I am easily distracted by social media. / Social media is distracting.",
    "“**Lose concentration**” = mất tập trung; “**concentrate on** sth” = tập trung vào.",
    "“**Remind** sb **of/about** sth” hoặc “remind sb **to** do sth”. Ghi chú “create schedules to remind important meetings” nên nói “create schedules to remind **him of** important meetings”.",
    "“**Talk to** sb” (ghi chú trên lớp nhấn mạnh giới từ “to”); “**feel sleepy**” = buồn ngủ, “**fall asleep**” = ngủ thiếp đi.",
    "Báo cáo khảo sát: “She **spends** about 5 hours a day **using** her phone” (spend + thời gian + V-ing); “**Both of us prefer** studying offline” (prefer + V-ing).",
    "“A **piece of technology**” (handout viết “pice”): technology không đếm được, muốn đếm dùng “a piece of”.",
    "“…**by using** the laptop” (handout viết “suing”): by + V-ing = bằng cách.",
    "“**Designed for** + N / V-ing” và “useful **for** + người”: An e-reader is designed for reading… It is useful for students.",
    "“**Shrink** – shrank – shrunk”; “**thermostat**” (bộ điều nhiệt) ≠ “**thermometer**” (nhiệt kế).",
    "“Be **conscious of** sth” = nhận thấy; “**health-conscious**” = quan tâm đến sức khỏe; “**punctual**” = đúng giờ.",
    "“Scale my voice” (ghi chú micro) tự nhiên hơn là “**amplify** my voice” / “make my voice louder”.",
    "Cấu trúc với giới từ: mainly used **for** + V-ing • equipped **with** • popular **among** • save time **by** + V-ing • make it easier **for** sb **to** + V.",
    "“**Power cut**” (BrE) = “power outage” (AmE)."
  ]
});
