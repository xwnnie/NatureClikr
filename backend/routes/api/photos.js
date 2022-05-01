const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth } = require("../../utils/auth");
const { check, validationResult } = require("express-validator");

const router = express.Router();
//routes for uploading, deleting photos, view single photos

const { Photo, User, Fave } = require("../../db/models");

//get all photos
router.get("/", asyncHandler(async (req, res) => {
    const photos = await Photo.findAll({ order: [["createdAt", "DESC"]] });
    return res.json(photos);
}))

//get a single photo
router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const photoId = parseInt(req.params.id, 10);
    const photo = await Photo.findByPk(photoId, {
      include: [User, Fave],
    });
    return res.json(photo);
  })
);

const validatePhoto = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Name cannot be empty.")
    .isLength({ max: 200 })
    .withMessage("Name cannot be more than 200 characters long"),
  check("src")
    .exists({ checkFalsy: true })
    .withMessage("Please upload an image."),
];

//post a photo
router.post(
  "/",
  validatePhoto,
  asyncHandler(async (req, res) => {
    const photo = await Photo.build(req.body);
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await photo.save();
      res.json({
        message: "Success",
        photo,
      });
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.json({
        message: "Failure",
        errors,
      });
    }
  })
);

//edit a photo
router.put(
  "/:id(\\d+)",
  validatePhoto,
  asyncHandler(async (req, res) => {
    const photoId = parseInt(req.params.id, 10);
    let photo = await Photo.findByPk(photoId);
    // console.log(".................", req.body)
    // photo = req.body;

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await photo.update(req.body);
      res.json({
        message: "Success",
        photo,
      });
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.json({
        message: "Failure",
        errors,
      });
    }
  })
);

//remove a photo
router.delete(
  "/:id(\\d+)",
  asyncHandler(async function (req, res) {
    const photo = await Photo.findByPk(req.params.id);
    photo.destroy();
    return res.json(photo.id);
  })
);

module.exports = router;