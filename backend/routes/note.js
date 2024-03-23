const express = require("express");
const router = express.Router();
const {
  createNote,
  updateNote,
  getAllNotes,
  deleteNote,
  getSingleNote,
} = require("../controllers/note.js");

router.route("/all").get(getAllNotes);
router.route("/create").post(createNote);
router.route("/:id").get(getSingleNote).put(updateNote).delete(deleteNote);

module.exports = router;
