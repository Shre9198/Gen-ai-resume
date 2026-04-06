const userModel = require("../models/user.model");

/**
 * @route POST /api/auth/register
 * @description Register a new user, expects username, email and password
 * @access Public 
 */
async function registerUserController(req, res) {
    try {
        const { username, email, password } = req.body;

        // 1. Validation
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const isUserAlreadyExists = await userModel.findOne({ 
            $or: [{ username }, { email }] 
        });

        if (isUserAlreadyExists) {
            /*isUserAlreadyExists.username == username*/
            return res.status(400).json({
                message: "Account already exists with this email address or username"
            });
        }

        // Logic for creating user would go here next

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Export the function inside an object
module.exports = {
    registerUserController
};