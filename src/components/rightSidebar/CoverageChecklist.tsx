type ItemStatus = "covered" | "partial" | "missing";

interface ChecklistItem {
  name: string;
  status: ItemStatus;
}

interface ChecklistSection {
  title: string;
  covered: number;
  total: number;
  items: ChecklistItem[];
}

const checklist: ChecklistSection[] = [
  {
    title: "S - Subjective",
    covered: 5,
    total: 7,
    items: [
      { name: "Chief Complaint", status: "covered" },
      { name: "History of Present Illness", status: "covered" },
      { name: "Review of Systems", status: "covered" },
      { name: "Pain Assessment", status: "partial" },
      { name: "Medications", status: "missing" },
    ],
  },
  {
    title: "O - Objective",
    covered: 3,
    total: 6,
    items: [
      { name: "Physical Exam", status: "covered" },
      { name: "Vitals", status: "partial" },
      { name: "Diagnostic Tests", status: "missing" },
    ],
  },
  {
    title: "A - Assessment",
    covered: 2,
    total: 4,
    items: [
      { name: "Diagnosis", status: "covered" },
      { name: "Differential", status: "partial" },
    ],
  },
  {
    title: "P - Plan",
    covered: 2,
    total: 5,
    items: [
      { name: "Medication Plan", status: "covered" },
      { name: "Follow Up", status: "partial" },
    ],
  },
];

const getDot = (status: ItemStatus) => {
  switch (status) {
    case "covered":
      return "bg-green-500";
    case "partial":
      return "bg-yellow-400";
    case "missing":
      return "bg-red-500";
    default:
      return "bg-gray-400";
  }
};

const CoverageChecklist = () => {
  return (
    <div className="bg-white border rounded-xl p-4">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-semibold text-gray-900">
          Coverage Checklist
        </h3>

        <button className="text-xs text-gray-500">
          Collapse all
        </button>
      </div>

      <div className="space-y-5">
        {checklist.map((section) => (
          <div key={section.title}>
            <div className="flex justify-between mb-3">
              <h4 className="font-medium text-sm">
                {section.title}
              </h4>

              <span className="text-xs text-gray-500">
                {section.covered}/{section.total}
              </span>
            </div>

            <div className="space-y-2">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-2 text-sm"
                >
                  <div
                    className={`w-2 h-2 rounded-full ${getDot(
                      item.status
                    )}`}
                  />

                  <span className="text-gray-700">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-5 mt-6 pt-4 border-t text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          Covered
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          Partial
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          Missing
        </div>
      </div>
    </div>
  );
};

export default CoverageChecklist;