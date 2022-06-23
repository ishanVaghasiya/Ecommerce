const mongoose = require("mongoose");
const connectDB = async () => {
  const db = mongoose.connect(process.env.MOGOOSE_URL).then(() => {
    console.log(` ✔  Database connected succefully..`);
}).catch((e) => {
    console.log(e.message)
})
}

module.exports = connectDB;