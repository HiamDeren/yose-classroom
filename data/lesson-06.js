/* Buổi 6 — Shopping (Part 3): Returns & after-sales, online vs in person, Have you ever…?, Giving directions
   **chữ đậm** = từ/cụm được nhấn mạnh trên lớp */
YOSE.addLesson({
  id: 6,
  title: "Shopping (Part 3) & Giving Directions",
  titleVi: "Đổi trả, chọn mua online hay trực tiếp & chỉ đường",
  topic: "Mua sắm",
  summary:
    "Đổi trả và hậu mãi, luyện nói chọn mua online hay mua trực tiếp theo 6 bước với 8 tình huống, kể trải nghiệm với “Have you ever…?”, và phần đầu của chủ đề chỉ đường. Cuối trang có bài tập tự chấm. Chữ in đậm là từ được nhấn mạnh trên lớp.",

  warmup: {
    q: "Online or in person? (Before – During)",
    a: "**shop in stores = in-person shopping = brick-and-mortar stores** → online: quick → **time-saving**, at night, at home",
    vi: "Ôn Lesson 5. Khi mua trực tiếp, ta check the quality of products và try sth on để chắc chắn món đồ suit (kiểu dáng, màu sắc) và fit (kích cỡ) với mình."
  },

  groups: [
    { id: "review", name: "Ôn tập: mua trực tiếp & online" },
    { id: "returns", name: "Đổi trả & hậu mãi" },
    { id: "ever", name: "Listening & Have you ever…?" },
    { id: "directions", name: "Chỉ đường: đường sá & địa điểm" }
  ],

  vocab: [
    // ---- Ôn tập ----
    { w: "in-person shopping", ipa: "/ˌɪn ˈpɜː.sən ˈʃɒp.ɪŋ/", pos: "nphrase", group: "review", vi: "mua sắm trực tiếp tại cửa hàng (= shop in stores)",
      def: "Going to a real shop to look at and buy things yourself (= shopping in stores), instead of buying online.",
      forms: { adj: "personal", n: "person", v: "personalize", adv: "personally · in person" },
      ex: "I prefer **in-person shopping** because I can try things on first.", exVi: "Tôi thích mua trực tiếp vì có thể mặc thử trước." },
    { w: "brick-and-mortar", ipa: "/ˌbrɪk ən ˈmɔː.tər/", pos: "adj", group: "review", vi: "(chỉ đứng trước danh từ) truyền thống, có mặt bằng thật; còn viết bricks-and-mortar",
      def: "(only before noun) Used to describe a traditional business that operates in a building, when compared to one that operates over the internet.",
      forms: { adj: "brick-and-mortar", n: "brick · mortar", v: null, adv: null },
      ex: "Online retailers try to lure customers away from their **brick-and-mortar** competitors.", exVi: "Các nhà bán lẻ online cố kéo khách khỏi các đối thủ có cửa hàng truyền thống." },
    { w: "personalized", ipa: "/ˈpɜː.sən.əl.aɪzd/", pos: "adj", group: "review", vi: "cá nhân hóa; được làm riêng cho một người (BrE: personalised)",
      def: "(1) Marked in some way to show that it belongs to a particular person; (2) designed to meet the needs of one particular person.",
      forms: { adj: "personalized · personal", n: "personalization", v: "personalize", adv: "personally" },
      ex: "I love the **personalized customer service** in this small shop.", exVi: "Tôi thích dịch vụ khách hàng chu đáo, riêng cho từng người ở cửa hàng nhỏ này." },
    { w: "availability", ipa: "/əˌveɪ.ləˈbɪl.ə.ti/", pos: "noun", group: "review", vi: "sự có sẵn (để mua, dùng); around-the-clock availability = có sẵn 24/7",
      def: "The fact that something is possible to get, buy or find.",
      forms: { adj: "available", n: "availability", v: null, adv: null },
      ex: "This offer is subject to **availability**.", exVi: "Ưu đãi này áp dụng tùy theo số lượng hàng còn." },
    { w: "delivery", ipa: "/dɪˈlɪv.ər.i/", pos: "noun", group: "review", vi: "sự giao hàng",
      def: "The act of taking goods, letters, etc. to the people they have been sent to.",
      forms: { adj: "deliverable", n: "delivery", v: "deliver", adv: null },
      ex: "We offer free **delivery** on orders over $200.", exVi: "Chúng tôi miễn phí giao hàng cho đơn trên 200 đô." },
    { w: "check the quality of products", ipa: "/tʃek ðə ˈkwɒl.ə.ti əv ˈprɒd.ʌkts/", pos: "vphrase", group: "review", vi: "kiểm tra chất lượng sản phẩm",
      def: "To look at products carefully to see if they are good and have no problems.",
      forms: { adj: "qualitative", n: "quality · product", v: "check", adv: null },
      ex: "In a store, I can **check the quality of products** before I pay.", exVi: "Ở cửa hàng, tôi có thể kiểm tra chất lượng trước khi trả tiền." },

    // ---- Đổi trả & hậu mãi ----
    { w: "after-sales service", ipa: "/ˌɑːf.tə ˈseɪlz ˌsɜː.vɪs/", pos: "nphrase", group: "returns", vi: "dịch vụ hậu mãi (đổi trả, bảo hành, sửa chữa)",
      def: "Help that a company gives customers after they have bought a product, such as returns, exchanges and repairs.",
      forms: { adj: null, n: "after-sales service", v: null, adv: null },
      ex: "This brand has excellent **after-sales service**.", exVi: "Thương hiệu này có dịch vụ hậu mãi rất tốt." },
    { w: "return policy", ipa: "/rɪˈtɜːn ˌpɒl.ə.si/", pos: "nphrase", group: "returns", vi: "chính sách đổi trả",
      def: "The rules a shop has about taking back products that customers do not want.",
      forms: { adj: "returnable", n: "return · policy", v: "return", adv: null },
      ex: "Always read the **return policy** before you buy online.", exVi: "Luôn đọc chính sách đổi trả trước khi mua online." },
    { w: "description", ipa: "/dɪˈskrɪp.ʃən/", pos: "noun", group: "returns", vi: "sự mô tả; not match the description = không giống mô tả",
      def: "A piece of writing or speech that says what something is like.",
      forms: { adj: "descriptive", n: "description", v: "describe", adv: "descriptively" },
      ex: "The dress did not match the **description** of the product.", exVi: "Chiếc váy không giống mô tả sản phẩm." },
    { w: "exchange sth for sth", ipa: "/ɪksˈtʃeɪndʒ/", pos: "vphrase", group: "returns", vi: "đổi cái này lấy cái khác",
      def: "To give something back to a shop and get a different thing in its place.",
      forms: { adj: "exchangeable", n: "exchange", v: "exchange", adv: null },
      ex: "The shop assistant **exchanged** it **for** a smaller size in two minutes.", exVi: "Nhân viên đổi cho tôi size nhỏ hơn chỉ trong hai phút." },
    { w: "refund", ipa: "(n) /ˈriː.fʌnd/ (v) /rɪˈfʌnd/", pos: "noun", group: "returns", vi: "tiền hoàn lại; hoàn tiền",
      def: "(n) A sum of money that is paid back to you, especially because you returned goods; (v) to give someone their money back.",
      forms: { adj: "refundable", n: "refund", v: "refund", adv: null },
      ex: "I’m still waiting for my **refund**.", exVi: "Tôi vẫn đang chờ được hoàn tiền." },
    { w: "return label", ipa: "/rɪˈtɜːn ˌleɪ.bəl/", pos: "nphrase", group: "returns", vi: "nhãn gửi trả hàng",
      def: "A printed label with the address you stick on a parcel to send a product back to the seller.",
      forms: { adj: null, n: "return · label", v: "label", adv: null },
      ex: "I had to print a **return label** and find a box to **pack** it.", exVi: "Tôi phải in nhãn gửi trả và tìm hộp để đóng gói." },
    { w: "pack", ipa: "/pæk/", pos: "verb", group: "returns", vi: "đóng gói, xếp đồ vào hộp/vali",
      def: "To put things into a box, bag or suitcase so that they can be sent or carried.",
      forms: { adj: "packed", n: "pack · packaging · package", v: "pack", adv: null },
      ex: "I found a box to **pack** the dress and took it to the post office.", exVi: "Tôi tìm một cái hộp để đóng gói chiếc váy rồi mang ra bưu điện." },
    { w: "shipping fee", ipa: "/ˈʃɪp.ɪŋ fiː/", pos: "nphrase", group: "returns", vi: "phí vận chuyển (= cost of delivery)",
      def: "The money you pay for a product to be sent to you (= delivery cost).",
      forms: { adj: null, n: "shipping · shipment · fee", v: "ship", adv: null },
      ex: "I also had to pay for the **shipping fee**!", exVi: "Tôi còn phải trả cả phí vận chuyển!" },
    { w: "face-to-face", ipa: "/ˌfeɪs tə ˈfeɪs/", pos: "adj", group: "returns", vi: "trực tiếp, mặt đối mặt",
      def: "Involving people who are together in the same place, talking directly to each other.",
      forms: { adj: "face-to-face", n: null, v: null, adv: "face to face" },
      ex: "At a local shop, you just bring the receipt and talk to the staff **face-to-face**.", exVi: "Ở cửa hàng gần nhà, bạn chỉ cần mang hóa đơn và nói chuyện trực tiếp với nhân viên." },
    { w: "get your money back", ipa: "/ɡet jɔː ˈmʌn.i bæk/", pos: "vphrase", group: "returns", vi: "lấy lại tiền",
      def: "To receive the money you paid for something again, usually after returning it.",
      forms: { adj: null, n: "money", v: "get back", adv: null },
      ex: "You **get your money back** right away.", exVi: "Bạn được hoàn tiền ngay lập tức." },
    { w: "scam", ipa: "/skæm/", pos: "noun", group: "returns", vi: "(n) trò lừa đảo; (v) lừa đảo; be scammed = bị lừa",
      def: "(informal) A clever and dishonest plan to get money from people by tricking them.",
      forms: { adj: null, n: "scam · scammer", v: "scam", adv: null },
      ex: "Never share your bank details with unknown sellers, or you may **be scammed**.", exVi: "Đừng chia sẻ thông tin ngân hàng với người bán lạ, nếu không bạn có thể bị lừa." },
    { w: "reveal / revealing", ipa: "/rɪˈviːl/ /rɪˈviː.lɪŋ/", pos: "verb", group: "returns", vi: "để lộ, tiết lộ / (quần áo) hở hang",
      def: "(reveal) To make something known that was secret; (revealing clothes) clothes that show parts of the body that are usually covered.",
      forms: { adj: "revealing", n: "revelation", v: "reveal", adv: "revealingly" },
      ex: "Your personal information can be **revealed** when you shop on fake websites.", exVi: "Thông tin cá nhân có thể bị lộ khi bạn mua trên trang web giả." },
    { w: "definitely", ipa: "/ˈdef.ɪ.nət.li/", pos: "adv", group: "returns", vi: "chắc chắn, rõ ràng",
      def: "A way of emphasizing that something is true and that there is no doubt about it.",
      forms: { adj: "definite", n: null, v: null, adv: "definitely" },
      ex: "In-store shopping is **definitely** better for returns!", exVi: "Mua tại cửa hàng chắc chắn tốt hơn khi cần đổi trả!" },

    // ---- Listening & Have you ever ----
    { w: "desert", ipa: "/ˈdez.ət/", pos: "noun", group: "ever", vi: "sa mạc (≠ dessert /dɪˈzɜːt/ món tráng miệng)",
      def: "A large area of land that has very little water and very few plants growing on it.",
      forms: { adj: null, n: "desert", v: "desert /dɪˈzɜːt/ (bỏ rơi)", adv: null },
      ex: "They travelled many miles across the burning **desert** sands.", exVi: "Họ đi nhiều dặm qua những đồi cát sa mạc nóng bỏng." },

    // ---- Chỉ đường ----
    { w: "intersection", ipa: "/ˈɪn.təˌsek.ʃən/", pos: "noun", group: "directions", vi: "giao lộ, ngã tư (AmE hoặc BrE trang trọng)",
      def: "A place where two or more roads, lines, etc. meet or cross each other.",
      forms: { adj: null, n: "intersection", v: "intersect", adv: null },
      ex: "Turn left at the second **intersection**.", exVi: "Rẽ trái ở giao lộ thứ hai." },
    { w: "crossroads", ipa: "/ˈkrɒs.rəʊdz/", pos: "noun", group: "directions", vi: "ngã tư (số ít vẫn viết crossroads)",
      def: "A place where two roads meet and cross each other.",
      forms: { adj: null, n: "crossroads", v: "cross", adv: null },
      ex: "Go straight on at the **crossroads**.", exVi: "Đi thẳng qua ngã tư." },
    { w: "T-junction", ipa: "/ˈtiː ˌdʒʌŋk.ʃən/", pos: "noun", group: "directions", vi: "ngã ba hình chữ T (AmE: T-intersection)",
      def: "(BrE) A place where one road joins another but does not cross it, so that the roads form the shape of the letter T. (AmE: T-intersection)",
      forms: { adj: null, n: "T-junction", v: null, adv: null },
      ex: "Turn right at the **T-junction**.", exVi: "Rẽ phải ở ngã ba chữ T." },
    { w: "junction", ipa: "/ˈdʒʌŋk.ʃən/", pos: "noun", group: "directions", vi: "chỗ giao nhau của đường",
      def: "A place where two or more roads or railway lines meet.",
      forms: { adj: null, n: "junction", v: null, adv: null },
      ex: "Take a right at the **junction**.", exVi: "Rẽ phải ở chỗ giao nhau." },
    { w: "roundabout", ipa: "/ˈraʊnd.ə.baʊt/", pos: "noun", group: "directions", vi: "vòng xoay, bùng binh (AmE: traffic circle)",
      def: "(BrE) A place where several roads meet and all traffic must go round a central circle in the same direction. (AmE: traffic circle)",
      forms: { adj: null, n: "roundabout", v: null, adv: null },
      ex: "Take the third **exit** at the **roundabout**.", exVi: "Đi theo lối ra thứ ba ở vòng xoay." },
    { w: "exit", ipa: "/ˈek.sɪt/", pos: "noun", group: "directions", vi: "lối ra (khỏi vòng xoay, đường cao tốc)",
      def: "A road that leads off a roundabout or a main road.",
      forms: { adj: null, n: "exit", v: "exit", adv: null },
      ex: "Take the second **exit** and the bank is on your left.", exVi: "Đi lối ra thứ hai, ngân hàng ở bên trái bạn." },
    { w: "dead end", ipa: "/ˌded ˈend/", pos: "nphrase", group: "directions", vi: "đường cụt",
      def: "A road or passage that is closed at one end, so you cannot go any further.",
      forms: { adj: null, n: "dead end", v: null, adv: null },
      ex: "Don’t turn left – the car park is at a **dead end**.", exVi: "Đừng rẽ trái – bãi đỗ xe nằm ở đường cụt." },
    { w: "bend / sharp curve", ipa: "/bend/ /ʃɑːp kɜːv/", pos: "noun", group: "directions", vi: "khúc cua / khúc cua gắt",
      def: "A place where a road turns; a sharp curve is a sudden, strong turn.",
      forms: { adj: "curved · bent", n: "bend · curve", v: "bend · curve", adv: "sharply" },
      ex: "Drive slowly – there is a **sharp curve** after the park.", exVi: "Lái chậm thôi – có khúc cua gắt sau công viên." },
    { w: "traffic lights", ipa: "/ˈtræf.ɪk laɪts/", pos: "nphrase", group: "directions", vi: "đèn giao thông",
      def: "A set of red, yellow and green lights that control the traffic at a road junction.",
      forms: { adj: null, n: "traffic lights", v: null, adv: null },
      ex: "Go straight ahead at the **traffic lights**.", exVi: "Đi thẳng ở chỗ đèn giao thông." },
    { w: "car park", ipa: "/ˈkɑː pɑːk/", pos: "nphrase", group: "directions", vi: "bãi đỗ xe (AmE: parking lot)",
      def: "(BrE) An area or building where people can leave their cars. (AmE: parking lot)",
      forms: { adj: null, n: "car park", v: "park", adv: null },
      ex: "The **car park** is behind the library.", exVi: "Bãi đỗ xe ở phía sau thư viện." },
    { w: "opposite", ipa: "/ˈɒp.ə.zɪt/", pos: "adj", group: "directions", vi: "đối diện (không dùng “of”)",
      def: "On the other side of a place, facing it, often across a street.",
      note: "Dùng như giới từ: opposite the bank (không có “of”).",
      forms: { adj: "opposite", n: "opposite · opposition", v: "oppose", adv: null },
      ex: "The petrol station is **opposite** the shopping mall.", exVi: "Trạm xăng ở đối diện trung tâm thương mại." },
    { w: "sense of direction", ipa: "/sens əv daɪˈrek.ʃən/", pos: "nphrase", group: "directions", vi: "khả năng định hướng; have a poor sense of direction = hay lạc đường",
      def: "The natural ability to know which way to go and to find your way to a place.",
      forms: { adj: "directional", n: "direction · directions", v: "direct", adv: "directly" },
      ex: "I **have a poor sense of direction**, so I often get lost.", exVi: "Tôi định hướng kém nên hay bị lạc." },
    { w: "yard", ipa: "/jɑːd/", pos: "noun", group: "directions", vi: "thước Anh (≈ 0,91 m)",
      def: "A unit for measuring length, equal to 3 feet or about 0.91 metres.",
      forms: { adj: null, n: "yard", v: null, adv: null },
      ex: "It’s not far, maybe about 200 **yards**.", exVi: "Không xa đâu, khoảng 200 thước." }
  ],

  sections: [
    {
      id: "returns", nav: "Vấn đề đổi trả", type: "phrasebank",
      title: "Đổi trả: vấn đề thường gặp",
      intro: "So sánh khi phải đổi/trả hàng mua online và mua tại cửa hàng.",
      categories: [
        { title: "Khi mua online", vi: "Online", subs: [ { phrases: [
          { en: "not match the description of the product", vi: "không giống mô tả sản phẩm", def: "To be different from what the seller said or showed about the product." },
          { en: "be delivered to the wrong address", vi: "bị giao nhầm địa chỉ", def: "To be taken to a different place from the one you gave." },
          { en: "be broken or damaged", vi: "bị vỡ hoặc hư hỏng", def: "To be in bad condition when it arrives, so it cannot be used properly." },
          { en: "cost of delivery / shipping fee", vi: "phí giao hàng / phí ship", def: "The money you pay to have a product sent to you." },
          { en: "a complex return policy", vi: "chính sách đổi trả phức tạp", def: "Rules for sending products back that are difficult to follow." },
          { en: "take many steps / be time-consuming", vi: "nhiều bước / tốn thời gian", def: "To need a lot of actions and a lot of time to finish." },
          { en: "personal information can be revealed", vi: "thông tin cá nhân có thể bị lộ", def: "Your private details, such as your address or bank account, may become known to others." },
          { en: "fall for a scam / be scammed", vi: "bị lừa đảo", def: "To be tricked by a dishonest plan to get your money." } ] } ] },
        { title: "Khi mua tại cửa hàng", vi: "In store", subs: [ { phrases: [
          { en: "need a receipt", vi: "cần hóa đơn", def: "To have to show the paper that proves you paid, in order to return or exchange something." },
          { en: "exchange it in two minutes", vi: "đổi hàng trong hai phút", def: "To get a different item in place of the one you bought, very quickly." },
          { en: "get your money back right away", vi: "được hoàn tiền ngay", def: "To receive your money again immediately." } ] } ] }
      ]
    },
    {
      id: "returnstory", nav: "Kể chuyện đổi trả", type: "story",
      title: "Câu hữu ích để kể chuyện đổi trả",
      intro: "Một lần đổi hàng dễ dàng tại cửa hàng, và một lần trả hàng online vất vả.",
      lines: [
        { en: "I bought a shirt yesterday, but it was too big.", vi: "Hôm qua tôi mua một chiếc áo nhưng nó rộng quá." },
        { en: "I went back to the store, and the shop assistant **exchanged it for a smaller size** in two minutes.", vi: "Tôi quay lại cửa hàng và nhân viên đổi cho tôi size nhỏ hơn trong hai phút." },
        { en: "I had a terrible time returning a dress I bought online.", vi: "Tôi đã rất vất vả khi trả lại chiếc váy mua online." },
        { en: "The online **return process** had so many steps.", vi: "Quy trình trả hàng online có quá nhiều bước." },
        { en: "First, I had to take photos of the dress and email customer service. Then, I had to print a **return label** and find a box to **pack** it.", vi: "Đầu tiên tôi phải chụp ảnh chiếc váy và gửi email cho chăm sóc khách hàng. Sau đó tôi phải in nhãn gửi trả và tìm hộp để đóng gói." },
        { en: "I also had to pay for the **shipping fee**! I’m still waiting for my **refund**.", vi: "Tôi còn phải trả phí ship! Đến giờ vẫn chờ được hoàn tiền." },
        { en: "Online shopping is easy for buying, but in-store shopping is **definitely** better for returns!", vi: "Mua online thì dễ, nhưng đổi trả thì mua tại cửa hàng chắc chắn tốt hơn!" }
      ]
    },
    {
      id: "steps", nav: "6 bước trả lời", type: "table",
      title: "Luyện nói: Online hay mua trực tiếp? — 6 bước trả lời",
      intro: "Khi so sánh hai phía, dùng **On the one hand, … On the other hand, …** (thay vì Firstly / Secondly). **Both options are good, but …** = cả hai đều tốt, nhưng… → dùng khi muốn trả lời cân bằng. Phát âm **-ed /d/**: bored, fried (chicken). Đoạn văn mẫu trên lớp (Graduation party) ở phần Bài nói mẫu.",
      cols: ["#", "Chức năng", "Cấu trúc", "Ví dụ từ đoạn mẫu"],
      rows: [
        ["**1**", "State your opinion\nnêu ý kiến", "**I think we should choose ___.**", "I think we should choose in-person shopping."],
        ["**2**", "Give your first reason\nlý do 1", "**One reason is that ___.**", "One reason is that we need to find a nice outfit…"],
        ["**3**", "Explain your reason\ngiải thích", "**This is because ___.**", "When we shop in stores, we can try on different clothes…"],
        ["**4**", "Give another reason\nlý do 2", "**Another advantage is that ___.**", "Another advantage is that we can take the clothes home immediately…"],
        ["**5**", "Compare the two options\nso sánh", "**While ___, ___.**", "While online shopping offers more choices, …"],
        ["**6**", "Make a final decision\nkết luận", "**So, I believe ___ is the better choice for this situation.**", "I believe shopping in person is a better option for this situation."]
      ]
    },
    {
      id: "sides", nav: "Cụm từ 2 phía", type: "phrasebank",
      title: "Cụm từ gợi ý cho hai phía",
      intro: "Dùng làm lý do khi chọn mua online hoặc mua trực tiếp.",
      categories: [
        { title: "Online side", vi: "Mua online", subs: [ { phrases: [
          { en: "a vast variety of options", vi: "nhiều lựa chọn", def: "A very large number of different choices." },
          { en: "shop from home", vi: "mua sắm tại nhà", def: "To buy things without leaving your home." },
          { en: "from the comfort of my own home", vi: "thoải mái ngay tại nhà", def: "From your home, in an easy and relaxing way." },
          { en: "doorstep delivery", vi: "giao hàng tận nhà", def: "Delivery of goods right to the door of your home." },
          { en: "shop at your fingertips", vi: "mua sắm bằng vài cú chạm", def: "To shop quickly and easily on your phone." },
          { en: "compare prices across various websites", vi: "so sánh giá giữa các web", def: "To look at prices on different websites to find the cheapest." },
          { en: "exclusive online discounts / vouchers", vi: "mã giảm giá riêng cho online", def: "Special price cuts or codes that are only available when you buy online." },
          { en: "price-comparison tools", vi: "công cụ/app so sánh giá", def: "Websites or apps that show the prices of the same product in different shops." },
          { en: "express delivery", vi: "giao hàng hỏa tốc", def: "A very fast delivery service, sometimes within a few hours." },
          { en: "24/7 availability", vi: "mua lúc nào cũng được", def: "Being able to buy something at any time, day or night." },
          { en: "browse through products together", vi: "cùng lướt xem đồ", def: "To look at many products together on a phone or computer." },
          { en: "read user-generated reviews", vi: "đọc đánh giá của người mua", def: "To read comments and ratings written by real buyers." },
          { en: "avoid traffic jams and long queues", vi: "tránh kẹt xe và xếp hàng dài", def: "To not have to sit in heavy traffic or stand in long lines." } ] } ] },
        { title: "In-person side", vi: "Mua trực tiếp", subs: [ { phrases: [
          { en: "try before you buy", vi: "thử trước khi mua", def: "To try a product to check it before you pay for it." },
          { en: "try on clothes in the fitting room", vi: "thử đồ trong phòng thay đồ", def: "To put on clothes in a special room in the shop to see if they fit." },
          { en: "instant purchase / take home immediately", vi: "mua có liền, mang về ngay", def: "Buying something and taking it home at once, without waiting." },
          { en: "no shipping fees", vi: "không tốn tiền ship", def: "No extra money to pay for delivery." },
          { en: "no hidden costs", vi: "không có chi phí ẩn", def: "No extra charges that you did not expect." },
          { en: "direct quality inspection", vi: "tự tay kiểm tra chất lượng", def: "Checking the quality of a product yourself." },
          { en: "examine products first-hand", vi: "tận mắt xem sản phẩm", def: "To look at products carefully yourself." },
          { en: "personalized customer service", vi: "nhân viên tư vấn riêng", def: "Service designed to meet the needs of each customer." },
          { en: "avoid the hassle of shipping", vi: "tránh rắc rối giao hàng", def: "To avoid the problems of delivery, such as delays or wrong addresses." },
          { en: "carry the purchases home myself", vi: "tự xách đồ về nhà", def: "To take the things you bought home by yourself." },
          { en: "a social outing", vi: "buổi đi chơi, giao lưu", def: "A trip out with other people for fun." },
          { en: "window shopping", vi: "ngắm đồ chứ chưa mua", def: "Looking at goods in shops without intending to buy." },
          { en: "clearance sales / in-store promotions", vi: "xả kho giảm sốc / khuyến mãi tại quầy", def: "Sales where shops sell goods cheaply to get rid of them / special offers only in the shop." },
          { en: "a vibrant atmosphere", vi: "không khí sôi động", def: "A lively, exciting feeling in a place." } ] } ] }
      ]
    },
    {
      id: "situations", nav: "8 tình huống", type: "table",
      title: "8 tình huống luyện nói",
      intro: "Chọn một tình huống, quyết định online hay mua trực tiếp, rồi trả lời theo 6 bước. Bài làm ở **Bài tập → Bài 9**.",
      cols: ["Tình huống", "Mô tả", "Gợi ý Online", "Gợi ý In-person", "Ý tưởng trên lớp"],
      rows: [
        ["**1. Graduation Party**", "You need to buy a nice dress or a suit for your high school graduation party next week.", "a vast variety of options\nshop from home", "try before you buy\ntry on clothes in the fitting room\ninstant purchase", "suit and fit; pick out an outfit that suits my body; ASAP (= as soon as possible)"],
        ["**2. Lazy Sunday**", "It is a rainy Sunday. You are staying at home in your pajamas and you suddenly want to buy some snacks and a new comic book.", "doorstep delivery\nshop at your fingertips\nfrom the comfort of my own home", "instant purchase\nno shipping fees", "bored /d/ + hungry; convenient + comfortable; without leaving home; don’t need to change my clothes / get dressed"],
        ["**3. Tech Student on a Budget**", "You are a student and you need to buy a new laptop for your studies, but you do not have a lot of money.", "compare prices across various websites\nexclusive online discounts / vouchers\nprice-comparison tools", "direct quality inspection\npersonalized customer service\nno hidden costs", "—"],
        ["**4. Birthday Gift for Best Friend**", "Tomorrow is your best friend’s birthday party and you forgot to buy a gift. You need it immediately.", "express delivery\n24/7 availability", "instant purchase / take home immediately\navoid the hassle of shipping", "—"],
        ["**5. Bored Weekend with Friends**", "It is Saturday afternoon. You and your friends are bored and want to do something together.", "browse through products together\nread user-generated reviews", "a social outing\nwindow shopping\nbrick-and-mortar stores", "social outing; eat fried /d/ chicken and potatoes; go shopping at branded stores + cosmetics; catch up with my friends"],
        ["**6. Buying Fresh Strawberries**", "You want to buy some fresh strawberries to make a birthday cake for your mother this evening.", "shop at your fingertips\nexpress delivery", "direct quality inspection\nexamine products first-hand\ninstant purchase", "—"],
        ["**7. Black Friday Sales**", "It is Black Friday, the biggest shopping day of the year. You want to buy a lot of clothes, cosmetics and shoes at cheap prices.", "exclusive online discounts / vouchers\navoid traffic jams and long queues\ncompare prices across various websites", "clearance sales / in-store promotions\na social outing", "Both options are good, but… On the one hand, online: many choices + around-the-clock availability + vouchers + discounts. On the other hand: vibrant atmosphere + try on clothes + direct quality inspection ⇒ suitable, fantastic"],
        ["**8. Buying a Secret Christmas Gift**", "You want to buy a secret Christmas gift for your brother, but you live in the same house and you don’t want him to know.", "from the comfort of my own home\n24/7 availability", "carry the purchases home myself\navoid the hassle of shipping", "—"]
      ]
    },
    {
      id: "ever", nav: "Have you ever…?", type: "table",
      title: "Listening & “Have you ever…?”",
      intro: "**Listening:** [5 Minute English – Online shopping habits](https://5minuteenglish.net/episode/online-shopping-habits) · **Dictation:** [dailydictation.com/exercises](https://dailydictation.com/exercises). **Have you ever + V3 …?** → hỏi về trải nghiệm. Trả lời theo khung:",
      cols: ["Trả lời", "Nói thêm", "Ví dụ"],
      rows: [
        ["**Yes, I have.**", "When? How? What? (50% discount – free delivery?) How did you feel?", "Yes, I have. Last month, I bought headphones on a shopping app with a 50% discount and free delivery. I felt really satisfied.\nCó. Tháng trước tôi mua tai nghe trên app với giảm giá 50% và miễn phí giao hàng. Tôi rất hài lòng."],
        ["**No, I haven’t.**", "Reasons? / If…", "No, I haven’t. I usually shop in person because I like to try things on first. If I found a really big discount, I might try it.\nChưa. Tôi thường mua trực tiếp vì thích thử trước. Nếu gặp giảm giá thật lớn, có lẽ tôi sẽ thử."]
      ]
    },
    {
      id: "dirphrases", nav: "Cụm từ chỉ đường", type: "phrasebank",
      title: "Chỉ đường (Giving directions): cụm động từ",
      intro: "Ghi chú trên lớp: **have a poor sense of direction** (hay bị lạc) • Continue to go straight ahead on … street ⇒ **stay on + tên đường** • **Take the second left** = leave the first intersection; at the second intersection, turn left • **go past / pass** = đi qua.",
      categories: [
        { title: "Cụm từ chỉ đường", vi: "Bấm loa để nghe", subs: [ { phrases: [
          { en: "go straight ahead / go straight on", vi: "đi thẳng", def: "To continue in the same direction without turning." },
          { en: "stay on + street name", vi: "tiếp tục đi trên đường…", def: "To continue along the same road (= continue to go straight ahead on … street)." },
          { en: "go along the street", vi: "đi dọc theo con đường", def: "To move from one end of the street towards the other." },
          { en: "keep going straight until…", vi: "cứ đi thẳng cho đến khi…", def: "To continue in the same direction until you reach a place." },
          { en: "turn left / right", vi: "rẽ trái / phải", def: "To change direction to the left or right." },
          { en: "take the first / second left (right)", vi: "rẽ trái (phải) ở ngã thứ nhất / thứ hai", def: "To turn into the first / second road on the left (right)." },
          { en: "take the third exit at the roundabout", vi: "đi lối ra thứ ba ở vòng xoay", def: "To leave the roundabout by the third road." } ] } ] },
        { title: "Vị trí & hướng", vi: "Bấm loa để nghe", subs: [ { phrases: [
          { en: "cross the street / the bridge", vi: "băng qua đường / qua cầu", def: "To go from one side of the street (or river) to the other." },
          { en: "go past / pass / walk past", vi: "đi qua (không dừng)", def: "To go by a place without stopping." },
          { en: "on your left / on your right", vi: "ở bên trái / phải của bạn", def: "On the left / right side as you walk or drive." },
          { en: "on the first right", vi: "ở ngã rẽ phải đầu tiên", def: "Located on the first road that turns right." },
          { en: "next to / opposite", vi: "bên cạnh / đối diện", def: "Beside / on the other side, facing it." },
          { en: "this road will lead you to…", vi: "con đường này sẽ dẫn bạn đến…", def: "This road will take you to a place." },
          { en: "in the north-west / north-east", vi: "ở phía tây bắc / đông bắc", def: "In the part of an area that is towards the north and west / east." } ] } ] }
      ]
    },
    {
      id: "dirsentences", nav: "Mẫu câu chỉ đường", type: "frames",
      title: "Mẫu câu hỏi và chỉ đường",
      intro: "**Luyện nói – Giving directions:** [baamboozle.com/game/536287](https://www.baamboozle.com/game/536287)",
      sets: [ { label: "Chỉ đường", groups: [
        { title: "Hỏi đường", items: [
          { ex: "Excuse me! Can you tell me the way to the museum?", exVi: "Xin lỗi! Bạn chỉ giúp tôi đường đến bảo tàng được không?" },
          { ex: "How do I get to the post office?", exVi: "Tôi đến bưu điện bằng cách nào?" },
          { ex: "Do you know where the closest bank is?", exVi: "Bạn có biết ngân hàng gần nhất ở đâu không?" },
          { ex: "Is there a hospital near here?", exVi: "Gần đây có bệnh viện không?" },
          { ex: "How far is it to the hospital?", exVi: "Đến bệnh viện bao xa?" },
          { ex: "Can you give me directions to the Thai restaurant?", exVi: "Bạn chỉ đường giúp tôi đến nhà hàng Thái được không?" } ] },
        { title: "Chỉ đường", items: [
          { ex: "It’s this way. Go straight ahead at the traffic lights. Turn right. Go along the street.", exVi: "Đi lối này. Đi thẳng ở đèn giao thông, rẽ phải, đi dọc con đường." },
          { ex: "Walk past the park, and keep going straight until you see the sign for the museum.", exVi: "Đi qua công viên và cứ đi thẳng đến khi thấy biển chỉ bảo tàng." },
          { ex: "If you cross the street, you’ll find a bank there!", exVi: "Nếu bạn băng qua đường, bạn sẽ thấy ngân hàng ở đó!" },
          { ex: "At the bus stop, take the first right and go straight on. It’s opposite the shopping mall.", exVi: "Đến trạm xe buýt, rẽ phải ở ngã đầu tiên rồi đi thẳng. Nó đối diện trung tâm thương mại." },
          { ex: "Take a right at the junction. This straight road will lead you to the hospital.", exVi: "Rẽ phải ở chỗ giao nhau. Con đường thẳng này sẽ dẫn bạn đến bệnh viện." },
          { ex: "When you get to the supermarket, take the second left. You’ll pass a cinema. The restaurant is next to the cinema.", exVi: "Đến siêu thị thì rẽ trái ở ngã thứ hai. Bạn sẽ đi qua một rạp chiếu phim. Nhà hàng ở cạnh rạp." },
          { ex: "It’s not far, maybe about 200 yards.", exVi: "Không xa đâu, khoảng 200 thước." } ] },
        { title: "Khi không biết đường", items: [
          { ex: "Sorry, I’m not from around here.", exVi: "Xin lỗi, tôi không phải người ở đây." },
          { ex: "I’m sorry, I don’t know.", exVi: "Xin lỗi, tôi không biết." } ] },
        { title: "Cảm ơn và đáp lại", items: [
          { ex: "Thanks for your help. / Thank you so much. / I really want to thank you for your help.", exVi: "Cảm ơn bạn đã giúp. / Cảm ơn nhiều lắm." },
          { ex: "You’re welcome. / Don’t mention it. / Not at all.", exVi: "Không có gì." } ] }
      ] } ]
    }
  ],

  samples: [
    {
      title: "Đoạn văn mẫu trên lớp: Graduation party (chọn mua trực tiếp)",
      en: "I think we should choose **in-person shopping**. One reason is that we need to find a nice outfit for our graduation party. When we shop in stores, we can **try on** different clothes and check if they **fit** us well. Another advantage is that we can take the clothes home **immediately** without waiting for **delivery**. While online shopping offers more choices, I believe shopping in person is a better option for this situation.",
      vi: "Tôi nghĩ chúng ta nên mua trực tiếp. Một lý do là chúng ta cần tìm một bộ đồ đẹp cho tiệc tốt nghiệp. Khi mua ở cửa hàng, chúng ta có thể thử nhiều bộ và xem có vừa không. Một ưu điểm khác là có thể mang đồ về ngay mà không phải chờ giao hàng. Dù mua online có nhiều lựa chọn hơn, tôi tin mua trực tiếp là lựa chọn tốt hơn trong tình huống này."
    },
    {
      title: "Bài 1: Situation 2 – Lazy Sunday (chọn Online)",
      en: "I think we should choose **online shopping**. One reason is that it’s raining and we’re still in our pajamas, so we can shop **from the comfort of our own home** without getting dressed. This is because online apps offer **doorstep delivery**, so the snacks and the comic book will come right to our door. Another advantage is that we can **shop at our fingertips** – it only takes a few taps. While shopping in person lets us make an **instant purchase** with **no shipping fees**, going out in the rain is not convenient at all. So, I believe online shopping is the better choice for this situation.",
      vi: "Tôi nghĩ chúng ta nên mua online. Một lý do là trời đang mưa và chúng ta vẫn mặc đồ ngủ, nên có thể mua sắm thoải mái tại nhà mà không cần thay đồ. Vì các app online có giao hàng tận nhà nên đồ ăn vặt và truyện tranh sẽ đến tận cửa. Một ưu điểm khác là mua sắm chỉ bằng vài cú chạm. Dù mua trực tiếp giúp mua có liền và không tốn tiền ship, ra ngoài trời mưa thì chẳng tiện chút nào. Vì vậy tôi tin mua online là lựa chọn tốt hơn trong tình huống này."
    },
    {
      title: "Bài 2: Situation 7 – Black Friday (trả lời cân bằng)",
      en: "**Both options are good, but** I would choose a mix of both. **On the one hand**, online shopping offers many choices and **around-the-clock availability**, so I can buy things at midnight with **exclusive vouchers and discounts**. I can also **compare prices across various websites** and **avoid traffic jams and long queues**. **On the other hand**, shopping in stores has a **vibrant atmosphere**. I can **try on clothes**, do a **direct quality inspection** and find **clearance sales**, and it’s a fun **social outing** with my friends. So, I believe both are suitable, and Black Friday shopping will be fantastic either way.",
      vi: "Cả hai đều tốt, nhưng tôi sẽ kết hợp cả hai. Một mặt, mua online có nhiều lựa chọn và mua được 24/7, nên tôi có thể mua lúc nửa đêm với voucher và giảm giá riêng. Tôi còn có thể so giá giữa nhiều trang web và tránh kẹt xe, xếp hàng dài. Mặt khác, mua ở cửa hàng có không khí sôi động. Tôi có thể thử đồ, tự kiểm tra chất lượng và săn hàng xả kho, lại là một buổi đi chơi vui với bạn bè. Vì vậy tôi tin cả hai đều phù hợp, và mua sắm Black Friday kiểu nào cũng tuyệt."
    },
    {
      title: "Bài 3: Have you ever had a problem returning something?",
      en: "Yes, I have. Last month, I bought a jacket online, but when it arrived, it didn’t **match the description of the product** – the colour was completely different. The **return process** had so many steps. I had to take photos, email customer service, print a **return label** and **pack** the jacket. I also had to pay the **shipping fee**, and I waited two weeks for my **refund**. I felt really annoyed. Since then, I always read the **return policy** first, and for clothes, I **definitely** prefer shopping in person, because I can **exchange** things **face-to-face** and **get my money back** right away.",
      vi: "Có. Tháng trước tôi mua một chiếc áo khoác online, nhưng khi nhận thì nó không giống mô tả – màu khác hẳn. Quy trình trả hàng có quá nhiều bước: tôi phải chụp ảnh, gửi email cho chăm sóc khách hàng, in nhãn gửi trả và đóng gói áo. Tôi còn phải trả phí ship và chờ hai tuần mới được hoàn tiền. Tôi rất bực. Từ đó tôi luôn đọc chính sách đổi trả trước, và với quần áo tôi chắc chắn thích mua trực tiếp hơn vì có thể đổi trả trực tiếp và được hoàn tiền ngay."
    }
  ],

  practice: [
    { label: "Opinion", text: "I think we should choose ___ (online shopping / in-person shopping)." },
    { label: "Reason 1", text: "One reason is that ___. This is because ___." },
    { label: "Reason 2", text: "Another advantage is that ___." },
    { label: "Compare", text: "While ___, ___." },
    { label: "Decision", text: "So, I believe ___ is the better choice for this situation." },
    { label: "Have you ever…?", text: "Yes, I have. → When? How? What? How did you feel? / No, I haven’t. → Reasons / If…" },
    { label: "Returns", text: "I bought ___, but it ___. I had to ___. In the end, I ___." },
    { label: "Directions", text: "Go straight ahead / Take the ___ left/right / Go past ___. It’s next to / opposite ___." }
  ],

  notes: [
    "“be delivered **to** the wrong address” – dùng “to”, không dùng “for” như ghi chú trên lớp.",
    "“**Exchange** sth **for** sth” = đổi lấy món khác; “**return** sth” = trả lại hàng; “**refund**” = tiền hoàn lại.",
    "Handout ghi “fall into scam”; tự nhiên hơn là “**fall for a scam**”, “**be scammed**” hoặc “fall victim to a scam”.",
    "“**Revealing** clothes” = quần áo hở hang; “personal information is **revealed**” = thông tin cá nhân bị lộ.",
    "So sánh hai phía dùng “**On the one hand, … On the other hand, …**”; “Firstly / Secondly” dùng khi liệt kê nhiều ý cùng một phía.",
    "Ghi chú “pick up an outfit that matches with my body” nên nói “**pick out** an outfit that **suits my body shape** / **fits me well**”.",
    "“**ASAP**” = as soon as possible (càng sớm càng tốt); “**get dressed**” = thay quần áo, mặc đồ.",
    "“**Desert**” /ˈdez.ət/ = sa mạc; “**dessert**” /dɪˈzɜːt/ = món tráng miệng.",
    "“**Opposite** the bank” (không có “of”); “**next to** the bank” (phải có “to”).",
    "“**Take the second left**” = bỏ qua ngã rẽ thứ nhất, rẽ trái ở ngã thứ hai.",
    "“**Go past**” = “**pass**” = đi ngang qua. Không nói “go past to the bank”.",
    "“**Sense of direction**” luôn ở số ít; “**directions**” (số nhiều) = lời chỉ đường: Can you give me directions to…?",
    "“**Intersection**” phổ biến trong Anh-Mỹ; Anh-Anh hay dùng “**crossroads**” hoặc “**junction**”. “Roundabout” (BrE) = “traffic circle” (AmE).",
    "“Have you ever + **V3**?” hỏi về trải nghiệm; khi kể chi tiết (thời gian cụ thể) chuyển sang **quá khứ đơn**: Yes, I have. I **bought** it last month."
  ]
});
