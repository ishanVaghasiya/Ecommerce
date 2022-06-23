const bcrypt = require("bcryptjs");
const users = [
  {
    name: "admin",
    email: "admin123@mail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "ishan",
    email: "ishan@mail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "sahil",
    email: "sahil@mail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];




module.exports = users;
