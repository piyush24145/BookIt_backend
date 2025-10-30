import mongoose, { Schema, Document } from "mongoose";
export interface IPromo extends Document {
 code: string;
discountPercent: number;
  expiry: Date;
}
const promoSchema = new Schema<IPromo>(
  {
   code: { type: String, required: true, unique: true },
   discountPercent: { type: Number, required: true },
   expiry: { type: Date, required: true },
  },
  { timestamps: true }
);
export default mongoose.model<IPromo>("Promo", promoSchema);
