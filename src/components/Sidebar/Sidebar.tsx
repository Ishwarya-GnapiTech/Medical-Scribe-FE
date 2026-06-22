import { useState } from "react";
import SidebarNav from "./SidebarNav";
import SessionList from "./SessionList";
import { sessions } from "./mockData";

type Session = {
  id: number;
  initials: string;
  patientName: string;
  date: string;
  time: string;
};

type Props = {
  selectedSessionId?: number;
  onSelectSession?: (session: Session) => void;
  width?: number;
};

const Sidebar = ({ selectedSessionId, onSelectSession, width = 280 }: Props) => {
  const [tab, setTab] = useState("past");

  const filteredSessions = sessions.filter(
    (session) => session.status === tab
  );

  return (
    <div className="flex h-screen border-r border-gray-200 overflow-hidden">

      <SidebarNav />

      <div style={{ width: `${width}px` }} className="bg-[#FAF7F5] flex flex-col overflow-hidden transition-none">

        {/* New Session */}
        <div className="p-6">
          <button
            className="
            w-full
            py-3
            rounded-xl
            bg-[#642734]
            text-white
            text-base
            font-medium
            hover:bg-[#53202B]
            transition
            "
          >
            + New Session
          </button>

          {/* Tabs */}
          <div className="flex mt-8 border-b border-gray-300">

            <button
              onClick={() => setTab("upcoming")}
              className={`
                flex-1
                pb-3
                text-[16px]
                ${
                  tab === "upcoming"
                    ? "font-semibold border-b-2 border-black text-black"
                    : "text-slate-500"
                }
              `}
            >
              Upcoming
            </button>

            <button
              onClick={() => setTab("past")}
              className={`
                flex-1
                pb-3
                text-[16px]
                ${
                  tab === "past"
                    ? "font-semibold border-b-2 border-black text-black"
                    : "text-slate-500"
                }
              `}
            >
              Past
            </button>

          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-20">
          <SessionList 
            sessions={filteredSessions} 
            selectedSessionId={selectedSessionId}
            onSelectSession={onSelectSession}
          />
        </div>

      </div>
    </div>
  );
};

export default Sidebar;