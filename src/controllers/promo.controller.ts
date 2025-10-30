import { Request, Response } from "express";
import Promo from "../models/promo.model";

export const validatePromo = async (req: Request, res: Response) => {
  try {
    const { code } = req.body;
const promo = await Promo.findOne({ code: code.toUpperCase() });

 if (!promo) return res.status(404).json({ message: "Invalid promo code" });

    if (new Date(promo.expiry) < new Date()) {
      return res.status(400).json({ message: "Promo code expired" });
    }
  res.json({
    message: "Promo code valid",
    discountPercent: promo.discountPercent,
    });
  } catch (error) {
    res.status(500).json({ message: "Error validating promo", error });
  }
};
