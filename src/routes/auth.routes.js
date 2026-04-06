const express = require('express');
const authController = require("../controllers/auth.controller");

// 1. FIXED: Added 'express.' before Router()
const authRouter = express.Router(); 

/**
 * @route POST /api/auth/register
 * @description Register new user 
 * @access Public
 */
authRouter.post("/register", authController.registerUserController);

// 2. FIXED: Exporting the correct variable 'authRouter' (not appRouter)
module.exports = authRouter;