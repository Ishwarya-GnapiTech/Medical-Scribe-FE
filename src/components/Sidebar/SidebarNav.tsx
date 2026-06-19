import {
  FiMic,
  FiFileText,
  FiCheckSquare,
  FiGrid,
  FiPlus,
  FiClock,
  FiHelpCircle,
  FiBell,
} from "react-icons/fi";

const topNavItems = [
  { icon: FiMic, label: "Scribe" },
  { icon: FiFileText, label: "Evidence" },
  { icon: FiCheckSquare, label: "Tasks" },
  { icon: FiGrid, label: "Templates" },
];

const bottomNavItems = [
  { icon: FiClock, label: "History" },
  { icon: FiHelpCircle, label: "Help" },
  { icon: FiBell, label: "Alerts" },
];

const SidebarNav = () => {
  return (
    <div className="w-[80px] h-screen bg-[#F8F8F8] border-r border-gray-200 flex flex-col justify-between items-center py-6">

      {/* Top */}
      <div className="flex flex-col items-center">

        {/* Logo */}
        <div className="text-[28px] font-light text-[#642734] mb-8">
          G
        </div>

        {/* Plus */}
        <button
          className="
          w-12
          h-12
          rounded-xl
          bg-[#642734]
          text-white
          flex
          items-center
          justify-center
          mb-10
          hover:bg-[#53202B]
          transition
          "
        >
          <FiPlus size={20} />
        </button>

        {/* Main Nav */}
        <div className="flex flex-col items-center gap-8">
          {topNavItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                className="
                flex
                flex-col
                items-center
                text-slate-700
                hover:text-[#642734]
                transition
                "
              >
                <Icon size={20} />
                <span className="text-[10px] mt-1">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col items-center gap-6">

        {bottomNavItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              className="
              flex
              flex-col
              items-center
              text-slate-700
              hover:text-[#642734]
              transition
              "
            >
              <Icon size={18} />
              <span className="text-[10px] mt-1">
                {item.label}
              </span>
            </button>
          );
        })}

        <div
          className="
          w-10
          h-10
          rounded-full
          bg-[#642734]
          text-white
          flex
          items-center
          justify-center
          text-sm
          font-semibold
          "
        >
          J
        </div>

      </div>
    </div>
  );
};

export default SidebarNav;