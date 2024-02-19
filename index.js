const express = require("express");
const notes = require("./routes/notes");
const { connect, default: mongoose } = require("mongoose");
connect("mongodb://localhost:27017/notes-app").then(() => {
  console.log("connected to db");
});
const app = express();
app.use(express.json());
const port = process.env.PORT || 9000;

app.use("/api/notes", notes);
app.listen(port, () => console.log(`Listening on Port ${port}`));

//port
//connection to db
//apis and all