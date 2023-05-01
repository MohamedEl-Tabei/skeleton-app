import { Router } from "express";
import UserController from "../controllers/user.controller"
import UserMiddleware from "../middlewares/user.middleware";
const router=Router();
router.param("id",UserMiddleware.userByIdParam)

router.route("/api/users").post(UserController.createUser)
router.route("/api/users").get(UserController.listUsers)
router.route("/api/users/:id").get(UserController.readUser)
router.route("/api/users/:id").put(UserController.updateUser)
router.route("/api/users/:id").delete(UserController.deleteUser)


export default router