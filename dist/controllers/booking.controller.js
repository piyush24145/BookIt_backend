"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBooking = void 0;
const booking_model_1 = __importDefault(require("../models/booking.model"));
const createBooking = async (req, res) => {
    try {
        const { userName, email, experienceId, date, time, qty, totalAmount } = req.body;
        const existing = await booking_model_1.default.findOne({ experienceId, date, time, email });
        if (existing) {
            return res.status(400).json({ message: "You already booked this slot" });
        }
        const booking = await booking_model_1.default.create({
            userName,
            email,
            experienceId,
            date,
            time,
            qty,
            totalAmount,
        });
        res.status(201).json({ message: "Booking confirmed!", booking });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to create booking", error });
    }
};
exports.createBooking = createBooking;
