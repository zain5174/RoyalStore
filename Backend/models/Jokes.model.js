import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema(
  {
    joke: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const jokeModel = mongoose.model("Joke", jokeSchema);

export default jokeModel;