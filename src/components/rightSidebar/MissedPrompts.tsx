import React, { useState } from "react";
import { MessageSquarePlus } from "lucide-react";

const MissedPrompts: React.FC = () => {
  // 1. Initialize prompts directly inside component state
  const [promptsList, setPromptsList] = useState<string[]>([
    "Any numbness, tingling, or loss of sensation?",
    "Any recent injuries or trauma to the area?",
    "Any urinary symptoms or changes?",
    "Any recent sexual activity or new partners?",
  ]);

  // Handler to clear a single prompt when its checkbox is checked
  const handleCheckPrompt = (promptToRemove: string) => {
    setPromptsList((prevList) => prevList.filter((p) => p !== promptToRemove));
  };

  // 2. Master button handler with a built-in alert to force verification
  const handleAskAll = () => {
    alert("Ask All button was clicked successfully! Clearing the UI list now...");
    setPromptsList([]); // This forcefully empties the state array
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm max-w-sm select-none">
      
      {/* Header Section */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-bold text-slate-900 text-base tracking-tight">
          Missed Prompts
        </h3>

        {/* The Badge Count */}
        <span className="flex items-center justify-center w-6 h-6 text-xs bg-rose-50 text-rose-600 font-bold rounded-full">
          {promptsList.length}
        </span>
      </div>

      {/* Dynamic List Rendering Area */}
      {promptsList.length > 0 ? (
        <div className="space-y-4">
          {promptsList.map((prompt) => (
            <label
              key={prompt}
              className="flex items-start gap-3 text-[14px] leading-relaxed text-slate-700 font-medium cursor-pointer animate-fade-in"
            >
              <input
                type="checkbox"
                onChange={() => handleCheckPrompt(prompt)}
                className="mt-1 h-4 w-4 rounded-md border-slate-300 text-slate-800 accent-slate-800 cursor-pointer focus:ring-0"
              />
              <span>{prompt}</span>
            </label>
          ))}
        </div>
      ) : (
        <div className="py-6 text-center text-sm text-slate-400 italic bg-gray-50/50 rounded-xl border border-dashed border-gray-200">
          ✨ All clear! No missed prompts remaining.
        </div>
      )}

      {/* Action Footer Trigger Button */}
      {promptsList.length > 0 && (
        <button 
          onClick={handleAskAll}
          className="w-full mt-5 flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-[14px] font-bold text-slate-800 bg-white hover:bg-slate-50 transition-all active:scale-[0.98] shadow-sm cursor-pointer"
        >
          <MessageSquarePlus size={16} className="text-slate-800 stroke-[2.2]" />
          <span>Ask All</span>
        </button>
      )}
    </div>
  );
};

export default MissedPrompts;