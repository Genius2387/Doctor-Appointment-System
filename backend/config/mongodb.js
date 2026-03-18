import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // ✅ Prevent multiple connections (VERY IMPORTANT for Vercel)
    if (mongoose.connections[0].readyState) {
      return;
    }

    mongoose.connection.on("connected", () => {
      console.log("Database Connected");
    });

    await mongoose.connect(process.env.MONGODB_URI + "prescripto");

  } catch (error) {
    console.log("MongoDB Error:", error);
  }
};

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.