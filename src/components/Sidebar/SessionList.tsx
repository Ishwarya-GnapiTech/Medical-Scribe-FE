import SessionItem from "./SessionItem";

type Session = {
  id: number;
  initials: string;
  patientName: string;
  date: string;
  time: string;
};

type Props = {
  sessions: Session[];
};

const SessionList = ({ sessions }: Props) => {
  return (
    <div className="mt-4 flex flex-col gap-2 px-3">
      {sessions.map((session) => (
        <SessionItem
          key={session.id}
          initials={session.initials}
          patientName={session.patientName}
          date={session.date}
          time={session.time}
        />
      ))}
    </div>
  );
};

export default SessionList;