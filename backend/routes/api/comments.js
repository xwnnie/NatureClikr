const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth } = require("../../utils/auth");
const { check, validationResult } = require("express-validator");

const router = express.Router();

const { Photo, User, Fave, Comment } = require("../../db/models");

const validateComment = [
  check("content")
    .exists({ checkFalsy: true })
    .withMessage("Content cannot be empty."),
];

router.get("/", asyncHandler(async (req, res) => {
    let comments = await Comment.findAll({include: User});
    res.json(comments);
}))

router.put(
  "/:id(\\d+)",
  validateComment,
  asyncHandler(async (req, res) => {
    const commentId = parseInt(req.params.id, 10);
    let comment = await Comment.findByPk(commentId);

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await comment.update(req.body);
      const newComment = await Comment.findByPk(commentId);
      res.json(newComment);

    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.json({
        message: "Failure",
        errors,
      });
    }
  })
);

router.delete(
  "/:id(\\d+)",
  asyncHandler(async function (req, res) {
    const comment = await Comment.findByPk(req.params.id);
    comment.destroy();
    return res.json(comment.id);
  })
);

module.exports = router;
