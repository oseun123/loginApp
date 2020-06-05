const express = require("express");
const { sequelize } = require("./con");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const userRoute = require("./routes/users");
// const UserModel = sequelize.import(__dirname + "/models/User.js");
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/users", userRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

sequelize
  .authenticate()
  .then(async () => {
    console.log("Connected");
    // defineRelations();
    await sequelize.sync({ force: false });
  })
  .catch(console.error);
