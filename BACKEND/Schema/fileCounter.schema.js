import mongoose from "mongoose";

const fileCounterSchema = new mongoose.Schema({
  fileYear: {
    type: String,
    required: true,
    unique: true,
      default: () => new Date().getFullYear().toString()
  },
  currFileNumber: {
    type: Number,
    default: 1
  }
}, { timestamps: true });

export default fileCounterSchema;