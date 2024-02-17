import express from "express";
const router = express.Router();
import {createPost} from "../controllers/postControllers.js";
import { adminGuard, authGuard } from "../middleware/authMiddleware.js";
router.post('/',authGuard,adminGuard,createPost)

export default router;
