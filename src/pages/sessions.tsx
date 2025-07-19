import React from 'react';
import SessionCard from '../components/session-card';
import { mockSessions } from '../data/mock-data';

const SessionsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Sessions</h1>
      <div className="space-y-4">
        {mockSessions.map((session) => (
          <SessionCard key={session._id} session={session} />
        ))}
      </div>
    </div>
  );
};

export default SessionsPage;
