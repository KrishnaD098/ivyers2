import React from 'react';
import { Card, CardBody, Button } from '@heroui/react';
import { ISession } from '../models/session';

interface SessionCardProps {
  session: ISession;
}

const SessionCard: React.FC<SessionCardProps> = ({ session }) => {
  return (
    <Card>
      <CardBody>
        <h3 className="text-lg font-semibold">Session with {session.mentor.name}</h3>
        <p>Status: {session.status}</p>
        <p>Start Time: {new Date(session.startTime).toLocaleString()}</p>
        <p>End Time: {new Date(session.endTime).toLocaleString()}</p>
        {session.googleMeetLink && (
          <a href={session.googleMeetLink} target="_blank" rel="noopener noreferrer">
            <Button color="primary">Join Meet</Button>
          </a>
        )}
      </CardBody>
    </Card>
  );
};

export default SessionCard;
