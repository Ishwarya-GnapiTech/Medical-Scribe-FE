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
    <div className="min-h-screen bg-[#f5f6f8]">
      <div className="max-w-[1600px] mx-auto bg-white min-h-screen shadow-sm">
        <PatientHeader />
        <NavigationTabs />

        <div className="px-6 py-5">
          <StatusBar />

          <div className="grid grid-cols-[1fr_340px] gap-6 mt-4">
            {/* Left Panel */}
            <div className="flex flex-col">
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <SoapToolbar />
                <SoapEditor />
              </div>

              <div className="mt-4">
                <PromptInput />
              </div>
            </div>

            {/* Right Panel */}
            <div className="flex flex-col gap-4">
              <MissedPrompts />
              <CoverageChecklist />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoapNotePage;