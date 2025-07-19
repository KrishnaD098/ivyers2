import React from 'react';
import { Card, CardBody, Avatar, Button } from '@heroui/react';
import { IUser } from '../models/user';

interface MentorCardProps {
  mentor: IUser;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <Avatar src={mentor.avatar} size="xl" className="mx-auto" />
        <h3 className="text-lg font-semibold mt-4">{mentor.name}</h3>
        <p className="text-sm text-gray-500">{mentor.title}</p>
        <div className="mt-4">
          {mentor.skills.map((skill) => (
            <span key={skill} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {skill}
            </span>
          ))}
        </div>
        <Button color="primary" className="mt-4">Book Session</Button>
      </CardBody>
    </Card>
  );
};

export default MentorCard;
