import mongoose, { Document } from 'mongoose';
import { User } from 'polario-common';

export type UserSchema = User & Document<any>;

// required: true -> makes field required to be a valid user
// default: <...> -> ensures the value passed in is not undefined

const User = new mongoose.Schema({
  name: { type: String },
  oauthId: { type: String, unique: true },
  firstName: { type: String, required: true, default: null },
  lastName: { type: String, required: true, default: null },
  email: { type: String, required: true, default: null },
  // TODO: Make default a different image
  picture: { type: String, default: null },
});

export default mongoose.model<UserSchema>('User', User);
