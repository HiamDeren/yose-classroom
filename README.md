# Yose Homework

Kho kiến thức & bài tập tiếng Anh của trung tâm **Yose Home**.

Website tổng hợp kiến thức của khóa học tại trung tâm **Yose Home**: từ vựng (kèm dạng từ, phiên âm, ví dụ), cấu trúc câu, ngữ pháp, bài nói mẫu và khung tự luyện theo từng buổi.

Trang tĩnh thuần HTML/CSS/JS, **không cần build** — đẩy lên GitHub là Vercel deploy được ngay.

## Tính năng

- **Tìm từ nhanh** ở mọi trang: nhấn `/` hoặc `Ctrl/⌘ + K`. Gõ có dấu hay không dấu đều được (`tiet kiem` → *time-saving*), tìm theo từ tiếng Anh, nghĩa tiếng Việt hoặc dạng từ (`health` → *healthy lifestyle*).
- **Từ điển** (`#/tu-dien`): lọc theo **buổi**, **chủ đề**, **nhóm từ**, **loại từ**; sắp xếp A→Z / Z→A / theo buổi; nhóm theo loại từ.
- **Loại từ** có màu riêng: Danh từ, Cụm danh từ, Động từ, Cụm động từ (phrasal verb), Cụm từ với động từ, Tính từ, Trạng từ, Thành ngữ.
- **Dạng từ** (Adj / N / V / Adv) cho mỗi từ.
- **Trang buổi học** (`#/buoi/2`): từ vựng (xem theo loại từ hoặc theo nhóm chủ đề), cấu trúc câu, ngữ pháp, bài nói mẫu (bấm vào từ được tô màu để xem nghĩa, ẩn/hiện bản dịch), khung tự luyện, lưu ý.
- **Nghe phát âm** từ, câu ví dụ và cả bài mẫu (giọng Anh-Anh của trình duyệt).
- Giao diện sáng/tối, dùng tốt trên điện thoại.

## Thêm / sửa buổi học

Mỗi buổi là một file trong thư mục `data/`:

```
data/
  lesson-01.js   ← Buổi 1 (đang để "Sắp cập nhật")
  lesson-02.js   ← Healthy and Unhealthy Habits
  lesson-03.js   ← Describing a Trip
  _template.js   ← mẫu để tạo buổi mới
```

**Thêm buổi mới (vd. Buổi 4):**

1. Sao chép `data/_template.js` thành `data/lesson-04.js` và điền nội dung (file mẫu có giải thích từng trường).
2. Mở `index.html`, thêm một dòng cạnh các buổi khác:
   ```html
   <script src="data/lesson-04.js"></script>
   ```
3. Commit và push — Vercel tự deploy lại.

**Bổ sung Buổi 1:** mở `data/lesson-01.js`, điền nội dung theo `_template.js` và xóa dòng `comingSoon: true`.

Các buổi có cùng `topic` sẽ được gom chung khi lọc theo chủ đề.

## Chạy thử trên máy

```bash
python3 -m http.server 8000
# mở http://localhost:8000
```

## Deploy lên Vercel

1. Vào [vercel.com/new](https://vercel.com/new) → **Import** repo này từ GitHub.
2. Framework Preset: **Other**. Không cần Build Command hay Output Directory.
3. Bấm **Deploy**. Mỗi lần push lên nhánh `main`, Vercel sẽ tự cập nhật.
