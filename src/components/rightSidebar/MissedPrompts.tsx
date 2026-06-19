import { MessageSquarePlus } from "lucide-react";

const prompts = [
  "Any numbness, tingling, or loss of sensation?",
  "Any recent injuries or trauma to the area?",
  "Any urinary symptoms or changes?",
  "Any recent sexual activity or new partners?",
];

const MissedPrompts = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">
          Missed Prompts
        </h3>

        <span className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded-full">
          {prompts.length}
        </span>
      </div>

      {/* Prompt List */}
      <div className="space-y-3">
        {prompts.map((prompt) => (
          <label
            key={prompt}
            className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer"
          >
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-gray-300"
            />

            <span>{prompt}</span>
          </label>
        ))}
      </div>

      {/* Footer Button */}
      <button className="w-full mt-4 flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 text-sm font-medium hover:bg-gray-50">
        <MessageSquarePlus size={16} />
        Ask All
      </button>
    </div>
  );
};

export default MissedPrompts;