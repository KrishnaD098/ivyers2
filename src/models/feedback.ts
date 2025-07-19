import { Schema, model, Document } from 'mongoose';

export interface IFeedback extends Document {
  mentor: Schema.Types.ObjectId;
  mentee: Schema.Types.ObjectId;
  session: Schema.Types.ObjectId;
  rating: number;
  comment: string;
}

const FeedbackSchema = new Schema({
  mentor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  mentee: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  session: { type: Schema.Types.ObjectId, ref: 'Session', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
}, { timestamps: true });

export default model<IFeedback>('Feedback', FeedbackSchema);
