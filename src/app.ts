import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

import testRoutes from "./routes/testRoutes";
import experienceRoutes from "./routes/experience.routes";
import bookingRoutes from "./routes/booking.routes";
import promoRoutes from "./routes/promo.routes";

dotenv.config();

const app: Application = express();

// ✅ Proper CORS setup
app.use(
  cors({
    origin: [
      "http://localhost:5173", // for local development
      "https://bookit-frontend.vercel.app", // your frontend live domain (update if needed)
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// ✅ API routes
app.use("/api", testRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/promo", promoRoutes);

export default app;
