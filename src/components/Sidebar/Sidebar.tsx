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
    <div className="flex min-h-screen border-r border-gray-200">
      <SidebarNav />

      <div className="w-[360px] bg-[#faf7f5] p-6">
        {/* New Session */}
        <button
          className="
          w-full
          py-4
          rounded-2xl
          bg-[#5A2730]
          text-white
          text-xl
          font-medium
          hover:bg-[#472027]
          transition
          "
        >
          + New Session
        </button>

        {/* Tabs */}
        <div
          className="
          flex
          mt-8
          border-b
          border-gray-300
          "
        >
          <button
            onClick={() => setTab("upcoming")}
            className={`
              flex-1
              pb-3
              text-lg
              ${
                tab === "upcoming"
                  ? "font-semibold text-black border-b-2 border-black"
                  : "text-gray-500"
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
              text-lg
              ${
                tab === "past"
                  ? "font-semibold text-black border-b-2 border-black"
                  : "text-gray-500"
              }
            `}
          >
            Past
          </button>
        </div>

        {/* Sessions */}
        <div className="mt-6">
          <SessionList sessions={filteredSessions} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;