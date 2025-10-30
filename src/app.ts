import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import testRoutes from "./routes/testRoutes";
import experienceRoutes from "./routes/experience.routes";
import bookingRoutes from "./routes/booking.routes";
import promoRoutes from "./routes/promo.routes";
dotenv.config();

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use("/api", testRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/promo", promoRoutes);
export default app;
