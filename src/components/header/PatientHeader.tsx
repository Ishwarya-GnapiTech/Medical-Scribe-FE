import {
  Clock3,
  ChevronDown,
  Mic,
  Share2,
  Plus,
} from "lucide-react";

const PatientHeader = () => {
  return (
    <div className="flex items-center justify-between px-5 py-4 border-b">
      <div className="flex gap-4 items-center">
        <div className="h-12 w-12 rounded-full border flex items-center justify-center font-semibold text-gray-700">
          KI
        </div>

        <div>
          <h1 className="text-[28px] font-semibold">
            Kodava, Issac
          </h1>

          <p className="text-sm text-gray-500">
            ED, L penile sens
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="h-10 w-10 border rounded-lg flex items-center justify-center">
          <Share2 size={18} />
        </button>

        <button className="bg-[#4B1324] text-white px-5 py-2 rounded-lg flex items-center gap-2">
          <Plus size={16} />
          Create
        </button>

        <button className="border px-5 py-2 rounded-lg flex items-center gap-2">
          Resume
          <ChevronDown size={16} />
        </button>

        <div className="flex items-center gap-2 ml-4 text-gray-600">
          <Clock3 size={16} />
          35:07
        </div>

        <Mic size={18} />

        <div className="flex gap-1">
          <div className="w-1 h-4 bg-green-500 rounded-full" />
          <div className="w-1 h-5 bg-green-500 rounded-full" />
          <div className="w-1 h-6 bg-green-500 rounded-full" />
          <div className="w-1 h-5 bg-green-500 rounded-full" />
          <div className="w-1 h-4 bg-green-500 rounded-full" />
        </div>

        <ChevronDown size={16} />
      </div>
    </div>
  );
};

export default PatientHeader;