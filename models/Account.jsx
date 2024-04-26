import mongoose, { Schema } from "mongoose";

const AccountSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userType: {
      type: String,
      required: true,
      enum: [
        "Admin",
        "User",
        "Guest",
        "Faculty",
        "Editor",
        "Staff",
        "Student",
        "Voter",
      ],
    },
    provider: {
      type: String,
      required: true,
      unique: true,
    },
    providerAccountId: {
      type: String,
      required: true,
      unique: true,
    },
    refreshToken: {
      type: String,
    },
    accessToken: {
      type: String,
    },
    expiresAt: {
      type: Number,
    },
    tokenType: {
      type: String,
    },
    scope: {
      type: String,
    },
    idToken: {
      type: String,
    },
    sessionState: {
      type: String,
    },
  },
  {
    collection: "accounts",
    timestamps: true,
  }
);

const Account =
  mongoose.models.Account || mongoose.model("Account", AccountSchema);

export default Account;
