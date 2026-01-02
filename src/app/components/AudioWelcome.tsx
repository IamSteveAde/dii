"use client";

import { useRef, useState } from "react";
import { Volume2, X } from "lucide-react";

export default function AudioWelcome() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showPrompt, setShowPrompt] = useState(true);

  const playAudio = () => {
    if (!audioRef.current) return;

    audioRef.current.muted = false;

    audioRef.current
      .play()
      .then(() => {
        setShowPrompt(false);
      })
      .catch(() => {
        // browser may block autoplay — safe to ignore after interaction
      });
  };

  const dismiss = () => {
    setShowPrompt(false);
  };

  return (
    <>
      {/* AUDIO ELEMENT */}
      <audio
        ref={audioRef}
        src="/audio/welcome.m4a"
        preload="auto"
      />

      {/* PERMISSION PROMPT */}
      {showPrompt && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-start gap-4 rounded-2xl bg-white px-6 py-4 shadow-[0_30px_80px_rgba(0,0,0,0.15)] border border-black/5 max-w-[440px]">
            <Volume2 size={18} className="text-[#5f3b86] flex-shrink-0 mt-1" />

            <div className="text-sm text-black/80 leading-relaxed">
              <strong className="block text-black mb-1">
                Welcome to Optivance HR Africa
              </strong>
              Would you like a brief audio overview of how we help businesses
              hire and manage blue-collar workers through WhatsApp?
            </div>

            <div className="flex items-center gap-2 ml-2">
              <button
                onClick={playAudio}
                className="rounded-xl bg-[#5f3b86] px-4 py-2 text-xs tracking-wide uppercase text-white hover:opacity-90 transition"
              >
                Play Audio
              </button>

              <button
                onClick={dismiss}
                className="text-black/40 hover:text-black transition"
                aria-label="Dismiss audio prompt"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
