require("dotenv").config();
const express = require("express");

const { login } = require("./controllers/login");
const userController = require("./controllers/Users");
const productController = require("./controllers/Products");
const orderController = require("./controllers/Orders");
const verifyOrder = require("./middlewares/verifyOrder");
const { verifyUser } = require("./middlewares/verifyUser");
const authMiddleware = require("./middlewares/authMiddleware");
const adminValidation = require("./middlewares/adminValidation");
const userValidation = require("./middlewares/userValidation");
const verifyProduct = require('./middlewares/verifyProduct')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./documentacion/swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//user endpoints
app.post("/login", login);
app.get("/user", authMiddleware, adminValidation, userController.getAllUsers);
app.get("/user/:id",authMiddleware, adminValidation, userController.getUserById);
app.post("/user", verifyUser, userController.postuser);
app.patch("/user/:id", authMiddleware, verifyUser, userValidation, userController.updateUser);
app.delete("/user/:id", authMiddleware, userValidation, userController.deleteUser);
app.get("/user/:user_id/orders", authMiddleware, adminValidation, orderController.getOrdersByUserId)

//product endpoints

app.get("/products", authMiddleware, productController.getAllproducts);
app.get("/products/:id", authMiddleware, productController.getProductrById);
app.post("/products", authMiddleware, adminValidation, verifyProduct, productController.postProduct);
app.patch("/products/:id", authMiddleware, adminValidation, verifyProduct, productController.updateProduct);
app.delete("/products/:id", authMiddleware, verifyProduct, productController.deleteProduct);

//order enpoints
app.get("/orders", authMiddleware, adminValidation, orderController.getAllorders);
app.post("/orders", authMiddleware, verifyOrder, orderController.postOrder);
app.patch("/orders/:id", authMiddleware, adminValidation, orderController.updateOrder);
app.get("/orders/:id", authMiddleware, adminValidation, orderController.getorderById);
app.delete('/orders/:id',authMiddleware, adminValidation, orderController.deleteOrder)


app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
