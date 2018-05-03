const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signupSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const Signup = mongoose.model("Signup", signupSchema);

module.exports = Signup;
