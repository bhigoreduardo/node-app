import express from "express";

import { isAuthenticated, isOwner } from "../middlewares";
import {
  deleteUser,
  getAllUsers,
  updateUser,
} from "../controllers/user.controller";

export default (router: express.Router) => {
  router.get("/users", isAuthenticated, getAllUsers);
  router.patch("/users/:id", isAuthenticated, isOwner, updateUser);
  router.delete("/users/:id", isAuthenticated, isOwner, deleteUser);
};
