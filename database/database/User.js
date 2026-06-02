import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: Number,
  username: String,
  balance: {
    type: Number,
    default: 0
  },
  totalOrders: {
    type: Number,
    default: 0
  }
});

export default mongoose.model("User", schema);
