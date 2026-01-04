
import React, { useRef, useState, useEffect } from 'react';

interface AudioPlayerProps {
    src?: string;
    textToSpeak?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, textToSpeak }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const speak = () => {
        if (!window.speechSynthesis) return;

        // Hủy các yêu cầu đọc trước đó để tránh chồng chéo
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = 'en-US'; // Thiết lập giọng đọc tiếng Anh
        utterance.rate = 0.9;     // Tốc độ chậm một chút cho bé dễ nghe
        utterance.pitch = 1.1;    // Giọng hơi cao một chút cho thân thiện với trẻ em

        utterance.onstart = () => setIsPlaying(true);
        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);

        window.speechSynthesis.speak(utterance);
    };

    const togglePlay = () => {
        if (src) {
            if (audioRef.current) {
                if (isPlaying) {
                    audioRef.current.pause();
                } else {
                    audioRef.current.play();
                }
                setIsPlaying(!isPlaying);
            }
        } else if (textToSpeak) {
            speak();
        }
    };

    // Tự động phát âm thanh khi hiển thị câu hỏi nghe lần đầu (tùy chọn)
    useEffect(() => {
        if (textToSpeak && !src) {
            // Thường trình duyệt chặn auto-play speech, nên để người dùng bấm sẽ tốt hơn
            // Tuy nhiên có thể gọi nhẹ ở đây nếu cần
        }
    }, [textToSpeak, src]);

    return (
        <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-2xl border-2 border-blue-100 shadow-sm transition-all hover:shadow-md">
            <button 
                type="button" 
                onClick={togglePlay} 
                className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full text-white shadow-lg transition-all transform active:scale-90 ${isPlaying ? 'bg-rose-500 animate-pulse' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
                {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 9v6m4-6v6" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                )}
            </button>
            <div className="flex flex-col">
                <span className="text-xs font-black text-blue-400 uppercase tracking-widest">Âm thanh</span>
                <span className="text-sm font-bold text-blue-700">Bấm để nghe cô giáo đọc</span>
            </div>
            {src && <audio ref={audioRef} src={src} onEnded={() => setIsPlaying(false)} className="hidden" />}
        </div>
    );
};

export default AudioPlayer;
