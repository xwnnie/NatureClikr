const express = require("express");
const asyncHandler = require("express-async-handler");

const router = express.Router();
//routes for uploading, deleting photos, view single photos

const { Photo } = require("../../db/models");

router.get("/", asyncHandler(async (req, res) => {
    const photos = await Photo.findAll();

    return res.json(photos);
}))

module.exports = router;