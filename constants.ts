import { Question, QuestionType } from './types';

export const QUIZ_DATA: Question[] = [
  {
    id: 1,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp các chữ cái sau thành từ đúng: CON VỊT",
    rearrangeParts: ["D", "U", "C", "K"],
    correctAnswer: "DUCK",
    imageUrl: "https://images.unsplash.com/photo-1459682687441-7761439a709d?auto=format&fit=crop&q=80&w=400",
    explanation: "Duck nghĩa là con vịt.",
    hint: "Từ này bắt đầu bằng chữ 'D' và kết thúc bằng 'K'."
  },
  {
    id: 2,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Chọn từ có chứa chữ cái 'A':",
    options: ["bike", "river", "sand", "ride"],
    correctAnswer: "sand",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400",
    explanation: "Trong từ 'sand' (cát) có chứa chữ 'a'.",
    hint: "Hãy nhìn kỹ các từ, tìm từ có chữ 'a' ở giữa."
  },
  {
    id: 3,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp các chữ cái thành từ đúng: CÁI BÀN HỌC",
    rearrangeParts: ["D", "E", "S", "K"],
    correctAnswer: "DESK",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400",
    explanation: "Desk nghĩa là cái bàn học.",
    hint: "Từ này có 4 chữ cái, bắt đầu bằng 'D'."
  },
  {
    id: 4,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp các chữ cái thành từ đúng: CÁI TÁCH/CHÉN",
    rearrangeParts: ["C", "U", "P"],
    correctAnswer: "CUP",
    imageUrl: "https://images.unsplash.com/photo-1577931957312-0975b9278964?auto=format&fit=crop&q=80&w=400",
    explanation: "Cup nghĩa là cái tách hoặc cái chén uống nước.",
    hint: "Từ này chỉ có 3 chữ cái thôi!"
  },
  {
    id: 5,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Chọn hình ảnh/từ đúng cho: RAINBOW (Cầu vồng)",
    options: ["Rainbow", "Sun", "Cloud", "Rain"],
    correctAnswer: "Rainbow",
    imageUrl: "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&q=80&w=400",
    explanation: "Rainbow nghĩa là cầu vồng.",
    hint: "Vật này thường xuất hiện sau cơn mưa và có 7 màu."
  },
  {
    id: 6,
    type: QuestionType.REARRANGE,
    questionText: "Nghe và sắp xếp các chữ cái: SINH NHẬT",
    rearrangeParts: ["B", "I", "R", "T", "H", "D", "A", "Y"],
    correctAnswer: "BIRTHDAY",
    imageUrl: "https://images.unsplash.com/photo-1533276395701-c274ca090185?auto=format&fit=crop&q=80&w=400",
    explanation: "Birthday nghĩa là ngày sinh nhật.",
    hint: "Bắt đầu bằng chữ 'B', đây là ngày chúng ta có bánh kem."
  },
  {
    id: 7,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Chọn từ có chứa chữ cái 'C':",
    options: ["write", "hi", "dog", "cat"],
    correctAnswer: "cat",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400",
    explanation: "Từ 'cat' (con mèo) bắt đầu bằng chữ 'c'.",
    hint: "Tìm từ chỉ con vật kêu 'meo meo'."
  },
  {
    id: 8,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Điền từ: Let's look at the s_ _ . (Hãy nhìn lên bầu trời)",
    correctAnswer: "sky",
    imageUrl: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=400",
    explanation: "Sky nghĩa là bầu trời.",
    hint: "Từ này có 3 chữ cái, bắt đầu bằng 's'."
  },
  {
    id: 9,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Đếm số lượng con mèo trong hình:",
    correctAnswer: "four",
    imageUrl: "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=400",
    explanation: "Số 4 trong tiếng Anh là 'four'. Trong ảnh có 4 chú mèo nhỏ.",
    hint: "Sau 'three' là số mấy? Có 4 chữ cái: F-O-U-R."
  },
  {
    id: 10,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp chữ cái tạo thành từ: CHÓ CON",
    rearrangeParts: ["P", "U", "P", "P", "Y"],
    correctAnswer: "PUPPY",
    imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=400",
    explanation: "Puppy nghĩa là chó con.",
    hint: "Bắt đầu bằng chữ 'P', có hai chữ 'P' ở giữa."
  },
  {
    id: 11,
    type: QuestionType.REARRANGE,
    questionText: "Nghe và sắp xếp chữ cái: SỐ 14",
    rearrangeParts: ["F", "O", "U", "R", "T", "E", "E", "N"],
    correctAnswer: "FOURTEEN",
    imageUrl: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?auto=format&fit=crop&q=80&w=400",
    explanation: "Fourteen là số 14.",
    hint: "Ghép từ số 4 (four) với đuôi 'teen'."
  },
  {
    id: 12,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp chữ cái: SỐ 10",
    rearrangeParts: ["T", "E", "N"],
    correctAnswer: "TEN",
    imageUrl: "https://images.unsplash.com/photo-1599508704512-2f19fe912053?auto=format&fit=crop&q=80&w=400",
    explanation: "Ten là số 10.",
    hint: "Bắt đầu bằng chữ 'T'."
  },
  {
    id: 13,
    type: QuestionType.REARRANGE,
    questionText: "Nghe và sắp xếp chữ cái: SỐ 19",
    rearrangeParts: ["N", "I", "N", "E", "T", "E", "E", "N"],
    correctAnswer: "NINETEEN",
    imageUrl: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&q=80&w=400",
    explanation: "Nineteen là số 19.",
    hint: "Ghép từ số 9 (nine) với đuôi 'teen'."
  },
  {
    id: 14,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Đếm số lượng con bò trong hình:",
    correctAnswer: "two",
    imageUrl: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=400",
    explanation: "Số 2 tiếng Anh là 'two'. Trong ảnh có 2 con bò đang đứng.",
    hint: "Sau 'one' là số mấy?"
  },
  {
    id: 15,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Chọn hình ảnh đúng cho câu: 'I like my kite.'",
    options: ["Ball", "Kite", "Doll", "Car"],
    correctAnswer: "Kite",
    imageUrl: "https://images.unsplash.com/photo-1510137617477-8079ba75e927?auto=format&fit=crop&q=80&w=400",
    explanation: "Kite nghĩa là cái diều.",
    hint: "Vật này bay trên trời nhờ gió."
  },
  {
    id: 16,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp chữ cái: CON CÁO",
    rearrangeParts: ["F", "O", "X"],
    correctAnswer: "FOX",
    imageUrl: "https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&q=80&w=400",
    explanation: "Fox nghĩa là con cáo.",
    hint: "Bắt đầu bằng 'F', kết thúc bằng 'X'."
  },
  {
    id: 17,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Điền từ: It's a s_ _ _ _ day. (Trời nắng)",
    correctAnswer: "sunny",
    imageUrl: "https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?auto=format&fit=crop&q=80&w=400",
    explanation: "Sunny nghĩa là có nắng.",
    hint: "Bắt đầu bằng từ 'sun' (mặt trời)."
  },
  {
    id: 18,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp chữ cái: CHÓ CON",
    rearrangeParts: ["P", "U", "P", "P", "Y"],
    correctAnswer: "PUPPY",
    imageUrl: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400",
    explanation: "Puppy là chó con.",
    hint: "Bắt đầu bằng P."
  },
  {
    id: 19,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Điền chữ cái thiếu: Q_ESTION (Câu hỏi)",
    correctAnswer: "U",
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=400",
    explanation: "Question là câu hỏi.",
    hint: "Sau chữ 'Q' thường là chữ cái 'U'."
  },
  {
    id: 20,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Từ nào có âm đầu giống 'G' trong 'Goat':",
    options: ["Garden", "Giraffe", "George", "Giant"],
    correctAnswer: "Garden",
    imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=400",
    explanation: "Garden và Goat đều bắt đầu bằng âm /g/.",
    hint: "Từ này có nghĩa là khu vườn."
  },
  {
    id: 21,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp các chữ cái: CON ONG",
    rearrangeParts: ["B", "E", "E"],
    correctAnswer: "BEE",
    imageUrl: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&q=80&w=400",
    explanation: "Bee nghĩa là con ong.",
    hint: "Bắt đầu bằng chữ 'B'."
  },
  {
    id: 22,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Chọn từ đúng cho số 3 trong hình:",
    options: ["One", "Two", "Three", "Four"],
    correctAnswer: "Three",
    imageUrl: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=400",
    explanation: "Three là số 3.",
    hint: "Bắt đầu bằng âm 'th'."
  },
  {
    id: 23,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Chọn hình đúng cho từ: SQUARE (Hình vuông)",
    options: ["Circle", "Square", "Triangle", "Star"],
    correctAnswer: "Square",
    imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400",
    explanation: "Square nghĩa là hình vuông.",
    hint: "Hình có 4 cạnh bằng nhau."
  },
  {
    id: 24,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Điền từ: He is flying a k_ _ _ . (Anh ấy đang thả diều)",
    correctAnswer: "kite",
    imageUrl: "https://images.unsplash.com/photo-1510137617477-8079ba75e927?auto=format&fit=crop&q=80&w=400",
    explanation: "Kite nghĩa là cái diều.",
    hint: "Có 4 chữ cái, bắt đầu bằng K."
  },
  {
    id: 25,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Điền chữ cái thiếu: Rive_ (Dòng sông)",
    correctAnswer: "r",
    imageUrl: "https://images.unsplash.com/photo-1437482012994-6906ca88b1d9?auto=format&fit=crop&q=80&w=400",
    explanation: "River nghĩa là dòng sông.",
    hint: "Bé điền chữ cái cuối cùng của từ này."
  },
  {
    id: 26,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp chữ cái: ANH/EM TRAI",
    rearrangeParts: ["B", "R", "O", "T", "H", "E", "R"],
    correctAnswer: "BROTHER",
    imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=400",
    explanation: "Brother là anh hoặc em trai.",
    hint: "Bắt đầu bằng chữ 'B'."
  },
  {
    id: 27,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp các chữ cái: CHẠY",
    rearrangeParts: ["R", "U", "N", "S"],
    correctAnswer: "RUNS",
    imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=400",
    explanation: "Runs nghĩa là chạy.",
    hint: "Bắt đầu bằng chữ 'R'."
  },
  {
    id: 28,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Đếm số bút chì màu đỏ trong hình:",
    correctAnswer: "two",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400",
    explanation: "Two là số 2. Trong hình có 2 chiếc bút màu đỏ.",
    hint: "Bé đếm 1, 2..."
  },
  {
    id: 29,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Nghe và chọn chữ cái đúng: Chữ I",
    options: ["A", "E", "I", "U"],
    correctAnswer: "I",
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=400",
    explanation: "Chữ I phát âm là /ai/.",
    hint: "Phát âm giống từ 'Tôi' trong tiếng Anh."
  },
  {
    id: 30,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Điền từ: There is a dog in the g_ _ _ _ _ . (Trong vườn)",
    correctAnswer: "garden",
    imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=400",
    explanation: "Garden nghĩa là khu vườn.",
    hint: "Bắt đầu bằng chữ 'G', có 6 chữ cái."
  },
  {
    id: 31,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Điền từ: Is she r_ _ _ _ _ _ a book? (Cô ấy đang đọc sách à?)",
    correctAnswer: "reading",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
    explanation: "Reading nghĩa là đang đọc.",
    hint: "Bắt đầu bằng từ 'read'."
  },
  {
    id: 32,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp chữ cái: NÔNG TRẠI",
    rearrangeParts: ["F", "A", "R", "M"],
    correctAnswer: "FARM",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400",
    explanation: "Farm nghĩa là nông trại.",
    hint: "Bắt đầu bằng chữ 'F'."
  },
  {
    id: 33,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Điền từ hỏi: _ _ she flying a kite?",
    correctAnswer: "Is",
    imageUrl: "https://images.unsplash.com/photo-1510137617477-8079ba75e927?auto=format&fit=crop&q=80&w=400",
    explanation: "Dùng 'Is' cho chủ ngữ số ít 'she'.",
    hint: "Từ này có 2 chữ cái, bắt đầu bằng I."
  },
  {
    id: 34,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Điền chữ cái thiếu: R_ver (Dòng sông)",
    correctAnswer: "i",
    imageUrl: "https://images.unsplash.com/photo-1437482012994-6906ca88b1d9?auto=format&fit=crop&q=80&w=400",
    explanation: "River là dòng sông.",
    hint: "Nguyên âm đứng sau chữ 'R'."
  },
  {
    id: 35,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Nghe và chọn chữ cái đúng: Chữ H",
    options: ["H", "K", "J", "L"],
    correctAnswer: "H",
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=400",
    explanation: "Chữ H phát âm là /eitʃ/.",
    hint: "Chữ cái đầu tiên của từ 'Hi'."
  },
  {
    id: 36,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Điền chữ cái thiếu: F_n (Cái quạt)",
    correctAnswer: "a",
    imageUrl: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&q=80&w=400",
    explanation: "Fan nghĩa là cái quạt máy.",
    hint: "Nguyên âm ở giữa chữ 'F' và 'n'."
  },
  {
    id: 37,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Điền từ: Look! Bill is f_ _ _ _ _ a kite.",
    correctAnswer: "flying",
    imageUrl: "https://images.unsplash.com/photo-1510137617477-8079ba75e927?auto=format&fit=crop&q=80&w=400",
    explanation: "Flying nghĩa là đang bay/đang thả.",
    hint: "Hành động đang làm chiếc diều bay lên."
  },
  {
    id: 38,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp chữ cái: LỚP HỌC",
    rearrangeParts: ["C", "L", "A", "S", "S", "R", "O", "O", "M"],
    correctAnswer: "CLASSROOM",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400",
    explanation: "Classroom nghĩa là lớp học.",
    hint: "Ghép từ 'class' và 'room'."
  },
  {
    id: 39,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Đếm số lượng con chim trong hình:",
    correctAnswer: "six",
    imageUrl: "https://images.unsplash.com/photo-1552084117-56a987666449?auto=format&fit=crop&q=80&w=400",
    explanation: "Six là số 6. Trong ảnh có một đàn chim gồm 6 con.",
    hint: "1-2-3-4-5-..."
  },
  {
    id: 40,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Chọn từ có chứa chữ cái 'C':",
    options: ["Hot", "Cold", "Warm", "Sun"],
    correctAnswer: "Cold",
    imageUrl: "https://images.unsplash.com/photo-1483329459023-5c1279df92d1?auto=format&fit=crop&q=80&w=400",
    explanation: "Cold (lạnh) bắt đầu bằng chữ 'c'.",
    hint: "Ngược lại với 'Hot' (nóng)."
  },
  {
    id: 41,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Điền từ: The pasta is y_ _ _ _ . (Mỳ Ý ngon)",
    correctAnswer: "yummy",
    imageUrl: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=400",
    explanation: "Yummy nghĩa là ngon tuyệt.",
    hint: "Bắt đầu bằng chữ 'y'."
  },
  {
    id: 42,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Điền từ: The pasta is _ _ _ _ _ . (Ngon)",
    correctAnswer: "yummy",
    imageUrl: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=400",
    explanation: "Pasta is yummy (Mỳ Ý rất ngon).",
    hint: "Bé dùng từ 5 chữ cái để khen đồ ăn ngon."
  },
  {
    id: 43,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Chọn đáp án đúng cho hình: MÈO CON",
    options: ["Puppy", "Kitten", "Chick", "Duck"],
    correctAnswer: "Kitten",
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=400",
    explanation: "Kitten là mèo con.",
    hint: "Bắt đầu bằng chữ 'K'."
  },
  {
    id: 44,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Chọn hình đúng: 'I like my kitten.'",
    options: ["Dog", "Kitten", "Rabbit", "Duck"],
    correctAnswer: "Kitten",
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=400",
    explanation: "Kitten là mèo con.",
    hint: "Con vật kêu meo meo lúc nhỏ."
  },
  {
    id: 45,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp chữ cái: CHÓ CON",
    rearrangeParts: ["P", "U", "P", "P", "Y"],
    correctAnswer: "PUPPY",
    imageUrl: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400",
    explanation: "Puppy là chó con.",
    hint: "Bắt đầu bằng P."
  },
  {
    id: 46,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Chọn từ có chứa chữ cái 'B':",
    options: ["Car", "Bike", "Plane", "Train"],
    correctAnswer: "Bike",
    imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=400",
    explanation: "Bike (xe đạp) bắt đầu bằng chữ 'B'.",
    hint: "Phương tiện có hai bánh."
  },
  {
    id: 47,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Chọn từ có chứa chữ cái 'D':",
    options: ["Mom", "Daddy", "Sister", "Brother"],
    correctAnswer: "Daddy",
    imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=400",
    explanation: "Daddy (Bố) có hai chữ 'D'.",
    hint: "Từ thân mật gọi Bố."
  },
  {
    id: 48,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Chọn từ có âm 'M' giống 'Milk':",
    options: ["Mouse", "Nice", "Rice", "Kite"],
    correctAnswer: "Mouse",
    imageUrl: "https://images.unsplash.com/photo-1543360431-27902996d933?auto=format&fit=crop&q=80&w=400",
    explanation: "Mouse (con chuột) bắt đầu bằng âm /m/.",
    hint: "Con vật hay thích ăn phô mai và bị mèo đuổi."
  },
  {
    id: 49,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Đếm số lượng cánh cửa trong hình:",
    correctAnswer: "two",
    imageUrl: "https://images.unsplash.com/photo-1534073737927-85f1ebff1f5d?auto=format&fit=crop&q=80&w=400",
    explanation: "Số 2 là 'two'. Trong ảnh là hai cánh cửa lớn.",
    hint: "Sau số 'one' là số mấy?"
  },
  {
    id: 50,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp chữ cái: CÁI CHÉN",
    rearrangeParts: ["C", "U", "P"],
    correctAnswer: "CUP",
    imageUrl: "https://images.unsplash.com/photo-1577931957312-0975b9278964?auto=format&fit=crop&q=80&w=400",
    explanation: "Cup là cái chén/tách.",
    hint: "Từ có 3 chữ cái."
  },
  {
    id: 51,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp chữ cái: HẠNH PHÚC",
    rearrangeParts: ["H", "A", "P", "P", "Y"],
    correctAnswer: "HAPPY",
    imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=400",
    explanation: "Happy nghĩa là vui vẻ/hạnh phúc.",
    hint: "Bắt đầu bằng chữ 'H'."
  },
  {
    id: 52,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Nghe và chọn đáp án đúng: SỐ 13",
    options: ["Twelve", "Thirteen", "Fourteen", "Fifteen"],
    correctAnswer: "Thirteen",
    imageUrl: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?auto=format&fit=crop&q=80&w=400",
    explanation: "Thirteen là số 13.",
    hint: "Số bắt đầu bằng âm 'th'."
  },
  {
    id: 53,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Chọn từ có chứa chữ cái 'D':",
    options: ["Bird", "Fish", "Duck", "Cat"],
    correctAnswer: "Duck",
    imageUrl: "https://images.unsplash.com/photo-1459682687441-7761439a709d?auto=format&fit=crop&q=80&w=400",
    explanation: "Duck (con vịt) bắt đầu bằng chữ 'D'.",
    hint: "Con vật kêu quạc quạc."
  },
  {
    id: 54,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Nghe và chọn từ đúng: LISTEN",
    options: ["Look", "Listen", "Read", "Write"],
    correctAnswer: "Listen",
    imageUrl: "https://images.unsplash.com/photo-1522863302244-62957948df07?auto=format&fit=crop&q=80&w=400",
    explanation: "Listen nghĩa là nghe.",
    hint: "Hành động của đôi tai."
  },
  {
    id: 55,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Chọn hình ảnh cho từ: A CANDY (Kẹo)",
    options: ["Candy", "Apple", "Bread", "Milk"],
    correctAnswer: "Candy",
    imageUrl: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&q=80&w=400",
    explanation: "Candy nghĩa là kẹo.",
    hint: "Món quà ngọt ngào bé hay thích."
  },
  {
    id: 56,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Chọn hình ảnh cho câu: 'It is my kite.'",
    options: ["Kite", "Ball", "Doll", "Car"],
    correctAnswer: "Kite",
    imageUrl: "https://images.unsplash.com/photo-1510137617477-8079ba75e927?auto=format&fit=crop&q=80&w=400",
    explanation: "Kite là cái diều.",
    hint: "Diều bay trên cao."
  },
  {
    id: 57,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp chữ cái: VƯỜN BÁCH THÚ",
    rearrangeParts: ["Z", "O", "O"],
    correctAnswer: "ZOO",
    imageUrl: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&q=80&w=400",
    explanation: "Zoo nghĩa là vườn bách thú/sở thú.",
    hint: "Bắt đầu bằng chữ 'Z'."
  },
  {
    id: 58,
    type: QuestionType.REARRANGE,
    questionText: "Nghe và sắp xếp: CÁI HỘP",
    rearrangeParts: ["B", "O", "X"],
    correctAnswer: "BOX",
    imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=400",
    explanation: "Box là cái hộp.",
    hint: "Kết thúc bằng chữ 'X'."
  },
  {
    id: 59,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp chữ cái: CÁI CỔNG",
    rearrangeParts: ["G", "A", "T", "E"],
    correctAnswer: "GATE",
    imageUrl: "https://images.unsplash.com/photo-1524312217414-a28b809890f1?auto=format&fit=crop&q=80&w=400",
    explanation: "Gate là cái cổng.",
    hint: "Bắt đầu bằng chữ 'G'."
  },
  {
    id: 60,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Điền từ: It is my b_ _ _ _ _ _ _ party.",
    correctAnswer: "birthday",
    imageUrl: "https://images.unsplash.com/photo-1533276395701-c274ca090185?auto=format&fit=crop&q=80&w=400",
    explanation: "Birthday party là tiệc sinh nhật.",
    hint: "Bắt đầu bằng B, có 8 chữ cái."
  },
  {
    id: 61,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp câu: I / can / see / the dog.",
    rearrangeParts: ["I", "can", "see", "the dog."],
    correctAnswer: "I can see the dog.",
    imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=400",
    explanation: "Dịch: Tôi có thể nhìn thấy con chó.",
    hint: "Bắt đầu bằng từ 'I'."
  },
  {
    id: 62,
    type: QuestionType.REARRANGE,
    questionText: "Nghe và sắp xếp: SỐ 7",
    rearrangeParts: ["S", "E", "V", "E", "N"],
    correctAnswer: "SEVEN",
    imageUrl: "https://images.unsplash.com/photo-1544211153-6598ba994e63?auto=format&fit=crop&q=80&w=400",
    explanation: "Seven là số 7.",
    hint: "Bắt đầu bằng chữ 'S'."
  },
  {
    id: 63,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Điền từ hỏi: W_ _ _ can you see? (Bạn có thể thấy cái gì?)",
    correctAnswer: "What",
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=400",
    explanation: "What dùng để hỏi cái gì.",
    hint: "Từ hỏi bắt đầu bằng 'Wh'."
  },
  {
    id: 64,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Chọn hình ảnh: GREEN PENCIL",
    options: ["Green pencil", "Red pencil", "Blue pencil", "Yellow pencil"],
    correctAnswer: "Green pencil",
    imageUrl: "https://images.unsplash.com/photo-1562519819-016930ada31c?auto=format&fit=crop&q=80&w=400",
    explanation: "Green là màu xanh lá cây. Trong ảnh có những cây bút chì màu xanh.",
    hint: "Màu của lá cây."
  },
  {
    id: 65,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp chữ cái: PHI CÔNG",
    rearrangeParts: ["P", "I", "L", "O", "T"],
    correctAnswer: "PILOT",
    imageUrl: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=400",
    explanation: "Pilot là phi công.",
    hint: "Người điều khiển máy bay."
  },
  {
    id: 66,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp chữ cái: HÁT",
    rearrangeParts: ["S", "I", "N", "G"],
    correctAnswer: "SING",
    imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=400",
    explanation: "Sing nghĩa là hát.",
    hint: "Bắt đầu bằng 'S'."
  },
  {
    id: 67,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp câu: There / is / a / red pen.",
    rearrangeParts: ["There", "is", "a", "red pen."],
    correctAnswer: "There is a red pen.",
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=400",
    explanation: "Dịch: Có một chiếc bút màu đỏ.",
    hint: "Bắt đầu bằng 'There'."
  },
  {
    id: 68,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Liz is colouring a s_ _ _ _ _ . (Liz đang tô màu hình vuông)",
    correctAnswer: "square",
    imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400",
    explanation: "Square là hình vuông.",
    hint: "Từ này có 6 chữ cái, bắt đầu bằng 's'."
  },
  {
    id: 69,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Tính toán: 9 + 8 = ?",
    correctAnswer: "seventeen",
    imageUrl: "https://images.unsplash.com/photo-1587145820266-a5951ee6f675?auto=format&fit=crop&q=80&w=400",
    explanation: "9 + 8 = 17 (Seventeen).",
    hint: "Số 17 trong tiếng Anh."
  },
  {
    id: 70,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Điền từ: There are five m_ _ _ . (Cây lau nhà)",
    correctAnswer: "mops",
    imageUrl: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400",
    explanation: "Mops nghĩa là những cây lau nhà.",
    hint: "Bắt đầu bằng 'm', số nhiều nên có 's' ở cuối."
  },
  {
    id: 71,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Tony has a b_ _ _ . (Tony có một cuốn sách)",
    correctAnswer: "book",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400",
    explanation: "Book là cuốn sách.",
    hint: "Từ có hai chữ 'o' ở giữa."
  },
  {
    id: 72,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp câu: Liz / is / answering / a / question.",
    rearrangeParts: ["Liz", "is", "answering", "a", "question."],
    correctAnswer: "Liz is answering a question.",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400",
    explanation: "Liz đang trả lời một câu hỏi.",
    hint: "Bắt đầu bằng tên riêng 'Liz'."
  },
  {
    id: 73,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp câu: Max / is / flying / a / kite.",
    rearrangeParts: ["Max", "is", "flying", "a", "kite."],
    correctAnswer: "Max is flying a kite.",
    imageUrl: "https://images.unsplash.com/photo-1510137617477-8079ba75e927?auto=format&fit=crop&q=80&w=400",
    explanation: "Max đang thả diều.",
    hint: "Bắt đầu bằng tên riêng 'Max'."
  },
  {
    id: 74,
    type: QuestionType.REARRANGE,
    questionText: "Nghe và sắp xếp câu: The / popcorn / is / yummy.",
    rearrangeParts: ["The", "popcorn", "is", "yummy."],
    correctAnswer: "The popcorn is yummy.",
    imageUrl: "https://images.unsplash.com/photo-1510629954389-c1e0da47d4ec?auto=format&fit=crop&q=80&w=400",
    explanation: "Bỏng ngô rất ngon.",
    hint: "Bắt đầu bằng 'The'."
  },
  {
    id: 75,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Chọn hình ảnh cho: 'The mouse is running.'",
    options: ["Mouse running", "Dog sleeping", "Cat eating", "Bird flying"],
    correctAnswer: "Mouse running",
    imageUrl: "https://images.unsplash.com/photo-1543360431-27902996d933?auto=format&fit=crop&q=80&w=400",
    explanation: "Mouse là con chuột, running là đang chạy.",
    hint: "Tìm hình con chuột bé xíu đang chạy nhanh."
  },
  {
    id: 76,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp câu: There / is / a / window.",
    rearrangeParts: ["There", "is", "a", "window."],
    correctAnswer: "There is a window.",
    imageUrl: "https://images.unsplash.com/photo-1534073737927-85f1ebff1f5d?auto=format&fit=crop&q=80&w=400",
    explanation: "Dịch: Có một cái cửa sổ.",
    hint: "Bắt đầu bằng 'There'."
  },
  {
    id: 77,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Điền từ hỏi: W_ _ _ _ is Kate? (Kate ở đâu?)",
    correctAnswer: "Where",
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=400",
    explanation: "Where dùng để hỏi vị trí.",
    hint: "Từ hỏi bắt đầu bằng 'Wh'."
  },
  {
    id: 78,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Điền chữ cái còn thiếu: Apple j_ _ _ _ (Nước ép táo)",
    correctAnswer: "juice",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400",
    explanation: "Juice là nước ép hoa quả.",
    hint: "Bắt đầu bằng 'j'."
  },
  {
    id: 79,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Nghe và chọn hình ảnh đúng: FARM",
    options: ["Farm", "School", "Park", "Zoo"],
    correctAnswer: "Farm",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400",
    explanation: "Farm nghĩa là nông trại.",
    hint: "Nơi có nhiều bò, gà và cây cối ruộng vườn."
  },
  {
    id: 80,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Tính toán: 1 + 1 = ?",
    correctAnswer: "two",
    imageUrl: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=400",
    explanation: "1 + 1 = 2 (Two).",
    hint: "Số 2 tiếng Anh gồm 3 chữ cái."
  },
  {
    id: 81,
    type: QuestionType.REARRANGE,
    questionText: "Nghe và sắp xếp: Are / there / any / balloons?",
    rearrangeParts: ["Are", "there", "any", "balloons?"],
    correctAnswer: "Are there any balloons?",
    imageUrl: "https://images.unsplash.com/photo-1525286335722-c30c6b5df541?auto=format&fit=crop&q=80&w=400",
    explanation: "Dịch: Có quả bóng bay nào không?",
    hint: "Câu hỏi nên bắt đầu bằng 'Are'."
  },
  {
    id: 82,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Let's s_ _ _ a song. (Hãy hát một bài)",
    correctAnswer: "sing",
    imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=400",
    explanation: "Sing a song là hát một bài hát.",
    hint: "Bắt đầu bằng 's'."
  },
  {
    id: 83,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Nghe và chọn: PASTA",
    options: ["Pizza", "Pasta", "Bread", "Milk"],
    correctAnswer: "Pasta",
    imageUrl: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=400",
    explanation: "Pasta là mỳ Ý.",
    hint: "Bắt đầu bằng chữ 'P'."
  },
  {
    id: 84,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "A cat has t_ _ eyes. (Mèo có 2 mắt)",
    correctAnswer: "two",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400",
    explanation: "Two là số 2.",
    hint: "Số 2 bé ơi."
  },
  {
    id: 85,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Chọn hình ảnh: 'Father's watching football.'",
    options: ["Watching football", "Reading news", "Cooking", "Sleeping"],
    correctAnswer: "Watching football",
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=400",
    explanation: "Football là môn bóng đá.",
    hint: "Tìm hình có trận đấu bóng đá trên tivi."
  },
  {
    id: 86,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Chọn hình ảnh: 'I can see six pencils.'",
    options: ["6 pencils", "5 pencils", "4 pencils", "3 pencils"],
    correctAnswer: "6 pencils",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400",
    explanation: "Six là số 6.",
    hint: "Bé đếm xem hình nào có đủ 6 cái bút chì."
  },
  {
    id: 87,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp: Hoa / is / playing / with / a / kitten.",
    rearrangeParts: ["Hoa", "is", "playing", "with", "a", "kitten."],
    correctAnswer: "Hoa is playing with a kitten.",
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=400",
    explanation: "Hoa đang chơi với mèo con.",
    hint: "Bắt đầu bằng tên riêng 'Hoa'."
  },
  {
    id: 88,
    type: QuestionType.REARRANGE,
    questionText: "Nghe và sắp xếp: POPCORN",
    rearrangeParts: ["P", "O", "P", "C", "O", "R", "N"],
    correctAnswer: "POPCORN",
    imageUrl: "https://images.unsplash.com/photo-1510629954389-c1e0da47d4ec?auto=format&fit=crop&q=80&w=400",
    explanation: "Popcorn là bỏng ngô.",
    hint: "Bắt đầu bằng chữ 'P'."
  },
  {
    id: 89,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp chữ cái: HAND (Bàn tay)",
    rearrangeParts: ["H", "A", "N", "D"],
    correctAnswer: "HAND",
    imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=400",
    explanation: "Hand là bàn tay.",
    hint: "Bắt đầu bằng 'H'."
  },
  {
    id: 90,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "W_ _ _ is he doing? (Anh ấy đang làm gì?)",
    correctAnswer: "What",
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=400",
    explanation: "What dùng để hỏi làm việc gì.",
    hint: "Từ hỏi quen thuộc bắt đầu bằng 'Wh'."
  },
  {
    id: 91,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Chọn đáp án đúng: 'Tôi thấy một con bò ở nông trại.'",
    options: ["I can see an ox on the farm.", "I can see a ox on the farm.", "I can see an ox in the farm.", "I can see an ox at the farm."],
    correctAnswer: "I can see an ox on the farm.",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400",
    explanation: "Dùng 'an' trước từ bắt đầu bằng nguyên âm 'o' (ox).",
    hint: "Chú ý dùng 'an' hay 'a' cho từ 'ox'."
  },
  {
    id: 92,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Lily is s_ _ _ _ _ _ . (Lily đang hát)",
    correctAnswer: "singing",
    imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=400",
    explanation: "Singing nghĩa là đang hát.",
    hint: "Thêm đuôi 'ing' vào sau từ 'sing'."
  },
  {
    id: 93,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Ken is playing with a k_ _ _ _ _ . (Ken chơi với mèo con)",
    correctAnswer: "kitten",
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=400",
    explanation: "Kitten là mèo con.",
    hint: "Bắt đầu bằng chữ 'k', có 6 chữ cái."
  },
  {
    id: 94,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Look! They're t_ _ _ _ _ . (Những con hổ)",
    correctAnswer: "tigers",
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=400",
    explanation: "Tigers là những con hổ.",
    hint: "Số nhiều của từ 'tiger', thêm s ở cuối."
  },
  {
    id: 95,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "I can see a r_ _ _ . (Tôi thấy con đường)",
    correctAnswer: "road",
    imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=400",
    explanation: "Road là con đường đi.",
    hint: "Bắt đầu bằng 'r', có 4 chữ cái."
  },
  {
    id: 96,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Nghe và chọn: THE PASTA IS YUMMY.",
    options: ["The pasta is yummy.", "The pizza is yummy.", "The cake is yummy.", "The milk is yummy."],
    correctAnswer: "The pasta is yummy.",
    imageUrl: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=400",
    explanation: "Pasta là mỳ Ý.",
    hint: "Món mỳ sợi dài đặc trưng của nước Ý."
  },
  {
    id: 97,
    type: QuestionType.REARRANGE,
    questionText: "Sắp xếp: Let's / look / at / the / rainbow.",
    rearrangeParts: ["Let's", "look", "at", "the", "rainbow."],
    correctAnswer: "Let's look at the rainbow.",
    imageUrl: "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&q=80&w=400",
    explanation: "Dịch: Hãy cùng nhìn cầu vồng.",
    hint: "Bắt đầu bằng 'Let's'."
  },
  {
    id: 98,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Nghe và chọn: BANANA",
    options: ["Apple", "Banana", "Orange", "Grape"],
    correctAnswer: "Banana",
    imageUrl: "https://images.unsplash.com/photo-1528825876231-237a40386924?auto=format&fit=crop&q=80&w=400",
    explanation: "Banana là quả chuối.",
    hint: "Quả màu vàng, hình dáng dài dài."
  },
  {
    id: 99,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "Linh is having n_ _ _ _ _ _ today. (Linh ăn mỳ hôm nay)",
    correctAnswer: "noodles",
    imageUrl: "https://images.unsplash.com/photo-1511112232418-090263445831?auto=format&fit=crop&q=80&w=400",
    explanation: "Noodles là mỳ sợi/phở.",
    hint: "Bắt đầu bằng chữ 'n', có 7 chữ cái."
  },
  {
    id: 100,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Chọn hình ảnh cho từ: CIRCLE (Hình tròn)",
    options: ["Circle", "Square", "Triangle", "Star"],
    correctAnswer: "Circle",
    imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400",
    explanation: "Circle nghĩa là hình tròn.",
    hint: "Hình dạng tròn trịa như mặt trăng rằm."
  }
];