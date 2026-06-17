import SubjectiveSection from "./SubjectiveSection";
import ObjectiveSection from "./ObjectiveSection";
import AssessmentSection from "./AssessmentSection";
import PlanSection from "./PlanSection";
import Legend from "./Legend";

const CoverageChecklist = () => {
  return (
    <div className="border rounded-xl bg-white p-4">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold">
          Coverage Checklist
        </h3>

        <button className="text-sm text-gray-500">
          Collapse all
        </button>
      </div>

      <div className="space-y-3">
        <SubjectiveSection />
        <ObjectiveSection />
        <AssessmentSection />
        <PlanSection />
      </div>

      <Legend />
    </div>
  );
};

export default CoverageChecklist;