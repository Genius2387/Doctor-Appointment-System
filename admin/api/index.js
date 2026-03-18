import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "../backend/config/mongodb.js";
import connectCloudinary from "../backend/config/cloudinary.js";
import userRouter from "../backend/routes/userRoute.js";
import doctorRouter from "../backend/routes/doctorRoute.js";
import adminRouter from "../backend/routes/adminRoute.js";

const app = express();

// connect DB & cloudinary
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

// ✅ THIS LINE IS IMPORTANT
export default app;