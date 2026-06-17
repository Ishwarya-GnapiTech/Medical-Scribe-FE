import { Lightbulb, Mic } from "lucide-react";

const PromptInput = () => {
  return (
    <div className="border bg-white rounded-xl p-3">
      <div className="flex items-center justify-between">
        <input
          className="w-full outline-none text-sm"
          placeholder="Ask, edit or create anything..."
        />

        <div className="flex items-center gap-2">
          <button className="border rounded-lg px-3 py-2 flex items-center gap-2">
            <Lightbulb size={16} />
            Considerations
            <span className="bg-gray-100 px-2 rounded">
              5
            </span>
          </button>

          <Mic size={18} />
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-4">
        Review your note before use to ensure it accurately
        represents the visit
      </p>
    </div>
  );
};

export default PromptInput;