import {
  FileText,
  AudioLines,
  ClipboardPen,
  Plus,
  Calendar,
} from "lucide-react";

const NavigationTabs = () => {
  return (
    <>
      <div className="flex items-center gap-8 px-5 py-3 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          Yesterday 01:10PM
        </div>

        <span>English</span>

        <span className="bg-violet-500 text-white px-3 py-1 rounded-md text-xs">
          Upgrade to Clinician
        </span>
      </div>

      <div className="border-b px-5">
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-2 text-gray-500 py-4">
            <FileText size={18} />
            Context
          </button>

          <button className="flex items-center gap-2 text-gray-500 py-4">
            <AudioLines size={18} />
            Transcript
          </button>

          <button className="flex items-center gap-2 border rounded-lg px-4 py-2 text-gray-900 bg-white">
            <ClipboardPen size={18} />
            SOAP Note
          </button>

          <button>
            <Plus size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default NavigationTabs;