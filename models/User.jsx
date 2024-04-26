import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  emailVerified: {
    type: Date,
  },
  image: {
    type: String,
  },
  password: {
    type: String,
    required: false,
  },
  accounts: {
    type: [Schema.Types.ObjectId],
    ref: "Account",
  },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
