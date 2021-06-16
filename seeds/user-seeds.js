const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "electro",
    password: "spark",
  },
  {
    username: "rhino",
    password: "horn",
  },
  {
    username: "vulture",
    password: "wing",
  },
  {
    username: "tinkerer",
    password: "wrench",
  },
  {
    username: "sandman",
    password: "sand",
  },
  {
    username: "lizard",
    password: "scaly",
  },
  {
    username: "mysterio",
    password: "globe",
  },
  {
    username: "goblin",
    password: "green",
  },
  {
    username: "kraven",
    password: "hunter",
  },
  {
    username: "scorpion",
    password: "string",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
