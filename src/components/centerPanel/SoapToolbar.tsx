import React from "react";
import { MoreHorizontal, Check, AlertCircle, HelpCircle, Copy, ChevronDown } from "lucide-react";

const SoapToolbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-3 bg-white border-b border-gray-100 select-none">
      
      {/* Left Actions */}
      <div className="flex items-center gap-1.5">
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-0.5">
          <button className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md bg-white shadow-sm text-gray-800 border border-gray-200/50">
            <span className="text-[11px] font-bold">⊞</span>
            SOAP Note
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md text-gray-400 hover:text-gray-700 transition-colors">
            <span className="text-[11px]">✎</span>
            Detailed
          </button>
        </div>

        <button className="p-1.5 border border-gray-200 rounded-lg bg-white text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors">
          <MoreHorizontal size={14} />
        </button>
      </div>

      {/* Right Metrics & Copy (Matching Original Design) */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 bg-green-50/50 border border-green-200/60 rounded-full pl-2 pr-1.5 py-0.5 text-[11px] font-medium text-green-700">
          <Check size={12} className="stroke-[3] text-green-600" />
          <span>Covered</span>
          <span className="text-green-700 font-semibold bg-green-100/70 px-1.5 py-0.5 rounded-full text-[10px] ml-0.5">12</span>
        </div>

        <div className="flex items-center gap-1.5 bg-amber-50/50 border border-amber-200/60 rounded-full pl-2 pr-1.5 py-0.5 text-[11px] font-medium text-amber-600">
          <HelpCircle size={12} className="stroke-[2.5] text-amber-500" />
          <span>Partial</span>
          <span className="text-amber-700 font-semibold bg-amber-100/70 px-1.5 py-0.5 rounded-full text-[10px] ml-0.5">3</span>
        </div>

        <div className="flex items-center gap-1.5 bg-rose-50/50 border border-rose-200/60 rounded-full pl-2 pr-1.5 py-0.5 text-[11px] font-medium text-rose-600">
          <AlertCircle size={12} className="stroke-[2.5] text-rose-500" />
          <span>Missing</span>
          <span className="text-rose-700 font-semibold bg-rose-100/70 px-1.5 py-0.5 rounded-full text-[10px] ml-0.5">5</span>
        </div>

        <div className="h-4 w-px bg-gray-200 mx-0.5" />

        <button className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
          <Copy size={12} className="text-gray-400" />
          <span>Copy</span>
          <ChevronDown size={12} className="text-gray-400 ml-0.5" />
        </button>
      </div>

    </div>
  );
};

export default SoapToolbar;