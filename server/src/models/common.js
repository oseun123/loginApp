const Sequelize = require("sequelize");

const commonFields = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
};
const commonOptions = {
  createdAt: "created_at",
  updatedAt: "updated_at",
};
module.exports = { commonFields, commonOptions };
