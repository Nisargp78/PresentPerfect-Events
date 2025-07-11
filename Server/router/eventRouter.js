import express from "express";
import { createEvent , 
    deleteEvent,
    deleteUserEvent,
    getAllEvents,
    getUserEvents,
    updateEventStatus,
    updateUserEvent,
    }from "../controller/eventController.js";
import {
    isAdminAuthenticated,
    isUserAuthenticated,
    } from "../middlewares/auth.js";

const router = express.Router();

router.post("/event", isUserAuthenticated, createEvent);
router.get("/getall", isAdminAuthenticated, getAllEvents);
router.get("/user/events", isUserAuthenticated, getUserEvents);
router.put("/update/:id", isAdminAuthenticated, updateEventStatus);
router.put("/user/update/:id", isUserAuthenticated, updateUserEvent);
router.delete("/delete/:id", isAdminAuthenticated, deleteEvent);
router.delete("/user/delete/:id", isUserAuthenticated, deleteUserEvent);

export default router;
