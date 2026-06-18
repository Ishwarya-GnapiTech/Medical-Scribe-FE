import React, { useState } from "react";
import { Lightbulb, Mic, SquarePen } from "lucide-react";

const PromptInput: React.FC = () => {
  // Action state managers
  const [inputValue, setInputValue] = useState<string>("");
  const [isMicActive, setIsMicActive] = useState<boolean>(false);
  const [considerationsCount, setConsiderationsCount] = useState<number>(5);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      alert(`Processing query: ${inputValue}`);
      setInputValue("");
    }
  };

  const handleConsiderationsClick = () => {
    // Interactive action: decrement the count as a sample toggle action, resetting when it reaches 0
    setConsiderationsCount((prev) => (prev > 0 ? prev - 1 : 5));
    console.log("Considerations pane action toggled");
  };

  return (
    <div className="w-full">
      {/* Container Input Outer Card designed exactly like image_9ef904.png */}
      <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm focus-within:border-gray-300 transition-all">
        
        {/* Checkbox / Slate Action Icon */}
        <SquarePen size={16} className="text-slate-400 stroke-[2.2] flex-shrink-0" />

        {/* Core Prompt Text Input Field */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask, edit or create anything..."
          className="flex-1 outline-none text-sm text-slate-700 placeholder:text-slate-400 bg-transparent"
        />

        {/* Considerations Interactive Action Button */}
        <button 
          onClick={handleConsiderationsClick}
          className="flex items-center gap-2 px-3 py-1.5 border border-gray-200/80 rounded-xl hover:bg-gray-50 text-[13px] font-semibold text-slate-700 shadow-sm transition-colors"
        >
          <Lightbulb size={14} className="text-slate-400 stroke-[2.2]" />
          <span>Considerations</span>
          <span className="px-1.5 py-0.5 bg-[#f5ebe6] text-slate-800 text-[11px] font-bold rounded-md ml-0.5">
            {considerationsCount}
          </span>
        </button>

        {/* Separator Line */}
        <div className="h-4 w-px bg-gray-200 mx-0.5" />

        {/* Voice/Mic Session Controller Trigger */}
        <button 
          onClick={() => setIsMicActive(!isMicActive)}
          className={`p-1.5 rounded-lg transition-colors flex items-center justify-center ${
            isMicActive ? "bg-rose-50 text-rose-500 animate-pulse" : "text-slate-400 hover:text-slate-600"
          }`}
          title={isMicActive ? "Mute Microphone" : "Activate Voice Prompt Input"}
        >
          <Mic size={15} className="stroke-[2.2]" />
        </button>
      </div>

      {/* Required Footnote Notice Statement */}
      <p className="text-center text-xs text-gray-400 mt-4 tracking-normal">
        Review your note before use to ensure it accurately represents the visit.
      </p>
    </div>
  );
};

export default PromptInput;