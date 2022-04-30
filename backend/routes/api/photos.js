const express = require("express");
const asyncHandler = require("express-async-handler");

const router = express.Router();
//routes for uploading, deleting photos, view single photos

const { Photo, User, Fave } = require("../../db/models");

router.get("/", asyncHandler(async (req, res) => {
    const photos = await Photo.findAll();

    return res.json(photos);
}))

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const photoId = parseInt(req.params.id, 10);
    const photo = await Photo.findByPk(photoId, {
        include: [User, {model: Fave, include: User}]
    });

    return res.json(photo);
  })
);

module.exports = router;