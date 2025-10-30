"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const experience_controller_1 = require("../controllers/experience.controller");
const router = (0, express_1.Router)();
router.get("/", experience_controller_1.getExperiences);
router.get("/:id", experience_controller_1.getExperienceById);
exports.default = router;
