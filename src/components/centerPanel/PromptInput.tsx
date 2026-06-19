import { Lightbulb, Mic, SendHorizontal } from "lucide-react";

const PromptInput = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
      <div className="flex items-center gap-3">
        {/* Input */}
        <input
          type="text"
          placeholder="Ask, edit or create anything..."
          className="flex-1 outline-none text-sm text-gray-700 placeholder:text-gray-400"
        />

        {/* Considerations */}
        <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm">
          <Lightbulb size={16} />
          <span>Considerations</span>

          <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs">
            5
          </span>
        </button>

        {/* Mic */}
        <button className="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50">
          <Mic size={18} />
        </button>

        {/* Send */}
        <button className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#4B1D31] text-white hover:opacity-90">
          <SendHorizontal size={16} />
        </button>
      </div>

      <p className="text-center text-xs text-gray-400 mt-4">
        Review your note before use to ensure it accurately represents the visit.
      </p>
    </div>
  );
};

export default PromptInput;