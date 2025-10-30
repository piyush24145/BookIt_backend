"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePromo = void 0;
const promo_model_1 = __importDefault(require("../models/promo.model"));
const validatePromo = async (req, res) => {
    try {
        const { code } = req.body;
        const promo = await promo_model_1.default.findOne({ code: code.toUpperCase() });
        if (!promo)
            return res.status(404).json({ message: "Invalid promo code" });
        if (new Date(promo.expiry) < new Date()) {
            return res.status(400).json({ message: "Promo code expired" });
        }
        res.json({
            message: "Promo code valid",
            discountPercent: promo.discountPercent,
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error validating promo", error });
    }
};
exports.validatePromo = validatePromo;
