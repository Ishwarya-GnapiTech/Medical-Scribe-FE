import { useState } from "react";
import SidebarNav from "./SidebarNav";
import SessionList from "./SessionList";
import { sessions } from "./mockData";

const Sidebar = () => {
  const [tab, setTab] = useState("past");

  const filteredSessions = sessions.filter(
    (session) => session.status === tab
  );

  return (
    <div className="flex h-screen border-r border-gray-200 overflow-hidden">

      <SidebarNav />

      <div className="w-[280px] bg-[#FAF7F5] flex flex-col overflow-hidden">

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
          <SessionList sessions={filteredSessions} />
        </div>

      </div>
    </div>
  );
};

export default Sidebar;