import jokeModel from "../models/Jokes.model.js";

const createJokes = async (req, res) => {
  try {
    const data = req.body;

    await jokeModel.create({
      joke: data.joke,
    });

    res.status(201).json({
      message: "joke created",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const getJokes = async (req, res) => {
  try {
    const jokes = await jokeModel.find();

    res.status(200).json({
      message: "jokes fetched",
      data: jokes,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export { createJokes, getJokes };