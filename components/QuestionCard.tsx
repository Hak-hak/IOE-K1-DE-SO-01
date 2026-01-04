
import React, { useState, useEffect } from 'react';
import { Question, QuestionType } from '../types';
import Button from './Button';
import AudioPlayer from './AudioPlayer';

interface QuestionCardProps {
    question: Question;
    onAnswer: (response: string) => void;
    isAnswered: boolean;
    userAnswer?: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, isAnswered, userAnswer }) => {
    const [inputVal, setInputVal] = useState('');
    const [jumbledParts, setJumbledParts] = useState<string[]>([]);
    const [selectedParts, setSelectedParts] = useState<string[]>([]);
    const [showHint, setShowHint] = useState(false);

    // Hàm xáo trộn mảng
    const shuffleArray = (array: string[]) => {
        const newArr = [...array];
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        if (newArr.join('') === array.join('') && newArr.length > 1) {
            return shuffleArray(newArr);
        }
        return newArr;
    };

    useEffect(() => {
        setInputVal('');
        setSelectedParts([]);
        setShowHint(false);
        
        if (question.type === QuestionType.REARRANGE && question.rearrangeParts) {
            setJumbledParts(shuffleArray(question.rearrangeParts));
        }
    }, [question.id]);

    const normalize = (str: string) => str ? str.normalize('NFC').replace(/[.,!?;:'"]/g, '').replace(/\s+/g, '').trim().toLowerCase() : "";
    const isCorrect = () => userAnswer && normalize(userAnswer) === normalize(question.correctAnswer);

    const handleMCSelect = (opt: string) => !isAnswered && onAnswer(opt);
    const handleInputSubmit = (e: React.FormEvent) => { e.preventDefault(); if (!isAnswered && inputVal.trim()) onAnswer(inputVal.trim()); };
    
    const handlePartClick = (part: string, index: number) => {
        if (!isAnswered) {
            const partId = `${part}-${index}`;
            if (selectedParts.includes(partId)) {
                setSelectedParts(prev => prev.filter(p => p !== partId));
            } else {
                setSelectedParts(prev => [...prev, partId]);
            }
        }
    };

    const handleRearrangeSubmit = () => {
        if (!isAnswered && selectedParts.length > 0) {
            const isSingleWord = !question.correctAnswer.includes(' ');
            const finalString = selectedParts.map(p => p.split('-')[0]).join(isSingleWord ? '' : ' ');
            onAnswer(finalString);
        }
    };

    const getCleanPart = (partId: string) => partId.split('-')[0];

    // Tự động xác định văn bản cần đọc nếu câu hỏi yêu cầu "Nghe"
    const getTextToSpeak = () => {
        if (question.audioUrl) return undefined; // Ưu tiên file có sẵn
        if (question.questionText.toLowerCase().includes('nghe')) {
            // Trả về đáp án đúng để hệ thống đọc cho bé nghe
            return question.correctAnswer;
        }
        return undefined;
    };

    const textToSpeak = getTextToSpeak();

    return (
        <div className="w-full max-w-3xl mx-auto mb-8 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-extrabold uppercase">{question.type.replace(/_/g, ' ')}</span>
                        {!isAnswered && (
                            <button 
                                onClick={() => setShowHint(!showHint)} 
                                className={`px-3 py-1 text-xs font-bold border rounded-full transition-colors ${showHint ? 'bg-amber-500 text-white border-amber-600' : 'bg-amber-50 text-amber-600 border-amber-200 hover:bg-amber-100'}`}
                            >
                                {showHint ? 'Ẩn Gợi ý' : '💡 Xem Gợi ý'}
                            </button>
                        )}
                    </div>
                    <span className="text-xs font-bold text-slate-300">ID: {question.id}</span>
                </div>
                <div className="p-6 sm:p-10">
                    <div className="mb-6 space-y-4">
                        {question.imageUrl && (
                            <div className="flex justify-center bg-slate-50 rounded-2xl p-4 border border-slate-100">
                                <img 
                                    src={question.imageUrl} 
                                    className="max-h-64 object-contain rounded-xl shadow-sm transition-transform hover:scale-105 duration-300" 
                                    alt="Visual Aid" 
                                />
                            </div>
                        )}
                        {(question.audioUrl || textToSpeak) && (
                            <div className="animate-fade-in">
                                <AudioPlayer src={question.audioUrl} textToSpeak={textToSpeak} />
                            </div>
                        )}
                    </div>

                    {showHint && !isAnswered && (
                        <div className="mb-6 bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl text-sm text-amber-900 border border-amber-200 animate-slide-up">
                            <strong className="block mb-1 uppercase text-[10px] tracking-widest text-amber-600">Gợi ý từ cô giáo:</strong>
                            <p className="font-semibold">{question.hint}</p>
                        </div>
                    )}

                    <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 leading-relaxed">{question.questionText}</h2>

                    {question.type === QuestionType.MULTIPLE_CHOICE && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {question.options?.map((opt, idx) => (
                                <button key={idx} onClick={() => handleMCSelect(opt)} disabled={isAnswered} className={`w-full p-5 rounded-2xl text-left border-4 transition-all ${isAnswered ? (normalize(opt) === normalize(question.correctAnswer) ? 'bg-green-100 border-green-500 text-green-900' : normalize(opt) === normalize(userAnswer || "") ? 'bg-red-100 border-red-500 text-red-900' : 'bg-slate-50 border-slate-100 opacity-60') : 'bg-white border-slate-100 hover:border-blue-400 hover:shadow-lg'}`}>
                                    <div className="flex items-center">
                                        <span className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 font-black ${isAnswered && normalize(opt) === normalize(question.correctAnswer) ? 'bg-green-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                                            {String.fromCharCode(65 + idx)}
                                        </span>
                                        <span className="text-lg font-bold">{opt}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}

                    {question.type === QuestionType.FILL_IN_BLANK && (
                        <form onSubmit={handleInputSubmit} className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <input type="text" value={isAnswered ? userAnswer : inputVal} onChange={(e) => setInputVal(e.target.value)} disabled={isAnswered} className={`flex-1 p-5 rounded-2xl border-4 text-2xl font-bold outline-none text-center tracking-widest uppercase ${isAnswered ? (isCorrect() ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-500 bg-red-50 text-red-700') : 'border-slate-100 focus:border-blue-500 bg-slate-50'}`} placeholder="???" />
                                {!isAnswered && <Button type="submit" size="lg" className="rounded-2xl">Gửi</Button>}
                            </div>
                            {!isAnswered && <div className="text-sm font-bold text-slate-400 text-center uppercase tracking-widest">Từ này có {question.correctAnswer.length} chữ cái</div>}
                        </form>
                    )}

                    {question.type === QuestionType.REARRANGE && (
                        <div className="space-y-8">
                            <div className="flex flex-wrap justify-center gap-4 p-6 bg-slate-50 rounded-2xl border-2 border-slate-200 border-dashed">
                                {jumbledParts.map((part, idx) => {
                                    const partId = `${part}-${idx}`;
                                    const isSelected = selectedParts.includes(partId);
                                    return (
                                        <button 
                                            key={partId} 
                                            onClick={() => handlePartClick(part, idx)} 
                                            disabled={isAnswered || isSelected} 
                                            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border-4 border-slate-200 shadow-md text-xl sm:text-2xl font-black text-blue-600 transition-all active:scale-90 flex items-center justify-center ${isSelected ? 'opacity-0 scale-50 pointer-events-none' : 'hover:border-blue-500 hover:shadow-blue-100'}`}
                                        >
                                            {part}
                                        </button>
                                    );
                                })}
                            </div>

                            <div className={`min-h-[100px] p-6 rounded-[2rem] border-4 border-dashed flex flex-wrap justify-center gap-3 items-center transition-colors ${isAnswered ? (isCorrect() ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : 'border-blue-200 bg-blue-50/30'}`}>
                                {selectedParts.length === 0 && !isAnswered && <div className="text-slate-400 font-bold uppercase tracking-widest animate-pulse">Bấm các chữ cái ở trên...</div>}
                                {selectedParts.map((partId, idx) => (
                                    <button 
                                        key={idx} 
                                        onClick={() => handlePartClick(getCleanPart(partId), parseInt(partId.split('-')[1]))} 
                                        disabled={isAnswered} 
                                        className="min-w-[3.5rem] h-14 sm:h-16 bg-blue-600 text-white rounded-2xl font-black text-xl sm:text-2xl shadow-lg hover:bg-rose-500 transition-all flex items-center justify-center animate-bounce-short px-4"
                                    >
                                        {getCleanPart(partId)}
                                    </button>
                                ))}
                            </div>
                            
                            {!isAnswered && (
                                <div className="flex justify-center">
                                    <Button onClick={handleRearrangeSubmit} disabled={selectedParts.length === 0} className="w-full sm:w-64 py-5 text-xl rounded-2xl shadow-lg">Xác nhận đáp án</Button>
                                </div>
                            )}
                        </div>
                    )}

                    {isAnswered && (
                        <div className={`mt-10 p-8 rounded-3xl border-4 shadow-xl animate-slide-up ${isCorrect() ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                            <div className="flex items-start gap-6">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-white font-black text-3xl shadow-lg ${isCorrect() ? 'bg-green-500' : 'bg-red-500 animate-shake'}`}>
                                    {isCorrect() ? '✓' : '✕'}
                                </div>
                                <div className="flex-1">
                                    <h3 className={`font-black text-2xl mb-2 ${isCorrect() ? 'text-green-800' : 'text-red-800'}`}>
                                        {isCorrect() ? 'TUYỆT VỜI!' : 'BÉ THỬ LẠI NHÉ!'}
                                    </h3>
                                    {!isCorrect() && (
                                        <div className="mb-4">
                                            <span className="text-red-600 text-xs font-black uppercase tracking-widest block mb-1">Đáp án đúng:</span> 
                                            <span className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tighter uppercase">{question.correctAnswer}</span>
                                        </div>
                                    )}
                                    <div className="bg-white/80 p-4 rounded-2xl text-slate-700 font-medium border border-white">
                                        <span className="font-black text-blue-600 block mb-1 uppercase text-[10px] tracking-widest">Cô giáo giải thích:</span>
                                        {question.explanation}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;
