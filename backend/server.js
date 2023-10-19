const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.listen(PORT, console.log(`Server is running on PORT ${PORT}`));
