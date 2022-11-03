const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");
const app = express();

app.use(express.json());
app.use(cors());
const userController = require("./controller/user.controller")
const fruitController = require("./controller/fruit.controller");
const vegetableCartController = require("./controller/vegetablecart.Controller");
const { register,login,generateToken } = require("./controller/auth.controller");
const port=process.env.PORT||7005

app.post("/register", register);
app.post("/login", login);
app.use("/users", userController)
app.use("/vegitables", fruitController);
app.use("/cart", vegetableCartController);

app.listen(port, async () => {
  try {
    await connect();
    console.log("listing on port 7005");
  } catch (err) {
    console.log(err.message);
  }
});
