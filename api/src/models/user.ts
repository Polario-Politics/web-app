import mongoose, { Document } from 'mongoose';
import { User } from 'polario-common';

type UserSchema = User & Document<any>;

const User = new mongoose.Schema({
  name: { type: String },
});

export default mongoose.model<UserSchema>('User', User);
