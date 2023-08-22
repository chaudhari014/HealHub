const express = require('express');
const { connect } = require('./database/db');
const { registerRouter } = require('./routes/register.routes');
const app = express();

app.use(express.json());

app.use("/", registerRouter);

app.listen(3000, async () => {
    try {
        console.log("server is running");
        await connect;
        console.log("database connected successfully");
    } catch (error) {
        console.log("not connected");
    }
})