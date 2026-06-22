import React, { useState } from "react";
import { 
  LayoutGrid, 
  Pencil, 
  MoreHorizontal, 
  Check, 
  Circle, 
  ChevronDown 
} from "lucide-react";

type BadgeType = "covered" | "partial" | "missing";

interface CountState {
  covered: number;
  partial: number;
  missing: number;
}

const SoapToolbar: React.FC = () => {
  const [counts, setCounts] = useState<CountState>({
    covered: 12,
    partial: 3,
    missing: 5
  });
  
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [isCopyOpen, setIsCopyOpen] = useState<boolean>(false);

  const handleBadgeAction = (type: BadgeType) => {
    setActiveFilter(prev => prev === type ? null : type);
    
    setCounts(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  const handleCopyAction = (format: string) => {
    setIsCopyOpen(false);
    alert(`Copied note content as ${format}!`);
  };

  return (
    <div className="flex flex-wrap items-center justify-between w-full px-4 py-3 bg-white border-b border-gray-100 select-none gap-3">
      
      {/* LEFT SIDE: Everything Unified Into One Single Outer Box */}
      <div className="flex flex-shrink-0 items-center border border-gray-200/60 rounded-xl p-0.5 bg-white shadow-sm h-9">
        {/* SOAP Note Active Tab */}
        <button className="flex items-center gap-1.5 px-3 h-full text-[13px] font-semibold text-slate-800 bg-gray-50/80 rounded-lg">
          <LayoutGrid size={13} className="text-slate-600 stroke-[2.5]" />
          <span>SOAP Note</span>
        </button>
        
        {/* Vertical Divider */}
        <div className="h-4 w-px bg-gray-200/80 mx-1.5" />
        
        {/* Detailed Inactive Tab */}
        <button className="flex items-center gap-1.5 px-3 h-full text-[13px] font-medium text-slate-400 hover:text-slate-700 transition-colors">
          <Pencil size={13} className="stroke-[2]" />
          <span>Detailed</span>
        </button>

        {/* Vertical Divider for the More Action */}
        <div className="h-4 w-px bg-gray-200/80 mx-1.5" />

        {/* More Options Button inside the same outer box */}
        <button className="flex items-center justify-center px-2.5 h-full text-slate-400 hover:text-slate-600 transition-colors cursor-pointer rounded-r-lg">
          <MoreHorizontal size={14} />
        </button>
      </div>

      {/* RIGHT SIDE: Horizontal Status Badges and Copy Action button with perfect clearance gap */}
      <div className="flex flex-wrap items-center gap-2">
        
        {/* Covered Tag */}
        <button 
          onClick={() => handleBadgeAction("covered")}
          className={`flex items-center gap-1.5 px-2.5 sm:px-3 h-8 bg-white border rounded-xl text-[12px] sm:text-[13px] font-semibold transition-all shadow-sm cursor-pointer ${
            activeFilter === "covered" ? "border-emerald-500 bg-emerald-50/10 text-slate-900" : "border-gray-200/80 text-slate-700 hover:bg-slate-50"
          }`}
        >
          <Check size={13} className="text-emerald-500 stroke-[3.5]" />
          <span className="text-slate-700 hidden sm:inline">Covered</span>
          <span className="bg-gray-100 text-slate-600 px-1.5 py-0.5 rounded-md text-[11px] font-bold ml-0.5 min-w-[18px] text-center">
            {counts.covered}
          </span>
        </button>

        {/* Partial Tag */}
        <button 
          onClick={() => handleBadgeAction("partial")}
          className={`flex items-center gap-1.5 px-2.5 sm:px-3 h-8 bg-white border rounded-xl text-[12px] sm:text-[13px] font-semibold transition-all shadow-sm cursor-pointer ${
            activeFilter === "partial" ? "border-amber-500 bg-amber-50/10 text-slate-900" : "border-gray-200/80 text-slate-700 hover:bg-slate-50"
          }`}
        >
          <Circle size={11} className="text-amber-500 stroke-[3.5]" />
          <span className="text-slate-700 hidden sm:inline">Partial</span>
          <span className="bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded-md text-[11px] font-bold ml-0.5 min-w-[18px] text-center">
            {counts.partial}
          </span>
        </button>

        {/* Missing Tag */}
        <button 
          onClick={() => handleBadgeAction("missing")}
          className={`flex items-center gap-1.5 px-2.5 sm:px-3 h-8 bg-white border rounded-xl text-[12px] sm:text-[13px] font-semibold transition-all shadow-sm cursor-pointer ${
            activeFilter === "missing" ? "border-rose-400 bg-rose-50/10 text-slate-900" : "border-gray-200/80 text-slate-700 hover:bg-slate-50"
          }`}
        >
          <Circle size={11} className="text-rose-400 stroke-[3.5]" />
          <span className="text-slate-700 hidden sm:inline">Missing</span>
          <span className="bg-rose-50 text-rose-600 px-1.5 py-0.5 rounded-md text-[11px] font-bold ml-0.5 min-w-[18px] text-center">
            {counts.missing}
          </span>
        </button>

        {/* Action Dropdown Menu Control */}
        <div className="relative ml-auto sm:ml-0">
          <button 
            onClick={() => setIsCopyOpen(!isCopyOpen)}
            className="flex items-center gap-1.5 px-3.5 h-8 bg-[#f5ebe6] text-slate-800 text-[13px] font-bold rounded-xl hover:bg-[#ebdcd4] transition-colors shadow-sm cursor-pointer ml-0.5"
          >
            <span>Copy</span>
            <ChevronDown size={12} className={`text-slate-600 stroke-[2.5] transition-transform ${isCopyOpen ? "rotate-180" : ""}`} />
          </button>

          {isCopyOpen && (
            <div className="absolute right-0 top-9 bg-white border border-gray-200/80 rounded-xl shadow-lg py-1.5 w-36 z-50">
              <button 
                onClick={() => handleCopyAction("Markdown")}
                className="w-full px-4 py-2 text-left text-[13px] font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Copy Markdown
              </button>
              <button 
                onClick={() => handleCopyAction("Plain Text")}
                className="w-full px-4 py-2 text-left text-[13px] font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Copy Plain Text
              </button>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};

export default SoapToolbar;