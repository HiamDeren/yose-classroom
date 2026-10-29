/* Buổi 5 — Shopping (Part 2): Good & bad shopping experiences, online vs in person
   **chữ đậm** = từ/cụm được nhấn mạnh trên lớp */
YOSE.addLesson({
  id: 5,
  title: "Shopping (Part 2)",
  titleVi: "Trải nghiệm mua sắm tốt/tệ & mua online hay trực tiếp",
  topic: "Mua sắm",
  summary:
    "Điều gì làm nên một trải nghiệm mua sắm tốt, cách kể trải nghiệm tốt/tệ theo 5 bước, và so sánh mua online với mua trực tiếp. Cuối trang có bài tập tự chấm. Chữ in đậm là từ được nhấn mạnh trên lớp.",

  warmup: {
    q: "What makes a shopping experience good?",
    a: "Price / Staff (store assistant) / Customer service / Quality of products → **Products – Service – Shopping environment – Location & access – Payment & convenience**",
    vi: "Giá cả / nhân viên / dịch vụ khách hàng / chất lượng sản phẩm → trên lớp chia thành 5 nhóm: Sản phẩm – Dịch vụ – Không gian – Vị trí & đi lại – Thanh toán & tiện lợi."
  },

  groups: [
    { id: "good", name: "Trải nghiệm tốt" },
    { id: "bad", name: "Trải nghiệm tệ" },
    { id: "online", name: "Mua online & mua trực tiếp" }
  ],

  vocab: [
    // ---- Trải nghiệm tốt ----
    { w: "fortunately", ipa: "/ˈfɔː.tʃən.ət.li/", pos: "adv", group: "good", vi: "may mắn thay (= luckily; ≠ unfortunately)",
      def: "By good luck. (synonym: luckily; opposite: unfortunately)",
      forms: { adj: "fortunate", n: "fortune", v: null, adv: "fortunately" },
      ex: "**Fortunately**, I came across a pair of sneakers on sale.", exVi: "May mắn thay, tôi tình cờ thấy một đôi giày đang giảm giá." },
    { w: "weekend", ipa: "/ˌwiːkˈend/ (BrE) /ˈwiːk.end/ (AmE)", pos: "noun", group: "good", vi: "cuối tuần; at the weekend (BrE) / on the weekend (AmE)",
      def: "Saturday and Sunday.",
      forms: { adj: null, n: "weekend", v: null, adv: "weekends (AmE)" },
      ex: "When I went shopping last **weekend**, I was looking for new sneakers.", exVi: "Khi đi mua sắm cuối tuần trước, tôi tìm một đôi giày mới." },
    { w: "find the best deal", ipa: "/faɪnd ðə best diːl/", pos: "vphrase", group: "good", vi: "tìm được giá/ưu đãi tốt nhất",
      def: "To find the lowest price or the best offer for something.",
      forms: { adj: null, n: "deal", v: "deal (with)", adv: null },
      ex: "I compared prices to **find the best deal**.", exVi: "Tôi so sánh giá để tìm được giá tốt nhất." },
    { w: "reasonably priced", ipa: "/ˈriː.zən.ə.bli praɪst/", pos: "adj", group: "good", vi: "giá phải chăng (= sth has a reasonable price)",
      def: "Having a price that is fair and not too high (= sth has a reasonable price).",
      forms: { adj: "reasonable", n: "price · reason", v: "price", adv: "reasonably" },
      ex: "They were not only stylish but also **reasonably priced**.", exVi: "Chúng không chỉ thời trang mà còn có giá phải chăng." },
    { w: "manage to do sth", ipa: "/ˈmæn.ɪdʒ tə duː/", pos: "vphrase", group: "good", vi: "xoay xở được, làm được (việc khó)",
      def: "To succeed in doing something, especially something difficult.",
      forms: { adj: "manageable", n: "management", v: "manage", adv: null },
      ex: "In the end, I **managed to** get a good bargain.", exVi: "Cuối cùng, tôi đã mua được món hời." },
    { w: "good value for money", ipa: "/ɡʊd ˌvæl.juː fə ˈmʌn.i/", pos: "expr", group: "good", vi: "đáng đồng tiền (= worth buying it)",
      def: "Worth the price you pay (= worth buying).",
      forms: { adj: "valuable", n: "value", v: "value", adv: null },
      ex: "I think they were really **good value for money**.", exVi: "Tôi nghĩ chúng thật sự đáng đồng tiền." },
    { w: "durable", ipa: "/ˈdjʊə.rə.bəl/", pos: "adj", group: "good", vi: "bền",
      def: "Likely to last for a long time without breaking or getting weaker.",
      forms: { adj: "durable", n: "durability", v: null, adv: "durably" },
      ex: "These boots are made of **durable** materials.", exVi: "Đôi bốt này làm từ chất liệu bền." },
    { w: "catch sb’s eye", ipa: "/kætʃ ˈsʌm.bə.dɪz aɪ/", pos: "idiom", group: "good", vi: "thu hút ánh nhìn của ai",
      def: "To attract someone’s attention.",
      forms: { adj: "eye-catching", n: "eye", v: "catch", adv: null },
      ex: "A blue jacket in the window **caught my eye**.", exVi: "Một chiếc áo khoác xanh trong tủ kính thu hút ánh nhìn của tôi." },
    { w: "satisfied", ipa: "/ˈsæt.ɪs.faɪd/", pos: "adj", group: "good", vi: "hài lòng (≠ dissatisfied); satisfied with sb/sth",
      def: "Pleased because you have achieved something or because something you wanted to happen has happened.",
      forms: { adj: "satisfied · satisfying · satisfactory", n: "satisfaction", v: "satisfy", adv: "satisfactorily" },
      ex: "I felt **satisfied** with the service.", exVi: "Tôi cảm thấy hài lòng với dịch vụ." },
    { w: "attentive", ipa: "/əˈten.tɪv/", pos: "adj", group: "good", vi: "chăm chú; chu đáo, để ý đến nhu cầu người khác",
      def: "(1) Listening or watching carefully and with interest; (2) helpful, making sure that people have what they need.",
      forms: { adj: "attentive", n: "attention", v: "attend (to)", adv: "attentively" },
      ex: "The staff were friendly and **attentive**.", exVi: "Nhân viên thân thiện và chu đáo." },
    { w: "listener", ipa: "/ˈlɪs.ən.ər/", pos: "noun", group: "good", vi: "người lắng nghe; a good listener = người biết lắng nghe",
      def: "A person who listens; a good listener = someone who listens with attention or sympathy.",
      forms: { adj: null, n: "listener", v: "listen (to)", adv: null },
      ex: "The shop assistant was **a good listener** and understood my needs.", exVi: "Nhân viên bán hàng biết lắng nghe và hiểu tôi cần gì." },
    { w: "make a purchase", ipa: "/meɪk ə ˈpɜː.tʃəs/", pos: "vphrase", group: "good", vi: "mua hàng (= buy sth)",
      def: "(formal) To buy something.",
      forms: { adj: null, n: "purchase", v: "purchase", adv: null },
      ex: "Luckily, I **managed to make a purchase** before the store closed.", exVi: "May mắn là tôi mua được hàng trước khi cửa hàng đóng cửa." },
    { w: "wear out / be worn out", ipa: "/weər aʊt/ /bi wɔːn aʊt/", pos: "phrasal", group: "good", vi: "(đồ) mòn, cũ, hỏng do dùng nhiều; (người) kiệt sức",
      def: "To become thin, weak or no longer usable because of a lot of use.",
      forms: { adj: "worn-out", n: "wear", v: "wear out (wore – worn)", adv: null },
      ex: "I bought new shoes because my old ones **were worn out**.", exVi: "Tôi mua giày mới vì đôi cũ đã mòn." },

    // ---- Trải nghiệm tệ ----
    { w: "overpriced", ipa: "/ˌəʊ.vəˈpraɪst/", pos: "adj", group: "bad", vi: "bị đội giá, đắt quá mức",
      def: "Too expensive; costing more than it is worth.",
      forms: { adj: "overpriced", n: "price", v: "price", adv: null },
      ex: "Unfortunately, most of the products were **overpriced**.", exVi: "Đáng tiếc là hầu hết sản phẩm đều bị đội giá." },
    { w: "damaged / defective", ipa: "/ˈdæm.ɪdʒd/ /dɪˈfek.tɪv/", pos: "adj", group: "bad", vi: "bị hư hại / bị lỗi",
      def: "Physically harmed or broken / having a fault, so it does not work properly.",
      forms: { adj: "damaged · defective", n: "damage · defect", v: "damage", adv: "defectively" },
      ex: "When I got home, I realized that the bag was **defective**.", exVi: "Về đến nhà, tôi mới nhận ra chiếc túi bị lỗi." },
    { w: "rude attitude", ipa: "/ruːd ˈæt.ɪ.tʃuːd/", pos: "nphrase", group: "bad", vi: "thái độ thô lỗ",
      def: "A way of behaving that is not polite and shows no respect.",
      forms: { adj: "rude", n: "rudeness · attitude", v: null, adv: "rudely" },
      ex: "What annoyed me most was the **rude attitude** of the staff.", exVi: "Điều làm tôi bực nhất là thái độ thô lỗ của nhân viên." },
    { w: "to my disappointment", ipa: "/tə maɪ ˌdɪs.əˈpɔɪnt.mənt/", pos: "expr", group: "bad", vi: "điều làm tôi thất vọng là…",
      def: "Used to say that something made you sad because it was not as good as you hoped.",
      forms: { adj: "disappointed · disappointing", n: "disappointment", v: "disappoint", adv: "disappointingly" },
      ex: "**To my disappointment**, the jacket was not available in my size.", exVi: "Thật thất vọng, chiếc áo khoác không có size của tôi." },
    { w: "annoyed", ipa: "/əˈnɔɪd/", pos: "adj", group: "bad", vi: "bực mình; annoyed by/with/at",
      def: "Slightly angry.",
      forms: { adj: "annoyed · annoying", n: "annoyance", v: "annoy", adv: "annoyingly" },
      ex: "I was really **annoyed by** the slow service.", exVi: "Tôi thật sự bực mình vì phục vụ chậm." },
    { w: "charge sb the wrong price", ipa: "/tʃɑːdʒ ðə rɒŋ praɪs/", pos: "vphrase", group: "bad", vi: "tính sai tiền",
      def: "To ask someone to pay an incorrect amount of money.",
      forms: { adj: null, n: "charge", v: "charge", adv: null },
      ex: "To make matters worse, the cashier **charged me the wrong price**.", exVi: "Tệ hơn nữa, thu ngân còn tính sai tiền." },
    { w: "return an item", ipa: "/rɪˈtɜːn ən ˈaɪ.təm/", pos: "vphrase", group: "bad", vi: "trả lại hàng",
      def: "To take something you bought back to the shop, usually to get your money back.",
      forms: { adj: "returnable", n: "return", v: "return", adv: null },
      ex: "Because of the poor quality, I had to **return the item**.", exVi: "Vì chất lượng kém, tôi phải trả lại món hàng." },
    { w: "checkout counter", ipa: "/ˈtʃek.aʊt ˌkaʊn.tər/", pos: "nphrase", group: "bad", vi: "quầy thanh toán",
      def: "The place in a shop where you pay for the things you are buying.",
      forms: { adj: null, n: "checkout", v: "check out", adv: null },
      ex: "After waiting for 20 minutes, I finally got to the **checkout counter**.", exVi: "Sau 20 phút chờ, tôi mới đến được quầy thanh toán." },
    { w: "unpleasant", ipa: "/ʌnˈplez.ənt/", pos: "adj", group: "bad", vi: "khó chịu, không vui",
      def: "Not pleasant, enjoyable or comfortable.",
      forms: { adj: "unpleasant", n: "unpleasantness", v: null, adv: "unpleasantly" },
      ex: "Overall, it was a really **unpleasant** experience.", exVi: "Nhìn chung, đó là một trải nghiệm thật sự khó chịu." },
    { w: "regret", ipa: "/rɪˈɡret/", pos: "verb", group: "bad", vi: "hối tiếc; regret + V-ing",
      def: "To feel sorry or sad about something you did or did not do.",
      forms: { adj: "regretful · regrettable", n: "regret", v: "regret", adv: "regretfully" },
      ex: "I **regretted buying** the jacket from that store.", exVi: "Tôi hối hận vì đã mua chiếc áo khoác ở cửa hàng đó." },
    { w: "scold", ipa: "/skəʊld/", pos: "verb", group: "bad", vi: "la mắng (= rebuke)",
      def: "(formal) To speak angrily to somebody, especially a child, because they have done something wrong. (synonym: rebuke)",
      forms: { adj: null, n: "scolding", v: "scold", adv: null },
      ex: "The manager **scolded** the cashier for charging me the wrong price.", exVi: "Quản lý la mắng thu ngân vì tính sai tiền cho tôi." },
    { w: "to make matters worse", ipa: "/tə meɪk ˈmæt.əz wɜːs/", pos: "idiom", group: "bad", vi: "tệ hơn nữa là",
      def: "Used before saying something that makes a bad situation even worse.",
      ex: "**To make matters worse**, the cashier charged me the wrong price.", exVi: "Tệ hơn nữa, thu ngân còn tính sai tiền." },

    // ---- Mua online & mua trực tiếp ----
    { w: "in person", ipa: "/ɪn ˈpɜː.sən/", pos: "expr", group: "online", vi: "trực tiếp, đích thân",
      def: "If you do something in person, you go somewhere and do it yourself, instead of doing it online, by letter or by asking somebody else.",
      forms: { adj: "personal", n: "person", v: "personalize", adv: "personally" },
      ex: "I prefer to shop **in person** so I can see the products.", exVi: "Tôi thích mua trực tiếp để có thể xem tận mắt sản phẩm." },
    { w: "from the comfort of your own home", ipa: "/frəm ðə ˈkʌm.fət əv jɔːr əʊn həʊm/", pos: "expr", group: "online", vi: "ngay tại nhà, thoải mái không cần đi đâu",
      def: "From your home, without having to go anywhere, so it is easy and relaxing.",
      forms: { adj: "comfortable", n: "comfort", v: "comfort", adv: "comfortably" },
      ex: "I prefer buying things online **from the comfort of my own home**.", exVi: "Tôi thích mua online ngay tại nhà cho thoải mái." },
    { w: "time-consuming / time-saving", ipa: "/ˈtaɪm.kənˌsjuː.mɪŋ/ /ˈtaɪmˌseɪ.vɪŋ/", pos: "adj", group: "online", vi: "tốn thời gian / tiết kiệm thời gian",
      def: "Taking or needing a lot of time / helping you do something more quickly.",
      forms: { adj: "time-consuming · time-saving", n: "consumption · saving", v: "consume · save", adv: null },
      ex: "Going to the mall is **time-consuming**, but online shopping is **time-saving**.", exVi: "Đi trung tâm thương mại tốn thời gian, còn mua online thì tiết kiệm thời gian." },
    { w: "a vast variety of options", ipa: "/ə vɑːst vəˈraɪ.ə.ti əv ˈɒp.ʃənz/", pos: "nphrase", group: "online", vi: "vô số lựa chọn (= a wide variety of options)",
      def: "A very large number of different choices (= a wide variety of options).",
      forms: { adj: "vast · various · optional", n: "variety · option", v: "vary · opt", adv: "vastly" },
      ex: "Online apps have **a vast variety of options** that local stores don’t have.", exVi: "Ứng dụng online có vô số lựa chọn mà cửa hàng gần nhà không có." },
    { w: "around-the-clock availability", ipa: "/əˌraʊnd ðə ˈklɒk əˌveɪ.ləˈbɪl.ə.ti/", pos: "nphrase", group: "online", vi: "luôn sẵn sàng 24/7",
      def: "The fact that something can be bought or used at any time, 24 hours a day.",
      note: "availability: the fact that something is possible to get, buy or find",
      forms: { adj: "available · around-the-clock", n: "availability", v: null, adv: "around the clock" },
      ex: "I love the **around-the-clock availability** – I can buy things at midnight!", exVi: "Tôi thích việc mua được 24/7 – nửa đêm cũng mua được!" },
    { w: "browse through products", ipa: "/braʊz θruː ˈprɒd.ʌkts/", pos: "vphrase", group: "online", vi: "lướt xem các sản phẩm",
      def: "To look through many products quickly to see what is available.",
      forms: { adj: null, n: "browser · product", v: "browse · produce", adv: null },
      ex: "I **browse through products** on my phone before I buy anything.", exVi: "Tôi lướt xem sản phẩm trên điện thoại trước khi mua." },
    { w: "user-generated reviews", ipa: "/ˌjuː.zə ˈdʒen.ə.reɪ.tɪd rɪˈvjuːz/", pos: "nphrase", group: "online", vi: "đánh giá do chính người mua viết",
      def: "Comments, ratings and photos about a product written by real buyers, not by the company.",
      forms: { adj: null, n: "user · review", v: "use · generate · review", adv: null },
      ex: "I always check the **user-generated reviews** before I make a purchase.", exVi: "Tôi luôn xem đánh giá của người dùng trước khi mua." },
    { w: "(have sth) at your fingertips", ipa: "/æt jɔː ˈfɪŋ.ɡə.tɪps/", pos: "idiom", group: "online", vi: "trong tầm tay, có ngay khi cần",
      def: "To have something available so that you can find and use it easily and quickly.",
      forms: { adj: null, n: "fingertip", v: null, adv: null },
      ex: "Technology really lets you **shop at your fingertips**!", exVi: "Công nghệ thật sự giúp bạn mua sắm chỉ trong tầm tay!" },
    { w: "delivery", ipa: "/dɪˈlɪv.ər.i/", pos: "noun", group: "online", vi: "sự giao hàng",
      def: "The act of taking goods, letters, etc. to the people they have been sent to.",
      forms: { adj: null, n: "delivery", v: "deliver", adv: null },
      ex: "This shop offers free **delivery** on orders over $50.", exVi: "Cửa hàng này miễn phí giao hàng cho đơn trên 50 đô." },
    { w: "social outing", ipa: "/ˌsəʊ.ʃəl ˈaʊ.tɪŋ/", pos: "nphrase", group: "online", vi: "buổi ra ngoài, đi chơi cùng mọi người",
      def: "A short trip or time out with other people, for fun.",
      forms: { adj: "social", n: "society · outing", v: "socialize", adv: "socially" },
      ex: "I really needed **a social outing** this weekend.", exVi: "Cuối tuần này tôi thật sự cần ra ngoài chơi." },
    { w: "brick-and-mortar store", ipa: "/ˌbrɪk ən ˈmɔː.tə stɔːr/", pos: "nphrase", group: "online", vi: "cửa hàng truyền thống (có mặt bằng thật)",
      def: "A shop that exists in a real building, not only online.",
      forms: { adj: "brick-and-mortar", n: "store", v: "store", adv: null },
      ex: "I’m glad we came to these **brick-and-mortar stores** instead of staying home.", exVi: "Mừng là tụi mình đến cửa hàng thật thay vì ở nhà." },
    { w: "do a direct quality inspection", ipa: "/daɪˈrekt ˈkwɒl.ə.ti ɪnˈspek.ʃən/", pos: "vphrase", group: "online", vi: "kiểm tra chất lượng trực tiếp",
      def: "To look at and check the quality of a product carefully yourself.",
      forms: { adj: "direct", n: "inspection · inspector", v: "inspect", adv: "directly" },
      ex: "You should **do a direct quality inspection** before buying.", exVi: "Bạn nên kiểm tra chất lượng trực tiếp trước khi mua." },
    { w: "first-hand", ipa: "/ˌfɜːstˈhænd/", pos: "adj", group: "online", vi: "trực tiếp, tận tay",
      def: "Seen, felt or experienced directly by yourself, not through other people.",
      forms: { adj: "first-hand", n: null, v: null, adv: "first-hand" },
      ex: "Let’s feel the material **first-hand**.", exVi: "Sờ thử chất vải tận tay đi." },
    { w: "mannequin", ipa: "/ˈmæn.ɪ.kɪn/", pos: "noun", group: "online", vi: "ma-nơ-canh",
      def: "A model of a human body used for displaying clothes in shops.",
      forms: { adj: null, n: "mannequin", v: null, adv: null },
      ex: "Look at this grey jacket on the **mannequin**!", exVi: "Nhìn chiếc áo khoác xám trên ma-nơ-canh kìa!" },
    { w: "personalized customer service", ipa: "/ˈpɜː.sən.əl.aɪzd ˈkʌs.tə.mə ˈsɜː.vɪs/", pos: "nphrase", group: "online", vi: "dịch vụ khách hàng cá nhân hóa",
      def: "Service designed to meet the needs of each individual customer.",
      forms: { adj: "personal · personalized", n: "personalization", v: "personalize", adv: "personally" },
      ex: "I love the **personalized customer service** here.", exVi: "Tôi thích dịch vụ khách hàng chu đáo, riêng cho từng người ở đây." },
    { w: "window shopping", ipa: "/ˈwɪn.dəʊ ˌʃɒp.ɪŋ/", pos: "nphrase", group: "online", vi: "ngắm đồ (không định mua)",
      def: "Looking at the goods in shop windows without intending to buy anything.",
      forms: { adj: null, n: "window shopping", v: "window-shop", adv: null },
      ex: "I’ll do some **window shopping** for shoes next door.", exVi: "Tôi sẽ sang bên cạnh ngắm giày một chút." }
  ],

  sections: [
    {
      id: "good", nav: "Trải nghiệm tốt", type: "phrasebank",
      title: "Điều gì làm nên trải nghiệm mua sắm tốt?",
      intro: "5 nhóm trên lớp: **Products – Service – Shopping environment – Location & access – Payment & convenience**. Bấm loa để nghe; bật “Ẩn nghĩa TV” ở phần Từ vựng để tự đoán nghĩa.",
      categories: [
        { title: "Products", vi: "Sản phẩm", subs: [
          { title: "Finding the one", vi: "Tìm kiếm sản phẩm", phrases: [
            { en: "look for a specific product", vi: "tìm một sản phẩm cụ thể", def: "To search for one particular item that you already have in mind." },
            { en: "browse different stores", vi: "dạo xem nhiều cửa hàng", def: "To look around several shops to see what they have." },
            { en: "come across something interesting", vi: "tình cờ thấy món thú vị", def: "To find something interesting by chance." },
            { en: "catch my eye", vi: "thu hút sự chú ý của tôi", def: "(of a thing) To attract your attention." },
            { en: "try it on", vi: "mặc thử", def: "To put clothes on to see if they fit and look good." } ] },
          { title: "Choosing the right fit", vi: "Lựa chọn phù hợp", phrases: [
            { en: "a wide range of products", vi: "nhiều loại sản phẩm", def: "Many different kinds of products." },
            { en: "different styles and designs", vi: "nhiều kiểu dáng, mẫu mã", def: "Various ways in which products look or are made." },
            { en: "choose the right one", vi: "chọn đúng món", def: "To pick the item that is best for you." },
            { en: "suit my needs", vi: "đáp ứng nhu cầu của tôi", def: "To be right or suitable for what you need." },
            { en: "be happy with my purchase", vi: "hài lòng với món đã mua", def: "To feel pleased with something you have bought." } ] },
          { title: "Investing in quality", vi: "Đầu tư vào chất lượng", phrases: [
            { en: "good-quality products", vi: "sản phẩm chất lượng tốt", def: "Products that are well made and work well." },
            { en: "durable materials", vi: "chất liệu bền", def: "Materials that last a long time without breaking or getting weaker." },
            { en: "well-designed products", vi: "sản phẩm thiết kế tốt", def: "Products that are planned and made carefully so they look good and work well." },
            { en: "last for a long time", vi: "dùng được lâu", def: "To stay in good condition for a long period." },
            { en: "worth buying", vi: "đáng mua", def: "Good or useful enough to be worth the money you pay." } ] }
        ] },
        { title: "Service", vi: "Dịch vụ", subs: [
          { title: "Customer service", vi: "Dịch vụ khách hàng", phrases: [
            { en: "friendly staff", vi: "nhân viên thân thiện", def: "Shop workers who are kind and pleasant to customers." },
            { en: "offer assistance", vi: "đề nghị giúp đỡ", def: "To say that you are willing to help someone." },
            { en: "give helpful advice", vi: "đưa lời khuyên hữu ích", def: "To give useful suggestions about what to do or buy." },
            { en: "answer my questions", vi: "trả lời câu hỏi của tôi", def: "To give information when a customer asks something." },
            { en: "provide excellent customer service", vi: "phục vụ khách hàng xuất sắc", def: "To help and treat customers extremely well." } ] },
          { title: "Personalized experience", vi: "Trải nghiệm cá nhân hóa", phrases: [
            { en: "attentive staff", vi: "nhân viên chu đáo, để ý khách", def: "Staff who listen carefully and make sure customers have what they need." },
            { en: "understand my needs", vi: "hiểu tôi muốn/cần gì", def: "To know exactly what a customer wants." },
            { en: "recommend suitable products", vi: "gợi ý sản phẩm phù hợp", def: "To suggest products that are right for a particular customer." },
            { en: "make a purchase", vi: "mua hàng, thanh toán tại quầy (= buy sth)", def: "(formal) To buy something." },
            { en: "feel satisfied", vi: "cảm thấy hài lòng", def: "To feel pleased because you got what you wanted." } ] },
          { title: "Efficiency", vi: "Hiệu quả và nhanh chóng", phrases: [
            { en: "quick service", vi: "phục vụ nhanh", def: "Service that is done fast, without delay." },
            { en: "short waiting time", vi: "thời gian chờ ngắn", def: "Only a little time spent waiting." },
            { en: "avoid long queues", vi: "tránh xếp hàng dài", def: "To not have to stand in a long line of people." },
            { en: "save time", vi: "tiết kiệm thời gian", def: "To spend less time doing something." },
            { en: "have a pleasant shopping experience", vi: "có trải nghiệm mua sắm dễ chịu", def: "To enjoy the time you spend shopping." } ] }
        ] },
        { title: "Shopping environment", vi: "Không gian mua sắm", subs: [
          { phrases: [
            { en: "a modern shopping mall", vi: "trung tâm thương mại hiện đại", def: "A shopping centre built in a new, up-to-date style." },
            { en: "clean and spacious stores", vi: "cửa hàng sạch sẽ, rộng rãi", def: "Shops that are tidy and have a lot of space." },
            { en: "well-organized shelves", vi: "kệ hàng sắp xếp ngăn nắp", def: "Shelves where products are arranged neatly and logically." },
            { en: "attractive displays", vi: "cách trưng bày bắt mắt", def: "Arrangements of products that look nice and catch people’s attention." },
            { en: "a comfortable shopping experience", vi: "trải nghiệm mua sắm thoải mái", def: "Shopping that makes you feel relaxed and at ease." } ] }
        ] },
        { title: "Location & access", vi: "Vị trí và đi lại", subs: [
          { phrases: [
            { en: "a convenient location", vi: "vị trí thuận tiện", def: "A place that is easy to get to." },
            { en: "easy access", vi: "dễ tiếp cận, dễ đi đến", def: "The quality of being easy to reach or enter." },
            { en: "get there easily", vi: "đến đó dễ dàng", def: "To travel to a place without problems." },
            { en: "save travelling time", vi: "tiết kiệm thời gian di chuyển", def: "To spend less time going from one place to another." },
            { en: "shop comfortably", vi: "mua sắm thoải mái", def: "To shop in a relaxed way, without stress." } ] }
        ] },
        { title: "Payment & convenience", vi: "Thanh toán và tiện lợi", subs: [
          { phrases: [
            { en: "convenient payment methods", vi: "phương thức thanh toán tiện lợi", def: "Easy ways to pay, such as cash, card or QR code." },
            { en: "cashless payment", vi: "thanh toán không dùng tiền mặt", def: "Paying by card, phone or app instead of with cash." },
            { en: "quick checkout", vi: "thanh toán nhanh", def: "Paying for your goods fast at the cashier." },
            { en: "avoid long queues → save time", vi: "tránh xếp hàng dài → tiết kiệm thời gian", def: "See the Service group (Efficiency)." } ] }
        ] }
      ]
    },
    {
      id: "steps", nav: "5 bước kể chuyện", type: "table",
      title: "5 bước kể một trải nghiệm mua sắm",
      intro: "Dùng cho cả trải nghiệm **tốt** và **tệ**. Ví dụ lấy từ đoạn văn mẫu trên lớp (xem phần Bài nói mẫu).",
      cols: ["Bước", "Trả lời câu hỏi", "Ví dụ từ đoạn mẫu"],
      rows: [
        ["**STEP 1**", "WHEN – WHERE – WHO", "When I went shopping last weekend, …"],
        ["**STEP 2**", "PURPOSE – WHY", "… I was looking for a new pair of sneakers at an affordable price."],
        ["**STEP 3**", "DEVELOPMENT – WHAT HAPPENED", "At first, I shopped around and compared prices to find the best deal."],
        ["**STEP 4**", "HIGHLIGHT – WHAT WAS SPECIAL", "Luckily, I came across a pair that was on sale with a 30% discount."],
        ["**STEP 5**", "FEELINGS – REFLECTION", "In the end, I managed to get a good bargain … They were really good value for money."]
      ]
    },
    {
      id: "frames", nav: "Khung câu", type: "frames",
      title: "Khung câu kể trải nghiệm",
      sets: [
        { label: "Trải nghiệm tốt", groups: [
          { title: "Starting the story – Bắt đầu câu chuyện", items: [
            { en: "I remember the time when I…", ex: "I remember the time when I went shopping with my friends.", exVi: "Tôi nhớ lần tôi đi mua sắm với bạn bè." },
            { en: "A few weeks/months ago, I…", ex: "A few weeks ago, I visited a shopping mall.", exVi: "Vài tuần trước, tôi đến một trung tâm thương mại." },
            { en: "I decided to… because…", ex: "I decided to buy a new pair of shoes because my old ones were worn out.", exVi: "Tôi quyết định mua giày mới vì đôi cũ đã mòn." },
            { en: "I was looking for…", ex: "I was looking for a birthday present for my sister.", exVi: "Tôi đang tìm quà sinh nhật cho em gái." } ] },
          { title: "Describing the experience – Miêu tả trải nghiệm", items: [
            { en: "The first thing I noticed was…", ex: "The first thing I noticed was the clean and spacious environment.", exVi: "Điều đầu tiên tôi để ý là không gian sạch sẽ, rộng rãi." },
            { en: "There was/were…", ex: "There was a wide range of products to choose from.", exVi: "Có rất nhiều loại sản phẩm để lựa chọn." },
            { en: "What impressed me most was…", ex: "What impressed me most was the excellent customer service.", exVi: "Điều làm tôi ấn tượng nhất là dịch vụ khách hàng xuất sắc." },
            { en: "I was particularly impressed by…", ex: "I was particularly impressed by the friendly staff.", exVi: "Tôi đặc biệt ấn tượng với nhân viên thân thiện." },
            { en: "One thing I really liked was…", ex: "One thing I really liked was the reasonable prices.", exVi: "Một điều tôi rất thích là giá cả hợp lý." } ] },
          { title: "Describing actions – Kể những gì đã xảy ra", items: [
            { en: "I started by + V-ing…", ex: "I started by browsing different stores.", exVi: "Tôi bắt đầu bằng việc dạo xem nhiều cửa hàng." },
            { en: "After that, I…", ex: "After that, I tried on a few pairs of shoes.", exVi: "Sau đó, tôi thử vài đôi giày." },
            { en: "While I was…, I…", ex: "While I was looking around, I came across a beautiful handbag.", exVi: "Trong lúc đi xem, tôi tình cờ thấy một chiếc túi xách rất đẹp." },
            { en: "Luckily, I managed to…", ex: "Luckily, I managed to find a good bargain.", exVi: "May mắn là tôi mua được món hời." },
            { en: "In the end, I decided to…", ex: "In the end, I decided to buy it.", exVi: "Cuối cùng, tôi quyết định mua nó." } ] },
          { title: "Explaining the reasons – Giải thích tại sao tốt", items: [
            { en: "This was mainly because…", ex: "This was mainly because the staff were very helpful.", exVi: "Chủ yếu là vì nhân viên rất nhiệt tình." },
            { en: "Another reason was that…", ex: "Another reason was that the products were reasonably priced.", exVi: "Một lý do khác là sản phẩm có giá phải chăng." },
            { en: "Thanks to + noun, …", ex: "Thanks to the quick service, I didn’t have to wait long.", exVi: "Nhờ phục vụ nhanh, tôi không phải chờ lâu." },
            { en: "… made it easier for me to…", ex: "The convenient payment methods made it easier for me to pay.", exVi: "Phương thức thanh toán tiện lợi giúp tôi trả tiền dễ hơn." },
            { en: "… allowed me to…", ex: "The wide range of products allowed me to find exactly what I needed.", exVi: "Nhiều loại sản phẩm giúp tôi tìm đúng thứ mình cần." } ] },
          { title: "Expressing feelings – Nói về cảm xúc", items: [
            { en: "I felt + adjective because…", ex: "I felt satisfied because I got a good deal.", exVi: "Tôi thấy hài lòng vì mua được giá tốt." },
            { en: "I was really + adjective when…", ex: "I was really excited when I found the perfect pair of shoes.", exVi: "Tôi rất phấn khích khi tìm được đôi giày hoàn hảo." },
            { en: "It made me feel…", ex: "The friendly service made me feel welcome.", exVi: "Sự phục vụ thân thiện khiến tôi cảm thấy được chào đón." },
            { en: "I couldn’t be happier with…", ex: "I couldn’t be happier with my purchase.", exVi: "Tôi không thể hài lòng hơn với món đồ đã mua." },
            { en: "It was worth + noun/V-ing.", ex: "It was worth the money.", exVi: "Nó đáng đồng tiền." } ] },
          { title: "Ending the story – Kết thúc và đánh giá", items: [
            { en: "Overall, it was…", ex: "Overall, it was a wonderful shopping experience.", exVi: "Nhìn chung, đó là một trải nghiệm mua sắm tuyệt vời." },
            { en: "Looking back, I think…", ex: "Looking back, I think it was one of my best shopping experiences.", exVi: "Nhìn lại, tôi nghĩ đó là một trong những lần mua sắm tuyệt nhất." },
            { en: "I would recommend… to…", ex: "I would recommend this shopping mall to my friends.", exVi: "Tôi sẽ giới thiệu trung tâm thương mại này cho bạn bè." },
            { en: "It taught me that…", ex: "It taught me that good service can make a big difference.", exVi: "Nó dạy tôi rằng dịch vụ tốt có thể tạo nên khác biệt lớn." } ] }
        ] },
        { label: "Trải nghiệm tệ", groups: [
          { title: "Starting the story – Bắt đầu câu chuyện", items: [
            { en: "I remember the time when I…", ex: "I remember the time when I had a terrible shopping experience.", exVi: "Tôi nhớ lần tôi có một trải nghiệm mua sắm tồi tệ." },
            { en: "A few weeks ago, I went to…", ex: "A few weeks ago, I went to a shopping mall with my sister.", exVi: "Vài tuần trước, tôi đến trung tâm thương mại với chị gái." },
            { en: "I decided to… because…", ex: "I decided to buy a new jacket because I needed one for work.", exVi: "Tôi quyết định mua áo khoác mới vì cần cho công việc." },
            { en: "I was hoping to…", ex: "I was hoping to find something affordable and good-quality.", exVi: "Tôi mong tìm được món vừa túi tiền và chất lượng tốt." } ] },
          { title: "Describing the problem – Miêu tả vấn đề", items: [
            { en: "The first problem was that…", ex: "The first problem was that the store was extremely crowded.", exVi: "Vấn đề đầu tiên là cửa hàng cực kỳ đông." },
            { en: "Unfortunately, …", ex: "Unfortunately, most of the products were overpriced.", exVi: "Đáng tiếc là hầu hết sản phẩm đều bị đội giá." },
            { en: "To my disappointment, …", ex: "To my disappointment, the jacket was not available in my size.", exVi: "Thật thất vọng, chiếc áo không có size của tôi." },
            { en: "What annoyed me most was…", ex: "What annoyed me most was the rude attitude of the staff.", exVi: "Điều làm tôi bực nhất là thái độ thô lỗ của nhân viên." },
            { en: "I was surprised to find that…", ex: "I was surprised to find that the product was damaged.", exVi: "Tôi bất ngờ phát hiện sản phẩm bị hư." } ] },
          { title: "Describing what happened – Kể diễn biến", items: [
            { en: "I tried to…, but…", ex: "I tried to ask for help, but the staff ignored me.", exVi: "Tôi cố nhờ giúp đỡ nhưng nhân viên phớt lờ tôi." },
            { en: "When I…, I realized that…", ex: "When I got home, I realized that the bag was defective.", exVi: "Về đến nhà, tôi mới nhận ra chiếc túi bị lỗi." },
            { en: "After waiting for…, I…", ex: "After waiting for 20 minutes, I finally got to the checkout counter.", exVi: "Sau 20 phút chờ, tôi mới đến được quầy thanh toán." },
            { en: "I ended up + V-ing…", ex: "I ended up leaving the store without buying anything.", exVi: "Rốt cuộc tôi rời cửa hàng mà không mua gì." },
            { en: "To make matters worse, …", ex: "To make matters worse, the cashier charged me the wrong price.", exVi: "Tệ hơn nữa, thu ngân còn tính sai tiền." } ] },
          { title: "Explaining the reasons – Giải thích tại sao tệ", items: [
            { en: "This was mainly because…", ex: "This was mainly because the store was poorly organized.", exVi: "Chủ yếu là vì cửa hàng sắp xếp lộn xộn." },
            { en: "One of the main reasons was that…", ex: "One of the main reasons was that the staff were unhelpful.", exVi: "Một trong những lý do chính là nhân viên không nhiệt tình." },
            { en: "Due to + noun, …", ex: "Due to the long queues, I had to wait for nearly an hour.", exVi: "Do xếp hàng dài, tôi phải chờ gần một tiếng." },
            { en: "Because of + noun, …", ex: "Because of the poor product quality, I had to return the item.", exVi: "Vì chất lượng kém, tôi phải trả lại hàng." },
            { en: "… made the situation even worse.", ex: "The rude customer service made the situation even worse.", exVi: "Thái độ phục vụ thô lỗ khiến mọi chuyện càng tệ hơn." } ] },
          { title: "Expressing negative feelings – Nói về cảm xúc", items: [
            { en: "I felt + adjective because…", ex: "I felt disappointed because the product was not as advertised.", exVi: "Tôi thất vọng vì sản phẩm không như quảng cáo." },
            { en: "I was really annoyed by…", ex: "I was really annoyed by the slow service.", exVi: "Tôi thật sự bực mình vì phục vụ chậm." },
            { en: "It made me feel…", ex: "The staff’s attitude made me feel uncomfortable.", exVi: "Thái độ của nhân viên khiến tôi thấy khó chịu." },
            { en: "I regretted + V-ing…", ex: "I regretted buying the jacket from that store.", exVi: "Tôi hối hận vì đã mua áo khoác ở cửa hàng đó." } ] },
          { title: "Ending the story – Kết thúc và bài học", items: [
            { en: "Overall, it was…", ex: "Overall, it was a really unpleasant experience.", exVi: "Nhìn chung, đó là một trải nghiệm thật sự khó chịu." },
            { en: "Looking back, I wish I had…", ex: "Looking back, I wish I had checked the product more carefully.", exVi: "Nhìn lại, tôi ước mình đã kiểm tra sản phẩm kỹ hơn." },
            { en: "Since then, I have…", ex: "Since then, I have always checked customer reviews before shopping.", exVi: "Từ đó, tôi luôn xem đánh giá của khách hàng trước khi mua." },
            { en: "I would never… again.", ex: "I would never shop at that store again.", exVi: "Tôi sẽ không bao giờ mua ở cửa hàng đó nữa." } ] }
        ] }
      ]
    }
  ],

  samples: [
    {
      title: "Đoạn văn mẫu trên lớp: a good shopping experience",
      en: "When I went shopping last **weekend**, I was looking for a new pair of sneakers at an **affordable** price. [context] **At first**, I **shopped around** (= browsed several stores) and **compared prices** to **find the best deal**. **Luckily**, I **came across** a pair that was on sale with a 30% **discount**. I decided to buy them because they were not only stylish but also **reasonably priced**. **In the end**, I **managed to** get a good **bargain** and save quite a lot of money. [result] I think they were really **good value for money** (= worth buying it).",
      vi: "Khi đi mua sắm cuối tuần trước, tôi tìm một đôi giày thể thao mới với giá vừa túi tiền. Lúc đầu, tôi dạo nhiều cửa hàng và so sánh giá để tìm được giá tốt nhất. May mắn là tôi tình cờ thấy một đôi đang giảm 30%. Tôi quyết định mua vì chúng không chỉ thời trang mà còn có giá phải chăng. Cuối cùng, tôi mua được món hời và tiết kiệm khá nhiều tiền. Tôi nghĩ đôi giày thật sự đáng đồng tiền."
    },
    {
      title: "Bài 1: Describe a bad shopping experience",
      en: "I remember the time when I had a terrible shopping experience. A few weeks ago, I went to a shopping mall with my sister because I needed a new jacket for work. I was hoping to find something **affordable** and good-quality. **Unfortunately**, the store was extremely **crowded** and poorly organized, and most of the products were **overpriced**. **To my disappointment**, the jacket I liked was not available in my size. What **annoyed** me most was the **rude attitude** of the staff – when I tried to ask for help, they just ignored me. After waiting for 20 minutes, I finally got to the **checkout counter** with a different jacket. **To make matters worse**, the cashier **charged me the wrong price**. When I got home, I realized that the zip was **defective**, so I had to **return the item**. Overall, it was a really **unpleasant** experience. Since then, I have always checked customer reviews before shopping, and I would never shop at that store again.",
      vi: "Tôi nhớ lần có một trải nghiệm mua sắm tồi tệ. Vài tuần trước, tôi đi trung tâm thương mại với chị gái vì cần một chiếc áo khoác mới để đi làm. Tôi mong tìm được món vừa túi tiền và chất lượng tốt. Đáng tiếc là cửa hàng cực kỳ đông, sắp xếp lộn xộn, và hầu hết sản phẩm đều bị đội giá. Thật thất vọng, chiếc áo tôi thích không có size của tôi. Điều làm tôi bực nhất là thái độ thô lỗ của nhân viên – khi tôi nhờ giúp, họ phớt lờ tôi. Sau 20 phút chờ, tôi mới đến được quầy thanh toán với một chiếc áo khác. Tệ hơn nữa, thu ngân còn tính sai tiền. Về đến nhà, tôi phát hiện khóa kéo bị lỗi nên phải trả lại hàng. Nhìn chung, đó là một trải nghiệm thật sự khó chịu. Từ đó, tôi luôn xem đánh giá của khách hàng trước khi mua, và sẽ không bao giờ mua ở cửa hàng đó nữa."
    },
    {
      title: "Bài 2: Do you prefer shopping online or in person?",
      en: "It depends on what I’m buying. For everyday things, I prefer shopping online **from the comfort of my own home**. Going to the mall can be **time-consuming**, while online apps have **a vast variety of options** and **around-the-clock availability**, so I can buy things at midnight if I want. I usually **browse through products** and carefully check the **user-generated reviews** before I **make a purchase**. However, for clothes and shoes, I still prefer **brick-and-mortar stores**. I can **do a direct quality inspection**, feel the material **first-hand** and **try things on** in the **fitting room** to make sure they **fit**. I also enjoy the **personalized customer service**, and shopping with friends is a nice **social outing** – sometimes we just do some **window shopping** and grab a coffee. So, in my opinion, both ways have their own advantages.",
      vi: "Còn tùy tôi mua gì. Với đồ dùng hằng ngày, tôi thích mua online ngay tại nhà cho thoải mái. Đi trung tâm thương mại có thể tốn thời gian, trong khi ứng dụng online có vô số lựa chọn và mở cửa 24/7, nửa đêm cũng mua được. Tôi thường lướt xem sản phẩm và đọc kỹ đánh giá của người dùng trước khi mua. Tuy nhiên, với quần áo và giày dép, tôi vẫn thích cửa hàng truyền thống. Tôi có thể kiểm tra chất lượng trực tiếp, sờ chất liệu tận tay và mặc thử trong phòng thử đồ để chắc chắn vừa. Tôi cũng thích dịch vụ khách hàng chu đáo, và đi mua sắm với bạn bè là một buổi đi chơi vui – đôi khi tụi tôi chỉ ngắm đồ rồi đi uống cà phê. Vì vậy, theo tôi, cách nào cũng có ưu điểm riêng."
    }
  ],

  practice: [
    { label: "What makes it good?", text: "I think ___ (price / staff / customer service / quality of products) is the most important because ___." },
    { label: "Online or in person", text: "I prefer shopping ___ because ___. However, ___." },
    { label: "STEP 1 – When / where / who", text: "I remember the time when I ___ with ___." },
    { label: "STEP 2 – Purpose", text: "I was looking for / hoping to ___." },
    { label: "STEP 3 – Development", text: "At first, I ___. After that, I ___." },
    { label: "STEP 4 – Highlight", text: "What impressed / annoyed me most was ___." },
    { label: "STEP 5 – Feelings & reflection", text: "I felt ___ because ___. Overall, it was ___." }
  ],

  notes: [
    "**Phát âm đuôi -ed trên lớp:** shopped /t/ • compared /d/ • priced /st/ • weekend nhấn âm cuối (BrE) /ˌwiːkˈend/.",
    "**Sequencing words (từ nối mở đầu):** At first / First things first / First of all / Firstly.",
    "**Ghi chú trên lớp (đã chỉnh ngữ pháp):** friendly, attentive staff → I didn’t have to wait long • What impressed me most was the excellent customer service • Because → the assistant was a good listener + quick service • Luckily → I managed to make a purchase • wear out → be worn out.",
    "**Online vs in person:** mua online (**from the comfort of my own home**) và mua ở cửa hàng thật (**brick-and-mortar stores**). Ghi chú trên lớp: quick → **time-saving**; PIC 1: when – at night – comfortable (at home).",
    "“**Reasonably priced**” (trạng từ + V3) = “**have a reasonable price**”: The shoes were reasonably priced. = The shoes had a reasonable price.",
    "“**Wear out**” (wore – worn): đồ bị mòn/hỏng do dùng nhiều → “My shoes **are worn out**”. Không viết “were wear out”.",
    "“**First things first**” luôn có “things” số nhiều. “**At first**” = lúc đầu (thường để đối lập với sau đó: At first I didn’t like it, but…); khi liệt kê, ưu tiên “First of all / Firstly”.",
    "“**Fortunately**” = “**Luckily**” (may mắn thay); trái nghĩa: “**Unfortunately**”.",
    "“At the weekend” (Anh-Anh) / “on the weekend” (Anh-Mỹ); “last weekend” không dùng giới từ.",
    "“**Make a purchase**” = “buy something” (trang trọng hơn). “**Satisfied with**”, “**annoyed by/with**”, “**impressed by**”: chú ý giới từ đi kèm.",
    "“**Regret + V-ing**” = hối tiếc đã làm gì; “regret to + V” = lấy làm tiếc phải (thông báo điều gì).",
    "“**Time-consuming**” (tốn thời gian) ≠ “**time-saving**” (tiết kiệm thời gian).",
    "“**In person**” = trực tiếp, đích thân; “**brick-and-mortar store**” = cửa hàng có mặt bằng thật (≠ online store).",
    "“**A wide range of + danh từ số nhiều**” thường đi với động từ số ít trong văn viết chuẩn: There was a wide range of products.",
    "“**Attentive**” có 2 nghĩa: chăm chú lắng nghe/quan sát, và chu đáo, để ý đến nhu cầu người khác (attentive staff)."
  ]
});
