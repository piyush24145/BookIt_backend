"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const promo_controller_1 = require("../controllers/promo.controller");
const router = (0, express_1.Router)();
router.post("/validate", promo_controller_1.validatePromo);
exports.default = router;
