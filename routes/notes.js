const Router = require("express").Router;
const db = require("../db/connection");
const { ObjectId } = require("mongodb");

const router = Router();

// Form criação de nota
router.get("/", function (req, res) {
  res.render("notes/create");
});

// Envio da nota para inserção no banco
router.post("/", function (req, res) {
  const data = req.body;
  const title = data.title;
  const description = data.description;

  db.getDb().db().collection("notes").insertOne({ title, description });

  res.redirect(301, "/");
});

module.exports = router;
