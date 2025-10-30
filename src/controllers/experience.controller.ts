import { Request, Response } from "express";
import Experience from "../models/experience.model";
export const getExperiences = async (req: Request, res: Response) => {
  try {
   const { search } = req.query;
    const filter = search
    ? { title: { $regex: search as string, $options: "i" } }
    : {};
  const experiences = await Experience.find(filter);
res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch experiences", error });
  }
};
export const getExperienceById = async (req: Request, res: Response) => {
  try {
    const exp = await Experience.findById(req.params.id);
    if (!exp) return res.status(404).json({ message: "Experience not found" });
    res.json(exp);
  } catch (error) {
    res.status(500).json({ message: "Error fetching experience", error });
  }
};
