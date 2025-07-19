import { IUser } from '../models/user';
import { ISession } from '../models/session';

export const mockUsers: IUser[] = [
  {
    _id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'mentor',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    title: 'Senior Software Engineer',
    company: 'Google',
    bio: 'Experienced software engineer with a passion for mentoring.',
    skills: ['React', 'Node.js', 'TypeScript'],
    availability: { monday: ['10:00', '11:00'] },
    rate: 50,
  } as unknown as IUser,
  {
    _id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'mentee',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    title: 'Junior Software Engineer',
    company: 'Facebook',
    bio: 'Eager to learn and grow as a software engineer.',
    skills: ['HTML', 'CSS', 'JavaScript'],
  } as unknown as IUser,
];

export const mockSessions: ISession[] = [
  {
    _id: '1',
    mentor: mockUsers[0]._id,
    mentee: mockUsers[1]._id,
    startTime: new Date(),
    endTime: new Date(Date.now() + 3600000),
    status: 'confirmed',
    googleMeetLink: 'https://meet.google.com/xyz-abc-def',
  } as unknown as ISession,
];
