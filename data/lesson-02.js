/* Buổi 2 — Healthy and Unhealthy Habits */
YOSE.addLesson({
  id: 2,
  title: "Healthy and Unhealthy Habits",
  titleVi: "Thói quen tốt và chưa tốt cho sức khỏe",
  topic: "Sức khỏe & Lối sống",
  summary:
    "Nói về thói quen tốt, thói quen chưa tốt, lợi ích và hậu quả đối với sức khỏe. Học theo cụm từ và thử thay thông tin cá nhân vào các mẫu câu.",
  groups: [
    { id: "good", name: "Thói quen tốt" },
    { id: "bad", name: "Thói quen chưa tốt & vấn đề sức khỏe" }
  ],

  vocab: [
    // ---- Thói quen tốt ----
    { w: "lead / have a healthy lifestyle", pos: "vphrase", group: "good", vi: "có lối sống lành mạnh",
      def: "To live in a way that is good for your body and mind.",
      formsOf: "healthy", forms: { adj: "healthy", n: "health", v: null, adv: "healthily" },
      ex: "I try to lead a healthy lifestyle.", exVi: "Tôi cố gắng sống lành mạnh." },
    { w: "eat a balanced diet", pos: "vphrase", group: "good", vi: "ăn uống cân bằng",
      def: "To eat the right amounts of different kinds of food.",
      formsOf: "balance", forms: { adj: "balanced", n: "balance", v: "balance", adv: null },
      ex: "I eat a balanced diet with plenty of vegetables.", exVi: "Tôi ăn uống cân bằng với nhiều rau." },
    { w: "eat home-cooked meals", pos: "vphrase", group: "good", vi: "ăn món nấu ở nhà",
      def: "To eat food that is cooked at home.",
      formsOf: "cook", forms: { adj: "home-cooked / cooked", n: "cook (đầu bếp) / cooking (việc nấu ăn)", v: "cook", adv: null },
      ex: "I prefer home-cooked meals because they are healthier.", exVi: "Tôi thích món nhà nấu vì chúng tốt cho sức khỏe hơn." },
    { w: "eat plenty of vegetables / fresh fruit", pos: "vphrase", group: "good", vi: "ăn nhiều rau / trái cây tươi",
      def: "To eat a lot of vegetables or fresh fruit.",
      formsOf: "fresh", forms: { adj: "fresh", n: "freshness", v: "freshen", adv: "freshly" },
      ex: "She eats plenty of fresh fruit every day.", exVi: "Cô ấy ăn nhiều trái cây tươi mỗi ngày." },
    { w: "eat whole-grain food", pos: "vphrase", group: "good", vi: "ăn thực phẩm nguyên hạt",
      def: "To eat food made from whole grains, such as brown rice or whole-wheat bread.",
      formsOf: "grain", forms: { adj: "whole-grain", n: "grain (hạt ngũ cốc)", v: null, adv: null },
      ex: "Whole-grain food can be part of a balanced diet.", exVi: "Thực phẩm nguyên hạt có thể là một phần của chế độ ăn cân bằng." },
    { w: "choose fresh ingredients", pos: "vphrase", group: "good", vi: "chọn nguyên liệu tươi",
      def: "To pick fresh food items to cook with.",
      formsOf: "choose", forms: { adj: "choosy (kén chọn)", n: "choice", v: "choose – chose – chosen", adv: null },
      ex: "Cooking at home lets me choose fresh ingredients.", exVi: "Nấu ở nhà giúp tôi chọn nguyên liệu tươi." },
    { w: "have regular meals", pos: "vphrase", group: "good", vi: "ăn đúng bữa",
      def: "To eat at about the same times every day without skipping meals.",
      formsOf: "regular", forms: { adj: "regular", n: "regularity", v: null, adv: "regularly" },
      ex: "Having regular meals gives me energy throughout the day.", exVi: "Ăn đúng bữa giúp tôi có năng lượng cả ngày." },
    { w: "exercise regularly", pos: "vphrase", group: "good", vi: "tập thể dục thường xuyên",
      def: "To do physical activity often, for example several times a week.",
      formsOf: "exercise", forms: { adj: null, n: "exercise", v: "exercise", adv: null },
      ex: "I exercise regularly, about three times a week.", exVi: "Tôi tập thể dục đều đặn, khoảng ba lần mỗi tuần." },
    { w: "go jogging / play badminton", pos: "vphrase", group: "good", vi: "đi chạy bộ / chơi cầu lông",
      def: "To run slowly for exercise / to play a sport with rackets and a shuttlecock.",
      formsOf: "jog", forms: { adj: null, n: "jogging / jogger (người chạy bộ)", v: "jog", adv: null },
      ex: "I go jogging on Mondays and play badminton at weekends.", exVi: "Tôi chạy bộ thứ Hai và chơi cầu lông cuối tuần." },
    { w: "stretch", pos: "verb", group: "good", vi: "khởi động, giãn cơ",
      def: "To make your arms, legs or body longer and straighter to loosen your muscles.",
      forms: { adj: "stretchy (co giãn)", n: "stretch / stretching", v: "stretch", adv: null },
      ex: "I stretch before exercising to reduce the risk of injury.", exVi: "Tôi giãn cơ trước khi tập để giảm nguy cơ chấn thương." },
    { w: "stay hydrated", pos: "vphrase", group: "good", vi: "bổ sung đủ nước",
      def: "To drink enough water so that your body has the liquid it needs.",
      formsOf: "hydrate", forms: { adj: "hydrated", n: "hydration", v: "hydrate", adv: null },
      ex: "I stay hydrated by drinking water regularly.", exVi: "Tôi bổ sung đủ nước bằng cách uống nước đều đặn." },
    { w: "get enough sleep / go to bed early", pos: "vphrase", group: "good", vi: "ngủ đủ giấc / đi ngủ sớm",
      def: "To sleep for as long as your body needs / to go to sleep before it gets late.",
      formsOf: "sleep", forms: { adj: "sleepy / asleep", n: "sleep", v: "sleep – slept – slept", adv: "sleepily" },
      ex: "If I go to bed early, I feel more energetic.", exVi: "Nếu đi ngủ sớm, tôi thấy tràn đầy năng lượng hơn." },
    { w: "stay active", pos: "vphrase", group: "good", vi: "duy trì vận động",
      def: "To keep moving and doing physical activities.",
      formsOf: "active", forms: { adj: "active", n: "activity", v: "activate (kích hoạt)", adv: "actively" },
      ex: "Walking every day helps me stay active.", exVi: "Đi bộ mỗi ngày giúp tôi duy trì vận động." },
    { w: "cut down on sugar", pos: "phrasal", group: "good", vi: "giảm lượng đường",
      def: "To eat or drink less sugar.",
      formsOf: "sugar", forms: { adj: "sugary", n: "sugar", v: null, adv: null },
      ex: "I am trying to cut down on sugar.", exVi: "Tôi đang cố gắng giảm lượng đường." },
    { w: "avoid processed food", pos: "vphrase", group: "good", vi: "tránh thực phẩm chế biến sẵn",
      def: "To not eat food that has been changed in factories, often with added salt, sugar or chemicals.",
      formsOf: "avoid / process", forms: { adj: "avoidable / processed", n: "avoidance / process", v: "avoid / process", adv: null },
      ex: "He avoids processed food and cooks at home.", exVi: "Anh ấy tránh đồ chế biến sẵn và nấu ăn ở nhà." },

    // ---- Thói quen chưa tốt & vấn đề sức khỏe ----
    { w: "stay up late", pos: "phrasal", group: "bad", vi: "thức khuya",
      def: "To go to bed later than usual.",
      formsOf: "late", forms: { adj: "late", n: "lateness", v: null, adv: "late" },
      ex: "I feel tired when I stay up late.", exVi: "Tôi thấy mệt khi thức khuya." },
    { w: "skip breakfast / skip meals", pos: "vphrase", group: "bad", vi: "bỏ bữa sáng / bỏ bữa",
      def: "To not eat breakfast / to miss meals.",
      ex: "Skipping breakfast makes me hungry before lunch.", exVi: "Bỏ bữa sáng khiến tôi đói trước bữa trưa." },
    { w: "overeat", pos: "verb", group: "bad", vi: "ăn quá nhiều",
      def: "To eat more food than your body needs.",
      forms: { adj: null, n: "overeating", v: "overeat – overate – overeaten", adv: null },
      ex: "If I skip lunch, I sometimes overeat at dinner.", exVi: "Nếu bỏ bữa trưa, đôi khi tôi ăn quá nhiều vào bữa tối." },
    { w: "eat too much fast food", pos: "vphrase", group: "bad", vi: "ăn quá nhiều đồ ăn nhanh",
      def: "To eat a lot of quick, cheap food such as burgers and fries.",
      ex: "Eating too much fast food can affect your health.", exVi: "Ăn quá nhiều đồ ăn nhanh có thể ảnh hưởng sức khỏe." },
    { w: "rely on instant food", pos: "vphrase", group: "bad", vi: "dựa vào đồ ăn liền",
      def: "To depend on food that is ready very quickly, such as instant noodles.",
      formsOf: "rely", forms: { adj: "reliant (phụ thuộc) / reliable (đáng tin cậy)", n: "reliance", v: "rely on", adv: "reliably" },
      ex: "I used to rely on instant food when I was busy.", exVi: "Tôi từng dựa vào đồ ăn liền khi bận." },
    { w: "drink sugary drinks / soft drinks", pos: "vphrase", group: "bad", vi: "uống đồ uống nhiều đường / nước ngọt có ga",
      def: "To drink drinks that contain a lot of sugar / cold sweet fizzy drinks.",
      formsOf: "sugar", forms: { adj: "sugary", n: "sugar", v: null, adv: null },
      ex: "Drinking too many sugary drinks may increase health risks.", exVi: "Uống quá nhiều đồ ngọt có thể làm tăng nguy cơ sức khỏe." },
    { w: "spend too much time on screens", pos: "vphrase", group: "bad", vi: "dành quá nhiều thời gian trước màn hình",
      def: "To use phones, computers or TV for too long.",
      ex: "Spending too much time on screens can cause eye strain.", exVi: "Dành quá nhiều thời gian trước màn hình có thể gây mỏi mắt." },
    { w: "live a sedentary lifestyle", pos: "vphrase", group: "bad", vi: "có lối sống ít vận động",
      def: "To live in a way that involves a lot of sitting and very little exercise.",
      formsOf: "sedentary", forms: { adj: "sedentary", n: null, v: null, adv: null },
      ex: "A sedentary lifestyle can lead to back pain.", exVi: "Lối sống ít vận động có thể dẫn đến đau lưng." },
    { w: "sit for long hours", pos: "vphrase", group: "bad", vi: "ngồi nhiều giờ liền",
      def: "To sit without moving much for a long time.",
      ex: "I sit for long hours at work.", exVi: "Tôi ngồi nhiều giờ liền ở chỗ làm." },
    { w: "feel exhausted / sleepy / stressed out", pos: "adj", group: "bad", vi: "kiệt sức / buồn ngủ / căng thẳng",
      def: "To feel extremely tired / to want to sleep / to feel very worried and nervous.",
      formsOf: "exhaust / stress", forms: { adj: "exhausted / exhausting · stressed / stressful", n: "exhaustion · stress", v: "exhaust · stress", adv: null },
      note: "-ed tả cảm giác của người (I feel exhausted); -ing/-ful tả sự việc gây ra cảm giác (an exhausting day, a stressful job).",
      ex: "I feel sleepy during the day if I do not get enough sleep.", exVi: "Tôi buồn ngủ ban ngày nếu không ngủ đủ." },
    { w: "back pain / eye strain", pos: "nphrase", group: "bad", vi: "đau lưng / mỏi mắt",
      def: "A pain in your back / a feeling of tiredness or pain in your eyes.",
      formsOf: "pain", forms: { adj: "painful", n: "pain", v: null, adv: "painfully" },
      ex: "Too much screen time can cause eye strain.", exVi: "Dùng màn hình quá lâu có thể gây mỏi mắt." },
    { w: "gain weight / lose weight / become overweight", pos: "vphrase", group: "bad", vi: "tăng cân / giảm cân / trở nên thừa cân",
      def: "To become heavier / to become lighter / to become heavier than is healthy.",
      formsOf: "weight", forms: { adj: "overweight", n: "weight", v: "weigh", adv: null },
      ex: "A balanced diet can help people maintain a healthy weight.", exVi: "Ăn cân bằng có thể giúp duy trì cân nặng khỏe mạnh." },
    { w: "increase the risk of diabetes / heart disease", pos: "vphrase", group: "bad", vi: "tăng nguy cơ tiểu đường / bệnh tim",
      def: "To make it more likely that you will get diabetes or heart disease.",
      formsOf: "risk", forms: { adj: "risky", n: "risk", v: "risk", adv: null },
      ex: "Too much sugar may increase the risk of health problems.", exVi: "Quá nhiều đường có thể làm tăng nguy cơ gặp vấn đề sức khỏe." },
    { w: "cause / lead to", pos: "verb", group: "bad", vi: "gây ra / dẫn đến",
      def: "To make something happen; to result in something.",
      forms: { adj: null, n: "cause", v: "cause / lead to", adv: null },
      ex: "A lack of exercise can lead to stress.", exVi: "Thiếu vận động có thể dẫn đến căng thẳng." }
  ],

  structures: [
    { en: "S + V + frequency, which helps me + V...", usage: "Thói quen + tần suất + lợi ích.",
      ex: "I exercise three times a week, which helps me stay fit.", exVi: "Tôi tập ba lần/tuần, điều này giúp tôi khỏe mạnh." },
    { en: "I usually + V... because + reason.", usage: "Nêu thói quen và lý do.",
      ex: "I usually eat home-cooked meals because they are healthier.", exVi: "Tôi thường ăn món nhà nấu vì chúng lành mạnh hơn." },
    { en: "S + V..., which can lead to + noun.", usage: "Nêu thói quen/hành động và hậu quả.",
      ex: "Spending too much time sitting can lead to back pain.", exVi: "Ngồi quá lâu có thể dẫn đến đau lưng." },
    { en: "Because of + noun, S + V...", usage: "Nêu nguyên nhân bằng cụm danh từ.",
      ex: "Because of my sedentary lifestyle, I sometimes have back pain.", exVi: "Vì lối sống ít vận động, đôi khi tôi bị đau lưng." },
    { en: "It is important to + V...", usage: "Nói điều gì đó quan trọng.",
      ex: "It is important to stay hydrated in hot weather.", exVi: "Bổ sung đủ nước rất quan trọng khi trời nóng." },
    { en: "I try to cut down on / avoid...", usage: "Nói điều đang cố giảm hoặc tránh.",
      ex: "I try to cut down on sugary drinks.", exVi: "Tôi cố gắng giảm uống đồ nhiều đường." }
  ],

  grammar: [
    {
      title: "Câu điều kiện loại 1",
      subtitle: "Điều kiện có thể xảy ra ở hiện tại hoặc tương lai",
      clauses: true,
      parts: [
        { label: "Mệnh đề If (điều kiện)", value: "If + S + V(s/es)", hint: "hiện tại đơn" },
        { label: "Mệnh đề chính (kết quả)", value: "S + will / can / may + V", hint: "động từ nguyên mẫu" }
      ],
      note: "Có thể đảo mệnh đề If ra sau; khi đó thường không cần dấu phẩy: “You will feel more energetic if you get enough sleep.”",
      uses: [
        "Nói về điều có thật, hoàn toàn có thể xảy ra và kết quả của nó.",
        "Đưa ra lời khuyên hoặc cảnh báo về sức khỏe, thói quen.",
        "Nói về kế hoạch, dự định phụ thuộc vào một điều kiện."
      ],
      examples: [
        { en: "If you exercise regularly, you can improve your physical health.", vi: "Nếu tập thể dục thường xuyên, bạn có thể cải thiện sức khỏe thể chất." },
        { en: "If you get enough sleep, you will feel more energetic.", vi: "Nếu ngủ đủ, bạn sẽ cảm thấy nhiều năng lượng hơn." },
        { en: "If you eat a balanced diet, you can maintain a healthy weight.", vi: "Nếu ăn uống cân bằng, bạn có thể duy trì cân nặng hợp lý." },
        { en: "If you drink too many sugary drinks, you may increase your risk of diabetes.", vi: "Nếu uống quá nhiều đồ uống có đường, bạn có thể tăng nguy cơ mắc tiểu đường." },
        { en: "If you stay up late, you will feel sleepy the next day.", vi: "Nếu thức khuya, hôm sau bạn sẽ buồn ngủ." },
        { en: "If I don't exercise regularly, I may gain weight.", vi: "Nếu không tập thể dục đều đặn, tôi có thể tăng cân." }
      ],
      variants: [
        { label: "Câu mệnh lệnh ở mệnh đề chính", en: "If you feel stressed, go for a walk.", vi: "Nếu thấy căng thẳng, hãy đi dạo." },
        { label: "Lời khuyên với should", en: "If you want to lose weight, you should cut down on sugar.", vi: "Nếu muốn giảm cân, bạn nên giảm đường." },
        { label: "Unless = If … not", en: "Unless you stay hydrated, you may get a headache.", vi: "Nếu không uống đủ nước, bạn có thể bị đau đầu. (= If you don't stay hydrated, …)" }
      ],
      mistakes: [
        { wrong: "If you will exercise regularly, you will be healthier.", right: "If you exercise regularly, you will be healthier.", why: "Không dùng will trong mệnh đề If." },
        { wrong: "If she eat more vegetables, she will feel better.", right: "If she eats more vegetables, she will feel better.", why: "Hiện tại đơn: chủ ngữ ngôi thứ ba số ít thì động từ thêm -s/-es." },
        { wrong: "Unless you don't sleep enough, you will feel tired.", right: "Unless you sleep enough, you will feel tired.", why: "Unless đã mang nghĩa phủ định, không thêm not." }
      ]
    },
    {
      title: "Câu điều kiện loại 2",
      subtitle: "Giả định không có thật hoặc khó xảy ra ở hiện tại",
      clauses: true,
      parts: [
        { label: "Mệnh đề If (giả định)", value: "If + S + V2/V-ed", hint: "quá khứ đơn · be → were" },
        { label: "Mệnh đề chính (kết quả)", value: "S + would / could / might + V", hint: "động từ nguyên mẫu" }
      ],
      note: "Dù dùng quá khứ đơn, câu vẫn nói về hiện tại. Với động từ be, văn phong chuẩn dùng were cho mọi chủ ngữ.",
      uses: [
        "Tưởng tượng điều trái với thực tế hiện tại (thực tế: tôi không có nhiều thời gian rảnh).",
        "Khuyên nhủ nhẹ nhàng với “If I were you, I would…”.",
        "Nói về điều khó có khả năng xảy ra."
      ],
      examples: [
        { en: "If I had more free time, I would exercise every day.", vi: "Nếu có nhiều thời gian rảnh hơn, tôi sẽ tập thể dục mỗi ngày." },
        { en: "If I were more organized, I could prepare healthy meals in advance.", vi: "Nếu ngăn nắp hơn, tôi có thể chuẩn bị bữa ăn lành mạnh từ trước." },
        { en: "If he did not stay up so late, he would feel less tired.", vi: "Nếu anh ấy không thức khuya như vậy, anh ấy sẽ đỡ mệt hơn." },
        { en: "If she didn't sit for long hours, she wouldn't have back pain.", vi: "Nếu cô ấy không ngồi nhiều giờ liền, cô ấy sẽ không bị đau lưng." },
        { en: "If I lived near a park, I could go jogging every morning.", vi: "Nếu sống gần công viên, tôi có thể chạy bộ mỗi sáng." }
      ],
      variants: [
        { label: "Lời khuyên: If I were you", en: "If I were you, I would cut down on sugary drinks.", vi: "Nếu tôi là bạn, tôi sẽ giảm uống đồ ngọt." },
        { label: "Câu hỏi", en: "What would you do if you had a whole day off?", vi: "Bạn sẽ làm gì nếu được nghỉ trọn một ngày?" },
        { label: "Might = có lẽ sẽ", en: "If I ate less fast food, I might lose some weight.", vi: "Nếu ăn ít đồ ăn nhanh hơn, có lẽ tôi sẽ giảm được vài cân." }
      ],
      mistakes: [
        { wrong: "If I would have more time, I would cook at home.", right: "If I had more time, I would cook at home.", why: "Không dùng would trong mệnh đề If." },
        { wrong: "If I had more time, I will exercise every day.", right: "If I had more time, I would exercise every day.", why: "Không trộn loại 1 và loại 2: mệnh đề If ở quá khứ thì mệnh đề chính dùng would." },
        { wrong: "If I was you, I would see a doctor.", right: "If I were you, I would see a doctor.", why: "“If I were you” là cụm cố định; dùng were cho mọi chủ ngữ." }
      ]
    }
  ],
  grammarCompare: {
    title: "So sánh loại 1 và loại 2",
    cols: ["", "Loại 1", "Loại 2"],
    rows: [
      ["Khả năng", "Có thật, có thể xảy ra", "Không có thật / khó xảy ra"],
      ["Thời gian", "Hiện tại – tương lai", "Hiện tại (giả định)"],
      ["Mệnh đề If", "Hiện tại đơn", "Quá khứ đơn (be → were)"],
      ["Mệnh đề chính", "will / can / may + V", "would / could / might + V"],
      ["Ví dụ", "If I get enough sleep, I will feel better.", "If I got enough sleep, I would feel better. (thực tế: tôi không ngủ đủ)"]
    ]
  },
  grammarTip:
    "Loại 1 = có khả năng thật (If + hiện tại, will/can + V). Loại 2 = giả định (If + quá khứ, would/could + V). Không dùng “will” hay “would” ngay sau If trong mẫu cơ bản.",

  exercises: {
    title: "Luyện tập câu điều kiện",
    intro: "Điền dạng đúng của động từ trong ngoặc (hoặc chọn từ gợi ý), rồi bấm Kiểm tra hoặc nhấn Enter.",
    items: [
      { q: "If you ___ too much fast food, you will gain weight.", hint: "eat", a: ["eat"], explain: "Loại 1: mệnh đề If dùng hiện tại đơn." },
      { q: "If I ___ you, I would drink more water.", hint: "be", a: ["were"], explain: "Loại 2: “If I were you” — dùng were cho mọi chủ ngữ." },
      { q: "If she exercises regularly, she ___ more energetic.", hint: "feel", a: ["will feel", "'ll feel", "can feel"], explain: "Loại 1: mệnh đề chính dùng will + V." },
      { q: "If he ___ so late, he wouldn't feel tired.", hint: "not / stay up", a: ["didn't stay up", "did not stay up"], explain: "Loại 2: mệnh đề If dùng quá khứ đơn, phủ định với didn't + V." },
      { q: "If I had a bike, I ___ to work.", hint: "cycle", a: ["would cycle", "'d cycle", "could cycle"], explain: "Loại 2: mệnh đề chính dùng would + V." },
      { q: "___ you get enough sleep, you will feel exhausted.", hint: "If / Unless", a: ["unless"], explain: "Unless = If … not: nếu không ngủ đủ thì sẽ kiệt sức." },
      { q: "If you ___ breakfast, you may overeat at lunch.", hint: "skip", a: ["skip"], explain: "Loại 1: hiện tại đơn với chủ ngữ you." },
      { q: "What ___ you do if you had more free time?", hint: "will / would", a: ["would"], explain: "Loại 2 (had) nên câu hỏi dùng would." }
    ]
  },

  sample: {
    en: "I try to lead a healthy lifestyle. I usually have home-cooked meals because I can choose fresh ingredients and control my portions. I also eat plenty of vegetables and exercise about three times a week, which helps me stay fit and reduce stress. I stay hydrated by drinking water throughout the day, and I try to get enough sleep. I used to stay up late and spend too much time on my phone, so I often felt tired. Now I am changing my routine one step at a time. If I keep these habits, I will feel healthier and more energetic.",
    vi: "Tôi cố gắng duy trì lối sống lành mạnh. Tôi thường ăn món nhà nấu vì có thể chọn nguyên liệu tươi và kiểm soát khẩu phần. Tôi cũng ăn nhiều rau và tập thể dục khoảng ba lần mỗi tuần, điều này giúp tôi khỏe mạnh và giảm căng thẳng. Tôi uống nước đều trong ngày để cơ thể đủ nước và cố ngủ đủ giấc. Trước đây tôi thường thức khuya và dùng điện thoại quá nhiều nên hay mệt. Bây giờ tôi đang thay đổi thói quen từng bước. Nếu duy trì những thói quen này, tôi sẽ khỏe mạnh và nhiều năng lượng hơn."
  },

  practice: [
    { label: "Healthy habit", text: "I usually ___ (frequency)." },
    { label: "Reason / benefit", text: "I do this because ___. It helps me ___." },
    { label: "Unhealthy habit", text: "I sometimes ___, which can lead to ___." },
    { label: "Change", text: "I am trying to ___. If I keep doing this, I will / can ___." }
  ],

  notes: [
    "“Exercise regularly” = tập thể dục thường xuyên; “play sports” = chơi thể thao.",
    "“Stay hydrated” thường nói về việc uống đủ nước; có thể dùng “drink enough water”.",
    "“Home-cooked meals” là các bữa ăn được nấu ở nhà. Tính từ ghép thường viết có gạch nối.",
    "“Because of” + danh từ/cụm danh từ; “because” + mệnh đề có chủ ngữ và động từ.",
    "“Sugary drinks” có thể làm tăng nguy cơ tăng cân và một số vấn đề sức khỏe; tránh khẳng định một đồ uống trực tiếp chắc chắn gây bệnh."
  ]
});
