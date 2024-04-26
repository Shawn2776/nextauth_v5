import mongoose from "mongoose";

const connectMongoDB = async () => {
  const connection = {};
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
