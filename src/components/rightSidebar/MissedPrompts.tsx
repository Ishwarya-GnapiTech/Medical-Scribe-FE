const prompts = [
  "Any numbness, tingling, or loss of sensation?",
  "Any recent injuries or trauma to the area?",
  "Any urinary symptoms or changes?",
  "Any recent sexual activity or new partners?",
];

const MissedPrompts = () => {
  return (
    <div className="border rounded-xl p-4 bg-white">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold">
          Missed prompts
          <span className="ml-2 text-gray-500">4</span>
        </h3>
      </div>

      <div className="space-y-4">
        {prompts.map((prompt) => (
          <label
            key={prompt}
            className="flex gap-3 text-sm text-gray-700"
          >
            <input type="checkbox" />
            {prompt}
          </label>
        ))}
      </div>

      <button className="mt-4 border px-4 py-2 rounded-lg text-sm">
        Ask all
      </button>
    </div>
  );
};

export default MissedPrompts;