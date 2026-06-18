import { MoreHorizontal } from "lucide-react";

const SoapToolbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
      <div className="flex items-center gap-3">
        <span className="font-medium text-gray-900">
          SOAP Note
        </span>

        <span className="text-gray-300">|</span>

        <span className="text-gray-500">
          Detailed
        </span>
      </div>

      <button>
        <MoreHorizontal size={18} />
      </button>
    </div>
  );
};

export default SoapToolbar;