const express = require("express");
const app = express();
const mongoose = require("mongoose");

const url = process.env.DATABASE_URL;
console.log(process.env.DATABASE_URL);

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

module.exports = db;
