/* Buổi 11 — Job – Work – Career (Part 1)
   **chữ đậm** = từ/cụm được nhấn mạnh trên lớp */
YOSE.addLesson({
  id: 11,
  title: "Job – Work – Career P1",
  titleVi: "Công việc, nghề nghiệp và sự nghiệp (phần 1)",
  topic: "Công việc & Nghề nghiệp",
  summary:
    "Ôn bài đọc True / False / Not Given, phân biệt job – work – career, so sánh công việc văn phòng và lao động tay chân, cân bằng công việc – cuộc sống, tính từ -ed / -ing và ưu nhược điểm của các hình thức làm việc (full-time, part-time, freelance, volunteer). Cuối trang có bài tập tự chấm.",

  groups: [
    { id: "tfng", name: "Review: True / False / Not Given" },
    { id: "jwc", name: "Job – Work – Career" },
    { id: "types", name: "Office-based vs Manual work" },
    { id: "balance", name: "Work-life balance" },
    { id: "employment", name: "Employment arrangements" }
  ],

  vocab: [
    // ---- Review: True / False / Not Given ----
    { w: "scanning", ipa: "/ˈskæn.ɪŋ/", pos: "noun", group: "tfng", vi: "đọc lướt tìm thông tin",
      def: "Reading a text quickly to find a particular piece of information, such as a name, number or key word.",
      forms: { adj: null, n: "scan · scanning", v: "scan", adv: null },
      ex: "Use **scanning** to find key words in the passage quickly.", exVi: "Dùng kỹ năng scanning để tìm nhanh từ khóa trong bài." },
    { w: "paraphrase", ipa: "/ˈpær.ə.freɪz/", pos: "verb", group: "tfng", vi: "diễn đạt lại bằng từ khác (cùng ý, khác cách nói)",
      def: "To express the same meaning using different words.",
      forms: { adj: null, n: "paraphrase", v: "paraphrase", adv: null },
      ex: "“Keep in touch” is a **paraphrase** of “stay connected”.", exVi: "“Keep in touch” là cách diễn đạt khác của “stay connected”." },
    { w: "keep in touch (with)", ipa: "/kiːp ɪn tʌtʃ/", pos: "vphrase", group: "tfng", vi: "giữ liên lạc (= stay connected)",
      def: "To continue to communicate with someone, for example by phone or messages.",
      forms: { adj: null, n: "touch", v: "keep in touch", adv: null },
      ex: "Social media helps people **keep in touch with** distant friends.", exVi: "Mạng xã hội giúp mọi người giữ liên lạc với bạn bè ở xa." },
    { w: "distant", ipa: "/ˈdɪs.tənt/", pos: "adj", group: "tfng", vi: "xa xôi (= live far away)",
      def: "Far away in space or time.",
      forms: { adj: "distant", n: "distance", v: null, adv: "distantly" },
      ex: "I call my **distant** relatives on video every week.", exVi: "Tôi gọi video cho họ hàng ở xa mỗi tuần." },
    { w: "detrimental / harmful", ipa: "/ˌdet.rɪˈmen.təl/ /ˈhɑːm.fəl/", pos: "adj", group: "tfng", vi: "có hại (= negative, bad)",
      def: "Causing harm or damage.",
      forms: { adj: "detrimental · harmful", n: "detriment · harm", v: "harm", adv: "detrimentally · harmfully" },
      ex: "Too much screen time can be **detrimental** to your health.", exVi: "Dùng màn hình quá nhiều có thể có hại cho sức khỏe." },
    { w: "average", ipa: "/ˈæv.ər.ɪdʒ/", pos: "noun", group: "tfng", vi: "trung bình; an average of + số",
      def: "The usual or typical amount, found by adding several amounts together and dividing by the number of amounts.",
      forms: { adj: "average", n: "average", v: "average", adv: null },
      ex: "Young people spend **an average of** four hours a day online.", exVi: "Người trẻ dành trung bình bốn giờ mỗi ngày trên mạng." },

    // ---- Job – Work – Career ----
    { w: "job", ipa: "/dʒɒb/", pos: "noun", group: "jwc", vi: "việc làm, vị trí công việc (đếm được)",
      def: "A specific position that you do regularly to earn money.",
      forms: { adj: "jobless", n: "job", v: null, adv: null },
      note: "Đếm được: a job, two jobs. “Have a job **as** + nghề”.",
      ex: "I have a **job** as an English teacher.", exVi: "Tôi làm giáo viên tiếng Anh." },
    { w: "work", ipa: "/wɜːk/", pos: "noun", group: "jwc", vi: "công việc (không đếm được); làm việc",
      def: "Tasks or activities that you do, paid or unpaid; also the place where you do your job.",
      forms: { adj: "working", n: "work · worker", v: "work", adv: null },
      note: "Không đếm được: a lot of work (không nói “works”).",
      ex: "I have a lot of **work** to do, such as preparing lessons and marking tests.", exVi: "Tôi có nhiều việc phải làm, như soạn bài và chấm bài kiểm tra." },
    { w: "career", ipa: "/kəˈrɪər/", pos: "noun", group: "jwc", vi: "sự nghiệp; career-minded = coi trọng sự nghiệp",
      def: "The job or series of jobs that you do during your working life, especially if you continue to get better jobs and earn more money.",
      forms: { adj: "career-minded", n: "career", v: null, adv: null },
      ex: "She wants to build a successful **career** in education.", exVi: "Cô ấy muốn xây dựng sự nghiệp thành công trong ngành giáo dục." },
    { w: "career ladder / career prospects", ipa: "/kəˈrɪə ˌlæd.ər/ /ˈprɒs.pekts/", pos: "nphrase", group: "jwc", vi: "nấc thang sự nghiệp / triển vọng nghề nghiệp",
      def: "The series of steps by which you move to better jobs / the chances of being successful in your job in the future.",
      forms: { adj: null, n: "ladder · prospect", v: null, adv: null },
      ex: "I took this new job because the **career prospects** were much better.", exVi: "Tôi nhận công việc mới vì triển vọng nghề nghiệp tốt hơn nhiều." },
    { w: "tutor / lecturer", ipa: "/ˈtjuː.tər/ /ˈlek.tʃər.ər/", pos: "noun", group: "jwc", vi: "gia sư / giảng viên đại học",
      def: "A teacher who teaches one student or a small group / a teacher at a university or college.",
      forms: { adj: null, n: "tutor · lecturer · lecture", v: "tutor · lecture", adv: null },
      ex: "He started as a **tutor** and is now a university **lecturer**.", exVi: "Anh ấy bắt đầu làm gia sư và giờ là giảng viên đại học." },
    { w: "salary / wages", ipa: "/ˈsæl.ər.i/ /ˈweɪ.dʒɪz/", pos: "noun", group: "jwc", vi: "lương tháng / tiền công (theo giờ, ngày, tuần)",
      def: "A fixed amount of money paid every month for a job / money paid every hour, day or week, often for manual work.",
      forms: { adj: "salaried", n: "salary · wage", v: null, adv: null },
      ex: "Office workers receive a monthly **salary**, while factory workers often get weekly **wages**.", exVi: "Nhân viên văn phòng nhận lương tháng, còn công nhân thường nhận tiền công theo tuần." },

    // ---- Office-based vs Manual work ----
    { w: "office-based", ipa: "/ˈɒf.ɪs beɪst/", pos: "adj", group: "types", vi: "làm việc tại văn phòng",
      def: "Done mainly in an office.",
      forms: { adj: "office-based", n: "office", v: null, adv: null },
      ex: "Accountants usually have **office-based** jobs.", exVi: "Kế toán thường làm công việc văn phòng." },
    { w: "manual", ipa: "/ˈmæn.ju.əl/", pos: "adj", group: "types", vi: "làm bằng tay, lao động tay chân",
      def: "Done with the hands; involving physical work.",
      forms: { adj: "manual", n: "manual (sách hướng dẫn)", v: null, adv: "manually" },
      ex: "Construction workers do **manual** work every day.", exVi: "Công nhân xây dựng làm việc tay chân mỗi ngày." },
    { w: "paperwork", ipa: "/ˈpeɪ.pə.wɜːk/", pos: "noun", group: "types", vi: "giấy tờ, công việc giấy tờ; deal with paperwork",
      def: "The part of a job that involves writing letters, reports and filling in forms.",
      forms: { adj: null, n: "paperwork", v: null, adv: null },
      ex: "Do you like dealing with **paperwork**? – No, I feel bored.", exVi: "Bạn có thích xử lý giấy tờ không? – Không, tôi thấy chán." },
    { w: "colleague", ipa: "/ˈkɒl.iːɡ/", pos: "noun", group: "types", vi: "đồng nghiệp",
      def: "One of a group of people who work together.",
      forms: { adj: null, n: "colleague", v: null, adv: null },
      ex: "Working with **colleagues** helps me learn from others.", exVi: "Làm việc với đồng nghiệp giúp tôi học hỏi từ người khác." },
    { w: "fixed / flexible working hours", ipa: "/fɪkst/ /ˈflek.sə.bəl/", pos: "nphrase", group: "types", vi: "giờ làm cố định / linh hoạt",
      def: "Working hours that are set and do not change / working hours that you can change to suit yourself.",
      forms: { adj: "fixed · flexible", n: "flexibility", v: "fix · flex", adv: "flexibly" },
      ex: "**Fixed working hours** help me build a daily routine.", exVi: "Giờ làm cố định giúp tôi xây dựng thói quen hằng ngày." },
    { w: "discipline", ipa: "/ˈdɪs.ə.plɪn/", pos: "noun", group: "types", vi: "tính kỷ luật",
      def: "The ability to control yourself and to make yourself work hard or follow rules.",
      forms: { adj: "disciplined", n: "discipline", v: "discipline", adv: null },
      ex: "Fixed working hours require **discipline**, so I manage my time better.", exVi: "Giờ làm cố định đòi hỏi kỷ luật nên tôi quản lý thời gian tốt hơn." },
    { w: "computer literacy", ipa: "/kəmˈpjuː.tər ˈlɪt.ər.ə.si/", pos: "nphrase", group: "types", vi: "kỹ năng tin học",
      def: "The ability to use computers and software well.",
      forms: { adj: "computer-literate", n: "literacy", v: null, adv: null },
      ex: "Office jobs require **computer literacy**.", exVi: "Công việc văn phòng đòi hỏi kỹ năng tin học." },
    { w: "hands-on", ipa: "/ˌhændzˈɒn/", pos: "adj", group: "types", vi: "thực hành, thực tế (= practical)",
      def: "Involving doing something yourself rather than only learning or reading about it; practical.",
      forms: { adj: "hands-on", n: null, v: null, adv: null },
      ex: "Mechanics need **hands-on** skills.", exVi: "Thợ máy cần kỹ năng thực hành." },
    { w: "demanding", ipa: "/dɪˈmɑːn.dɪŋ/", pos: "adj", group: "types", vi: "đòi hỏi nhiều (thời gian, sức lực); physically / mentally demanding",
      def: "Needing a lot of time, attention or energy.",
      forms: { adj: "demanding", n: "demand", v: "demand", adv: null },
      ex: "Being a construction worker is a **physically demanding** job.", exVi: "Làm công nhân xây dựng là công việc đòi hỏi thể lực." },
    { w: "sedentary", ipa: "/ˈsed.ən.tər.i/", pos: "adj", group: "types", vi: "ít vận động",
      def: "Involving little exercise or physical activity.",
      forms: { adj: "sedentary", n: null, v: null, adv: null },
      ex: "A **sedentary** job can lead to backache and headaches.", exVi: "Công việc ít vận động có thể gây đau lưng và đau đầu." },
    { w: "do for a living", ipa: "/duː fər ə ˈlɪv.ɪŋ/", pos: "expr", group: "types", vi: "làm nghề gì để kiếm sống",
      def: "Used to ask or talk about someone’s job: What do you do for a living?",
      forms: { adj: null, n: "living", v: "live", adv: null },
      ex: "What do you **do for a living**?", exVi: "Bạn làm nghề gì?" },

    // ---- Work-life balance ----
    { w: "work-life balance", ipa: "/ˌwɜːk ˈlaɪf ˌbæl.əns/", pos: "nphrase", group: "balance", vi: "cân bằng công việc – cuộc sống",
      def: "The amount of time you spend doing your job compared with the amount of time you spend with your family and doing things you enjoy.",
      forms: { adj: "balanced", n: "balance", v: "balance", adv: null },
      ex: "It can be difficult to get the right **work-life balance**.", exVi: "Có thể khó đạt được sự cân bằng giữa công việc và cuộc sống." },
    { w: "work overtime", ipa: "/wɜːk ˈəʊ.və.taɪm/", pos: "vphrase", group: "balance", vi: "làm thêm giờ",
      def: "To work after the usual hours of your job.",
      forms: { adj: null, n: "overtime", v: "work overtime", adv: "overtime" },
      ex: "He often **works overtime** and brings work home.", exVi: "Anh ấy thường làm thêm giờ và mang việc về nhà." },
    { w: "prioritize", ipa: "/praɪˈɒr.ɪ.taɪz/", pos: "verb", group: "balance", vi: "ưu tiên",
      def: "To decide which of a group of things are the most important so that you can deal with them first.",
      forms: { adj: "prior", n: "priority", v: "prioritize", adv: null },
      ex: "I try to sleep earlier and **prioritize** important tasks.", exVi: "Tôi cố ngủ sớm hơn và ưu tiên việc quan trọng." },
    { w: "burnout", ipa: "/ˈbɜːn.aʊt/", pos: "noun", group: "balance", vi: "kiệt sức vì làm việc quá mức; experience burnout",
      def: "A state of extreme tiredness caused by working too hard for too long.",
      forms: { adj: "burned-out · burnt-out", n: "burnout", v: "burn out", adv: null },
      ex: "After months of overtime, she **experienced burnout**.", exVi: "Sau nhiều tháng làm thêm giờ, cô ấy bị kiệt sức." },
    { w: "catch up on sleep", ipa: "/kætʃ ʌp ɒn sliːp/", pos: "vphrase", group: "balance", vi: "ngủ bù",
      def: "To sleep more than usual because you have not had enough sleep recently.",
      forms: { adj: "sleepy", n: "sleep", v: "sleep", adv: null },
      ex: "At the weekend, I **catch up on sleep**.", exVi: "Cuối tuần tôi ngủ bù." },
    { w: "autonomy", ipa: "/ɔːˈtɒn.ə.mi/", pos: "noun", group: "balance", vi: "quyền tự chủ, tự quyết",
      def: "The freedom to make your own decisions and act independently.",
      forms: { adj: "autonomous", n: "autonomy", v: null, adv: "autonomously" },
      ex: "Working alone gives me more **autonomy**.", exVi: "Làm việc một mình cho tôi nhiều quyền tự chủ hơn." },
    { w: "satisfied", ipa: "/ˈsæt.ɪs.faɪd/", pos: "adj", group: "balance", vi: "hài lòng; satisfied with sth",
      def: "Pleased because you have got what you wanted, or because something has happened in the way that you wanted.",
      forms: { adj: "satisfied · satisfying", n: "satisfaction", v: "satisfy", adv: null },
      ex: "Are you **satisfied with** the new arrangement?", exVi: "Bạn có hài lòng với cách sắp xếp mới không?" },
    { w: "bored / boring", ipa: "/bɔːd/ /ˈbɔː.rɪŋ/", pos: "adj", group: "balance", vi: "chán (cảm giác) / nhàm chán (tính chất)",
      def: "Feeling tired and unhappy because something is not interesting / not interesting, making you feel bored.",
      forms: { adj: "bored · boring", n: "boredom", v: "bore", adv: "boringly" },
      note: "Adj -ed = cảm xúc của người; Adj -ing = tính chất gây ra cảm xúc. Không nói “I feel boring”.",
      ex: "Paperwork is **boring**, so I feel **bored**.", exVi: "Giấy tờ thì nhàm chán nên tôi thấy chán." },

    // ---- Employment arrangements ----
    { w: "full-time / part-time", ipa: "/ˌfʊlˈtaɪm/ /ˌpɑːtˈtaɪm/", pos: "adj", group: "employment", vi: "toàn thời gian / bán thời gian",
      def: "Working for all of the usual hours in a week / working for only some of the usual hours.",
      forms: { adj: "full-time · part-time", n: null, v: null, adv: "full-time · part-time" },
      ex: "Students often do **part-time** jobs because the hours are flexible.", exVi: "Sinh viên thường làm bán thời gian vì giờ giấc linh hoạt." },
    { w: "freelance", ipa: "/ˈfriː.lɑːns/", pos: "adj", group: "employment", vi: "làm tự do; freelancer = người làm tự do",
      def: "Doing work for different organizations rather than working all the time for one organization.",
      forms: { adj: "freelance", n: "freelancer", v: "freelance", adv: "freelance" },
      ex: "As a **freelancer**, I have more freedom to arrange my schedule.", exVi: "Là người làm tự do, tôi được tự do sắp xếp lịch hơn." },
    { w: "volunteer", ipa: "/ˌvɒl.ənˈtɪər/", pos: "noun", group: "employment", vi: "tình nguyện viên; (v) làm tình nguyện",
      def: "(n) A person who does a job without being paid; (v) to offer to do something without being paid.",
      forms: { adj: "voluntary", n: "volunteer", v: "volunteer", adv: "voluntarily" },
      ex: "**Volunteer** work is unpaid, but it is good for personal growth.", exVi: "Công việc tình nguyện không lương nhưng tốt cho sự phát triển bản thân." },
    { w: "qualification", ipa: "/ˌkwɒl.ɪ.fɪˈkeɪ.ʃən/", pos: "noun", group: "employment", vi: "bằng cấp, chứng chỉ (certificate / degree)",
      def: "An official record showing that you have finished a course or have the skills needed for a job.",
      forms: { adj: "qualified", n: "qualification", v: "qualify", adv: null },
      ex: "Full-time jobs often require a degree or other **qualifications**.", exVi: "Công việc toàn thời gian thường đòi hỏi bằng đại học hoặc chứng chỉ." },
    { w: "suffocating", ipa: "/ˈsʌf.ə.keɪ.tɪŋ/", pos: "adj", group: "employment", vi: "ngột ngạt",
      def: "(informal) Making you feel uncomfortably hot or unable to breathe; too controlling or limiting.",
      forms: { adj: "suffocating", n: "suffocation", v: "suffocate", adv: null },
      ex: "A crowded office without windows can feel **suffocating**.", exVi: "Văn phòng chật chội không có cửa sổ có thể rất ngột ngạt." },
    { w: "bonus", ipa: "/ˈbəʊ.nəs/", pos: "noun", group: "employment", vi: "tiền thưởng",
      def: "An extra amount of money that is added to your usual pay.",
      forms: { adj: null, n: "bonus", v: null, adv: null },
      ex: "Part-time workers usually get no **bonuses**.", exVi: "Người làm bán thời gian thường không có thưởng." },
    { w: "perk", ipa: "/pɜːk/", pos: "noun", group: "employment", vi: "đặc quyền, phúc lợi kèm theo công việc",
      def: "An advantage or something extra, such as money or goods, that you are given because of your job.",
      forms: { adj: null, n: "perk", v: null, adv: null },
      ex: "Paid holidays and health insurance are some of the **perks** of a full-time job.", exVi: "Nghỉ phép có lương và bảo hiểm y tế là một số phúc lợi của việc làm toàn thời gian." },
    { w: "peer pressure", ipa: "/ˈpɪə ˌpreʃ.ər/", pos: "nphrase", group: "employment", vi: "áp lực đồng trang lứa; suffer from / experience peer pressure",
      def: "The strong influence of people of the same age or group to make you behave like them.",
      forms: { adj: null, n: "peer · pressure", v: "pressure", adv: null },
      ex: "Some freelancers **suffer from peer pressure**.", exVi: "Một số người làm tự do chịu áp lực đồng trang lứa." },
    { w: "disability", ipa: "/ˌdɪs.əˈbɪl.ə.ti/", pos: "noun", group: "employment", vi: "khuyết tật; people with disabilities",
      def: "An illness, injury or condition that makes it difficult for someone to do the things other people do.",
      forms: { adj: "disabled", n: "disability", v: "disable", adv: null },
      ex: "Volunteers help **people with disabilities**.", exVi: "Tình nguyện viên giúp đỡ người khuyết tật." },
    { w: "broaden your horizons", ipa: "/ˈbrɔː.dən jɔː həˈraɪ.zənz/", pos: "idiom", group: "employment", vi: "mở rộng tầm hiểu biết",
      def: "To increase the range of your knowledge, understanding or experience.",
      forms: { adj: "broad", n: "horizon · breadth", v: "broaden", adv: "broadly" },
      ex: "Volunteering helps me **broaden my horizons**.", exVi: "Làm tình nguyện giúp tôi mở rộng tầm hiểu biết." }
  ],

  sections: [
    {
      id: "review", nav: "Review: T / F / NG", type: "table",
      title: "Review homework: True / False / Not Given",
      intro: "Dạng bài đọc True / False / Not Given (với ý kiến tác giả: Yes / No / Not Given). Kỹ năng chính: **scanning** (đọc lướt tìm thông tin) và nhận ra **paraphrase** (cùng ý, khác cách diễn đạt).",
      keys: [
        { k: "TRUE", t: "Cùng ý, khác cách diễn đạt (**paraphrase**)." },
        { k: "FALSE", t: "Bài đọc nói ngược lại." },
        { k: "NOT GIVEN", t: "Bài đọc không cung cấp thông tin để kết luận." }
      ],
      passageTitle: "Đoạn đọc trên lớp",
      passage: "Social media is widely used by young people today. It helps users stay connected with friends and family, even when they live far away. Many students also use social media to find information for their studies. However, spending too much time online can affect their daily activities and reduce the time they spend with family members. Therefore, users should manage their time carefully.",
      cols: ["Câu hỏi", "Đáp án", "Lý do"],
      rows: [
        ["1. Social media helps people **keep in touch** with **distant** friends and family.", "**TRUE**", "keep in touch = stay connected; distant = live far away."],
        ["2. **All** students use social media to support their studies.", "**FALSE**", "Bài đọc nói “Many students”, không phải “All”. Chú ý từ chỉ số lượng: all ≠ many / most / others."],
        ["3. Spending too much time online may have a **negative** effect on family relationships.", "**TRUE**", "negative = bad = **detrimental** = **harmful**; “reduce the time they spend with family members” (theo cách hiểu trên lớp)."],
        ["4. Young people spend **an average of** four hours a day on social media.", "**NOT GIVEN**", "Bài đọc không nhắc đến số giờ trung bình."]
      ]
    },
    {
      id: "jwc", nav: "Job – Work – Career", type: "table",
      title: "Job – Work – Career",
      cols: ["Từ", "Nghĩa", "Keywords", "Ví dụ"],
      rows: [
        ["**JOB**\n(đếm được)", "Một công việc / vị trí cụ thể bạn làm để kiếm tiền.", "position – salary – wages", "I have a part-time job.\nShe is looking for a new job.\nI have a job as an English teacher."],
        ["**WORK**\n(không đếm được)", "Công việc, nhiệm vụ hoặc hoạt động bạn thực hiện; có thể được trả lương hoặc không.", "tasks – activities – paid / unpaid", "I have a lot of work to do today.\nShe works in a hospital.\nVolunteer work is unpaid."],
        ["**CAREER**", "Sự nghiệp – quá trình làm việc và phát triển nghề nghiệp trong cuộc đời.", "long-term – experience – development", "Teaching is my career.\nShe wants to build a successful career in education."]
      ],
      note: "**Ghi chú trên lớp:** career = journey / series of jobs • Teaching career: **tutor** / English teacher / **lecturer**."
    },
    {
      id: "types", nav: "Office-based vs Manual", type: "table",
      title: "Types of jobs – Nhóm 1: Office-based vs Manual work",
      cols: ["Office-based work (công việc văn phòng)", "Manual work (công việc tay chân)"],
      rows: [
        ["work at a desk", "carry heavy objects"],
        ["use computers", "operate machines"],
        ["deal with **paperwork**", "work outdoors"],
        ["attend meetings", "repair equipment"],
        ["work with **colleagues**", "require practical skills"],
        ["regular working hours", "physically **demanding**"],
        ["require computer skills", "can be tiring"],
        ["require communication skills", "e.g. construction worker, electrician, mechanic, factory worker"]
      ],
      note: "**Ghi chú – Office-based:** return home from work • **fixed working hours** >< **flexible working hours** → **discipline** + daily routine → manage time better → feel more comfortable – arrange my schedule comfortably / flexibly.\n**Mặt trái:** spend too much time on screens → eye problems / cause eyestrain • **sedentary** lifestyle → health problems (backache / headache) • Skill: **computer literacy** • deal with problems = solve problems.\n**Ghi chú – Manual:** practical = **hands-on** skills • **demanding**."
    },
    {
      id: "compare", nav: "Câu hữu ích", type: "dialogue",
      title: "Câu hữu ích: so sánh hai loại công việc",
      dialogues: [
        { title: "Office-based vs Manual work", intro: "Các câu hữu ích trong tài liệu, xếp thành hội thoại giữa Anna (kế toán) và Ben (công nhân xây dựng).",
          lines: [
            { who: "Anna", en: "What do you do for a living?", vi: "Bạn làm nghề gì?" },
            { who: "Ben", en: "I’m a construction worker. I usually work outdoors and use different tools and machines.", vi: "Tôi là công nhân xây dựng. Tôi thường làm ngoài trời và dùng nhiều dụng cụ, máy móc." },
            { who: "Anna", en: "I’m an accountant. I mainly work in an office and spend a lot of time using a computer and dealing with paperwork.", vi: "Tôi là kế toán. Tôi chủ yếu làm ở văn phòng, dùng máy tính và xử lý giấy tờ nhiều." },
            { who: "Anna", en: "My job is more mentally demanding because I have to work with numbers and pay attention to details.", vi: "Công việc của tôi đòi hỏi trí óc nhiều hơn vì phải làm việc với con số và chú ý đến chi tiết." },
            { who: "Anna", en: "I sometimes feel tired after sitting at my desk for long hours.", vi: "Đôi khi tôi thấy mệt sau nhiều giờ ngồi ở bàn làm việc." },
            { who: "Ben", en: "My job is more physically demanding. I often have to carry heavy objects and work under the sun. It can be tiring, but I enjoy being active.", vi: "Công việc của tôi đòi hỏi thể lực nhiều hơn. Tôi thường phải mang vác nặng và làm dưới nắng. Có thể mệt, nhưng tôi thích được vận động." },
            { who: "Anna", en: "I prefer working indoors because it’s more comfortable, while you seem to enjoy working outdoors.", vi: "Tôi thích làm trong nhà vì thoải mái hơn, trong khi bạn có vẻ thích làm ngoài trời." }
          ] }
      ]
    },
    {
      id: "balance", nav: "Work-life balance", type: "table",
      title: "Work-life balance – Cân bằng công việc và cuộc sống",
      cols: ["REASONS – vì sao mất cân bằng", "WAYS – cách cân bằng"],
      rows: [
        ["spend too much time on work – **work overtime** / bring work home", "create a balanced schedule → return home from work on time"],
        ["earn / make more money", "sleep earlier → **prioritize**"],
        ["do not have good time management skills", "experience **burnout** (n) ⇒ **catch up on sleep**"],
        ["feel lazy", ""]
      ]
    },
    {
      id: "alone", nav: "Alone or with colleagues?", type: "table",
      title: "Do you prefer working alone or working with colleagues?",
      cols: ["Lựa chọn", "Lý do (mẫu trên lớp)"],
      rows: [
        ["**Working alone**", "Working alone allows me to make my own decisions (**autonomy**).\nLàm một mình cho phép tôi tự đưa ra quyết định."],
        ["**Working with colleagues**", "Working with colleagues makes work more pleasant and makes me feel **satisfied**; I can also learn from others.\nLàm với đồng nghiệp khiến công việc dễ chịu hơn, tôi thấy hài lòng và học hỏi được từ người khác."]
      ]
    },
    {
      id: "employment", nav: "Employment arrangements", type: "table",
      title: "Nhóm 2: Employment arrangements – Like? Dislike?",
      intro: "Ưu điểm (+) và nhược điểm (−) của từng hình thức làm việc, theo ghi chú trên lớp.",
      cols: ["Hình thức", "Ưu điểm", "Nhược điểm"],
      rows: [
        ["**FULL-TIME**", "+ stable salary → financial management\n+ clear career prospects\n+ move / **climb up the career ladder**", "- requires a certificate / **qualifications** / a degree\n- inflexible time → feel uncomfortable\n- uncomfortable office working environment → **suffocating**"],
        ["**PART-TIME**", "+ flexible time – suitable for students\n+ can do many jobs → earn more money\n+ more free time\n+ gain **work-life balance**", "- unstable salary\n- in general, the salary is low\n- no **bonuses**\n- **perks** (paid holiday / health insurance) are rare"],
        ["**FREELANCE**", "+ have more freedom to arrange my schedule\n+ choose jobs that suit my needs / interests\n+ flexible working environment → work at home or at the office", "- unstable income → financial management → make me feel stressed\n- suffer from / experience **peer pressure**"],
        ["**VOLUNTEER**", "+ help people with **disabilities**\n+ make new relationships = broaden my **social circle** → more opportunities to learn skills, practical experience → good for **personal growth**\n+ learn how to create helpful community activities\n+ have many new experiences → **broaden my horizons**\n+ explore new places", "- sometimes working hard → tired / exhausted\n- **time-consuming**\n- meet bad people → bad experiences"]
      ]
    },
    {
      id: "phrases", nav: "Cụm từ hữu ích", type: "phrasebank",
      title: "Cụm từ hữu ích về hình thức làm việc",
      categories: [
        { title: "Useful phrases", vi: "Dùng khi nói ưu / nhược điểm của công việc", subs: [ { phrases: [
          { en: "stable / unstable income", vi: "thu nhập ổn định / không ổn định", def: "Money from work that stays the same every month / that changes and is not reliable." },
          { en: "financial management", vi: "quản lý tài chính", def: "The way you plan and control how you spend and save money." },
          { en: "climb up the career ladder", vi: "thăng tiến", def: "To move to better and more senior jobs over time." },
          { en: "health insurance / paid holiday", vi: "bảo hiểm y tế / nghỉ phép có lương", def: "An arrangement that pays for medical care / holiday time when you still receive your pay." },
          { en: "social circle", vi: "vòng quan hệ xã hội", def: "The group of people you know and spend time with." },
          { en: "personal growth", vi: "phát triển bản thân", def: "The process of becoming a better, more mature and more skilled person." },
          { en: "time-consuming", vi: "tốn thời gian", def: "Taking a lot of time." }
        ] } ] }
      ]
    }
  ],

  structuresIntro: "Các mẫu câu lấy từ phần thảo luận trên lớp: hỏi nghề nghiệp, so sánh công việc và nêu lý do.",
  structures: [
    { en: "What do you do **for a living**?", usage: "Bạn làm nghề gì? (cách hỏi nghề nghiệp tự nhiên)", ex: "What do you do for a living? – I’m an accountant.", exVi: "Bạn làm nghề gì? – Tôi là kế toán." },
    { en: "I have a job **as** + a/an + nghề", usage: "Tôi làm nghề… (dùng “as” để nói vai trò)", ex: "I have a job as an English teacher.", exVi: "Tôi làm giáo viên tiếng Anh." },
    { en: "My job is more **physically / mentally demanding** because …", usage: "Công việc của tôi đòi hỏi thể lực / trí óc nhiều hơn vì…", ex: "My job is more mentally demanding because I have to work with numbers and pay attention to details.", exVi: "Công việc của tôi đòi hỏi trí óc nhiều hơn vì phải làm việc với con số và chú ý đến chi tiết." },
    { en: "I prefer + V-ing … because …, **while** you …", usage: "So sánh lựa chọn của mình với người khác", ex: "I prefer working indoors because it’s more comfortable, while you seem to enjoy working outdoors.", exVi: "Tôi thích làm trong nhà vì thoải mái hơn, trong khi bạn có vẻ thích làm ngoài trời." },
    { en: "Do you prefer + V-ing **or** + V-ing?", usage: "Hỏi lựa chọn giữa hai việc", ex: "Do you prefer working alone or working with colleagues?", exVi: "Bạn thích làm việc một mình hay làm cùng đồng nghiệp?" },
    { en: "… **allows** me **to** + V", usage: "… cho phép tôi…", ex: "Working alone allows me to make my own decisions.", exVi: "Làm một mình cho phép tôi tự đưa ra quyết định." },
    { en: "… **makes** work more pleasant / **makes** me feel + adj", usage: "… khiến công việc dễ chịu hơn / khiến tôi cảm thấy…", ex: "Working with colleagues makes work more pleasant and makes me feel satisfied.", exVi: "Làm với đồng nghiệp khiến công việc dễ chịu hơn và làm tôi thấy hài lòng." },
    { en: "**spend** (too much) time **on** + N / V-ing", usage: "dành (quá nhiều) thời gian cho…", ex: "Many people spend too much time on work, so they lose their work-life balance.", exVi: "Nhiều người dành quá nhiều thời gian cho công việc nên mất cân bằng cuộc sống." }
  ],

  grammar: [
    {
      title: "Tính từ đuôi -ed và -ing",
      subtitle: "-ed: cảm xúc của người · -ing: tính chất của người / vật gây ra cảm xúc",
      uses: [
        "Adj -ed: cảm xúc của người (feelings) — I feel bored / interested / excited / satisfied.",
        "Adj -ing: tính chất của người / vật gây ra cảm xúc — Paperwork is boring. This book is interesting."
      ],
      examples: [
        { en: "Do you like dealing with paperwork? – No, I feel bored.", vi: "Bạn có thích xử lý giấy tờ không? – Không, tôi thấy chán." },
        { en: "I feel interested and excited when I learn something new.", vi: "Tôi thấy hứng thú và phấn khích khi học điều mới." },
        { en: "Paperwork is boring.", vi: "Giấy tờ thì nhàm chán." },
        { en: "This book is interesting.", vi: "Cuốn sách này thú vị." },
        { en: "This girl is interesting. She usually tells jokes.", vi: "Cô gái này thú vị. Cô ấy hay kể chuyện cười." }
      ],
      mistakes: [
        { wrong: "I feel boring when I deal with paperwork.", right: "I feel bored when I deal with paperwork.", why: "Nói cảm xúc của mình → dùng -ed." },
        { wrong: "This book is very interested.", right: "This book is very interesting.", why: "Nói tính chất của vật → dùng -ing." }
      ]
    }
  ],
  grammarTip: "Mẹo nhớ: người cảm thấy → -ed (I’m bored); thứ gây ra cảm giác → -ing (The job is boring). Một người cũng có thể “interesting” nếu họ làm người khác thấy thú vị.",

  samples: [
    {
      title: "Bài mẫu: Describe your job",
      en: "I work **full-time** as an accountant at a medium-sized company. It is an **office-based** job, so I usually work at a desk, use computers and deal with **paperwork**. I also attend meetings and work with **colleagues** from other departments. There are two things I like about my job. First, it offers a **stable salary** and clear **career prospects**, so I can **climb up the career ladder**. Second, my colleagues are friendly, and I can learn a lot from them. However, my job is quite **mentally demanding** and **sedentary**; after sitting at my desk for long hours, I sometimes get eyestrain and backache. To keep a good **work-life balance**, I try not to **work overtime**, I **prioritize** important tasks and I **catch up on sleep** at the weekend. Overall, I feel **satisfied** with my job.",
      vi: "Tôi làm kế toán toàn thời gian ở một công ty quy mô vừa. Đây là công việc văn phòng nên tôi thường ngồi bàn, dùng máy tính và xử lý giấy tờ. Tôi cũng đi họp và làm việc với đồng nghiệp ở các phòng ban khác. Có hai điều tôi thích ở công việc này. Thứ nhất, nó có lương ổn định và triển vọng nghề nghiệp rõ ràng nên tôi có thể thăng tiến. Thứ hai, đồng nghiệp thân thiện và tôi học hỏi được nhiều từ họ. Tuy nhiên, công việc khá đòi hỏi trí óc và ít vận động; sau nhiều giờ ngồi bàn, đôi khi tôi bị mỏi mắt và đau lưng. Để cân bằng công việc – cuộc sống, tôi cố không làm thêm giờ, ưu tiên việc quan trọng và ngủ bù vào cuối tuần. Nhìn chung, tôi hài lòng với công việc của mình."
    }
  ],

  practice: [
    { label: "Job", text: "I work ___ (full-time / part-time / freelance) as a/an ___. / I would like to work as ___." },
    { label: "Type", text: "It is an office-based / a manual job, so I usually ___ and ___." },
    { label: "Like 1", text: "There are two things I like about my job. First, ___." },
    { label: "Like 2", text: "Second, ___." },
    { label: "Dislike", text: "However, my job is quite ___ (physically / mentally demanding, sedentary…), so ___." },
    { label: "Balance", text: "To keep a good work-life balance, I ___." }
  ],

  notes: [
    "“**Job**” đếm được (a job, two jobs); “**work**” không đếm được: I have a lot of work (không nói “works”); “**career**” = cả quá trình làm nghề lâu dài.",
    "“I have a job **as** an English teacher” – dùng “as” để nói vai trò, nghề nghiệp.",
    "Trong bài TFNG, chú ý từ chỉ số lượng: all ≠ many / most / some. Nếu bài đọc nói “many” mà câu hỏi nói “all” → FALSE.",
    "“**Spend time on** sth” (handout ghi “for work”): spend too much time on work.",
    "“**Catch up on sleep**” – “sleep” không đếm được, không thêm -s (handout ghi “sleeps”).",
    "“People with **disabilities**” (số nhiều khi nói chung).",
    "“Broaden my social network / **social circle**” (handout ghi “social networkings”).",
    "“Makes me feel more pleasant” chưa tự nhiên; nên nói “makes work more pleasant” hoặc “makes me feel happier / more satisfied”.",
    "Adj **-ed** = cảm xúc của người (I feel bored); Adj **-ing** = tính chất gây cảm xúc (Paperwork is boring). Không nói “I feel boring”.",
    "“She usually **tells** jokes” – chủ ngữ số ít, hiện tại đơn thêm -s.",
    "“**Physically / mentally demanding**” = đòi hỏi thể lực / trí óc.",
    "“**Salary**” = lương tháng cố định; “**wages**” = tiền công theo giờ / ngày / tuần.",
    "“What do you do **for a living**?” = Bạn làm nghề gì? (không hỏi “What is your job doing?”).",
    "“**Allow** sb **to** V”: Working alone allows me to make my own decisions."
  ]
});
