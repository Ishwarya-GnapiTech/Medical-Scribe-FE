import React, { useState, useEffect } from "react";
import { 
  Share2, 
  Plus, 
  ChevronDown, 
  Clock, 
  Mic 
} from "lucide-react";

const PatientHeader: React.FC = () => {
  // Action state managers
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [selectedDocument, setSelectedDocument] = useState<string>("Resume");
  const [isRecording, setIsRecording] = useState<boolean>(true);
  const [seconds, setSeconds] = useState<number>(2202); // 36:42 elapsed timer representation

  // Active background recording session timer simulation
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

  // Comprehensive system native contact/mail share pipeline handler
  const handleSystemShare = async (): Promise<void> => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Patient Note - Kodawa, Issac",
          text: "Reviewing clinical transcription summary data for patient Kodawa, Issac.",
          url: window.location.href,
        });
      } catch (error) {
        console.log("System native tray sharing dialogue canceled:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Native share tray not supported on this browser. Link copied to clipboard automatically!");
      } catch {
        alert("Sharing failed. Please copy the URL from your address bar manually.");
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
        <div className="flex items-center gap-3">
          
          {/* Native OS Contact & Mail System Share Trigger */}
          <button 
            onClick={handleSystemShare}
            className="p-2 border border-gray-200/80 rounded-xl hover:bg-gray-50 text-gray-500 shadow-sm transition-all active:scale-95"
            title="Share to Mail, Contacts or App"
          >
            <Share2 size={15} className="stroke-[2.2]" />
          </button>

          {/* Create Button Element */}
          <button 
            onClick={() => alert("Creating new clinical document session block...")}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#361521] hover:bg-[#4a1d2e] text-white font-semibold text-sm rounded-xl transition-all shadow-sm"
          >
            <Plus size={14} className="stroke-[3]" />
            <span>Create</span>
          </button>

          {/* Dynamic Selection Resume Dropdown Node */}
          <div className="relative">
            <button 
              onClick={() => setIsResumeOpen(!isResumeOpen)}
              className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all text-sm font-semibold text-gray-700 shadow-sm"
            >
              <span>{selectedDocument}</span>
              <ChevronDown size={14} className="text-gray-400 ml-0.5 stroke-[2.5]" />
            </button>

            {isResumeOpen && (
              <div className="absolute right-0 mt-1.5 w-44 bg-white border border-gray-100 rounded-xl shadow-xl py-1 z-50">
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

          {/* Visual Recording Controller Session Capsule */}
          <div 
            onClick={() => setIsRecording(!isRecording)}
            className={`flex items-center gap-2.5 px-3 py-1.5 rounded-xl cursor-pointer transition-all border ${
              isRecording ? 'bg-gray-50/50 border-gray-100 hover:bg-gray-100' : 'bg-rose-50/40 border-rose-100'
            }`}
          >
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400">
              <Clock size={13} className="text-gray-400 stroke-[2.5]" />
              <span className={isRecording ? "text-gray-500" : "text-rose-500 line-through"}>
                {formatTime(seconds)}
              </span>
            </div>
            <Mic size={13} className={isRecording ? "text-violet-500 stroke-[2.5]" : "text-gray-300 stroke-[2.5]"} />
            
            {/* Live Audio Graphic Visualizer Equalizer Simulation Element Group */}
            <div className="flex items-center gap-0.5 h-3.5 px-0.5">
              <span className={`w-0.5 rounded-full bg-emerald-500 ${isRecording ? 'h-2 animate-pulse' : 'h-1 bg-gray-300'}`} />
              <span className={`w-0.5 rounded-full bg-emerald-500 ${isRecording ? 'h-3.5' : 'h-1 bg-gray-300'}`} />
              <span className={`w-0.5 rounded-full bg-emerald-500 ${isRecording ? 'h-2.5 animate-pulse' : 'h-1 bg-gray-300'}`} />
            </div>
            <ChevronDown size={12} className="text-gray-400 stroke-[2.5]" />
          </div>
        </div>

      </div>

    </div>
  );
};

export default PatientHeader;