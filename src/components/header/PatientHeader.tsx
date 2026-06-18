import React, { useState, useEffect } from "react";
import { 
  Upload, 
  Plus, 
  ChevronDown, 
  Timer, 
  Mic,
  AudioLines 
} from "lucide-react";

const PatientHeader: React.FC = () => {
  // Action state managers
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [selectedDocument, setSelectedDocument] = useState<string>("Resume");
  
  // 🚀 ACTIVE CHANGE: State for tracking microphone recording/live session
  const [isRecording, setIsRecording] = useState<boolean>(true);
  const [seconds, setSeconds] = useState<number>(2107); // 35:07 representation matching target image

  // 🚀 ACTIVE CHANGE: Background recording simulation handler
  useEffect(() => {
    let interval: number | null = null;
    if (isRecording) {
      interval = window.setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => {
      if (interval !== null) window.clearInterval(interval);
    };
  }, [isRecording]);

  const formatTime = (totalSeconds: number): string => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSystemShare = async (): Promise<void> => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Patient Note - Kodawa, Issac",
          text: "Reviewing clinical transcription summary data for patient Kodawa, Issac.",
          url: window.location.href,
        });
      } catch (error) {
        console.log("Share canceled:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
      } catch {
        alert("Sharing failed. Please copy the URL manually.");
      }
    }
  };

  return (
    <div className="w-full bg-white select-none border-b border-gray-100">
      
      {/* ================= PRIMARY PATIENT META & ACTION SUITE ROW ================= */}
      <div className="flex items-center justify-between px-6 py-4">
        
        {/* Left Profile Identity Container Block */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-gray-500 text-sm border border-gray-200/60">
            KI
          </div>
          <div>
            <h1 className="text-base font-bold text-gray-900 leading-tight tracking-tight">Kodawa, Issac</h1>
            <p className="text-xs font-medium text-gray-400 mt-0.5">ED, L penile sens</p>
          </div>
        </div>

        {/* Right Tool Suite Block Container */}
        <div className="flex flex-col items-end gap-2.5">
          
          {/* Top Actions Row */}
          <div className="flex items-center gap-2">
            {/* Upload / Export Tray Icon Action */}
            <button 
              onClick={handleSystemShare}
              className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-500 shadow-sm transition-all h-9 w-9 flex items-center justify-center"
            >
              <Upload size={15} className="stroke-[2.2]" />
            </button>

            {/* Create Button Element */}
            <button 
              onClick={() => alert("Creating documentation session...")}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#361521] hover:bg-[#4a1d2e] text-white font-semibold text-sm rounded-xl transition-all shadow-sm h-9"
            >
              <Plus size={14} className="stroke-[3]" />
              <span>Create</span>
            </button>

            {/* Split Bordered Resume Dropdown Container */}
            <div className="relative flex items-center border border-gray-200 rounded-xl bg-white shadow-sm h-9">
              <button 
                onClick={() => setIsResumeOpen(!isResumeOpen)}
                className="flex items-center gap-1.5 px-3 py-2 hover:bg-gray-50/50 transition-all text-sm font-bold text-slate-700"
              >
                <AudioLines size={14} className="text-gray-400 stroke-[2.5]" />
                <span>{selectedDocument}</span>
              </button>
              
              <div className="h-full w-px bg-gray-200" />
              
              <button 
                onClick={() => setIsResumeOpen(!isResumeOpen)}
                className="px-2.5 h-full hover:bg-gray-50/50 flex items-center justify-center rounded-r-xl"
              >
                <ChevronDown size={14} className="text-gray-400 stroke-[2.5]" />
              </button>

              {isResumeOpen && (
                <div className="absolute right-0 top-10 w-44 bg-white border border-gray-100 rounded-xl shadow-xl py-1 z-50">
                  {["Resume", "Clinical Intake", "Discharge Summary"].map((doc) => (
                    <button 
                      key={doc}
                      onClick={() => { setSelectedDocument(doc); setIsResumeOpen(false); }}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {doc}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 🚀 ACTIVE CHANGE: Interactive lower Audio Session Container Block */}
          <div 
            onClick={() => setIsRecording(!isRecording)}
            className="flex items-center gap-3 px-2 py-1 rounded-lg hover:bg-gray-50/80 cursor-pointer transition-colors select-none"
            title={isRecording ? "Click to Pause Session" : "Click to Resume Recording"}
          >
            {/* Timer Element */}
            <div className={`flex items-center gap-1 text-[13px] font-semibold transition-colors ${isRecording ? 'text-slate-600' : 'text-slate-400 line-through'}`}>
              <Timer size={14} className="text-slate-400 stroke-[2.2]" />
              <span>{formatTime(seconds)}</span>
            </div>

            {/* Microphone State Controller */}
            <Mic 
              size={14} 
              className={`transition-colors stroke-[2.2] ${isRecording ? "text-purple-600 animate-pulse" : "text-slate-300"}`} 
            />

            {/* Thick Rounded Custom Green Visualizer Grid with dynamic animation */}
            <div className="flex items-center gap-[3px] h-4 px-0.5">
              <span className={`w-[3px] rounded-full bg-emerald-500 transition-all duration-300 ${isRecording ? 'h-2.5 animate-bounce' : 'h-1 bg-slate-300'}`} style={{ animationDelay: '0.1s' }} />
              <span className={`w-[3px] rounded-full bg-emerald-500 transition-all duration-300 ${isRecording ? 'h-3.5 animate-bounce' : 'h-1 bg-slate-300'}`} style={{ animationDelay: '0.2s' }} />
              <span className={`w-[3px] rounded-full bg-emerald-500 transition-all duration-300 ${isRecording ? 'h-4 animate-bounce' : 'h-1 bg-slate-300'}`} style={{ animationDelay: '0.3s' }} />
              <span className={`w-[3px] rounded-full bg-emerald-500 transition-all duration-300 ${isRecording ? 'h-3.5 animate-bounce' : 'h-1 bg-slate-300'}`} style={{ animationDelay: '0.4s' }} />
              <span className={`w-[3px] rounded-full bg-emerald-500 transition-all duration-300 ${isRecording ? 'h-2.5 animate-bounce' : 'h-1 bg-slate-300'}`} style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Option Dropdown Trigger */}
            <ChevronDown size={13} className="text-slate-400 stroke-[2.2]" />
          </div>

        </div>
      </div>

    </div>
  );
};

export default PatientHeader;