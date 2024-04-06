//import mongoose
const mongoose = require("mongoose");
//server connects to mongose wich outside the project which takes time(use of async)
//fichier config only once to connect with data
module.exports.connectToMongoDB = async () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.URL_MONGO)
    .then(() => {
      console.log("connect to DB");
    })
    .catch((error) => {
      console.log(error.message);
    });
  //connect => copy url localhost or toul import from .env which is better in order to only config db once cause zal9a b fal9a
};
