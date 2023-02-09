import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
