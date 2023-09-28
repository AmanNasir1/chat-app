const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChats = chats.find(c => c._id === req.params.id);
  res.send(singleChats);
});

app.listen(PORT, console.log(`Server is running on PORT ${PORT}`));
