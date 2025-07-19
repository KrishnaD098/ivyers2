import React from 'react';
import MentorCard from '../components/mentor-card';
import { mockUsers } from '../data/mock-data';

const MentorsPage: React.FC = () => {
  const mentors = mockUsers.filter((user) => user.role === 'mentor');

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Mentors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mentors.map((mentor) => (
          <MentorCard key={mentor._id} mentor={mentor} />
        ))}
      </div>
    </div>
  );
};

export default MentorsPage;
