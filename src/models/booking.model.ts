import mongoose, { Schema, Document } from "mongoose";
export interface IBooking extends Document {
  userName: string;
  email: string;
  experienceId: mongoose.Types.ObjectId;
  date: string;
  time: string;
  qty: number;
  totalAmount: number;
}
const bookingSchema = new Schema<IBooking>(
  {
 userName: { type: String, required: true },
 email: { type: String, required: true },
experienceId: { type: Schema.Types.ObjectId, ref: "Experience", required: true },
date: { type: String, required: true },
  time: { type: String, required: true },
 qty: { type: Number, required: true },
 totalAmount: { type: Number, required: true },
  },
  { timestamps: true }
);
export default mongoose.model<IBooking>("Booking", bookingSchema);
