const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/notes-app")
  .then(() => console.log("Connected successfuly to the DB"))
  .catch(() => console.log("Error : Connection Failed"));

const notesSchema = mongoose.Schema({
  id: Number,
  title: String,
  content: String,
  label: String,
});

const Note = mongoose.model("Note", notesSchema);
async function createNote() {
  const notes = new Note({
    title: "Build Note App",
    content: "Do proper testing",
    label: "New Project",
  });
  const result = await notes.save();
  console.log(result);
}
createNote();
async function getNotesList() {
  const pageNumber = 2;
  const pageSize = 10;
  const notes = await Note.find()
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort("title")
    .select(" _id title content label");
  console.log({ notes });
}
getNotesList();
