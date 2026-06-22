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
  selectedSessionId?: number;
  onSelectSession?: (session: Session) => void;
};

const SessionList = ({ sessions, selectedSessionId, onSelectSession }: Props) => {
  return (
    <div className="mt-4 flex flex-col gap-2">
      {sessions.map((session) => (
        <SessionItem
          key={session.id}
          initials={session.initials}
          patientName={session.patientName}
          date={session.date}
          time={session.time}
          isSelected={session.id === selectedSessionId}
          onClick={() => onSelectSession?.(session)}
        />
      ))}
    </div>
  );
};

export default SessionList;