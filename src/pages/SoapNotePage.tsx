import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar/Sidebar";
import PatientHeader from "../components/header/PatientHeader";
import NavigationTabs from "../components/header/NavigationTabs";
import StatusBar from "../components/centerPanel/StatusBar";
import SoapToolbar from "../components/centerPanel/SoapToolbar";
import SoapEditor from "../components/centerPanel/SoapEditor";
import PromptInput from "../components/centerPanel/PromptInput";
import MissedPrompts from "../components/rightSidebar/MissedPrompts";
import CoverageChecklist from "../components/rightSidebar/CoverageChecklist";

type Session = {
  id: number;
  initials: string;
  patientName: string;
  date: string;
  time: string;
};

const SoapNotePage = () => {
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [sidebarWidth, setSidebarWidth] = useState(280);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const isResizing = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isResizing.current = true;
    const startX = e.clientX;
    const startWidth = sidebarWidth;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!isResizing.current) return;
      const newWidth = Math.max(200, Math.min(600, startWidth + (moveEvent.clientX - startX)));
      setSidebarWidth(newWidth);
    };

    const handleMouseUp = () => {
      isResizing.current = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="flex h-screen bg-[#F7F8FA] overflow-hidden relative">
      
      {/* MOBILE OVERLAY */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* LEFT SIDEBAR WITH RESIZER */}
      <div className={`flex flex-shrink-0 absolute md:relative z-50 h-full bg-white transition-transform duration-300 ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <Sidebar 
          selectedSessionId={selectedSession?.id} 
          onSelectSession={setSelectedSession} 
          width={sidebarWidth}
        />
        {/* Splitter Handle - Only visible on desktop */}
        <div 
          onMouseDown={handleMouseDown}
          className="hidden md:block w-1.5 hover:bg-gray-300 active:bg-gray-400 cursor-col-resize absolute right-0 top-0 bottom-0 z-10 transition-colors"
        />
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Mobile Header Toggle */}
        <div className="md:hidden flex items-center justify-between bg-white px-4 py-3 border-b border-gray-200 sticky top-0 z-30">
          <div className="text-xl font-bold text-[#4B1D31]">G</div>
          <button 
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="p-2 bg-gray-100 rounded-lg text-gray-600"
          >
            {isMobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Header */}
        <PatientHeader 
          initials={selectedSession?.initials} 
          patientName={selectedSession?.patientName} 
        />

        {/* Navigation Tabs */}
        <NavigationTabs />

        {/* Page Grid Workspace */}
        <div className="px-4 sm:px-6 py-5">
          {/* Status Bar */}
          <StatusBar />

          {/* Main Layout Workspace Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_320px] gap-6 mt-4">
            
            {/* LEFT WORKSPACE (SOAP Editor & Prompts) */}
            <div className="flex flex-col min-w-0">
              {/* SOAP Editor Component Card */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                <SoapToolbar />
                <SoapEditor />
              </div>

              {/* User Prompt Input Bar */}
              <div className="mt-5">
                <PromptInput />
              </div>
            </div>

            {/* RIGHT SIDEBAR (Checklists & Live Prompts) */}
            <div className="flex flex-col gap-6 w-full max-w-full xl:max-w-[320px] mx-auto">
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