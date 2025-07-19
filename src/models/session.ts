import { Schema, model, Document } from 'mongoose';

export interface ISession extends Document {
  mentor: Schema.Types.ObjectId;
  mentee: Schema.Types.ObjectId;
  startTime: Date;
  endTime: Date;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  googleMeetLink?: string;
}

const SessionSchema = new Schema({
  mentor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  mentee: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'pending' },
  googleMeetLink: { type: String },
}, { timestamps: true });

export default model<ISession>('Session', SessionSchema);
