"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExperienceById = exports.getExperiences = void 0;
const experience_model_1 = __importDefault(require("../models/experience.model"));
const getExperiences = async (req, res) => {
    try {
        const { search } = req.query;
        const filter = search
            ? { title: { $regex: search, $options: "i" } }
            : {};
        const experiences = await experience_model_1.default.find(filter);
        res.json(experiences);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to fetch experiences", error });
    }
};
exports.getExperiences = getExperiences;
const getExperienceById = async (req, res) => {
    try {
        const exp = await experience_model_1.default.findById(req.params.id);
        if (!exp)
            return res.status(404).json({ message: "Experience not found" });
        res.json(exp);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching experience", error });
    }
};
exports.getExperienceById = getExperienceById;
