import Eventform from "../models/Eventform.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js"; // Ensure you have an error handler

// Create Event
export const createEvent = catchAsyncErrors(async (req, res, next) => {
  const {
    firstname,
    lastname,
    email,
    contact,
    event,
    packages,
    eventdate,
    guests,
    budget,
    location,
  } = req.body;

  // Get userID from authenticated user
  const userID = req.user.id;

  // Validate required fields
  if (
    !firstname ||
    !lastname ||
    !email ||
    !contact ||
    !event ||
    !packages ||
    !eventdate ||
    !guests ||
    !budget ||
    !location
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
  }

  // Create and save new event
  const newEvent = new Eventform({
    userID,
    firstname,
    lastname,
    email,
    contact,
    event,
    packages,
    eventdate,
    guests,
    budget,
    location,
  });

  const savedEvent = await newEvent.save();

  res.status(201).json({
    success: true,
    message: "Event booked successfully!",
    data: savedEvent,
  });
});

// Get All Events
export const getAllEvents = catchAsyncErrors(async (req, res, next) => {
  const events = await Eventform.find();
  res.status(200).json({
    success: true,
    events,
  });
});

// Get User Events
export const getUserEvents = catchAsyncErrors(async (req, res, next) => {
  console.log("getUserEvents called");
  console.log("User from token:", req.user);
  
  const userID = req.user.id; // Get user ID from authenticated user
  console.log("UserID:", userID);
  
  const events = await Eventform.find({ userID });
  console.log("Found events:", events.length);
  
  res.status(200).json({
    success: true,
    events,
  });
});

// Update User Event
export const updateUserEvent = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const userID = req.user.id;

  // Find event by ID and ensure it belongs to the user
  let event = await Eventform.findOne({ _id: id, userID });

  if (!event) {
    return next(
      new ErrorHandler(
        "Event not found or you don't have permission to update it!",
        404
      )
    );
  }

  // Update event with new data
  const updatedEvent = await Eventform.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(200).json({
    success: true,
    message: "Event updated successfully!",
    event: updatedEvent,
  });
});

// Delete User Event
export const deleteUserEvent = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const userID = req.user.id;

  // Find event by ID and ensure it belongs to the user
  const event = await Eventform.findOne({ _id: id, userID });

  if (!event) {
    return next(
      new ErrorHandler(
        "Event not found or you don't have permission to delete it!",
        404
      )
    );
  }

  await event.deleteOne();

  res.status(200).json({
    success: true,
    message: "Event deleted successfully!",
  });
});

// Update Event Status
export const updateEventStatus = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;

  // Validate status value
  if (!["Pending", "Accepted", "Rejected"].includes(status)) {
    return res.status(400).json({
      success: false,
      message: "Invalid status value!",
    });
  }

  // Find event by ID
  let event = await Eventform.findById(id);
  if (!event) {
    return next(new ErrorHandler("Event not found!", 404));
  }

  // Update only the status field
  event.status = status;
  await event.save();

  res.status(200).json({
    success: true,
    message: "Event status updated successfully!",
    event,
  });
});

// Delete Event
export const deleteEvent = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const event = await Eventform.findById(id);

  if (!event) {
    return next(new ErrorHandler("Event not found!", 404));
  }

  await event.deleteOne();

  res.status(200).json({
    success: true,
    message: "Event deleted successfully!",
  });
});
