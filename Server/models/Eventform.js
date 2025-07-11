import mongoose from "mongoose";
import validator from "validator";

const eventSchema = new mongoose.Schema({
  userID:{
    type:String,
  },
  firstname: {
    type: String,
    required: [true, "First name Required!"],
    minlength: [3, "First name must contain at least 3 characters!"],
  },
  lastname: {
    type: String,
    required: [true, "Last name Required!"],
    minlength: [3, "Last name must contain at least 3 characters!"],
  },
  email: { 
    type: String,
    required: [true, "Email Required!"],
    validate: [validator.isEmail, "Please provide a valid email!"],
  },
  contact: {
    type: String,
    required: [true, "Contact Number Required!"],
    minlength: [10, "Contact Number must contain at least 10 digits!"],
    maxlength: [10, "Contact Number must contain at most 10 digits!"],
  },
  event: { 
    type: String,
    required: true,
  },
  packages: {
    type: String,
    required: true,
  },
  eventdate: {
    type: Date, 
    required: true,
  },
  guests: { 
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
    minlength: [5, "Budget must contain at least 5 digits!"],
    maxlength: [8, "Budget must contain at most 8 digits!"],
  },
  location: {
    type: String,
    required: true,
    minlength: [10, "Location must contain at least 10 characters!"],
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
  hasCompleted: {
    type: Boolean,
    default: false,
  },
});
const Eventform = mongoose.model("Eventform", eventSchema);
export default Eventform;