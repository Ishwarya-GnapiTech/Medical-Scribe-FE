import Sidebar from "../components/Sidebar/Sidebar";

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
    <div className="flex h-screen bg-[#F7F8FA]">

      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 overflow-y-auto">

        {/* Header */}
        <PatientHeader />

        {/* Navigation */}
        <NavigationTabs />

        {/* Page Content */}
        <div className="px-6 py-5">

          {/* Status Bar */}
          <StatusBar />

          {/* Main Layout */}
          <div className="grid grid-cols-[75%_25%] gap-6 mt-4">

            {/* LEFT SECTION */}
            <div className="flex flex-col">

              {/* SOAP Editor */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                <SoapToolbar />
                <SoapEditor />
              </div>

              {/* Prompt Input */}
              <div className="mt-5">
                <PromptInput />
              </div>

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="flex flex-col gap-6">

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