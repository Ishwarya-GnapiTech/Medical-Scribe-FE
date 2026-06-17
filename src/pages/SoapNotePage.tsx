import { ClipboardPen, PenLine, MoreHorizontal } from "lucide-react";

const SoapToolbar = () => {
  return (
    <div className="flex items-center justify-between border-b p-3 bg-white rounded-t-xl">
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 border border-gray-200 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
          <ClipboardPen size={16} />
          SOAP Note
        </button>

        <button className="flex items-center gap-2 border border-gray-200 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
          <PenLine size={16} />
          Detailed
        </button>

        <button className="border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
  );
};

export default SoapToolbar;