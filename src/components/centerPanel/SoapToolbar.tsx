import { MoreHorizontal } from "lucide-react";

const SoapToolbar = () => {
  return (
    <div className="flex items-center justify-between px-5 py-3 border-b bg-white">
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium">
          SOAP Note
        </button>

        <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
          Detailed
        </button>
      </div>

      <button className="p-2 hover:bg-gray-100 rounded-lg">
        <MoreHorizontal size={18} />
      </button>
    </div>
  );
};

export default SoapToolbar;