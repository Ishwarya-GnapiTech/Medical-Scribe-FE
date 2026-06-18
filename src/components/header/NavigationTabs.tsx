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
      {/* Info Row */}
      <div className="flex items-center gap-6 px-6 py-3 bg-white">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar size={15} />
          Yesterday 01:10 PM
        </div>

        <span className="text-sm text-gray-500">
          English
        </span>

        <span className="bg-violet-600 text-white text-xs font-medium px-3 py-1 rounded-md">
          Upgrade to Clinician
        </span>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 px-6 bg-white">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-4 text-sm text-gray-500 hover:text-gray-900">
            <FileText size={17} />
            Context
          </button>

          <button className="flex items-center gap-2 px-4 py-4 text-sm text-gray-500 hover:text-gray-900">
            <AudioLines size={17} />
            Transcript
          </button>

          {/* Active Tab */}
          <button className="flex items-center gap-2 px-4 py-2 my-2 rounded-lg border border-gray-200 bg-white shadow-sm text-sm font-medium text-gray-900">
            <ClipboardPen size={17} />
            SOAP Note
          </button>

          <button className="ml-1 p-2 rounded-lg hover:bg-gray-100">
            <Plus size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default NavigationTabs;