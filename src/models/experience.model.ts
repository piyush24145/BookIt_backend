import mongoose, { Schema, Document } from "mongoose";
interface IAvailableTime {
  time: string;
  left: number;
  soldOut: boolean;
}
export interface IExperience extends Document {
  title: string;
  location: string;
  price: number;
  description: string;
  images: string[];
  availableDates: string[];
  availableTimes: IAvailableTime[];
}
const availableTimeSchema = new Schema<IAvailableTime>(
  {
    time: { type: String, required: true },
    left: { type: Number, default: 0 },
    soldOut: { type: Boolean, default: false },
  },
  { _id: false } 
);
const experienceSchema = new Schema<IExperience>(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    images: { type: [String], default: [] },
    availableDates: { type: [String], default: [] },
    availableTimes: { type: [availableTimeSchema], default: [] },
  },
  { timestamps: true }
);
export default mongoose.model<IExperience>("Experience", experienceSchema);
