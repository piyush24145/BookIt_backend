import { Request, Response } from "express";
import Booking from "../models/booking.model";

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { userName, email, experienceId, date, time, qty, totalAmount } = req.body;
    const existing = await Booking.findOne({ experienceId, date, time, email });
    if (existing) {
      return res.status(400).json({ message: "You already booked this slot" });
    }
    const booking = await Booking.create({
      userName,
      email,
      experienceId,
      date,
      time,
      qty,
      totalAmount,
    });
    res.status(201).json({ message: "Booking confirmed!", booking });
  } catch (error) {
    res.status(500).json({ message: "Failed to create booking", error });
  }
};
