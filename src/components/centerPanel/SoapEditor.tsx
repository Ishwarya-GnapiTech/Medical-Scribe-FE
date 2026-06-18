const SoapEditor = () => {
  return (
    <div className="bg-white min-h-[850px] px-8 py-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-5">
        Subjective:
      </h2>

      <div
        contentEditable
        suppressContentEditableWarning
        className="min-h-[700px] outline-none text-sm text-gray-700"
        data-placeholder="Start typing or click a prompt from the checklist..."
      />

      <style>
        {`
          [contenteditable][data-placeholder]:empty:before {
            content: attr(data-placeholder);
            color: #9CA3AF;
            cursor: text;
          }
        `}
      </style>
    </div>
  );
};

export default SoapEditor;