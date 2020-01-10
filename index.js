const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const postRoute = require("./routes/userpost");
const storyRoute = require("./routes/story");
const uploadRoute = require("./routes/upload");
const dotenv = require('dotenv').config();
const app = express();
app.use(express.json());
app.use(express.static(__dirname+"/public"));

mongoose.connect(process.env.URL, 
    {   
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false, 
        useCreateIndex: true 
    })
    .then((db) => {
        console.log("Successfully connected to MongodB server");
    }, (err) => console.log(err));

app.use("/user", userRoute);
app.use("/userPost", postRoute);
app.use("/stories", storyRoute);
app.use("/uploads", uploadRoute);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.statusCode = 500;
    res.json({ message: err.message });
});

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});