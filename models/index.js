// import all models
const Post = require("./Post");
const User = require("./User");
const Comment = require("./Comment");

// create associations

// USER and POSTS
//
// a USER can have many POSTS
// a POST belongs to only one USER

User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

// USER and COMMENTS
//
// a USER can have many COMMENTS
// a COMMENT belongs to only one USER

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

// POST and COMMENT
//
// a POST can have many COMMENTS
// a COMMENT belongs to one POST

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

module.exports = { User, Post, Comment };
