const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth } = require("../../utils/auth");
const { check, validationResult } = require("express-validator");
const { singlePublicFileUpload, singleMulterUpload } = require("../../awsS3");

const router = express.Router();
//routes for uploading, deleting photos, view single photos

const { Photo, User, Fave, Comment } = require("../../db/models");

//get all photos
router.get("/", asyncHandler(async (req, res) => {
    const photos = await Photo.findAll({ order: [["createdAt", "DESC"]], include: [User] });
    return res.json(photos);
}))

const validatePhoto = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Name cannot be empty.")
    .isLength({ max: 200 })
    .withMessage("Name cannot be more than 200 characters long"),
  // check("photo")
  //   .exists({ checkFalsy: true })
  //   .withMessage("Please upload an image."),
];

//post a photo
router.post(
  "/",
  singleMulterUpload("image"),
  validatePhoto,
  asyncHandler(async (req, res) => {
    const {name, ownerId, description, location} = req.body;
    const imageUrl = await singlePublicFileUpload(req.file);
    console.log("imageUrl", imageUrl);
    const validatorErrors = validationResult(req);

    const photo = await Photo.build({
      name,
      ownerId,
      description,
      location,
      url: imageUrl,
    });

    if (validatorErrors.isEmpty()) {
      await photo.save();
      res.json(photo);
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
      const newPhoto = await Photo.findByPk(photoId, {
        include: User,
      });
      res.json(newPhoto);
      // res.json(photo);
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


//get comments of a photo
router.get(
  "/:id(\\d+)/comments",
  asyncHandler(async (req, res) => {
    const photoId = parseInt(req.params.id, 10);
    const photo = await Photo.findByPk(photoId, {
      include: [{model: Comment, include: User}],
    });
    return res.json(photo);
  })
);

//post a comment to a photo
const validateComment = [
  check("content")
    .exists({ checkFalsy: true })
    .withMessage("Content cannot be empty.")
    // .isLength({ max: 200 })
    // .withMessage("Name cannot be more than 200 characters long"),
];

router.post(
  "/:id(\\d+)/comments",
  validateComment,
  asyncHandler(async (req, res) => {
    const { userId, photoId, content } = req.body;

    const validatorErrors = validationResult(req);

    let comment = await Comment.build({ userId, photoId, content });

    if (validatorErrors.isEmpty()) {
      await comment.save();
      comment = await Comment.findByPk(comment.id, {include: User});
      // console.log("********", comment);
      res.json(comment);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.json({
        message: "Failure",
        errors,
      });
    }
  })
);



module.exports = router;