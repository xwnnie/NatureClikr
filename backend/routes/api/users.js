const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { handleValidationErrors } = require("../../utils/validation");
const { User, Photo, Fave } = require("../../db/models");
const { Router } = require("express");

const router = express.Router();


const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("displayName")
    .exists({ checkFalsy: true }),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

// Sign up
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username, displayName, location } = req.body;
    const user = await User.signup({ email, username, password, displayName, location });

    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
);


//get details of a user
router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);

    const user = await User.findByPk(userId, {
      include: [Photo, {model: Fave, include: Photo}]
    });

    return res.json({
      user
    });
  })
);

module.exports = router;
