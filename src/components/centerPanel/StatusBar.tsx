import { Copy, CheckCircle2, AlertCircle, XCircle } from "lucide-react";

const StatusBar = () => {
  return (
    <div className="flex items-center justify-between mb-4">
      {/* Left Side */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-white">
          <CheckCircle2
            size={16}
            className="text-green-500"
          />
          <span className="text-sm font-medium">
            Covered
          </span>

          <span className="px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full">
            12
          </span>
        </div>

        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-white">
          <AlertCircle
            size={16}
            className="text-yellow-500"
          />

          <span className="text-sm font-medium">
            Partial
          </span>

          <span className="px-2 py-0.5 text-xs bg-yellow-100 text-yellow-700 rounded-full">
            3
          </span>
        </div>

        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-white">
          <XCircle
            size={16}
            className="text-red-500"
          />

          <span className="text-sm font-medium">
            Missing
          </span>

          <span className="px-2 py-0.5 text-xs bg-red-100 text-red-700 rounded-full">
            5
          </span>
        </div>
      </div>

      {/* Right Side */}
      <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50">
        <Copy size={16} />
        <span className="text-sm font-medium">
          Copy Note
        </span>
      </button>
    </div>
  );
};

export default StatusBar;