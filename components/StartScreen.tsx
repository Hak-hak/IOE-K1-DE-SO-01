import React, { useState } from 'react';
import Button from './Button';

interface StartScreenProps {
    onStart: (name: string) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
    const [name, setName] = useState('');
    const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); if (name.trim()) onStart(name.trim()); };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 p-4">
            <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 max-w-md w-full text-center animate-slide-up border-8 border-white/20">
                <div className="mb-8">
                    <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 text-4xl font-black italic shadow-inner rotate-3">IOE</div>
                    <h1 className="text-4xl font-black text-slate-800 mb-2 tracking-tight uppercase">K1 ĐỀ SỐ 01</h1>
                    <p className="text-slate-500 font-bold italic text-lg">Luyện thi tiếng Anh Lớp 1</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-left">
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">Tên của bé yêu</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Nhập tên của bé..." 
                            className="w-full px-8 py-5 rounded-3xl border-2 border-slate-100 focus:border-blue-500 focus:ring-8 focus:ring-blue-50 outline-none transition-all text-xl font-bold" 
                            required 
                        />
                    </div>
                    <Button 
                        type="submit" 
                        className="w-full py-6 text-2xl shadow-xl shadow-blue-200 rounded-3xl" 
                        size="lg" 
                        disabled={!name.trim()}
                    >
                        BẮT ĐẦU NGAY 🚀
                    </Button>
                </form>
                <div className="mt-8 text-slate-400 text-xs font-bold uppercase tracking-widest">
                    Chinh phục 100 câu hỏi
                </div>
            </div>
        </div>
    );
};

export default StartScreen;