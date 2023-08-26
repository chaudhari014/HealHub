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
// const { authRouter } = require("./routes/auth.routes");
const { logoutRouter } = require("./routes/logout.routes");

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

app.use("/", registerRouter);
app.use("/", loginRouter);
app.use("/", doctorRouter);
// app.use("/", authRouter);
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
