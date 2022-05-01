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


//get info of a user
router.get(
  "/:id(\\d+)/info",
  asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);

    const user = await User.findByPk(userId);

    return res.json({
      user
    });
  })
);

//get all photos of a user
router.get(
  "/:id(\\d+)/photos",
  asyncHandler(async (req, res) => {
    const ownerId = parseInt(req.params.id, 10);

    const photos = await Photo.findAll({
      where: { ownerId }
    })

    return res.json({
      photos,
    });
  })
);


//get all faves of a user
router.get(
  "/:id(\\d+)/faves",
  asyncHandler(async (req, res) => {
    const faveUserId = parseInt(req.params.id, 10);

    const photos = await Photo.findAll({
      include: 
        {model: Fave, where: {faveUserId}},
    });

    return res.json({
      photos
    });
  })
);


//get all faves of a user
router.get(
  "/:id(\\d+)/faves",
  asyncHandler(async (req, res) => {
    const faveUserId = parseInt(req.params.id, 10);

    const photos = await Photo.findAll({
      include: 
        {model: Fave, where: {faveUserId}},
    });

    return res.json({
      photos
    });
  })
);

//check if a photo is in faves of the current session user
router.get(
  "/:userId(\\d+)/photos/:photoId(\\d+)/fave",
  asyncHandler(async (req, res) => {
    const faveUserId = parseInt(req.params.userId, 10);
    const photoId = parseInt(req.params.photoId, 10);

    const fave = await Fave.findAll({
      where: { faveUserId, photoId },
    });

    // console.log(fave);

    if (fave.length) return res.json({ message: "true" });
    return res.json({ message: "false" });
  })
);

//add a photo to faves
router.post(
  "/:userId(\\d+)/photos/:photoId(\\d+)/fave",
  asyncHandler(async (req, res) => {
    const faveUserId = parseInt(req.params.userId, 10);
    const photoId = parseInt(req.params.photoId, 10);

    await Fave.create({ faveUserId, photoId });
    res.json({ message: "success" });
  })
);

//remove a photo from faves
router.delete(
  "/:userId(\\d+)/photos/:photoId(\\d+)/fave",
  asyncHandler(async (req, res) => {
    const faveUserId = parseInt(req.params.userId, 10);
    const photoId = parseInt(req.params.photoId, 10);

    const fave = await Fave.findOne({
      where: { faveUserId, photoId },
    });
  
    if (fave) {
      await fave.destroy();
      res.json({ message: "success" });      
    } else {
      res.json({message: "failure: photo not in faves"})
    }

  })
);

module.exports = router;
