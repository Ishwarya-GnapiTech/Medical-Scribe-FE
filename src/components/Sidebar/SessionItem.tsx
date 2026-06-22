type Props = {
  initials: string;
  patientName: string;
  date: string;
  time: string;
  isSelected?: boolean;
  onClick?: () => void;
};

const SessionItem = ({
  initials,
  patientName,
  date,
  time,
  isSelected,
  onClick,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center gap-2.5 p-2.5 rounded-lg cursor-pointer transition-all duration-200
        ${isSelected ? "bg-white shadow-sm" : "hover:bg-[#F6EFEF] hover:shadow-sm"}
      `}
    >
      <div className={`
        w-8 h-8 rounded-full border flex flex-shrink-0 items-center justify-center text-[11px] font-bold
        ${isSelected ? "border-gray-400 bg-gray-50" : "border-gray-300 bg-white text-gray-700"}
      `}>
        {initials}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-800 text-sm truncate">
          {patientName}
        </h3>

        <div className="flex items-center gap-1.5 mt-0.5">
          <p className="text-[11px] text-gray-500 whitespace-nowrap">
            {date}
          </p>
          <span className="w-0.5 h-0.5 rounded-full bg-gray-400"></span>
          <p className="text-[11px] text-gray-400 whitespace-nowrap">
            {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SessionItem;