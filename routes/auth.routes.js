const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const config = require("config")
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const router = Router();

// /api/auth/register
router.post(
  "/register",
  [
    check("email", "- invalid email address").isEmail(),
    check("password", "- minimum password length must be 6 symbols").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) return res.status(400).json({
            errors: errors.array(),
            message: 'Invalid registration data: '
        })

      const { email, password } = req.body;
      const candidate = await User.findOne({ email });
      if (candidate)
        return res
          .status(400)
          .json({ message: "This email address already exist" });
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword });
      await user.save();

      return res.status(201).json({ message: "you have successfully registered" });
    } catch (error) {
      res.status(500).json({ message: `Server Error: ${error.message}` });
    }
  }
);

// /api/auth/login
router.post(
  "/login",
  [
    check("email", "- invalid email address").normalizeEmail().isEmail(),
    check("password", "- missing the password").exists(),
  ],
  async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) return res.status(400).json({
            errors: errors.array(),
            message: 'Invalid login data: '
        })

      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user)
        return res
          .status(400)
          .json({ message: "This email address doesn't exist" });
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({
        message: "- invalid password"
      })
      const token = jwt.sign(
        { userId: user.id },
        config.get("jwtSecret"),
        { expiresIn: "1h" }
      );
      return res.json({ token, userId: user.id });
    } catch (error) {
      res.status(500).json({ message: `Server Error: ${error.message}` });
    }
});

module.exports = router;
