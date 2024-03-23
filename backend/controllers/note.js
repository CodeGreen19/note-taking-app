const tryCatchHandler = require("../middlewares/tryCatchHandler.js");
const ErrorHandler = require("../middlewares/error.js");
const NodeCache = require("node-cache");
const myCache = new NodeCache();
const Note = require("../models/note.js");

// all notes
exports.getAllNotes = tryCatchHandler(async (req, res, next) => {
  if (myCache.has("notes")) {
    res.status(200).json({
      success: true,
      notes: myCache.get("notes"),
    });
  } else {
    const notes = await Note.find();
    myCache.set("notes", notes);
    res.status(200).json({
      success: true,
      notes,
    });
  }
});
// get single note
exports.getSingleNote = tryCatchHandler(async (req, res, next) => {
  const note = await Note.findById(req.params.id);
  res.status(200).json({
    success: true,
    note,
  });
});
// create new notes
exports.createNote = tryCatchHandler(async (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return next(new ErrorHandler("provide a title and content"));
  }
  const newNote = await Note.create({ title, content });
  myCache.del("notes");
  res.status(200).json({
    success: true,
    newNote,
  });
});
//  update notes
exports.updateNote = tryCatchHandler(async (req, res, next) => {
  const { title, content } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, content });
  myCache.del("notes");
  res.status(200).json({
    success: true,
    message: "note Updated successfully",
  });
});
// delete notes
exports.deleteNote = tryCatchHandler(async (req, res, next) => {
  await Note.findByIdAndDelete(req.params.id);
  myCache.del("notes");
  res.status(200).json({
    success: true,
    message: "Note has been deleted",
  });
});
