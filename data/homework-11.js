/* Bài tập Buổi 11 — theo tài liệu "Lesson 11 – Job – Work – Career P1" (có đáp án) */
YOSE.addHomework(11, [
  {
    type: "match",
    title: "Matching – Nối từ với định nghĩa",
    intro: "Match each word (1–10) with its English definition (A–J). / Nối từ (1–10) với định nghĩa tiếng Anh (A–J).",
    options: [
      { k: "A", t: "Needing a lot of time, attention or energy." },
      { k: "B", t: "The job or series of jobs that you do during your working life." },
      { k: "C", t: "Involving little exercise or physical activity." },
      { k: "D", t: "The balance between time spent working and time with family and doing things you enjoy." },
      { k: "E", t: "An extra advantage, such as money or goods, that you get because of your job." },
      { k: "F", t: "Done with the hands; involving physical work." },
      { k: "G", t: "A state of extreme tiredness caused by working too hard for too long." },
      { k: "H", t: "The freedom to make your own decisions." },
      { k: "I", t: "Making you feel uncomfortably hot or unable to breathe." },
      { k: "J", t: "An official record showing that you have finished a course or have the skills for a job." }
    ],
    items: [
      { q: "career", a: "B" },
      { q: "perk", a: "E" },
      { q: "autonomy", a: "H" },
      { q: "demanding", a: "A" },
      { q: "sedentary", a: "C" },
      { q: "manual", a: "F" },
      { q: "suffocating", a: "I" },
      { q: "burnout", a: "G" },
      { q: "work-life balance", a: "D" },
      { q: "qualification", a: "J" }
    ]
  },
  {
    type: "mcq",
    title: "Multiple choice – Chọn đáp án đúng",
    intro: "Choose the correct answer A, B, C or D. / Chọn đáp án đúng.",
    items: [
      { q: "I have a lot of ___ to do today.", options: ["job", "work", "career", "jobs"], a: 1, explain: "“Work” không đếm được: a lot of work." },
      { q: "She is looking for a new ___.", options: ["job", "work", "works", "career ladder"], a: 0, explain: "“A new job” – job đếm được." },
      { q: "Teaching is my ___. I want to build a successful one in education.", options: ["work", "job", "career", "task"], a: 2, explain: "Sự nghiệp lâu dài: build a successful career." },
      { q: "Do you prefer working alone ___ working with colleagues?", options: ["and", "or", "but", "so"], a: 1, explain: "prefer A or B." },
      { q: "Carrying heavy objects all day is physically ___.", options: ["demand", "demanding", "demanded", "demands"], a: 1, explain: "physically demanding = đòi hỏi thể lực." },
      { q: "Office workers often deal ___ paperwork.", options: ["with", "for", "at", "on"], a: 0, explain: "deal with paperwork." },
      { q: "I feel ___ when I have to deal with paperwork.", options: ["bored", "boring", "bore", "boredom"], a: 0, explain: "Cảm xúc của người: -ed." },
      { q: "This book is very ___. I can’t stop reading it.", options: ["interested", "interesting", "interest", "interests"], a: 1, explain: "Tính chất của vật: -ing." },
      { q: "A full-time job can help you climb ___ the career ladder.", options: ["up", "on", "over", "out"], a: 0, explain: "climb up the career ladder." },
      { q: "After months of working overtime, he experienced ___.", options: ["burnout", "burn", "burned", "burning"], a: 0, explain: "experience burnout (danh từ)." },
      { q: "I need to catch up ___ sleep at the weekend.", options: ["with", "on", "for", "in"], a: 1, explain: "catch up on sleep." },
      { q: "Volunteering helps you broaden your ___.", options: ["horizons", "skies", "views", "ways"], a: 0, explain: "broaden your horizons = mở rộng tầm hiểu biết." }
    ]
  },
  {
    type: "gap",
    title: "Gap fill – Điền từ vào chỗ trống",
    intro: "Complete the sentences with the words in the box. Each word is used once. / Điền từ trong khung, mỗi từ dùng một lần.",
    bank: ["peer pressure", "colleagues", "overtime", "hands-on", "paperwork", "stable salary", "perks", "flexible", "career prospects", "computer literacy"],
    items: [
      { q: "Accountants spend a lot of time dealing with ___.", a: ["paperwork"], explain: "deal with paperwork." },
      { q: "I took this new job because the ___ were much better.", a: ["career prospects"], explain: "Triển vọng nghề nghiệp." },
      { q: "He often works ___ and brings work home.", a: ["overtime"], explain: "work overtime = làm thêm giờ." },
      { q: "Paid holidays and health insurance are some of the ___ of this job.", a: ["perks"], explain: "Phúc lợi kèm theo công việc." },
      { q: "Part-time jobs have ___ working hours, so they are suitable for students.", a: ["flexible"], explain: "flexible working hours." },
      { q: "A full-time job usually offers a ___, which helps with financial management.", a: ["stable salary"], explain: "Lương ổn định → quản lý tài chính." },
      { q: "Some freelancers suffer from ___ when they compare themselves with others.", a: ["peer pressure"], explain: "suffer from peer pressure." },
      { q: "Working with ___ helps me learn from others.", a: ["colleagues"], explain: "Đồng nghiệp." },
      { q: "Office jobs require ___ because you use computers all day.", a: ["computer literacy"], explain: "Kỹ năng tin học." },
      { q: "Mechanics need practical, ___ skills.", a: ["hands-on"], explain: "practical = hands-on skills." }
    ]
  },
  {
    type: "gap",
    title: "Word forms – Dạng đúng của từ",
    intro: "Write the correct form of the word in brackets. / Viết dạng đúng của từ trong ngoặc.",
    items: [
      { q: "She is very ___ with her new job.", hint: "SATISFY", a: ["satisfied"], explain: "satisfied with sth – cảm xúc của người." },
      { q: "Dealing with paperwork all day is ___.", hint: "BORE", a: ["boring"], explain: "Tính chất của việc: -ing." },
      { q: "I feel ___ when I learn something new at work.", hint: "EXCITE", a: ["excited"], explain: "Cảm xúc của người: -ed." },
      { q: "A full-time job usually offers a ___ income.", hint: "STABILITY", a: ["stable"], explain: "Tính từ đứng trước danh từ “income”." },
      { q: "Freelancers often have an ___ income.", hint: "STABLE", a: ["unstable"], explain: "“an” + nguyên âm; nghĩa trái ngược: không ổn định." },
      { q: "Manual jobs are physically ___.", hint: "DEMAND", a: ["demanding"], explain: "physically demanding." },
      { q: "Freelancers can arrange their schedule ___.", hint: "FLEXIBLE", a: ["flexibly"], explain: "Trạng từ bổ nghĩa cho “arrange”." },
      { q: "Good time ___ skills help you keep a work-life balance.", hint: "MANAGE", a: ["management"], explain: "time management skills." },
      { q: "Volunteering is good for personal ___.", hint: "GROW", a: ["growth"], explain: "personal growth (danh từ)." },
      { q: "You need a university degree or other ___ for this job.", hint: "QUALIFY", a: ["qualifications"], explain: "degree or other qualifications (danh từ số nhiều)." }
    ]
  },
  {
    type: "error",
    title: "Error correction – Tìm và sửa lỗi sai",
    intro: "Each sentence has ONE mistake. Find and correct it. / Mỗi câu có MỘT lỗi sai — gõ phần đã sửa hoặc cả câu đúng.",
    items: [
      { q: "I have a lot of works to do today.", a: ["work", "a lot of work"], show: "works → work", fixed: "I have a lot of work to do today.", explain: "“Work” không đếm được." },
      { q: "She has a job like an English teacher.", a: ["as", "as an English teacher", "a job as"], show: "like → as", fixed: "She has a job as an English teacher.", explain: "have a job as + nghề." },
      { q: "He spends too much time for work.", a: ["on", "on work", "time on work"], show: "for → on", fixed: "He spends too much time on work.", explain: "spend time on sth." },
      { q: "At the weekend, I catch up on sleeps.", a: ["sleep", "on sleep", "catch up on sleep"], show: "sleeps → sleep", fixed: "At the weekend, I catch up on sleep.", explain: "“Sleep” không đếm được trong “catch up on sleep”." },
      { q: "This girl is interesting. She usually tell jokes.", a: ["tells", "usually tells", "tells jokes"], show: "tell → tells", fixed: "This girl is interesting. She usually tells jokes.", explain: "Chủ ngữ số ít, hiện tại đơn thêm -s." },
      { q: "Volunteers help people with disability.", a: ["disabilities", "with disabilities", "people with disabilities"], show: "disability → disabilities", fixed: "Volunteers help people with disabilities.", explain: "people with disabilities." },
      { q: "I feel boring when I deal with paperwork.", a: ["bored", "feel bored"], show: "boring → bored", fixed: "I feel bored when I deal with paperwork.", explain: "Cảm xúc của người dùng -ed." },
      { q: "Working alone allows me make my own decisions.", a: ["me to make", "to make", "allows me to make"], show: "me make → me to make", fixed: "Working alone allows me to make my own decisions.", explain: "allow sb to V." }
    ]
  },
  {
    type: "tf",
    label: "T / F / NG",
    labels: ["TRUE", "FALSE", "NOT GIVEN"],
    title: "Reading – True / False / Not Given",
    intro: "Read the passage and decide if the statements are TRUE, FALSE or NOT GIVEN. / Đọc đoạn văn và chọn TRUE, FALSE hoặc NOT GIVEN.",
    passage: "Many young people today choose freelance work instead of full-time jobs. Freelancers can arrange their own schedules and work from home or at a café. However, their income is often unstable, so they need good financial management skills. Full-time employees, on the other hand, usually receive a stable salary and perks such as paid holidays and health insurance. Some companies now allow their employees to work from home two days a week.",
    items: [
      { q: "Freelancers can decide when they work.", a: "TRUE", explain: "“arrange their own schedules” = decide when they work (paraphrase)." },
      { q: "All young people prefer freelance work to full-time jobs.", a: "FALSE", explain: "Bài đọc nói “Many young people”, câu hỏi nói “All”." },
      { q: "Freelancers usually earn more money than full-time employees.", a: "NOT GIVEN", explain: "Bài đọc không so sánh mức thu nhập." },
      { q: "Full-time employees often get benefits such as paid holidays.", a: "TRUE", explain: "“perks such as paid holidays” = benefits such as paid holidays." },
      { q: "Freelancers do not need to manage their money carefully.", a: "FALSE", explain: "Bài đọc nói họ “need good financial management skills”." },
      { q: "Working from home makes employees more productive.", a: "NOT GIVEN", explain: "Bài đọc chỉ nói một số công ty cho làm ở nhà, không nói về năng suất." }
    ]
  },
  {
    type: "tf",
    label: "Phân loại",
    labels: ["FT", "PT", "FL", "V"],
    title: "Classification – Phân loại ưu / nhược điểm",
    intro: "Which employment arrangement does each point describe? Choose **FT** (full-time), **PT** (part-time), **FL** (freelance) or **V** (volunteer). / Mỗi ý thuộc hình thức nào?",
    items: [
      { q: "You can climb up the career ladder.", a: "FT", explain: "Full-time: move / climb up the career ladder." },
      { q: "It often requires a degree or other qualifications.", a: "FT", explain: "Full-time: requires certificate / qualifications / degree." },
      { q: "The time is flexible, so it is suitable for students.", a: "PT", explain: "Part-time: flexible time – suitable for students." },
      { q: "In general, the salary is low and there are no bonuses.", a: "PT", explain: "Part-time: the salary is low, no bonuses." },
      { q: "You can choose jobs that suit your needs and interests.", a: "FL", explain: "Freelance: choose jobs that suit my needs / interests." },
      { q: "You may suffer from peer pressure.", a: "FL", explain: "Freelance: suffer from / experience peer pressure." },
      { q: "You can help people with disabilities.", a: "V", explain: "Volunteer: help people with disabilities." },
      { q: "It helps you broaden your horizons and grow as a person, but it is unpaid.", a: "V", explain: "Volunteer: broaden my horizons, good for personal growth; volunteer work is unpaid." }
    ]
  },
  {
    type: "gap",
    title: "Dialogue completion – Office-based vs Manual work",
    intro: "Complete the dialogue with the words in the box. / Điền từ trong khung vào hội thoại.",
    bank: ["indoors", "paperwork", "physically", "for a living", "details", "outdoors", "mentally"],
    items: [
      { who: "Anna", q: "What do you do ___, Ben?", a: ["for a living"], explain: "What do you do for a living?" },
      { who: "Ben", q: "I’m a construction worker. I usually work ___ and use different tools and machines.", a: ["outdoors"], explain: "work outdoors = làm ngoài trời." },
      { who: "Anna", q: "I’m an accountant. I spend a lot of time using a computer and dealing with ___.", a: ["paperwork"], explain: "deal with paperwork." },
      { who: "Ben", q: "Do you have to do a lot of physical work?" },
      { who: "Anna", q: "Not really. My job is more ___ demanding because I have to work with numbers…", a: ["mentally"], explain: "mentally demanding = đòi hỏi trí óc." },
      { q: "…and pay attention to ___.", a: ["details"], explain: "pay attention to details." },
      { who: "Ben", q: "My job is more ___ demanding. I often have to carry heavy objects.", a: ["physically"], explain: "physically demanding = đòi hỏi thể lực." },
      { who: "Anna", q: "I prefer working ___ because it’s more comfortable.", a: ["indoors"], explain: "working indoors = làm trong nhà." }
    ]
  },
  {
    type: "writing",
    title: "Speaking / Writing – Describe your job",
    intro: "Describe your job (or a job you would like to have) in 120–150 words. Say what you do, whether it is office-based or manual, full-time or part-time, two things you like and one thing you dislike. Use at least 8 words/phrases from this lesson.",
    words: [120, 150],
    target: 8,
    steps: [
      "What do you do for a living? Is it office-based or manual?",
      "Is it full-time, part-time, freelance or volunteer work?",
      "What do you like about it? (2 reasons)",
      "What do you dislike about it? (1 reason)",
      "How do you keep a good work-life balance?"
    ],
    criteria: [
      "Nêu rõ nghề và loại công việc",
      "2 ưu điểm + 1 nhược điểm",
      "Dùng ≥ 8 từ/cụm từ của bài",
      "Phân biệt đúng job / work / career",
      "Dùng đúng tính từ -ed / -ing"
    ],
    sample: {
      en: "I work **full-time** as an accountant at a medium-sized company. It is an **office-based** job, so I usually work at a desk, use computers and deal with **paperwork**. I also attend meetings and work with **colleagues** from other departments. There are two things I like about my job. First, it offers a **stable salary** and clear **career prospects**, so I can **climb up the career ladder**. Second, my colleagues are friendly, and I can learn a lot from them. However, my job is quite **mentally demanding** and **sedentary**; after sitting at my desk for long hours, I sometimes get eyestrain and backache. To keep a good **work-life balance**, I try not to **work overtime**, I **prioritize** important tasks and I **catch up on sleep** at the weekend. Overall, I feel **satisfied** with my job.",
      vi: "Tôi làm kế toán toàn thời gian ở một công ty quy mô vừa. Đây là công việc văn phòng nên tôi thường ngồi bàn, dùng máy tính và xử lý giấy tờ. Tôi cũng đi họp và làm việc với đồng nghiệp ở các phòng ban khác. Có hai điều tôi thích ở công việc này. Thứ nhất, nó có lương ổn định và triển vọng nghề nghiệp rõ ràng nên tôi có thể thăng tiến. Thứ hai, đồng nghiệp thân thiện và tôi học hỏi được nhiều từ họ. Tuy nhiên, công việc khá đòi hỏi trí óc và ít vận động; sau nhiều giờ ngồi bàn, đôi khi tôi bị mỏi mắt và đau lưng. Để cân bằng công việc – cuộc sống, tôi cố không làm thêm giờ, ưu tiên việc quan trọng và ngủ bù vào cuối tuần. Nhìn chung, tôi hài lòng với công việc của mình."
    }
  }
]);
