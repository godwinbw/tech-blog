const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

// get all posts
router.get("/", (req, res) => {
  Post.findAll({})
    .then((dbData) => res.json(dbData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
