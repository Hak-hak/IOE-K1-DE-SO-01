import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { QUIZ_DATA } from './constants';
import { QuestionType, GameState, Question, UserAnswer } from './types';

// --- COMPONENTS ---

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transform active:scale-95";
    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30",
        secondary: "bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/30",
        danger: "bg-rose-500 hover:bg-rose-600 text-white shadow-rose-500/30",
        outline: "bg-white border-2 border-slate-300 text-slate-600 hover:border-blue-500 hover:text-blue-600"
    };
    const sizes = { sm: "px-4 py-1.5 text-sm", md: "px-6 py-3 text-base", lg: "px-8 py-4 text-lg" };
    return <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>{children}</button>;
};

const AudioPlayer: React.FC<{ textToSpeak?: string }> = ({ textToSpeak }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const speak = () => {
        if (!window.speechSynthesis || !textToSpeak) return;
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(textToSpeak);
        u.lang = 'en-US'; u.rate = 0.8; u.pitch = 1.1;
        u.onstart = () => setIsPlaying(true);
        u.onend = () => setIsPlaying(false);
        u.onerror = () => setIsPlaying(false);
        window.speechSynthesis.speak(u);
    };
    return (
        <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-2xl border-2 border-blue-100 shadow-sm transition-all hover:shadow-md">
            <button type="button" onClick={speak} className={`w-12 h-12 flex items-center justify-center rounded-full text-white shadow-lg ${isPlaying ? 'bg-rose-500 animate-pulse' : 'bg-blue-600 hover:bg-blue-700'}`}>
                {isPlaying ? "||" : "▶"}
            </button>
            <div className="flex flex-col">
                <span className="text-xs font-black text-blue-400 uppercase tracking-widest">Âm thanh</span>
                <span className="text-sm font-bold text-blue-700">Nghe cô giáo đọc</span>
            </div>
        </div>
    );
};

const QuestionCard: React.FC<{ question: Question; onAnswer: (res: string) => void; isAnswered: boolean; userAnswer?: string }> = ({ question, onAnswer, isAnswered, userAnswer }) => {
    const [inputVal, setInputVal] = useState('');
    const [jumbled, setJumbled] = useState<string[]>([]);
    const [selected, setSelected] = useState<string[]>([]);
    const [hint, setHint] = useState(false);

    useEffect(() => {
        setInputVal(''); setSelected([]); setHint(false);
        if (question.type === QuestionType.REARRANGE && question.rearrangeParts) {
            setJumbled([...question.rearrangeParts].sort(() => Math.random() - 0.5));
        }
    }, [question.id]);

    const normalize = (s: string) => s ? s.normalize('NFC').replace(/[.,!?;:'"]/g, '').replace(/\s+/g, '').trim().toLowerCase() : "";
    const isCorrect = userAnswer && normalize(userAnswer) === normalize(question.correctAnswer);

    const handlePart = (p: string, i: number) => {
        if (isAnswered) return;
        const id = `${p}-${i}`;
        if (selected.includes(id)) setSelected(prev => prev.filter(x => x !== id));
        else setSelected(prev => [...prev, id]);
    };

    return (
        <div className="w-full max-w-3xl animate-fade-in bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 mx-auto">
            <div className="bg-slate-50 px-6 py-4 flex justify-between items-center border-b">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-black uppercase tracking-wider">{question.type}</span>
                {!isAnswered && <button onClick={() => setHint(!hint)} className="text-amber-600 text-xs font-bold border border-amber-200 px-3 py-1 rounded-full hover:bg-amber-50">{hint ? "Ẩn gợi ý" : "Gợi ý 💡"}</button>}
            </div>
            <div className="p-6 sm:p-10">
                {question.imageUrl && <div className="flex justify-center bg-slate-50 p-4 rounded-2xl mb-6 shadow-inner"><img src={question.imageUrl} className="max-h-56 object-contain rounded-xl" alt="Hint" /></div>}
                {question.questionText.toLowerCase().includes('nghe') && <AudioPlayer textToSpeak={question.correctAnswer} />}
                {hint && !isAnswered && <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200 text-sm text-amber-900 animate-slide-up font-bold">💡 Cô giáo dặn: {question.hint}</div>}
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 my-6 leading-tight">{question.questionText}</h2>

                {question.type === QuestionType.MULTIPLE_CHOICE && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {question.options?.map((opt, idx) => (
                            <button key={idx} onClick={() => !isAnswered && onAnswer(opt)} disabled={isAnswered} className={`p-5 rounded-2xl text-left border-4 transition-all ${isAnswered ? (normalize(opt) === normalize(question.correctAnswer) ? 'bg-green-100 border-green-500 text-green-800' : normalize(opt) === normalize(userAnswer || "") ? 'bg-red-100 border-red-500 text-red-800' : 'bg-slate-50 border-slate-100 opacity-60 grayscale') : 'bg-white border-slate-100 hover:border-blue-400 hover:shadow-lg'}`}>
                                <span className="font-black text-xl">{String.fromCharCode(65 + idx)}. {opt}</span>
                            </button>
                        ))}
                    </div>
                )}

                {question.type === QuestionType.FILL_IN_BLANK && (
                    <div className="flex gap-2">
                        <input type="text" value={isAnswered ? userAnswer : inputVal} onChange={e => setInputVal(e.target.value)} disabled={isAnswered} className={`flex-1 p-5 rounded-2xl border-4 text-2xl font-bold uppercase text-center outline-none ${isAnswered ? (isCorrect ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-500 bg-red-50 text-red-700') : 'border-slate-100 focus:border-blue-500 bg-slate-50'}`} placeholder="..." />
                        {!isAnswered && <Button onClick={() => inputVal.trim() && onAnswer(inputVal)}>Gửi</Button>}
                    </div>
                )}

                {question.type === QuestionType.REARRANGE && (
                    <div className="space-y-6">
                        <div className="flex flex-wrap justify-center gap-3 p-4 bg-slate-50 rounded-2xl border-2 border-dashed">
                            {jumbled.map((p, i) => !selected.includes(`${p}-${i}`) && <button key={`${p}-${i}`} onClick={() => handlePart(p, i)} className="min-w-[3rem] h-12 bg-white border-2 rounded-xl font-black text-xl text-blue-600 shadow-sm">{p}</button>)}
                        </div>
                        <div className={`min-h-[70px] p-4 rounded-2xl border-4 border-dashed flex flex-wrap justify-center gap-2 items-center ${isAnswered ? (isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : 'border-blue-100 bg-blue-50/20'}`}>
                            {selected.map((s, idx) => <button key={idx} onClick={() => handlePart(s.split('-')[0], parseInt(s.split('-')[1]))} disabled={isAnswered} className="px-4 h-12 bg-blue-600 text-white rounded-xl font-black text-xl animate-bounce-short shadow-md">{s.split('-')[0]}</button>)}
                        </div>
                        {!isAnswered && <Button onClick={() => onAnswer(selected.map(x => x.split('-')[0]).join(question.correctAnswer.includes(' ') ? ' ' : ''))} disabled={!selected.length} className="w-full">Xác nhận</Button>}
                    </div>
                )}

                {isAnswered && (
                    <div className={`mt-8 p-6 rounded-2xl border-4 shadow-lg ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                        <h3 className="font-black text-xl mb-2">{isCorrect ? 'TUYỆT VỜI!' : 'BÉ THỬ LẠI NHÉ!'}</h3>
                        {!isCorrect && <div className="mb-2"><span className="text-sm font-bold opacity-70">Đáp án: </span><span className="font-black text-2xl uppercase tracking-widest">{question.correctAnswer}</span></div>}
                        <p className="text-sm font-medium italic">"{question.explanation}"</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const App: React.FC = () => {
    const [gameState, setGameState] = useState<GameState>(GameState.START);
    const [userName, setUserName] = useState('');
    const [idx, setIdx] = useState(0);
    const [ans, setAns] = useState<UserAnswer[]>([]);
    const [grid, setGrid] = useState(false);

    const start = (name: string) => { setUserName(name); setAns([]); setIdx(0); setGameState(GameState.PLAYING); };
    const onAns = (r: string) => {
        const q = QUIZ_DATA[idx];
        const correct = r.normalize('NFC').replace(/\s+/g, '').toLowerCase() === q.correctAnswer.normalize('NFC').replace(/\s+/g, '').toLowerCase();
        setAns(prev => [...prev.filter(x => x.questionId !== q.id), { questionId: q.id, userResponse: r, isCorrect: correct }]);
    };

    if (gameState === GameState.START) return (
        <div className="min-h-screen flex items-center justify-center bg-blue-600 p-4">
            <div className="bg-white rounded-[3rem] p-10 max-w-md w-full text-center shadow-2xl border-8 border-white/20 animate-slide-up">
                <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 text-4xl font-black italic shadow-inner rotate-3">IOE</div>
                <h1 className="text-3xl font-black mb-6">LUYỆN THI LỚP 1<br/><span className="text-blue-600">ĐỀ SỐ 01</span></h1>
                <input type="text" placeholder="Tên bé yêu..." className="w-full px-6 py-4 rounded-2xl border-2 mb-6 text-center font-bold text-xl outline-none focus:border-blue-500" onChange={e => setUserName(e.target.value)} />
                <Button onClick={() => start(userName)} size="lg" className="w-full py-6 text-2xl shadow-xl shadow-blue-200" disabled={!userName.trim()}>BẮT ĐẦU 🚀</Button>
            </div>
        </div>
    );

    if (gameState === GameState.FINISHED) return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white rounded-[3rem] p-10 max-w-2xl w-full text-center shadow-2xl animate-fade-in border-4 border-slate-100">
                <h2 className="text-3xl font-black mb-4">KẾT QUẢ CỦA BÉ</h2>
                <div className="text-7xl font-black text-blue-600 mb-8">{ans.filter(x => x.isCorrect).length * 10} <span className="text-2xl text-slate-400">điểm</span></div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-100"><div className="text-4xl font-black text-green-600">{ans.filter(x => x.isCorrect).length}</div><div className="text-xs font-black uppercase text-green-400">Đúng</div></div>
                    <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-100"><div className="text-4xl font-black text-red-600">{QUIZ_DATA.length - ans.filter(x => x.isCorrect).length}</div><div className="text-xs font-black uppercase text-red-400">Chưa đúng</div></div>
                </div>
                <Button onClick={() => setGameState(GameState.START)} className="w-full py-4 text-xl">Làm lại</Button>
            </div>
        </div>
    );

    const q = QUIZ_DATA[idx];
    const userA = ans.find(x => x.questionId === q.id);
    const isAns = !!userA;

    return (
        <div className="min-h-screen bg-slate-100 p-4 pb-32 flex flex-col items-center">
            <div className="w-full max-w-3xl flex justify-between items-center mb-6 bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex flex-col"><span className="text-[10px] font-black uppercase text-slate-400">Bé yêu</span><span className="font-black text-slate-700">{userName}</span></div>
                <button onClick={() => setGrid(true)} className="px-5 py-2 bg-slate-100 hover:bg-slate-200 rounded-2xl font-black text-sm text-slate-500 transition-colors">Danh sách</button>
                <div className="flex flex-col items-end"><span className="text-[10px] font-black uppercase text-slate-400">Câu số</span><span className="font-black text-blue-600">{idx + 1} / {QUIZ_DATA.length}</span></div>
            </div>
            
            <QuestionCard question={q} onAnswer={onAns} isAnswered={isAns} userAnswer={userA?.userResponse} />

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t shadow-lg z-10 flex justify-center">
                <div className="w-full max-w-3xl flex gap-4">
                    <Button variant="outline" onClick={() => setIdx(i => Math.max(0, i-1))} disabled={idx === 0} className="w-24">Trước</Button>
                    <div className="flex-1 flex gap-2">
                        {isAns ? (
                            idx === QUIZ_DATA.length - 1 ? <Button variant="secondary" onClick={() => setGameState(GameState.FINISHED)} className="flex-1">Nộp bài</Button> : <Button onClick={() => setIdx(i => i + 1)} className="flex-1">Tiếp theo →</Button>
                        ) : <Button variant="outline" onClick={() => setIdx(i => Math.min(QUIZ_DATA.length-1, i+1))} className="flex-1">Bỏ qua</Button>}
                    </div>
                    <Button variant="outline" onClick={() => setIdx(i => Math.min(QUIZ_DATA.length-1, i+1))} disabled={idx === QUIZ_DATA.length-1} className="w-24">Sau</Button>
                </div>
            </div>

            {grid && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 p-4 flex items-center justify-center animate-fade-in">
                    <div className="bg-white rounded-[2.5rem] max-w-3xl w-full p-8 shadow-2xl animate-slide-up max-h-[85vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="font-black text-2xl">Bảng câu hỏi</h3>
                            <button onClick={() => setGrid(false)} className="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">✕</button>
                        </div>
                        <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
                            {QUIZ_DATA.map((_, i) => {
                                const a = ans.find(x => x.questionId === QUIZ_DATA[i].id);
                                return <button key={i} onClick={() => { setIdx(i); setGrid(false); }} className={`h-12 rounded-xl font-black border-2 transition-all ${idx === i ? 'border-blue-500 bg-blue-50 text-blue-600' : a ? (a.isCorrect ? 'bg-green-500 text-white border-green-600' : 'bg-red-500 text-white border-red-600') : 'bg-slate-50 border-transparent text-slate-400'}`}>{i+1}</button>
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);