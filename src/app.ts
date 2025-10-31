import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import testRoutes from "./routes/testRoutes";
import experienceRoutes from "./routes/experience.routes";
import bookingRoutes from "./routes/booking.routes";
import promoRoutes from "./routes/promo.routes";

dotenv.config();

const app: Application = express();

// ✅ Allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://bookit-frontend-lemon.vercel.app",
];

// ✅ Safe CORS setup
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.warn("Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ✅ Handle preflight requests globally
app.options("*", cors());

// ✅ Body parser
app.use(express.json());

// ✅ Routes
app.use("/api", testRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/promo", promoRoutes);

// ✅ Default route check
app.get("/", (req: Request, res: Response) => {
  res.send("✅ BookIt Backend Running...");
});

// ✅ Error handler for CORS rejection (optional but helpful)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({ message: "CORS blocked this request" });
  }
  next(err);
});

export default app;
