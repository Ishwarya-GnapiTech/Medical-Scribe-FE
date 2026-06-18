import {
  Clock3,
  ChevronDown,
  Mic,
  Share2,
  Plus,
} from "lucide-react";

const PatientHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center font-semibold text-gray-700">
            KI
          </div>

          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Kodava, Issac
            </h1>

            <p className="text-sm text-gray-500">
              ED, L penile sens
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Share */}
          <button className="h-10 w-10 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50">
            <Share2 size={18} />
          </button>

          {/* Create */}
          <button className="flex items-center gap-2 bg-[#4B1D31] hover:bg-[#3c1628] text-white px-5 py-2.5 rounded-lg text-sm font-medium">
            <Plus size={16} />
            Create
          </button>

          {/* Resume */}
          <button className="flex items-center gap-2 border border-gray-200 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50">
            Resume
            <ChevronDown size={16} />
          </button>

          {/* Timer */}
          <div className="flex items-center gap-2 text-sm text-gray-600 ml-2">
            <Clock3 size={16} />
            <span>35:07</span>
          </div>

          {/* Mic */}
          <div className="flex items-center gap-3">
            <Mic size={18} className="text-gray-700" />

            {/* Audio Wave */}
            <div className="flex items-end gap-[2px]">
              <div className="w-[3px] h-3 bg-green-500 rounded-full" />
              <div className="w-[3px] h-5 bg-green-500 rounded-full" />
              <div className="w-[3px] h-7 bg-green-500 rounded-full" />
              <div className="w-[3px] h-5 bg-green-500 rounded-full" />
              <div className="w-[3px] h-3 bg-green-500 rounded-full" />
            </div>

            <ChevronDown size={16} className="text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default PatientHeader;