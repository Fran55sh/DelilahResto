require("dotenv").config();
const { Sequelize } = require("sequelize");
const config = require('./config')


const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mariadb",
    define: {
      freezeTableName: true,
    },
  }
);

connection
  .authenticate()
  .then((res) => {
    console.log("DB connected!");
  })
  .catch((err) => {
    console.log(err);
  });



// if (config.env === "dev") {
//   const swaggerUi = require("swagger-ui-express");
//   const YAML = require("yamljs");
// //   const swaggerDocument = YAML.load("./docs/spec.yaml");
//   app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// }

module.exports = connection;
