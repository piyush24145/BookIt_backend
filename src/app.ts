import express, { Application } from "express";
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
  "https://bookit-frontend-lemon.vercel.app",
];

// ✅ Simple & reliable CORS config for Render
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Always handle preflight requests
app.options("*", cors());

app.use(express.json());

// ✅ Routes
app.use("/api", testRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/promo", promoRoutes);

// ✅ Default route
app.get("/", (req, res) => {
  res.send("✅ BookIt Backend Running with CORS enabled!");
});

export default app;
