import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Check,
} from "lucide-react";

interface Item {
  label: string;
  checked: boolean;
}

const CoverageChecklist = () => {
  const [openSections, setOpenSections] = useState<string[]>([
    "Subjective",
  ]);

  const [sections, setSections] = useState({
    Subjective: [
      {
        label: "Chief Complaint",
        checked: false,
      },
      {
        label: "History of Present Illness",
        checked: false,
      },
      {
        label: "Review of Systems",
        checked: false,
      },
      {
        label: "Pain Assessment",
        checked: false,
      },
      {
        label: "Medications",
        checked: false,
      },
    ],

    Objective: [
      {
        label: "Physical Exam",
        checked: false,
      },
      {
        label: "Vitals",
        checked: false,
      },
      {
        label: "Diagnostic Tests",
        checked: false,
      },
    ],

    Assessment: [
      {
        label: "Diagnosis",
        checked: false,
      },
      {
        label: "Differential Diagnosis",
        checked: false,
      },
    ],

    Plan: [
      {
        label: "Medication Plan",
        checked: false,
      },
      {
        label: "Follow Up",
        checked: false,
      },
    ],
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((item) => item !== section)
        : [...prev, section]
    );
  };

  const toggleItem = (
    sectionName: string,
    index: number
  ) => {
    setSections((prev) => ({
      ...prev,
      [sectionName]: prev[
        sectionName as keyof typeof prev
      ].map((item, idx) =>
        idx === index
          ? {
              ...item,
              checked: !item.checked,
            }
          : item
      ),
    }));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-semibold text-gray-900">
          Coverage Checklist
        </h3>

        <button className="text-sm text-gray-500 hover:text-gray-700">
          Collapse all
        </button>
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {Object.entries(sections).map(
          ([sectionName, items]) => {
            const isOpen =
              openSections.includes(sectionName);

            return (
              <div key={sectionName}>
                {/* Section Header */}
                <button
                  onClick={() =>
                    toggleSection(sectionName)
                  }
                  className="w-full flex items-center gap-2 text-left"
                >
                  {isOpen ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}

                  <span className="font-medium text-sm text-gray-800">
                    {sectionName}
                  </span>
                </button>

                {/* Section Items */}
                {isOpen && (
                  <div className="ml-6 mt-3 space-y-3">
                    {items.map(
                      (item: Item, index: number) => (
                        <button
                          key={item.label}
                          onClick={() =>
                            toggleItem(
                              sectionName,
                              index
                            )
                          }
                          className="flex items-center gap-3 w-full text-left"
                        >
                          {/* Circle Checkbox */}
                          <div
                            className={`
                              w-5 h-5
                              rounded-full
                              border-2
                              flex
                              items-center
                              justify-center
                              transition-all
                              flex-shrink-0
                              ${
                                item.checked
                                  ? "bg-green-500 border-green-500"
                                  : "bg-white border-gray-400"
                              }
                            `}
                          >
                            {item.checked && (
                              <Check
                                size={12}
                                strokeWidth={3}
                                className="text-white"
                              />
                            )}
                          </div>

                          <span className="text-sm text-gray-700">
                            {item.label}
                          </span>
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>

      {/* Legend Container Block - Styled to prevent squishing and overflow alignment */}
      <div className="mt-6 pt-4 border-t flex flex-wrap justify-start gap-x-4 gap-y-2 text-xs text-gray-600 font-medium">

        {/* Covered */}
        <label className="flex items-center gap-1.5 cursor-pointer select-none">
          <input type="checkbox" className="peer hidden" />
          <div className="w-4 h-4 rounded-full border-2 border-emerald-500 flex items-center justify-center flex-shrink-0 peer-checked:bg-emerald-500">
            <Check
              size={10}
              strokeWidth={3.5}
              className="text-white opacity-0 peer-checked:opacity-100 transition-opacity"
            />
          </div>
          <span>Covered</span>
        </label>

        {/* Partial */}
        <label className="flex items-center gap-1.5 cursor-pointer select-none">
          <input type="checkbox" className="peer hidden" />
          <div className="w-4 h-4 rounded-full border-2 border-amber-500 flex items-center justify-center flex-shrink-0 peer-checked:bg-amber-500">
            <Check
              size={10}
              strokeWidth={3.5}
              className="text-white opacity-0 peer-checked:opacity-100 transition-opacity"
            />
          </div>
          <span>Partial</span>
        </label>

        {/* Not Covered */}
        <label className="flex items-center gap-1.5 cursor-pointer select-none">
          <input type="checkbox" className="peer hidden" />
          <div className="w-4 h-4 rounded-full border-2 border-slate-400 flex items-center justify-center flex-shrink-0 peer-checked:bg-slate-400">
            <Check
              size={10}
              strokeWidth={3.5}
              className="text-white opacity-0 peer-checked:opacity-100 transition-opacity"
            />
          </div>
          <span>Not Covered</span>
        </label>

      </div>
    </div>
  );
};

export default CoverageChecklist;