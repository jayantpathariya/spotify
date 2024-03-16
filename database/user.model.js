import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
  personal_info: {
    fullname: {
      type: String,
      required: true,
      minlength: [3, "Fullname must be at least 3 characters long"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "Password must be at least 8 characters long"],
    },
    profile_picture: {
      type: String,
      default: "/default-profile-picture.jpg",
    },
  },
});

const User = models.User || model("User", UserSchema);

export default User;
