import React, { useState, useRef } from "react";
import {
  FileText,
  AudioLines,
  ClipboardPen,
  Plus,
  Calendar,
  Languages,
  User,
  Mic,
  Play,
  Pause
} from "lucide-react";
 
// ================= 1. DYNAMIC CONTEXT VIEW COMPONENT =================
const PatientContextView: React.FC = () => (
  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mt-4 animate-in fade-in duration-200">
    <div className="flex items-center gap-2 text-gray-800 font-bold text-lg border-b border-gray-100 pb-3 mb-4">
      <User size={20} className="text-violet-600" />
      <h2>Patient Session Context</h2>
    </div>
    <div className="space-y-4 text-sm text-gray-600">
      <div>
        <span className="font-bold text-gray-800 block mb-1">Pre-Visit Intake Summaries:</span>
        <p className="bg-gray-50 p-3 rounded-xl border border-gray-100">
          Patient checked in via mobile portal. Primary complaint notes an uncomfortable flare-up of seasonal allergies over the past 5 days, accompanied by persistent sinus pressure behind the eyes and a mild dry cough. Over-the-counter antihistamines are no longer providing relief.
        </p>
      </div>
      <div>
        <span className="font-bold text-gray-800 block mb-1">EHR Connected History:</span>
        <ul className="list-disc list-inside space-y-1 pl-1 text-gray-500">
          <li>History of seasonal allergic rhinitis (pollen/dust triggers).</li>
          <li>Current Medications: Cetirizine 10mg daily (stopped 2 days ago due to lack of efficacy).</li>
        </ul>
      </div>
    </div>
  </div>
);
 
// ================= 2. DYNAMIC TRANSCRIPT VIEW COMPONENT =================
const TranscriptAudioView: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
 
  // Synchronized allergy consultation script segments
  const recordingSegments = [
    {
      id: 1,
      time: "00:01",
      speaker: "Clinician",
      speakerType: "clinician",
      text: "Good afternoon. I see from your intake notes that your seasonal allergies are hitting you pretty hard this week. Tell me a bit more about the sinus pressure."
    },
    {
      id: 2,
      time: "00:14",
      speaker: "Patient",
      speakerType: "patient",
      text: "Yes, Doctor, it's been miserable. It feels like a constant heavy pressure right behind my eyes and forehead. My usual over-the-counter allergy pills aren't doing anything this time."
    },
    {
      id: 3,
      time: "00:29",
      speaker: "Clinician",
      speakerType: "clinician",
      text: "Understood. Have you noticed any nasal congestion, changes in your vision, or a fever accompanied by that headache?"
    },
    {
      id: 4,
      time: "00:38",
      speaker: "Patient",
      speakerType: "patient",
      text: "No fever, thankfully. Just a lot of clear runny nose, a ton of sneezing, and a scratchy, dry cough that keeps me awake at night."
    }
  ];
 
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mt-4 animate-in fade-in duration-200">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
        <div className="flex items-center gap-2 text-gray-800 font-bold text-lg">
          <Mic size={20} className="text-violet-600" />
          <h2>Diarized Audio Transcript</h2>
        </div>
       
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-semibold shadow-sm transition-all ${
            isPlaying ? "bg-amber-500 text-white" : "bg-emerald-500 text-white"
          }`}
        >
          {isPlaying ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" />}
          <span>{isPlaying ? "Pause Session Audio" : "Play Session Recording"}</span>
        </button>
      </div>
 
      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
        {recordingSegments.map((segment) => (
          <div
            key={segment.id}
            className={`p-3 rounded-xl border transition-colors cursor-pointer hover:bg-gray-50/80 ${
              segment.speakerType === "clinician"
                ? "bg-gray-50/40 border-gray-100"
                : "bg-violet-50/20 border-violet-100/50"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold bg-gray-200/70 px-2 py-0.5 rounded text-gray-500 tracking-wide">
                {segment.time}
              </span>
              <span className={`text-xs font-bold ${
                segment.speakerType === "clinician" ? "text-gray-700" : "text-violet-600"
              }`}>
                {segment.speaker}
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{segment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
 
// ================= MAIN TABS ORCHESTRATOR COMPONENT =================
const NavigationTabs: React.FC = () => {
  const [dateTime, setDateTime] = useState<string>("2026-06-17T13:10");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
  const [activeTab, setActiveTab] = useState<"context" | "transcript" | "soap">("soap");
 
  const dateInputRef = useRef<HTMLInputElement>(null);
  const languagesList = ["English", "Tamil"];
 
  const formatDisplayDate = (dateString: string): string => {
    if (!dateString) return "Select Date & Time";
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toLowerCase();
 
    if (date.toDateString() === yesterday.toDateString()) return `Yesterday ${timeString}`;
    if (date.toDateString() === today.toDateString()) return `Today ${timeString}`;
    return `${date.toLocaleDateString([], { month: 'short', day: 'numeric' })} ${timeString}`;
  };
 
  return (
    <>
      {/* Utilities Metadata Info Row */}
      <div className="flex items-center gap-6 px-6 py-3 bg-white border-b border-gray-100 select-none">
        <div onClick={() => dateInputRef.current?.showPicker?.()} className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer hover:text-gray-900 transition-colors relative">
          <Calendar size={15} className="text-gray-400" />
          <span className="font-medium text-[13px]">{formatDisplayDate(dateTime)}</span>
          <input ref={dateInputRef} type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} className="absolute opacity-0 pointer-events-none w-0 h-0" />
        </div>
 
        <div className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors relative">
          <Languages size={15} className="text-gray-400" />
          <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)} className="bg-transparent cursor-pointer font-medium text-[13px] focus:outline-none appearance-none pr-4">
            {languagesList.map((lang) => <option key={lang} value={lang}>{lang}</option>)}
          </select>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[10px] text-gray-400">▼</span>
        </div>
 
        <button onClick={() => alert("Redirecting to clinical upgrade wizard portal...")} className="bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold px-3 py-1 rounded-md border-none active:scale-[0.98] transition-transform">
          Upgrade to Clinician
        </button>
      </div>
 
      {/* Navigation Tab Selection Triggers */}
      <div className="border-b border-gray-200 px-6 bg-white select-none">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab("context")}
            className={`flex items-center gap-2 px-4 text-sm font-medium transition-all ${
              activeTab === "context"
                ? "py-2 my-2 rounded-lg border border-gray-200 bg-white shadow-sm font-semibold text-gray-900"
                : "py-4 text-gray-500 hover:text-gray-900"
            }`}
          >
            <FileText size={17} className={activeTab === "context" ? "text-violet-600" : ""} />
            Context
          </button>
 
          <button
            onClick={() => setActiveTab("transcript")}
            className={`flex items-center gap-2 px-4 text-sm font-medium transition-all ${
              activeTab === "transcript"
                ? "py-2 my-2 rounded-lg border border-gray-200 bg-white shadow-sm font-semibold text-gray-900"
                : "py-4 text-gray-500 hover:text-gray-900"
            }`}
          >
            <AudioLines size={17} className={activeTab === "transcript" ? "text-violet-600" : ""} />
            Transcript
          </button>
 
          <button
            onClick={() => setActiveTab("soap")}
            className={`flex items-center gap-2 px-4 text-sm font-medium transition-all ${
              activeTab === "soap"
                ? "py-2 my-2 rounded-lg border border-gray-200 bg-white shadow-sm font-semibold text-gray-900"
                : "py-4 text-gray-500 hover:text-gray-900"
            }`}
          >
            <ClipboardPen size={17} className={activeTab === "soap" ? "text-violet-600" : ""} />
            SOAP Note
          </button>
 
          <button onClick={() => alert("Adding custom extension view...")} className="ml-1 p-2 rounded-lg hover:bg-gray-100 text-gray-500">
            <Plus size={18} />
          </button>
        </div>
      </div>
 
      {/* Interactive Display Workspaces */}
      <div className="p-6">
        {activeTab === "context" && <PatientContextView />}
        {activeTab === "transcript" && <TranscriptAudioView />}
        {activeTab === "soap" && (
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm min-h-[200px]">
            <p className="text-sm text-gray-400 font-medium italic">Your active editable SOAP Note fields render here...</p>
          </div>
        )}
      </div>
    </>
  );
};
 
export default NavigationTabs;
 