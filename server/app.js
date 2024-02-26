require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema")

// const DB = "mongodb+srv://kang:kangjiyeong<password>@cluster0.odxrdbm.mongodb.net/mernstack?retryWrites=true&w=majority&appName=Cluster0"
const port = 8003;

app.listen(port, () => {
    console.log(`server is start port number ${port}`);

});