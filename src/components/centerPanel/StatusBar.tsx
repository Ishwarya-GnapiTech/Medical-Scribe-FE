const StatusBar = () => {
  return (
    <div className="flex justify-end gap-3">
      <div className="border rounded-lg px-3 py-2 text-sm">
        ✓ Covered
        <span className="ml-2 bg-gray-100 px-2 rounded">
          12
        </span>
      </div>

      <div className="border rounded-lg px-3 py-2 text-sm">
        🟡 Partial
        <span className="ml-2 bg-gray-100 px-2 rounded">
          3
        </span>
      </div>

      <div className="border rounded-lg px-3 py-2 text-sm">
        🔴 Missing
        <span className="ml-2 bg-gray-100 px-2 rounded">
          5
        </span>
      </div>

      <button className="border rounded-lg px-4 py-2 text-sm">
        Copy
      </button>
    </div>
  );
};

export default StatusBar;