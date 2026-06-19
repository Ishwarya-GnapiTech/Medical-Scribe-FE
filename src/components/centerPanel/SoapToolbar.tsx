import React from "react";
import { 
  LayoutGrid, 
  Pencil, 
  MoreHorizontal, 
  Check, 
  Circle, 
  ChevronDown 
} from "lucide-react";

const SoapToolbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-3 bg-white border-b border-gray-100 select-none">
      
      {/* LEFT SIDE: Segmented Controls Group */}
      <div className="flex items-center gap-2">
        <div className="flex items-center border border-gray-200/60 rounded-xl p-0.5 bg-white shadow-sm">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-semibold text-slate-800 bg-gray-50/80 rounded-lg">
            <LayoutGrid size={13} className="text-slate-600 stroke-[2.5]" />
            <span>SOAP Note</span>
          </button>
          <div className="h-4 w-px bg-gray-200/80 mx-1" />
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium text-slate-400 hover:text-slate-700 transition-colors">
            <Pencil size={13} className="stroke-[2]" />
            <span>Detailed</span>
          </button>
        </div>

        <button className="flex items-center justify-center border border-gray-200/70 rounded-xl w-8 h-8 bg-white text-slate-400 hover:text-slate-600 shadow-sm transition-colors">
          <MoreHorizontal size={14} />
        </button>
      </div>

      {/* RIGHT SIDE: Exact Status Badges & Solid Tone Copy Button */}
      <div className="flex items-center gap-2">
        
        {/* Covered Metric Badge */}
        <div className="flex items-center gap-2 px-3 py-1 bg-white border border-gray-200/70 rounded-xl text-[13px] font-medium text-slate-700 shadow-sm h-8">
          <Check size={14} className="text-emerald-500 stroke-[3]" />
          <span>Covered</span>
          <span className="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-md text-[11px] font-bold ml-0.5">
            12
          </span>
        </div>

        {/* Partial Metric Badge */}
        <div className="flex items-center gap-2 px-3 py-1 bg-white border border-gray-200/70 rounded-xl text-[13px] font-medium text-slate-700 shadow-sm h-8">
          <Circle size={12} className="text-amber-500 stroke-[3] fill-transparent" />
          <span>Partial</span>
          <span className="bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded-md text-[11px] font-bold ml-0.5">
            3
          </span>
        </div>

        {/* Missing Metric Badge */}
        <div className="flex items-center gap-2 px-3 py-1 bg-white border border-gray-200/70 rounded-xl text-[13px] font-medium text-slate-700 shadow-sm h-8">
          <Circle size={12} className="text-rose-400 stroke-[3] fill-transparent" />
          <span>Missing</span>
          <span className="bg-rose-50 text-rose-600 px-1.5 py-0.5 rounded-md text-[11px] font-bold ml-0.5">
            5
          </span>
        </div>

        {/* Clean Warm-Toned Solid Copy Dropdown */}
        <button className="flex items-center gap-1.5 px-3 py-1 bg-[#f5ebe6] text-slate-800 text-[13px] font-semibold rounded-xl hover:bg-[#ebdcd4] transition-colors h-8 ml-1 shadow-sm">
          <span>Copy</span>
          <ChevronDown size={12} className="text-slate-600 stroke-[2.5]" />
        </button>

      </div>

    </div>
  );
};

export default SoapToolbar;