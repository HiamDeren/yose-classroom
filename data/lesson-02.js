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
      formsOf: "healthy", forms: { adj: "healthy", n: "health", v: null, adv: "healthily" },
      ex: "I try to lead a healthy lifestyle.", exVi: "Tôi cố gắng sống lành mạnh." },
    { w: "eat a balanced diet", pos: "vphrase", group: "good", vi: "ăn uống cân bằng",
      formsOf: "balance", forms: { adj: "balanced", n: "balance", v: "balance", adv: null },
      ex: "I eat a balanced diet with plenty of vegetables.", exVi: "Tôi ăn uống cân bằng với nhiều rau." },
    { w: "eat home-cooked meals", pos: "vphrase", group: "good", vi: "ăn món nấu ở nhà",
      formsOf: "cook", forms: { adj: "home-cooked / cooked", n: "cook (đầu bếp) / cooking (việc nấu ăn)", v: "cook", adv: null },
      ex: "I prefer home-cooked meals because they are healthier.", exVi: "Tôi thích món nhà nấu vì chúng tốt cho sức khỏe hơn." },
    { w: "eat plenty of vegetables / fresh fruit", pos: "vphrase", group: "good", vi: "ăn nhiều rau / trái cây tươi",
      formsOf: "fresh", forms: { adj: "fresh", n: "freshness", v: "freshen", adv: "freshly" },
      ex: "She eats plenty of fresh fruit every day.", exVi: "Cô ấy ăn nhiều trái cây tươi mỗi ngày." },
    { w: "eat whole-grain food", pos: "vphrase", group: "good", vi: "ăn thực phẩm nguyên hạt",
      formsOf: "grain", forms: { adj: "whole-grain", n: "grain (hạt ngũ cốc)", v: null, adv: null },
      ex: "Whole-grain food can be part of a balanced diet.", exVi: "Thực phẩm nguyên hạt có thể là một phần của chế độ ăn cân bằng." },
    { w: "choose fresh ingredients", pos: "vphrase", group: "good", vi: "chọn nguyên liệu tươi",
      formsOf: "choose", forms: { adj: "choosy (kén chọn)", n: "choice", v: "choose – chose – chosen", adv: null },
      ex: "Cooking at home lets me choose fresh ingredients.", exVi: "Nấu ở nhà giúp tôi chọn nguyên liệu tươi." },
    { w: "have regular meals", pos: "vphrase", group: "good", vi: "ăn đúng bữa",
      formsOf: "regular", forms: { adj: "regular", n: "regularity", v: null, adv: "regularly" },
      ex: "Having regular meals gives me energy throughout the day.", exVi: "Ăn đúng bữa giúp tôi có năng lượng cả ngày." },
    { w: "exercise regularly", pos: "vphrase", group: "good", vi: "tập thể dục thường xuyên",
      formsOf: "exercise", forms: { adj: null, n: "exercise", v: "exercise", adv: null },
      ex: "I exercise regularly, about three times a week.", exVi: "Tôi tập thể dục đều đặn, khoảng ba lần mỗi tuần." },
    { w: "go jogging / play badminton", pos: "vphrase", group: "good", vi: "đi chạy bộ / chơi cầu lông",
      formsOf: "jog", forms: { adj: null, n: "jogging / jogger (người chạy bộ)", v: "jog", adv: null },
      ex: "I go jogging on Mondays and play badminton at weekends.", exVi: "Tôi chạy bộ thứ Hai và chơi cầu lông cuối tuần." },
    { w: "stretch", pos: "verb", group: "good", vi: "khởi động, giãn cơ",
      forms: { adj: "stretchy (co giãn)", n: "stretch / stretching", v: "stretch", adv: null },
      ex: "I stretch before exercising to reduce the risk of injury.", exVi: "Tôi giãn cơ trước khi tập để giảm nguy cơ chấn thương." },
    { w: "stay hydrated", pos: "vphrase", group: "good", vi: "bổ sung đủ nước",
      formsOf: "hydrate", forms: { adj: "hydrated", n: "hydration", v: "hydrate", adv: null },
      ex: "I stay hydrated by drinking water regularly.", exVi: "Tôi bổ sung đủ nước bằng cách uống nước đều đặn." },
    { w: "get enough sleep / go to bed early", pos: "vphrase", group: "good", vi: "ngủ đủ giấc / đi ngủ sớm",
      formsOf: "sleep", forms: { adj: "sleepy / asleep", n: "sleep", v: "sleep – slept – slept", adv: "sleepily" },
      ex: "If I go to bed early, I feel more energetic.", exVi: "Nếu đi ngủ sớm, tôi thấy tràn đầy năng lượng hơn." },
    { w: "stay active", pos: "vphrase", group: "good", vi: "duy trì vận động",
      formsOf: "active", forms: { adj: "active", n: "activity", v: "activate (kích hoạt)", adv: "actively" },
      ex: "Walking every day helps me stay active.", exVi: "Đi bộ mỗi ngày giúp tôi duy trì vận động." },
    { w: "cut down on sugar", pos: "phrasal", group: "good", vi: "giảm lượng đường",
      formsOf: "sugar", forms: { adj: "sugary", n: "sugar", v: null, adv: null },
      ex: "I am trying to cut down on sugar.", exVi: "Tôi đang cố gắng giảm lượng đường." },
    { w: "avoid processed food", pos: "vphrase", group: "good", vi: "tránh thực phẩm chế biến sẵn",
      formsOf: "avoid / process", forms: { adj: "avoidable / processed", n: "avoidance / process", v: "avoid / process", adv: null },
      ex: "He avoids processed food and cooks at home.", exVi: "Anh ấy tránh đồ chế biến sẵn và nấu ăn ở nhà." },

    // ---- Thói quen chưa tốt & vấn đề sức khỏe ----
    { w: "stay up late", pos: "phrasal", group: "bad", vi: "thức khuya",
      formsOf: "late", forms: { adj: "late", n: "lateness", v: null, adv: "late" },
      ex: "I feel tired when I stay up late.", exVi: "Tôi thấy mệt khi thức khuya." },
    { w: "skip breakfast / skip meals", pos: "vphrase", group: "bad", vi: "bỏ bữa sáng / bỏ bữa",
      ex: "Skipping breakfast makes me hungry before lunch.", exVi: "Bỏ bữa sáng khiến tôi đói trước bữa trưa." },
    { w: "overeat", pos: "verb", group: "bad", vi: "ăn quá nhiều",
      forms: { adj: null, n: "overeating", v: "overeat – overate – overeaten", adv: null },
      ex: "If I skip lunch, I sometimes overeat at dinner.", exVi: "Nếu bỏ bữa trưa, đôi khi tôi ăn quá nhiều vào bữa tối." },
    { w: "eat too much fast food", pos: "vphrase", group: "bad", vi: "ăn quá nhiều đồ ăn nhanh",
      ex: "Eating too much fast food can affect your health.", exVi: "Ăn quá nhiều đồ ăn nhanh có thể ảnh hưởng sức khỏe." },
    { w: "rely on instant food", pos: "vphrase", group: "bad", vi: "dựa vào đồ ăn liền",
      formsOf: "rely", forms: { adj: "reliant (phụ thuộc) / reliable (đáng tin cậy)", n: "reliance", v: "rely on", adv: "reliably" },
      ex: "I used to rely on instant food when I was busy.", exVi: "Tôi từng dựa vào đồ ăn liền khi bận." },
    { w: "drink sugary drinks / soft drinks", pos: "vphrase", group: "bad", vi: "uống đồ uống nhiều đường / nước ngọt có ga",
      formsOf: "sugar", forms: { adj: "sugary", n: "sugar", v: null, adv: null },
      ex: "Drinking too many sugary drinks may increase health risks.", exVi: "Uống quá nhiều đồ ngọt có thể làm tăng nguy cơ sức khỏe." },
    { w: "spend too much time on screens", pos: "vphrase", group: "bad", vi: "dành quá nhiều thời gian trước màn hình",
      ex: "Spending too much time on screens can cause eye strain.", exVi: "Dành quá nhiều thời gian trước màn hình có thể gây mỏi mắt." },
    { w: "live a sedentary lifestyle", pos: "vphrase", group: "bad", vi: "có lối sống ít vận động",
      formsOf: "sedentary", forms: { adj: "sedentary", n: null, v: null, adv: null },
      ex: "A sedentary lifestyle can lead to back pain.", exVi: "Lối sống ít vận động có thể dẫn đến đau lưng." },
    { w: "sit for long hours", pos: "vphrase", group: "bad", vi: "ngồi nhiều giờ liền",
      ex: "I sit for long hours at work.", exVi: "Tôi ngồi nhiều giờ liền ở chỗ làm." },
    { w: "feel exhausted / sleepy / stressed out", pos: "adj", group: "bad", vi: "kiệt sức / buồn ngủ / căng thẳng",
      formsOf: "exhaust / stress", forms: { adj: "exhausted / exhausting · stressed / stressful", n: "exhaustion · stress", v: "exhaust · stress", adv: null },
      note: "-ed tả cảm giác của người (I feel exhausted); -ing/-ful tả sự việc gây ra cảm giác (an exhausting day, a stressful job).",
      ex: "I feel sleepy during the day if I do not get enough sleep.", exVi: "Tôi buồn ngủ ban ngày nếu không ngủ đủ." },
    { w: "back pain / eye strain", pos: "nphrase", group: "bad", vi: "đau lưng / mỏi mắt",
      formsOf: "pain", forms: { adj: "painful", n: "pain", v: null, adv: "painfully" },
      ex: "Too much screen time can cause eye strain.", exVi: "Dùng màn hình quá lâu có thể gây mỏi mắt." },
    { w: "gain weight / lose weight / become overweight", pos: "vphrase", group: "bad", vi: "tăng cân / giảm cân / trở nên thừa cân",
      formsOf: "weight", forms: { adj: "overweight", n: "weight", v: "weigh", adv: null },
      ex: "A balanced diet can help people maintain a healthy weight.", exVi: "Ăn cân bằng có thể giúp duy trì cân nặng khỏe mạnh." },
    { w: "increase the risk of diabetes / heart disease", pos: "vphrase", group: "bad", vi: "tăng nguy cơ tiểu đường / bệnh tim",
      formsOf: "risk", forms: { adj: "risky", n: "risk", v: "risk", adv: null },
      ex: "Too much sugar may increase the risk of health problems.", exVi: "Quá nhiều đường có thể làm tăng nguy cơ gặp vấn đề sức khỏe." },
    { w: "cause / lead to", pos: "verb", group: "bad", vi: "gây ra / dẫn đến",
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
      subtitle: "Điều kiện có thể xảy ra",
      formula: "If + hiện tại đơn, S + will / can / may + V (nguyên mẫu)",
      note: "Có thể đảo mệnh đề If ra sau; khi đó thường không cần dấu phẩy.",
      examples: [
        { en: "If you exercise regularly, you can improve your physical health.", vi: "Nếu tập thể dục thường xuyên, bạn có thể cải thiện sức khỏe thể chất." },
        { en: "If you get enough sleep, you will feel more energetic.", vi: "Nếu ngủ đủ, bạn sẽ cảm thấy nhiều năng lượng hơn." },
        { en: "If you eat a balanced diet, you can maintain a healthy weight.", vi: "Nếu ăn uống cân bằng, bạn có thể duy trì cân nặng hợp lý." },
        { en: "If you drink too many sugary drinks, you may increase your risk of diabetes.", vi: "Nếu uống quá nhiều đồ uống có đường, bạn có thể tăng nguy cơ mắc tiểu đường." }
      ]
    },
    {
      title: "Câu điều kiện loại 2",
      subtitle: "Tình huống giả định hoặc khó xảy ra ở hiện tại",
      formula: "If + quá khứ đơn, S + would / could + V (nguyên mẫu)",
      note: "Với động từ be, thường dùng were cho mọi chủ ngữ trong văn phong chuẩn.",
      examples: [
        { en: "If I had more free time, I would exercise every day.", vi: "Nếu có nhiều thời gian rảnh hơn, tôi sẽ tập thể dục mỗi ngày." },
        { en: "If I were more organized, I could prepare healthy meals in advance.", vi: "Nếu ngăn nắp hơn, tôi có thể chuẩn bị bữa ăn lành mạnh từ trước." },
        { en: "If he did not stay up so late, he would feel less tired.", vi: "Nếu anh ấy không thức khuya như vậy, anh ấy sẽ đỡ mệt hơn." }
      ]
    }
  ],
  grammarTip:
    "Loại 1 = có khả năng thật (If + hiện tại, will/can + V). Loại 2 = giả định (If + quá khứ, would/could + V). Không dùng “will” ngay sau If trong mẫu cơ bản.",

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
