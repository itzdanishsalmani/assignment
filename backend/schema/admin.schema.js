import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;