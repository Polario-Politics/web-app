import mongoose, { Document } from 'mongoose';
import { Source } from 'polario-common';

export type SourceSchema = Source & Document<any>;

const Source = new mongoose.Schema({
  name: { type: String },
  displayName: { type: String },
  url: { type: String },
  bias: { type: String },
  accuracy: { type: String },
  mbfcUrl: { type: String },
  verifiedDate: { type: Date },
});

export default mongoose.model<SourceSchema>('Source', Source);
