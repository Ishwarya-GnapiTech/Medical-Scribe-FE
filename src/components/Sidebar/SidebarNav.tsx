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
  { icon: FiMic, label: "Scribe", active: true },
  { icon: FiFileText, label: "Evidence", active: false },
  { icon: FiCheckSquare, label: "Tasks", active: false },
  { icon: FiGrid, label: "Templates", active: false },
];

const bottomNavItems = [
  { icon: FiClock, label: "History" },
  { icon: FiHelpCircle, label: "Help" },
  { icon: FiBell, label: "" }, // No label for alerts
];

const SidebarNav = () => {
  return (
    <div className="w-[80px] h-full bg-[#F8F8F8] border-r border-gray-200 flex flex-col items-center py-6 shrink-0 overflow-y-auto no-scrollbar">

      {/* Top */}
      <div className="flex flex-col items-center w-full">

        {/* Logo */}
        <div className="text-[26px] font-medium text-[#4B1D31] mb-6">
          G
        </div>

        {/* Plus */}
        <button
          className="
          w-12
          h-12
          rounded-[14px]
          bg-[#5A2533]
          text-white
          flex
          items-center
          justify-center
          mb-8
          hover:bg-[#431B26]
          transition
          shadow-sm
          "
        >
          <FiPlus size={22} strokeWidth={2} />
        </button>

        {/* Main Nav */}
        <div className="flex flex-col items-center gap-4 w-full">
          {topNavItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                className={`
                flex flex-col items-center justify-center w-[64px] rounded-xl py-3 transition gap-1.5
                ${item.active ? 'text-[#365A84] bg-[#F0F4F8]' : 'text-slate-500 hover:text-[#5A2533] hover:bg-gray-100'}
                `}
              >
                <Icon size={20} strokeWidth={1.5} />
                <span className="text-[10px] font-medium leading-none">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col items-center gap-4 w-full mt-auto pt-8">

        {bottomNavItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              className={`
              flex flex-col items-center justify-center w-[64px] rounded-xl py-2.5 text-slate-500 hover:text-[#5A2533] hover:bg-gray-100 transition
              ${item.label ? 'gap-1.5' : ''}
              `}
            >
              <Icon size={20} strokeWidth={1.5} />
              {item.label && (
                <span className="text-[10px] font-medium leading-none">
                  {item.label}
                </span>
              )}
            </button>
          );
        })}

        <div
          className="
          w-10
          h-10
          rounded-full
          bg-[#33111C]
          text-white
          flex
          items-center
          justify-center
          text-sm
          font-semibold
          shadow-sm
          mt-2
          "
        >
          J
        </div>

      </div>
    </div>
  );
};

export default SidebarNav;