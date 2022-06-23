const mongoose = require("mongoose");
const userData = require("./data/users");
const productData = require("./data/products");
const User = require("./models/userModel");
const Product = require("./models/productModel");
const Order = require("./models/orderModel");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
const products = require("./data/products");
const { green } = require("colors");
require("colors");

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // await User.deleteMany();
    // await Product.deleteMany();
    // await Order.deleteMany();
    const createUser = await User.insertMany(userData);
    const admin = createUser[0]._id;
    const sampleData = productData.map((data) => ({
      ...data,
      user: admin,
    }));
    await Product.insertMany(sampleData);
    console.log("Data imported".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const dataDestory = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    console.log("Data Delete" .green.inverse)
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  dataDestory();
} else {
  importData();
}
