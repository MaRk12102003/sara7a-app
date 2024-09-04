import { Router } from "express";
import { getUser, send } from "./user.controller.js";

const userRouter = Router()
userRouter.get('/:id',getUser)
userRouter.post('/send/:id',send)

export default userRouter