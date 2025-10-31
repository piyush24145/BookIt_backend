import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import testRoutes from "./routes/testRoutes";
import experienceRoutes from "./routes/experience.routes";
import bookingRoutes from "./routes/booking.routes";
import promoRoutes from "./routes/promo.routes";

dotenv.config();

const app: Application = express();

// ✅ Allowed origins (local + vercel)
const allowedOrigins = [
  "http://localhost:5173",
  "https://bookit-frontend-lemon.vercel.app",
];

// ✅ CORS setup
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // <– Added OPTIONS
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Handle preflight (for safety)
app.options(/.*/, cors());
app.use(express.json());

// ✅ Routes
app.use("/api", testRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/promo", promoRoutes);

export default app;
