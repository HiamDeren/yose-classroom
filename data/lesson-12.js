/* Buổi 12 — Job – Work – Career (Part 2)
   **chữ đậm** = từ/cụm được nhấn mạnh trên lớp */
YOSE.addLesson({
  id: 12,
  title: "Job – Work – Career P2",
  titleVi: "Trách nhiệm, nhiệm vụ và kỹ năng nghề nghiệp",
  topic: "Công việc & Nghề nghiệp",
  summary:
    "Cách nói về trách nhiệm công việc (responsible for / in charge of), nhiệm vụ cụ thể của 8 nhóm ngành, 4 nhóm kỹ năng nghề nghiệp, khung nói “Job profile – A day in their working life” và hoạt động “Find someone who…”. Cuối trang có bài tập tự chấm.",

  groups: [
    { id: "edu", name: "Trách nhiệm & Giáo dục" },
    { id: "biz", name: "Tài chính & Kinh doanh" },
    { id: "ithc", name: "Công nghệ & Y tế" },
    { id: "service", name: "Dịch vụ, Bán hàng & Marketing" },
    { id: "fsw", name: "Hình thức làm việc (Find someone who…)" }
  ],

  vocab: [
    // ---- Trách nhiệm & Giáo dục ----
    { w: "responsible for / in charge of", ipa: "/rɪˈspɒn.sə.bəl/ /ɪn tʃɑːdʒ əv/", pos: "expr", group: "edu", vi: "chịu trách nhiệm / phụ trách (+ V-ing / N)",
      def: "Having the job or duty of dealing with someone or something / having control of or responsibility for something.",
      forms: { adj: "responsible", n: "responsibility · charge", v: "charge", adv: "responsibly" },
      note: "Không dùng “responsible of”; “in charge of”, không dùng “in charge for”.",
      ex: "She is **in charge of** the sales team.", exVi: "Cô ấy phụ trách đội bán hàng." },
    { w: "duty", ipa: "/ˈdjuː.ti/", pos: "noun", group: "edu", vi: "nhiệm vụ, bổn phận",
      def: "Something that you have to do as part of your job.",
      forms: { adj: "dutiful", n: "duty", v: null, adv: "dutifully" },
      ex: "What are your main **duties** at work?", exVi: "Nhiệm vụ chính của bạn ở chỗ làm là gì?" },
    { w: "engaging", ipa: "/ɪnˈɡeɪ.dʒɪŋ/", pos: "adj", group: "edu", vi: "lôi cuốn, thu hút",
      def: "Interesting or pleasant in a way that holds your attention.",
      forms: { adj: "engaging · engaged", n: "engagement", v: "engage", adv: "engagingly" },
      ex: "Good teachers **deliver engaging lessons**.", exVi: "Giáo viên giỏi có những bài giảng lôi cuốn." },
    { w: "assess", ipa: "/əˈses/", pos: "verb", group: "edu", vi: "đánh giá",
      def: "To judge the quality, value or level of something.",
      forms: { adj: null, n: "assessment", v: "assess", adv: null },
      ex: "Teachers **assess** students’ performance by marking exam papers.", exVi: "Giáo viên đánh giá kết quả học tập bằng cách chấm bài thi." },
    { w: "constructive", ipa: "/kənˈstrʌk.tɪv/", pos: "adj", group: "edu", vi: "mang tính xây dựng",
      def: "Helpful and intended to improve something.",
      forms: { adj: "constructive", n: "construction", v: "construct", adv: "constructively" },
      ex: "My teacher always gives **constructive feedback**.", exVi: "Cô giáo luôn đưa ra nhận xét mang tính xây dựng." },

    // ---- Tài chính & Kinh doanh ----
    { w: "expenditure", ipa: "/ɪkˈspen.dɪ.tʃər/", pos: "noun", group: "biz", vi: "khoản chi tiêu",
      def: "The total amount of money that a person, company or government spends.",
      forms: { adj: "expensive", n: "expenditure · expense", v: "expend", adv: "expensively" },
      ex: "Accountants **monitor** the company’s **expenditure**.", exVi: "Kế toán giám sát chi tiêu của công ty." },
    { w: "allocate", ipa: "/ˈæl.ə.keɪt/", pos: "verb", group: "biz", vi: "phân bổ",
      def: "To give a particular amount of money, time or resources to someone or for a particular purpose.",
      forms: { adj: null, n: "allocation", v: "allocate", adv: null },
      ex: "The manager **allocates** a budget to each team.", exVi: "Quản lý phân bổ ngân sách cho từng nhóm." },
    { w: "compliance", ipa: "/kəmˈplaɪ.əns/", pos: "noun", group: "biz", vi: "sự tuân thủ; regulatory compliance",
      def: "The act of obeying a rule, law or request.",
      forms: { adj: "compliant", n: "compliance", v: "comply (with)", adv: null },
      ex: "The finance team ensures **regulatory compliance**.", exVi: "Đội tài chính đảm bảo tuân thủ quy định." },
    { w: "oversee", ipa: "/ˌəʊ.vəˈsiː/", pos: "verb", group: "biz", vi: "giám sát (oversee – oversaw – overseen)",
      def: "To watch or organize a job or activity to make sure it is being done correctly.",
      forms: { adj: null, n: "overseer", v: "oversee", adv: null },
      ex: "An office manager **oversees daily operations**.", exVi: "Quản lý văn phòng giám sát hoạt động hằng ngày." },
    { w: "delegate", ipa: "/ˈdel.ɪ.ɡeɪt/", pos: "verb", group: "biz", vi: "giao phó, ủy quyền",
      def: "To give a particular job, duty or right to someone else so that they do it for you.",
      forms: { adj: null, n: "delegation · delegate", v: "delegate", adv: null },
      ex: "A good leader knows how to **delegate responsibilities**.", exVi: "Người lãnh đạo giỏi biết cách giao việc." },
    { w: "coordinate", ipa: "/kəʊˈɔː.dɪ.neɪt/", pos: "verb", group: "biz", vi: "phối hợp, điều phối",
      def: "To make many different people or things work together effectively.",
      forms: { adj: "coordinated", n: "coordination · coordinator", v: "coordinate", adv: null },
      ex: "She **coordinates with different departments** every week.", exVi: "Cô ấy phối hợp với các phòng ban mỗi tuần." },
    { w: "administrative", ipa: "/ədˈmɪn.ɪ.strə.tɪv/", pos: "adj", group: "biz", vi: "thuộc hành chính",
      def: "Relating to the work of managing a company or organization, such as paperwork and records.",
      forms: { adj: "administrative", n: "administration · administrator", v: "administer", adv: "administratively" },
      ex: "He **handles administrative tasks** such as signing papers.", exVi: "Anh ấy xử lý việc hành chính như ký giấy tờ." },

    // ---- Công nghệ & Y tế ----
    { w: "troubleshoot", ipa: "/ˈtrʌb.əl.ʃuːt/", pos: "verb", group: "ithc", vi: "khắc phục sự cố",
      def: "To find and fix problems in a system or machine.",
      forms: { adj: null, n: "troubleshooting · troubleshooter", v: "troubleshoot", adv: null },
      ex: "IT staff **troubleshoot technical issues** every day.", exVi: "Nhân viên IT xử lý sự cố kỹ thuật hằng ngày." },
    { w: "infrastructure", ipa: "/ˈɪn.frəˌstrʌk.tʃər/", pos: "noun", group: "ithc", vi: "cơ sở hạ tầng",
      def: "The basic systems and equipment, such as networks and servers, that an organization needs to work.",
      forms: { adj: "infrastructural", n: "infrastructure", v: null, adv: null },
      ex: "He **maintains** the company’s **IT infrastructure**.", exVi: "Anh ấy bảo trì hạ tầng IT của công ty." },
    { w: "safeguard", ipa: "/ˈseɪf.ɡɑːd/", pos: "verb", group: "ithc", vi: "bảo vệ",
      def: "To protect something from harm or damage.",
      forms: { adj: null, n: "safeguard", v: "safeguard", adv: null },
      ex: "We must **safeguard sensitive information** from hackers.", exVi: "Chúng ta phải bảo vệ thông tin nhạy cảm khỏi tin tặc." },
    { w: "implement", ipa: "/ˈɪm.plɪ.ment/", pos: "verb", group: "ithc", vi: "triển khai, thực hiện",
      def: "To start using a plan or system.",
      forms: { adj: null, n: "implementation", v: "implement", adv: null },
      ex: "Our team **implements system upgrades** every month.", exVi: "Nhóm chúng tôi triển khai nâng cấp hệ thống hằng tháng." },
    { w: "diagnose", ipa: "/ˈdaɪ.əɡ.nəʊz/", pos: "verb", group: "ithc", vi: "chẩn đoán; be diagnosed with",
      def: "To recognize and name the exact character of a disease or a problem by examining it.",
      forms: { adj: "diagnostic", n: "diagnosis", v: "diagnose", adv: null },
      ex: "She **was diagnosed with** diabetes.", exVi: "Cô ấy được chẩn đoán mắc bệnh tiểu đường." },
    { w: "administer medication", ipa: "/ədˈmɪn.ɪ.stər ˌmed.ɪˈkeɪ.ʃən/", pos: "vphrase", group: "ithc", vi: "cấp phát thuốc (≠ take medicine: uống thuốc)",
      def: "To give medicine to someone.",
      forms: { adj: "medical", n: "medication · medicine", v: "administer · medicate", adv: "medically" },
      ex: "Nurses **administer medication** to patients.", exVi: "Y tá cấp phát thuốc cho bệnh nhân." },
    { w: "emergency", ipa: "/ɪˈmɜː.dʒən.si/", pos: "noun", group: "ithc", vi: "trường hợp khẩn cấp",
      def: "A dangerous or serious situation that happens suddenly and needs quick action.",
      forms: { adj: "emergency", n: "emergency", v: null, adv: null },
      ex: "Doctors must **respond** quickly **to medical emergencies**.", exVi: "Bác sĩ phải ứng phó nhanh với các ca cấp cứu." },

    // ---- Dịch vụ, Bán hàng & Marketing ----
    { w: "hospitality", ipa: "/ˌhɒs.pɪˈtæl.ə.ti/", pos: "noun", group: "service", vi: "sự hiếu khách; ngành dịch vụ khách sạn – nhà hàng",
      def: "The act of being friendly and welcoming to guests and visitors; food, drink and services provided for guests.",
      forms: { adj: "hospitable", n: "hospitality", v: null, adv: "hospitably" },
      ex: "The local people showed us great **hospitality**.", exVi: "Người dân địa phương rất hiếu khách với chúng tôi." },
    { w: "accommodate", ipa: "/əˈkɒm.ə.deɪt/", pos: "verb", group: "service", vi: "đáp ứng; cung cấp chỗ ở",
      def: "To provide what is needed or wanted; to provide a place to stay.",
      forms: { adj: "accommodating", n: "accommodation", v: "accommodate", adv: null },
      ex: "Hotel staff try to **accommodate guests’ needs**.", exVi: "Nhân viên khách sạn cố đáp ứng nhu cầu của khách." },
    { w: "hygiene", ipa: "/ˈhaɪ.dʒiːn/", pos: "noun", group: "service", vi: "vệ sinh",
      def: "The practice of keeping yourself and your surroundings clean to prevent illness.",
      forms: { adj: "hygienic", n: "hygiene", v: null, adv: "hygienically" },
      ex: "Housekeepers **maintain hygiene standards**.", exVi: "Nhân viên buồng phòng duy trì tiêu chuẩn vệ sinh." },
    { w: "complaint", ipa: "/kəmˈpleɪnt/", pos: "noun", group: "service", vi: "lời phàn nàn, khiếu nại",
      def: "A statement that something is wrong or not satisfactory.",
      forms: { adj: null, n: "complaint", v: "complain (about)", adv: null },
      ex: "Customer service staff **resolve customer complaints**.", exVi: "Nhân viên chăm sóc khách hàng giải quyết khiếu nại." },
    { w: "loyalty", ipa: "/ˈlɔɪ.əl.ti/", pos: "noun", group: "service", vi: "lòng trung thành",
      def: "The quality of continuing to support or buy from someone or something.",
      forms: { adj: "loyal", n: "loyalty", v: null, adv: "loyally" },
      ex: "Membership cards help **build customer loyalty**.", exVi: "Thẻ thành viên giúp xây dựng lòng trung thành của khách." },
    { w: "campaign", ipa: "/kæmˈpeɪn/", pos: "noun", group: "service", vi: "chiến dịch",
      def: "A planned group of activities intended to achieve a particular aim, such as selling a product.",
      forms: { adj: null, n: "campaign", v: "campaign", adv: null },
      ex: "They developed a new **advertising campaign**.", exVi: "Họ xây dựng một chiến dịch quảng cáo mới." },
    { w: "brand awareness", ipa: "/brænd əˈweə.nəs/", pos: "nphrase", group: "service", vi: "độ nhận diện thương hiệu",
      def: "How well people know and recognize a brand.",
      forms: { adj: "aware", n: "awareness · brand", v: "brand", adv: null },
      ex: "A catchy logo helps **enhance brand awareness**.", exVi: "Một logo ấn tượng giúp nâng cao nhận diện thương hiệu." },
    { w: "evaluate", ipa: "/ɪˈvæl.ju.eɪt/", pos: "verb", group: "service", vi: "đánh giá",
      def: "To judge or calculate the quality, importance or value of something.",
      forms: { adj: null, n: "evaluation", v: "evaluate", adv: null },
      ex: "Marketers **evaluate campaign performance** by measuring KPIs.", exVi: "Người làm marketing đánh giá hiệu quả chiến dịch bằng cách đo KPI." },

    // ---- Hình thức làm việc (Find someone who…) ----
    { w: "hybrid", ipa: "/ˈhaɪ.brɪd/", pos: "adj", group: "fsw", vi: "kết hợp (làm ở văn phòng và làm từ xa)",
      def: "Used to describe a way of working that involves sometimes being physically present and sometimes working at a distance using the internet.",
      forms: { adj: "hybrid", n: "hybrid", v: null, adv: null },
      ex: "My company allows **hybrid** work: three days in the office and two days at home.", exVi: "Công ty tôi cho làm kết hợp: ba ngày ở văn phòng và hai ngày ở nhà." },
    { w: "permanent", ipa: "/ˈpɜː.mə.nənt/", pos: "adj", group: "fsw", vi: "lâu dài, chính thức (≠ temporary / freelance)",
      def: "Lasting for a long time or for ever; (job) not temporary.",
      forms: { adj: "permanent", n: "permanence", v: null, adv: "permanently" },
      ex: "I prefer a **permanent** job because I want job security.", exVi: "Tôi thích công việc lâu dài vì muốn sự ổn định." },
    { w: "night shift", ipa: "/ˈnaɪt ʃɪft/", pos: "nphrase", group: "fsw", vi: "ca đêm",
      def: "A period of work during the night.",
      forms: { adj: null, n: "shift", v: "shift", adv: null },
      ex: "Nurses are often **willing to work night shifts**.", exVi: "Y tá thường sẵn sàng làm ca đêm." },
    { w: "job security", ipa: "/dʒɒb sɪˈkjʊə.rə.ti/", pos: "nphrase", group: "fsw", vi: "sự ổn định, đảm bảo việc làm",
      def: "The fact that you are not likely to lose your job.",
      forms: { adj: "secure", n: "security", v: "secure", adv: "securely" },
      ex: "Office workers often choose their job for **job security**.", exVi: "Nhân viên văn phòng thường chọn công việc vì sự ổn định." },
    { w: "be between jobs", ipa: "/bɪˈtwiːn dʒɒbz/", pos: "idiom", group: "fsw", vi: "(hài hước) đang tạm thời không có việc",
      def: "(idiom, often humorous) To not have a job at the present time but expect to get another one.",
      forms: { adj: null, n: "job", v: null, adv: null },
      ex: "Kelly **was between jobs** and unsure of what she wanted to do.", exVi: "Kelly đang tạm nghỉ việc và chưa biết mình muốn làm gì." },
    { w: "toxic", ipa: "/ˈtɒk.sɪk/", pos: "adj", group: "fsw", vi: "độc hại; (người, mối quan hệ) tiêu cực, gây hại",
      def: "(of people or relationships) Very unpleasant, unkind or harmful to others.",
      forms: { adj: "toxic", n: "toxicity", v: null, adv: null },
      ex: "She wants to work independently because her colleagues are **toxic**.", exVi: "Cô ấy muốn làm việc độc lập vì đồng nghiệp rất tiêu cực." }
  ],

  sections: [
    {
      id: "resp", nav: "Responsibilities", type: "table",
      title: "Responsibilities – nói về trách nhiệm công việc",
      cols: ["Cấu trúc", "Ví dụ"],
      rows: [
        ["**I am responsible for** + V-ing / N", "I am responsible for developing lesson plans.\nTôi chịu trách nhiệm soạn giáo án."],
        ["**I am in charge of** + V-ing / N", "I am in charge of the IT infrastructure.\nTôi phụ trách hạ tầng công nghệ thông tin."]
      ],
      note: "**Trò chơi Job Detective – Find your duties!** 1. **Pick 1 field:** bốc 1 thẻ ngành nghề • 2. **Find 3 pictures:** chọn 3 thẻ hình phù hợp • 3. **Describe & guess:** tả từng hình bằng từ đơn giản rồi đoán cụm từ mới • 4. **Match & check:** ghép với thẻ chữ của giáo viên để kiểm tra.\n**Mẹo:** tập trung vào biểu tượng và hành động • dùng từ đơn giản để tả • kiểm tra lại bằng thẻ chữ."
    },
    {
      id: "fields", nav: "Nhiệm vụ theo 8 ngành", type: "phrasebank",
      title: "Nhiệm vụ theo ngành nghề",
      intro: "Mỗi ngành có 5 nhiệm vụ chính; dòng nhỏ bên dưới là **hành động cụ thể** để giải thích nhiệm vụ đó. Ghép với “I am responsible for / in charge of + V-ing” để nói về công việc.",
      categories: [
        { title: "Education", vi: "Giáo dục",
          note: "**Ghi chú trên lớp:** organize teamwork activities • conduct games • engage students • identify high-performing students (students with good performance).",
          subs: [ { phrases: [
            { en: "develop lesson plans", vi: "soạn giáo án, lập kế hoạch bài giảng", def: "To prepare a detailed plan of what will be taught in a lesson.", note: "write down teaching ideas · prepare materials and slides before class" },
            { en: "deliver engaging lessons", vi: "giảng bài lôi cuốn", def: "To teach lessons that hold students’ attention.", note: "organize teamwork activities · conduct games and group discussions" },
            { en: "monitor students’ progress", vi: "theo dõi sự tiến bộ của học viên", def: "To watch and record how well students are improving.", note: "observe students during class · track learning charts and homework" },
            { en: "assess students’ performance", vi: "đánh giá kết quả học tập", def: "To judge how well students have learned.", note: "mark / grade exam papers · evaluate test scores and results" },
            { en: "provide constructive feedback", vi: "đưa nhận xét mang tính xây dựng", def: "To give helpful comments that help someone improve.", note: "point out mistakes gently · give advice to help students improve" } ] } ] },
        { title: "Finance & Accounting", vi: "Tài chính & Kế toán", subs: [ { phrases: [
            { en: "maintain financial records", vi: "lưu giữ hồ sơ, sổ sách tài chính", def: "To keep accurate and up-to-date records of money.", note: "collect receipts and invoices · organize money data into files / books" },
            { en: "monitor expenditure", vi: "giám sát các khoản chi tiêu", def: "To check how much money is being spent.", note: "check daily bills and spending · control company costs and expenses" },
            { en: "prepare financial statements", vi: "lập báo cáo tài chính", def: "To produce official reports showing a company’s financial situation.", note: "calculate profit and loss · write monthly / yearly financial reports" },
            { en: "allocate financial resources", vi: "phân bổ nguồn lực tài chính", def: "To decide how money is divided and used.", note: "divide budgets for each team · send money to Project A and Project B" },
            { en: "ensure regulatory compliance", vi: "đảm bảo tuân thủ quy định pháp luật", def: "To make sure a company follows the law and official rules.", note: "check tax rules and legal papers · follow government financial laws" } ] } ] },
        { title: "Business & Administration", vi: "Kinh doanh & Hành chính", subs: [ { phrases: [
            { en: "oversee daily operations", vi: "giám sát hoạt động vận hành hằng ngày", def: "To make sure everyday work is done correctly.", note: "check work schedules and deadlines · manage everyday office activities" },
            { en: "delegate responsibilities", vi: "phân công, giao phó trách nhiệm", def: "To give tasks and duties to other people.", note: "assign tasks to team members · share duties with staff" },
            { en: "coordinate with different departments", vi: "phối hợp với các phòng ban", def: "To work together with other teams to reach a shared goal.", note: "hold meetings with other teams · connect ideas between Marketing, Sales and HR" },
            { en: "handle administrative tasks", vi: "xử lý công việc hành chính, giấy tờ", def: "To deal with office paperwork and records.", note: "sign and stamp official papers · reply to emails and manage files" },
            { en: "develop business strategies", vi: "xây dựng chiến lược kinh doanh", def: "To make long-term plans for a company to succeed.", note: "set long-term company goals · plan ways to increase profit and growth" } ] } ] },
        { title: "Technology & IT", vi: "Công nghệ thông tin", subs: [ { phrases: [
            { en: "develop software applications", vi: "phát triển ứng dụng phần mềm", def: "To design and write computer programs.", note: "write computer code · build mobile apps and web programs" },
            { en: "troubleshoot technical issues", vi: "xử lý, khắc phục sự cố kỹ thuật", def: "To find and fix technical problems.", note: "find software bugs and errors · fix broken computers or network faults" },
            { en: "maintain IT infrastructure", vi: "bảo trì hạ tầng công nghệ thông tin", def: "To keep networks, servers and hardware working well.", note: "check network cables and servers · keep internet and hardware running smoothly" },
            { en: "safeguard sensitive information", vi: "bảo vệ thông tin bảo mật, nhạy cảm", def: "To protect private data from being stolen or seen.", note: "set passwords and security shields · protect private data from hackers" },
            { en: "implement system upgrades", vi: "thực hiện nâng cấp hệ thống", def: "To install newer and better versions of a system.", note: "install new software versions · replace old hardware with faster parts" } ] } ] },
        { title: "Healthcare", vi: "Y tế",
          note: "**Ghi chú trên lớp:** **patient** (bệnh nhân) – **victim** (nạn nhân) • take medicine • monitor conditions • provide free check-ups • have regular check-ups • prevent diseases • give advice to patients.",
          subs: [ { phrases: [
            { en: "diagnose medical conditions", vi: "chẩn đoán tình trạng bệnh lý", def: "To find out what illness a patient has.", note: "check X-rays and test results · find out what illness the patient has" },
            { en: "administer medication", vi: "cấp phát / tiêm thuốc cho bệnh nhân", def: "To give medicine to patients.", note: "give pills or injections · control the right dose of medicine" },
            { en: "monitor patients’ conditions", vi: "theo dõi tình trạng sức khỏe bệnh nhân", def: "To watch a patient’s health carefully over time.", note: "check heartbeat and body temperature · watch changes in a patient’s health" },
            { en: "provide medical care", vi: "cung cấp dịch vụ chăm sóc y tế", def: "To look after people who are ill or injured.", note: "clean wounds and apply bandages · look after sick or elderly patients" },
            { en: "respond to medical emergencies", vi: "ứng phó các ca cấp cứu", def: "To act quickly when someone is seriously ill or injured.", note: "move patients quickly to the ER · give urgent first aid to save lives" } ] } ] },
        { title: "Hospitality & Tourism", vi: "Khách sạn & Du lịch", subs: [ { phrases: [
            { en: "manage guest reservations", vi: "quản lý việc đặt phòng của khách", def: "To handle bookings made by guests.", note: "answer booking phone calls · arrange room check-in dates on the system" },
            { en: "coordinate travel arrangements", vi: "sắp xếp, điều phối lịch trình du lịch", def: "To organize transport, tours and plans for a trip.", note: "book flight tickets and tour buses · plan sightseeing routes on the map" },
            { en: "accommodate guests’ needs", vi: "đáp ứng nhu cầu của khách lưu trú", def: "To provide what guests need or ask for.", note: "bring extra pillows or room service food · fulfil special requests from guests" },
            { en: "maintain hygiene standards", vi: "duy trì tiêu chuẩn vệ sinh", def: "To keep rooms and public areas clean to an expected level.", note: "vacuum floors and change bedsheets · sanitize rooms following a cleaning checklist" },
            { en: "ensure guest satisfaction", vi: "đảm bảo sự hài lòng của khách", def: "To make sure guests are happy with the service.", note: "greet guests warmly and say goodbye politely · collect 5-star reviews and happy feedback" } ] } ] },
        { title: "Sales & Customer Service", vi: "Bán hàng & Chăm sóc khách hàng", subs: [ { phrases: [
            { en: "promote products and services", vi: "quảng bá sản phẩm và dịch vụ", def: "To advertise products to make people buy them.", note: "introduce new phone features · offer discounts and special gifts to buyers" },
            { en: "meet sales targets", vi: "đạt chỉ tiêu doanh số", def: "To sell the amount that the company has planned.", note: "increase monthly sales numbers · reach the company’s revenue goal" },
            { en: "address customer concerns", vi: "giải đáp băn khoăn của khách hàng", def: "To answer customers’ questions and worries.", note: "listen to buyers’ questions · explain product details to clear worries" },
            { en: "resolve customer complaints", vi: "giải quyết khiếu nại của khách hàng", def: "To deal with and fix customers’ problems.", note: "calm down angry customers · offer refunds, exchanges or apologies" },
            { en: "build customer loyalty", vi: "xây dựng lòng trung thành của khách hàng", def: "To make customers keep buying from the same company.", note: "give membership cards and rewards · keep good relationships so buyers return" } ] } ] },
        { title: "Marketing & Media", vi: "Marketing & Truyền thông",
          note: "**Ghi chú trên lớp:** **carry out an inspection** (tiến hành kiểm tra) • **sum up** / conclusion • create ideas → **come up with** new ideas.",
          subs: [ { phrases: [
            { en: "develop advertising campaigns", vi: "xây dựng chiến dịch quảng cáo", def: "To plan a series of advertisements for a product.", note: "brainstorm ad ideas on sticky notes · plan promotions across multiple channels" },
            { en: "create engaging content", vi: "sáng tạo nội dung thu hút", def: "To make interesting posts, videos and images.", note: "film videos and take product photos · write catchy posts for social media" },
            { en: "analyse market trends", vi: "phân tích xu hướng thị trường", def: "To study what customers want and how the market is changing.", note: "study customer data and world charts · research which products are popular" },
            { en: "enhance brand awareness", vi: "nâng cao độ nhận diện thương hiệu", def: "To help more people know and recognize a brand.", note: "announce the brand name widely · help more people recognize the logo" },
            { en: "evaluate campaign performance", vi: "đánh giá hiệu quả chiến dịch", def: "To measure how successful a campaign was.", note: "measure KPIs, views and clicks · check if the ad campaign succeeded or failed" } ] } ] }
      ]
    },
    {
      id: "skills", nav: "Skills & abilities", type: "phrasebank",
      title: "Skills and abilities – Kỹ năng nghề nghiệp",
      categories: [
        { title: "Communication skills", vi: "Kỹ năng giao tiếp", subs: [ { phrases: [
          { en: "active listening", vi: "lắng nghe chủ động", def: "Listening carefully and showing that you understand." },
          { en: "presentation & public speaking", vi: "thuyết trình, nói trước đám đông", def: "Speaking clearly and confidently to a group of people." },
          { en: "negotiation & persuasion", vi: "đàm phán, thuyết phục", def: "Discussing to reach an agreement and making others agree with you." },
          { en: "feedback & reporting", vi: "phản hồi, báo cáo", def: "Giving comments and reporting results to others." } ] } ] },
        { title: "Thinking skills", vi: "Kỹ năng tư duy",
          note: "**Ghi chú trên lớp:** critical thinking – think **logically** / **critically**.",
          subs: [ { phrases: [
          { en: "critical thinking", vi: "tư duy phản biện", def: "Thinking clearly, logically and carefully before you judge something." },
          { en: "complex problem-solving", vi: "giải quyết vấn đề phức tạp", def: "Finding solutions to difficult problems." },
          { en: "creative thinking", vi: "tư duy sáng tạo", def: "Coming up with new and original ideas." },
          { en: "decision making", vi: "ra quyết định", def: "Choosing the best option from several choices." } ] } ] },
        { title: "Self-management skills", vi: "Kỹ năng tự quản lý", subs: [ { phrases: [
          { en: "time management", vi: "quản lý thời gian", def: "Planning how to use your time well." },
          { en: "prioritization", vi: "sắp xếp ưu tiên", def: "Doing the most important things first." },
          { en: "stress resilience", vi: "chịu áp lực tốt", def: "The ability to handle pressure and recover from stress." },
          { en: "adaptability", vi: "khả năng thích nghi", def: "The ability to change and learn new things in new situations." } ] } ] },
        { title: "Teamwork & leadership skills", vi: "Làm việc nhóm & lãnh đạo", subs: [ { phrases: [
          { en: "emotional intelligence (EQ)", vi: "trí tuệ cảm xúc", def: "The ability to understand your own and other people’s feelings." },
          { en: "conflict resolution", vi: "giải quyết mâu thuẫn", def: "Helping people end an argument or disagreement." },
          { en: "delegation", vi: "phân công, giao việc", def: "Giving tasks to other people." },
          { en: "team collaboration", vi: "hợp tác nhóm", def: "Working together to reach a shared goal." } ] } ] }
      ]
    },
    {
      id: "profile", nav: "Job profile", type: "table",
      title: "Speaking – Job profile: A day in their working life",
      cols: ["Phần", "Nội dung cần nói"],
      rows: [
        ["**1. Basic information**", "Name • Age • Occupation"],
        ["**2. Types of work**", "Group 1: office-based / manual work • indoor / outdoor work • physical / mental work\nGroup 2: full-time / part-time • freelance / **permanent** • remote / **hybrid** / on-site"],
        ["**3. Responsibilities**", "What are their main duties? What tasks do they do every day?\n→ **I am responsible for… / I am in charge of…**"],
        ["**4. Important factors**", "Why choose this job? Choose at least TWO factors and explain why they are important to this person.\n**Career prospects** – opportunities for promotion and career development\n**Working environment** – a comfortable, safe or creative workplace\n**Salary and benefits** – a stable income, bonuses and other benefits"]
      ]
    },
    {
      id: "ideas", nav: "Ý tưởng của lớp", type: "table",
      title: "Ý tưởng của lớp: Job – lý do chọn",
      cols: ["Job", "Reasons"],
      rows: [
        ["**professional trader**", "passion + consistent and disciplined + rich"],
        ["**logistics staff**", "earn a lot of money + many fields to choose from + interesting"],
        ["**construction engineer**", "working outdoors + pursue my major + explore tall buildings (driving trucks) / unemployed"],
        ["**wedding planner**", "planning + witnessing beautiful memories of the bride and groom + creating beautiful spaces"],
        ["**public figure**", "earn money + discover the hidden side of showbiz"],
        ["**lecturer**", "career prospects + knowledge of crime • talking + sharing / imparting knowledge + inspiring → strength + valuable contribution to younger generations"],
        ["**company staff (office worker)**", "safe / **job security** + stable income → good financial management"],
        ["**public employee**", "stable income + benefits / perks"],
        ["**accountant**", "perks + health insurance + **13th-month salary** + bonuses → earn more money / career ladder + gain more knowledge of tax"],
        ["**project manager at an international company**", "critical thinking + decision-making skills → earn money + gain knowledge"]
      ]
    },
    {
      id: "fsw", nav: "Find someone who…", type: "table",
      title: "Find someone who…",
      intro: "Hỏi bạn cùng lớp theo các câu dưới đây, ghi tên và hỏi thêm (follow up) để lấy lý do.",
      cols: ["Find someone who…", "Câu hỏi tương ứng"],
      rows: [
        ["1. prefers working indoors", "Do you prefer working indoors?"],
        ["2. enjoys physical work", "Do you enjoy physical work?"],
        ["3. likes working with computers", "Do you like working with computers?"],
        ["4. wants to work from home", "Do you want to work from home?"],
        ["5. prefers working full-time", "Do you prefer working full-time?"],
        ["6. would like a part-time job", "Would you like a part-time job?"],
        ["7. enjoys working with machines", "Do you enjoy working with machines?"],
        ["8. prefers flexible working hours", "Do you prefer flexible working hours?"],
        ["9. wants to become a freelancer", "Do you want to become a freelancer?"],
        ["10. enjoys working in a team", "Do you enjoy working in a team?"],
        ["11. doesn’t mind working overtime", "Do you **mind working** overtime?"],
        ["12. prefers a **permanent** job", "Do you prefer a permanent job?"],
        ["13. would like to work outdoors", "Would you like to work outdoors?"],
        ["14. prefers **hybrid** work", "Do you prefer hybrid work?"],
        ["15. is willing to work **night shifts**", "Are you **willing to work** night shifts?"],
        ["16. enjoys solving problems", "Do you enjoy solving problems?"],
        ["17. wants a job with a stable income", "Do you want a job with a stable income?"],
        ["18. would like to do volunteer work", "Would you like to do volunteer work?"],
        ["19. prefers mental work to manual work", "Do you **prefer** mental work **to** manual work?"],
        ["20. wants to work independently", "Do you want to work independently?"]
      ],
      note: "**Câu follow-up mẫu trên lớp (đã chỉnh):**\n• enjoys physical work → She doesn’t need to think too much.\n• wants to work from home → He feels comfortable, doesn’t need to go out and can have flexible time.\n• wants to become a freelancer → She can have flexible time and wants to become a famous person (KOL).\n• enjoys working in a team → He can learn and improve many skills from his teammates, such as communication skills.\n• wants to work independently → She is afraid that her colleagues are **toxic**."
    }
  ],

  structuresIntro: "Mẫu câu nói về trách nhiệm (1–2), sở thích công việc trong “Find someone who…” (3–5) và lý do chọn nghề trong Job profile (6–7).",
  structures: [
    { en: "I am **responsible for** + V-ing / N", usage: "Tôi chịu trách nhiệm…", ex: "I am responsible for developing lesson plans.", exVi: "Tôi chịu trách nhiệm soạn giáo án." },
    { en: "I am **in charge of** + V-ing / N", usage: "Tôi phụ trách…", ex: "I am in charge of the IT infrastructure.", exVi: "Tôi phụ trách hạ tầng công nghệ thông tin." },
    { en: "**prefer** A **to** B / prefer V-ing **to** V-ing", usage: "thích A hơn B (không dùng “than”)", ex: "I prefer mental work to manual work.", exVi: "Tôi thích công việc trí óc hơn lao động tay chân." },
    { en: "enjoy / mind / prefer + **V-ing**", usage: "động từ đi với V-ing", ex: "He doesn’t mind working overtime.", exVi: "Anh ấy không ngại làm thêm giờ." },
    { en: "be willing / would like / want + **to V**", usage: "cấu trúc đi với to V", ex: "She is willing to work night shifts.", exVi: "Cô ấy sẵn sàng làm ca đêm." },
    { en: "I chose this job for two main reasons. **First**, … **Second**, …", usage: "Nêu hai lý do chọn nghề (phần Important factors)", ex: "First, it offers good career prospects. Second, the working environment is comfortable.", exVi: "Thứ nhất, nó có triển vọng nghề nghiệp tốt. Thứ hai, môi trường làm việc thoải mái." },
    { en: "**Thanks to** this job, I can + V", usage: "Nhờ công việc này, tôi có thể…", ex: "Thanks to this job, I can improve my complex problem-solving and time management skills.", exVi: "Nhờ công việc này, tôi cải thiện được kỹ năng giải quyết vấn đề phức tạp và quản lý thời gian." }
  ],

  grammar: [
    {
      title: "Động từ + V-ing hay to V?",
      subtitle: "Dùng nhiều khi hỏi “Find someone who…” và nói về sở thích công việc",
      uses: [
        "+ V-ing: enjoy, mind, prefer, be responsible for, be in charge of — sau giới từ luôn dùng V-ing.",
        "+ to V: be willing to, would like to, want to.",
        "prefer A to B / prefer V-ing to V-ing — dùng “to”, không dùng “than”."
      ],
      examples: [
        { en: "She enjoys working in a team.", vi: "Cô ấy thích làm việc nhóm." },
        { en: "He doesn’t mind working overtime.", vi: "Anh ấy không ngại làm thêm giờ." },
        { en: "I am in charge of training new staff.", vi: "Tôi phụ trách đào tạo nhân viên mới." },
        { en: "Nurses are often willing to work night shifts.", vi: "Y tá thường sẵn sàng làm ca đêm." },
        { en: "Would you like to do volunteer work?", vi: "Bạn có muốn làm tình nguyện không?" },
        { en: "I prefer mental work to manual work.", vi: "Tôi thích công việc trí óc hơn lao động tay chân." }
      ],
      mistakes: [
        { wrong: "He enjoys to work with machines.", right: "He enjoys working with machines.", why: "enjoy + V-ing." },
        { wrong: "He doesn’t mind to work overtime.", right: "He doesn’t mind working overtime.", why: "mind + V-ing." },
        { wrong: "She is willing working night shifts.", right: "She is willing to work night shifts.", why: "be willing to + V." },
        { wrong: "I prefer mental work than manual work.", right: "I prefer mental work to manual work.", why: "prefer A to B." },
        { wrong: "I am responsible of managing guest reservations.", right: "I am responsible for managing guest reservations.", why: "be responsible for." }
      ]
    }
  ],

  samples: [
    {
      title: "Bài mẫu: My job profile (web developer)",
      en: "[Basic information] I am 26 years old, and I work as a web developer in the R&D department of a manufacturing company. [Types of work] My job is **office-based** and mostly mental work. It is a full-time, **permanent** and on-site job, so I work at my desk every day. [Responsibilities] I am **responsible for developing software applications** for other departments. I am also **in charge of troubleshooting technical issues**, maintaining the systems and **safeguarding sensitive information**. Every day, I **coordinate with different departments** to understand what they need. [Important factors] I chose this job for two main reasons. First, it offers good **career prospects** because I can learn new technologies and get promoted. Second, the **working environment** is comfortable and my colleagues are friendly. Thanks to this job, I can improve my **complex problem-solving** and **time management** skills.",
      vi: "Tôi 26 tuổi, làm web developer ở phòng R&D của một công ty sản xuất. Công việc của tôi là công việc văn phòng, chủ yếu dùng trí óc. Đây là công việc toàn thời gian, chính thức và làm tại công ty, nên ngày nào tôi cũng làm ở bàn. Tôi chịu trách nhiệm phát triển phần mềm cho các phòng ban khác. Tôi cũng phụ trách xử lý sự cố kỹ thuật, bảo trì hệ thống và bảo vệ thông tin nhạy cảm. Mỗi ngày tôi phối hợp với các phòng ban để hiểu họ cần gì. Tôi chọn công việc này vì hai lý do chính. Thứ nhất, triển vọng nghề nghiệp tốt vì tôi có thể học công nghệ mới và được thăng tiến. Thứ hai, môi trường làm việc thoải mái và đồng nghiệp thân thiện. Nhờ công việc này, tôi cải thiện được kỹ năng giải quyết vấn đề phức tạp và quản lý thời gian."
    }
  ],

  practice: [
    { label: "Basic information", text: "I am ___ years old, and I work as a/an ___ at ___." },
    { label: "Types of work", text: "My job is ___ (office-based / manual) and mostly ___ work. It is a ___ (full-time / part-time), ___ (remote / hybrid / on-site) job." },
    { label: "Responsibilities", text: "I am responsible for ___. I am also in charge of ___." },
    { label: "Important factors", text: "I chose this job for two main reasons. First, ___. Second, ___." },
    { label: "Skills", text: "Thanks to this job, I can improve my ___ skills." }
  ],

  notes: [
    "“Be **responsible for** + V-ing / N” và “be **in charge of** + V-ing / N”: I am responsible for checking… (không dùng “of” sau responsible).",
    "“**Responsible**” là tính từ; danh từ là “**responsibility**”: have responsibility for sth.",
    "“**Prefer A to B**” / “prefer V-ing to V-ing” – không dùng “than”: I prefer mental work to manual work.",
    "Động từ + V-ing: **enjoy, mind, prefer**: doesn’t mind working overtime. Cấu trúc + to V: **be willing to, would like to, want to**.",
    "“**Hybrid**” = vừa ở văn phòng vừa làm từ xa; “**remote**” = làm từ xa hoàn toàn; “**on-site**” = làm tại chỗ.",
    "“**Permanent**” (lâu dài, chính thức) ≠ “freelance” (tự do) / “temporary” (tạm thời).",
    "“**Patient**” = bệnh nhân; “**victim**” = nạn nhân.",
    "“**Take medicine**” = uống thuốc (người bệnh); “**administer medication**” = cấp phát thuốc (nhân viên y tế).",
    "“**Diagnose** sb **with** sth” / “**be diagnosed with** sth”: She was diagnosed with diabetes.",
    "Ghi chú “greet and farewell guests” → tự nhiên hơn: “greet guests warmly and say goodbye politely”.",
    "Ghi chú “write monthly/yearly money reports” → “monthly / yearly **financial reports**”.",
    "Ghi chú “find out intelligent students” → “**identify high-performing students**”; “conducting games” → “**conduct games**”.",
    "Ghi chú “sum ups” → “**sum up**” (động từ) hoặc “**summary**” (danh từ); “create ideas” → “**come up with** new ideas”.",
    "“**Analyse**” (Anh-Anh) = “**analyze**” (Anh-Mỹ).",
    "“**13th-month salary**” = lương tháng 13; “**groom**” = chú rể, “**bride**” = cô dâu.",
    "“Her colleagues **are** toxic” – chủ ngữ số nhiều đi với “are”."
  ]
});
