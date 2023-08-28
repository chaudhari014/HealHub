require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");

const { Server } = require("socket.io");
const { connection } = require("./database/db");

const { registerRouter } = require("./routes/register.routes");
const { loginRouter } = require("./routes/login.routes");
const { doctorRouter } = require("./routes/doctor.routes");
const { paymentStatus } = require("./routes/payment.routes");
const { logoutRouter } = require("./routes/logout.routes");
const { appointRouter } = require("./routes/appointment.routes");
const { RegisterModel } = require("./Models/register.model");

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
  );
app.use(passport.initialize());
app.use(passport.session());

passport.use(RegisterModel.createStrategy());

passport.serializeUser(RegisterModel.serializeUser());
passport.deserializeUser(RegisterModel.deserializeUser());


// Routes
app.use("/", loginRouter);
app.use("/", registerRouter);
// Apply authentication middleware to protected routes
app.use("/", paymentStatus);
app.use("/", appointRouter);
app.use("/", doctorRouter);

app.use("/", logoutRouter);

const io = new Server(process.env.CLIENT_PORT, {
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
    const room = Object.keys(socket.rooms)[0];

    io.to(room).emit("call:end");
  });
});

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
