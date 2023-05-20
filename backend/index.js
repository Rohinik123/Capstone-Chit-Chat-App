const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { chats } = require("./data/data");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const { Socket } = require("socket.io");

const app = express();

app.use(cors());

app.use(express.json()); //To Accept Json data
app.use(cors());
app.get("/", (req, res) => {
  res.send("Api is running on server");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8001;

const server = app.listen(
  PORT,
  console.log(`Server started running on ${PORT}`)
);

//connection to mongodb atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connected to atlas successfully");
  })
  // .then(() => {
  //   const server = app.listen(
  //     PORT,
  //     console.log(`Server started running on ${PORT}`)
  //   );
  // })
  .catch((error) => console.log(`${error} did not connect`));

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "*" || "http://localhost:3000",
  },
});

io.on("connection", (Socket) => {
  console.log("connected to socket.io");

  Socket.on("setup", (userData) => {
    Socket.join(userData._id);
    console.log(userData._id);
    Socket.emit("connected");
  });

  Socket.on("join chat", (room) => {
    Socket.join(room);
    console.log("User Joined Room: " + room);
  });

  Socket.on("typing", (room) => Socket.in(room).emit("typing"));
  Socket.on("stop typing", (room) => Socket.in(room).emit("stop typing"));

  Socket.on("new message", (newMessageRecieved) => {
    let chat = newMessageRecieved.chat;
    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;
      Socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  Socket.off("setup", () => {
    console.log("User Disconnected");
    Socket.leave(userData._id);
  });
});
