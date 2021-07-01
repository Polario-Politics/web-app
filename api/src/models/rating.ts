import mongoose, { Document } from 'mongoose';
import { Rating } from 'polario-common';

interface UserSchema extends Document<any>, Rating { }

const Rating = new mongoose.Schema({
    name: { type: String },
    displayName: { type: String },
    url: { type: String },
    bias: { type: String },
    accuracy: { type: String },
    verifiedDate: { type: String }
});

export default mongoose.model<UserSchema>('Rating', Rating);
