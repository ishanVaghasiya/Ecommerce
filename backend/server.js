const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/config");
const cookieparser = require("cookie-parser")
var cors = require("cors");

const User = require("./models/userModel");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
const { errorMiddleware } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

app.use(cookieparser())

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));


app.use(express.json());
app.use(errorMiddleware);

app.use(productRouter);
app.use(userRouter);

app.get("/", (req, res) => {
  res.send("Welcome to MyShop server");
});

app.listen(5000, () => {
  console.log("Server run on 5000 sucssesfully");
});
