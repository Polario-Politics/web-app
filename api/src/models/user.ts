import mongoose, { Document } from 'mongoose';
import { User } from 'polario-common'

interface UserSchema extends Document<any>, User {}

const User = new mongoose.Schema({
  name: { type: String },
});

export default mongoose.model<UserSchema>('User', User);
