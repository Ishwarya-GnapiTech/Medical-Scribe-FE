import {
  ClipboardPen,
  PenLine,
  MoreHorizontal,
} from "lucide-react";

const SoapToolbar = () => {
  return (
    <div className="flex items-center justify-between border-b p-3">
      <div className="flex gap-2">
        <button className="flex items-center gap-2 border px-3 py-2 rounded-lg text-sm">
          <ClipboardPen size={16} />
          SOAP Note
        </button>

        <button className="flex items-center gap-2 border px-3 py-2 rounded-lg text-sm">
          <PenLine size={16} />
          Detailed
        </button>

        <button className="border px-3 rounded-lg">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
  );
};

export default SoapToolbar;