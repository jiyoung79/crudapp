const mongoose = require("mongoose");

const DB = "mongodb+srv://kang:980709@cluster0.odxrdbm.mongodb.net/mernstack?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB, {

}).then(()=>console.log("connection start")).catch((error)=> console.log(error.message));