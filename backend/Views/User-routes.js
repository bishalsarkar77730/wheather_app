import express from "express";
import {
  update,
  deleteUser,
  getUser,
  getAllusers,
} from "../Controller/User-controller.js";
import { AuthenticatedUser } from "../Utils/VerifyToken.js";

const router = express.Router();

router.put("/:id", AuthenticatedUser, update);
router.delete("/:id", AuthenticatedUser, deleteUser);
router.get("/:id", AuthenticatedUser, getUser);
router.get("/", getAllusers);

export default router;
