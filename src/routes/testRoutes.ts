import { Router, Request, Response } from "express";

const router = Router();

router.get("/test", (req: Request, res: Response) => {
  res.json({ success: true, message: "API working perfectly 🔥" });
});

export default router;
