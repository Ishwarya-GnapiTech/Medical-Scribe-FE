import PatientHeader from "../components/header/PatientHeader";
import NavigationTabs from "../components/header/NavigationTabs";

import StatusBar from "../components/centerPanel/StatusBar";
import SoapToolbar from "../components/centerPanel/SoapToolbar";
import SoapEditor from "../components/centerPanel/SoapEditor";
import PromptInput from "../components/centerPanel/PromptInput";

import MissedPrompts from "../components/rightSidebar/MissedPrompts";
import CoverageChecklist from "../components/rightSidebar/CoverageChecklist";

const SoapNotePage = () => {
  return (
    <div className="min-h-screen bg-[#f7f7f7] p-2">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm min-h-screen">
        <PatientHeader />
        <NavigationTabs />

        <div className="grid grid-cols-[1fr_280px] gap-4 p-4">
          <div className="flex flex-col gap-4">
            <StatusBar />

            <div className="border rounded-xl bg-white">
              <SoapToolbar />
              <SoapEditor />
            </div>

            <PromptInput />
          </div>

          <div className="flex flex-col gap-4">
            <MissedPrompts />
            <CoverageChecklist />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoapNotePage;