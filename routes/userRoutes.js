import express from "express";
const router = express.Router();
import {
  registerUser,
  loginUser,
  userProfile,
  updateUserProfile,
} from "../controllers/userControllers.js";
import { authGuard } from "../middleware/authMiddleware.js";
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authGuard, userProfile);
router.put("/updateProfile", authGuard, updateUserProfile);

export default router;
