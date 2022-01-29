const router = require("express").Router();
const user = require("../models/user");


// Register methods
router.post("/register", async (req, res) => {
    const newUser = new user({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;