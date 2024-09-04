import { Router } from "express";
import { login, register, handleLogin, handleRegister } from "./auth.controller.js";

const authRouter = Router()
authRouter.get('/login', login)
authRouter.get('/register', register)
authRouter.post('/handleLogin', handleLogin)
authRouter.post('/handleRegister', handleRegister)
export default authRouter