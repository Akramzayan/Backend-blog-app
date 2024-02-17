import express from "express";
const router = express.Router();
import {

} from "../controllers/postControllers.js";
import { authGuard } from "../middleware/authMiddleware.js";
router.post("/");


export default router;
