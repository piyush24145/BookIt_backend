import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import testRoutes from "./routes/testRoutes";
import experienceRoutes from "./routes/experience.routes";
import bookingRoutes from "./routes/booking.routes";
import promoRoutes from "./routes/promo.routes";

dotenv.config();

const app: Application = express();
const allowedOrigins = [
  "http://localhost:5173",
  "https://book-it-frontend-lemon.vercel.app",
];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
   callback(null, true);
      } else {
        console.warn(" Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    optionsSuccessStatus: 200, 
  })
);
app.options(/.*/, cors());
app.use(express.json());

app.use("/api", testRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/promo", promoRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send(" BookIt Backend Running...");
});
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({ message: "CORS blocked this request" });
  }
  next(err);
});
export default app;
