import mongoose from "mongoose";

const schema: mongoose.Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  inspected: {
    type: Boolean,
    required: false,
    default: false,
  },
});

export default mongoose.model("Item", schema);
