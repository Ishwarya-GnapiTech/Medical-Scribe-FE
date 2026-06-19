type Props = {
  initials: string;
  patientName: string;
  date: string;
  time: string;
};

const SessionItem = ({
  initials,
  patientName,
  date,
  time,
}: Props) => {
  return (
    <div
      className="
      flex
      items-center
      gap-4
      px-3
      py-4
      rounded-xl
      cursor-pointer
      hover:bg-[#F4ECEC]
      transition-all
      duration-200
      "
    >
      <div
        className="
        w-10
        h-10
        rounded-full
        border
        border-gray-300
        flex
        items-center
        justify-center
        text-slate-700
        text-sm
        "
      >
        {initials}
      </div>

      <div>
        <h3 className="font-semibold text-[15px] text-slate-800">
          {patientName}
        </h3>

        <p className="text-[12px] text-slate-500">
          {date}
        </p>

        <p className="text-[12px] text-slate-500">
          {time}
        </p>
      </div>
    </div>
  );
};

export default SessionItem;