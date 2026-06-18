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

const topItems = [
  { icon: FiMic, label: "Scribe" },
  { icon: FiFileText, label: "Evidence" },
  { icon: FiCheckSquare, label: "Tasks" },
  { icon: FiGrid, label: "Templates" },
];

const bottomItems = [
  { icon: FiClock, label: "History" },
  { icon: FiHelpCircle, label: "Help" },
  { icon: FiBell, label: "Alerts" },
];

const SidebarNav = () => {
  return (
    <div
      className="
      w-[72px]
      min-h-screen
      bg-slate-100
      border-r
      border-slate-200
      flex
      flex-col
      justify-between
      items-center
      py-4
      "
    >
      {/* Top Section */}
      <div className="flex flex-col items-center w-full">
        {/* Logo */}
        <div
          className="
          text-4xl
          font-light
          text-[#5A2730]
          mb-8
          "
        >
          G
        </div>

        {/* Create Session Button */}
        <button
          className="
          w-11
          h-11
          rounded-full
          bg-[#5A2730]
          text-white
          flex
          items-center
          justify-center
          mb-8
          hover:bg-[#472027]
          transition-all
          duration-200
          "
        >
          <FiPlus size={20} />
        </button>

        {/* Main Navigation */}
        <div className="flex flex-col items-center gap-2 w-full px-1">
          {topItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                className="
                flex
                flex-col
                items-center
                justify-center
                gap-1
                w-full
                py-2
                rounded-lg
                hover:bg-white
                hover:shadow-sm
                transition-all
                duration-200
                "
              >
                <Icon size={18} />

                <span
                  className="
                  text-[10px]
                  text-center
                  font-medium
                  "
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center gap-2 w-full px-1">
        {bottomItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              className="
              flex
              flex-col
              items-center
              justify-center
              gap-1
              w-full
              py-2
              rounded-lg
              hover:bg-white
              hover:shadow-sm
              transition-all
              duration-200
              "
            >
              <Icon size={17} />

              <span
                className="
                text-[10px]
                text-center
                font-medium
                "
              >
                {item.label}
              </span>
            </button>
          );
        })}

        {/* User Avatar */}
        <div
          className="
          w-9
          h-9
          rounded-full
          bg-[#5A2730]
          text-white
          flex
          items-center
          justify-center
          font-semibold
          text-sm
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