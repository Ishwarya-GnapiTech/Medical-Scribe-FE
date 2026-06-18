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
      gap-3
      p-4
      rounded-xl
      cursor-pointer

      hover:bg-[#F6EFEF]
      hover:shadow-sm

      transition-all
      duration-200
      "
    >
      <div
        className="
        w-11
        h-11
        rounded-full
        border
        border-gray-300

        flex
        items-center
        justify-center

        text-sm
        font-medium
        text-gray-700
        "
      >
        {initials}
      </div>

      <div>
        <h3
          className="
          text-[16px]
          font-semibold
          text-gray-800
          "
        >
          {patientName}
        </h3>

        <p
          className="
          text-[14px]
          text-gray-500
          mt-1
          "
        >
            <div>
  <h3 className="font-semibold text-gray-800">
    {patientName}
  </h3>

  <p className="text-sm text-gray-500">
    {date}
  </p>

  <p className="text-sm text-gray-400">
    {time}
  </p>
</div>
          
        </p>
      </div>
    </div>
  );
};

export default SessionItem;