import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: Number,
  username: String,
  panel: String,
  trxId: String,
  gmail: String,
  telegram: String,
  status: {
    type: String,
    default: "pending"
  }
});

export default mongoose.model("Order", schema);
