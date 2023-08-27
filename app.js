require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");

const { connection } = require("./database/db");
const { registerRouter } = require("./routes/register.routes");
const { loginRouter } = require("./routes/login.routes");
const { doctorRouter } = require("./routes/doctor.routes");
const { logoutRouter } = require("./routes/logout.routes");

// k start
const { Server } = require("socket.io");
const io = new Server(8000, {
  cors: true,
});
const emailToSocketIdMap = new Map();
const socketIdToEmailMap = new Map();

io.on("connection", (socket) => {
  console.log(`Socket Connected`, socket.id);
  socket.on("room:join", (data) => {
    const { email, room } = data;
    emailToSocketIdMap.set(email, socket.id);
    socketIdToEmailMap.set(socket.id, email);
    io.to(room).emit("user:joined", { email, id: socket.id });
    socket.join(room);
    io.to(socket.id).emit("room:join", data);
  });

  socket.on("user:call", ({ to, offer }) => {
    io.to(to).emit("incomming:call", { from: socket.id, offer });
  });

  socket.on("call:accepted", ({ to, ans }) => {
    io.to(to).emit("call:accepted", { from: socket.id, ans });
  });

  socket.on("peer:nego:needed", ({ to, offer }) => {
    io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
  });

  socket.on("peer:nego:done", ({ to, ans }) => {
    io.to(to).emit("peer:nego:final", { from: socket.id, ans });
  });

  socket.on("call:end", () => {
    // Get the room for the current socket
    const room = Object.keys(socket.rooms)[0];

    // Emit the call:end event to all participants in the room
    io.to(room).emit("call:end");
  });
});

//k end

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", loginRouter);
app.use("/", registerRouter);
app.use("/", doctorRouter);
app.use("/", logoutRouter);

const port = process.env.PORT;
app.listen(port, async () => {
  try {
    console.log("server is running");
    await connection;
    console.log("database connected successfully");
  } catch (error) {
    console.log("not connected");
  }
});
