const express = require('express');
require("dotenv").config();
const cors = require('cors');
const passport = require('passport');

const { connection } = require('./database/db');
const { registerRouter } = require('./routes/register.routes');
const { initializingPassport } = require('./passport/passportConfig');

const app = express();

app.use(express.json());
app.use(cors());

initializingPassport(passport)

app.use("/", registerRouter);

const port = process.env.PORT;
app.listen(port, async () => {
    try {
        console.log("server is running");
        await connection;
        console.log("database connected successfully");
    } catch (error) {
        console.log("not connected");
    }
})