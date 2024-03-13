import mongoose from "mongoose";

let connectionStatus = false;

export const connectToDB = async () => {
  if (connectionStatus) {
    console.log("[*] Already Connected to MongoDB...");
    return true;
  }

  try {
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) {
      console.error("[!] MONGODB_URI environment variable is not set.");
      return false;
    }

    await mongoose.connect(mongoURI);
    console.log("[*] Connected to MongoDB...");
    connectionStatus = true;
    return true;
  } catch (e) {
    console.error("[!] Error connecting to MongoDB:", e);
    return false;
  }
};
