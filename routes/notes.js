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

//Remoção da tarefa
router.post("/delete/", function (req, res) {
  const data = req.body;
  const id = ObjectId.createFromHexString(data.id);

  db.getDb().db().collection("notes").deleteOne({ _id: id });

  res.redirect(301, "/");
});

//View de detalhes da nota
router.get("/detail/:id", async function (req, res) {
  const id = ObjectId.createFromHexString(req.params.id);

  const note = await db.getDb().db().collection("notes").findOne({ _id: id });

  res.render("notes/detail", { note });
});

//View de edição de notas
router.get("/edit/:id", async function (req, res) {
  const id = ObjectId.createFromHexString(req.params.id);

  const note = await db.getDb().db().collection("notes").findOne({ _id: id });

  res.render("notes/edit", { note });
});

//Edição de notas
router.post("/update", function (req, res) {
  const data = req.body;
  const id = ObjectId.createFromHexString(data.id);
  const title = data.title;
  const description = data.description;

  db.getDb()
    .db()
    .collection("notes")
    .updateOne({ _id: id }, { $set: { title, description } });

  res.redirect("/");
});

module.exports = router;
