
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  role: {
    type: String,
    enum: ['mentor', 'mentee'],
    required: true,
  },
  title: {
    type: String,
  },
  company: {
    type: String,
  },
  bio: {
    type: String,
  },
  skills: {
    type: [String],
  },
  rating: {
    type: Number,
  },
  sessionCount: {
    type: Number,
  },
  availability: {
    days: [String],
    timeSlots: [{ start: String, end: String }],
  },
  rate: {
    amount: Number,
    currency: String,
  },
  googleAccessToken: {
    type: String,
  },
  googleRefreshToken: {
    type: String,
  },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
