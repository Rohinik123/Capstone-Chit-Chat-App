const jwt = require("jsonwebtoken");

const tokenGeneration = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "240d",
  });
};

module.exports = tokenGeneration;
