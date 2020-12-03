import React, { useState, useEffect } from "react";
import Notelist from "./Notelist";
import "./App.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";

function App() {
  let notesObj;
  const [item, setItem] = useState("");
  const [Notes, setNotes] = useState([]);
  const add_Item = (event) => {
    setItem(event.target.value);
  };
  useEffect(() => {
    showNotes();
    // eslint-disable-next-line
  }, []);

  const add_Note = () => {
    let notes = localStorage.getItem("notes");
    console.log(notes);
    if (notes == null) {
      // eslint-disable-next-line
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    notesObj.push(item);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    let notes_show = JSON.parse(localStorage.getItem("notes"));
    setNotes(() => notes_show);
  };
  function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      // eslint-disable-next-line
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    localStorage.setItem("notes", JSON.stringify(notesObj));
    let notes_show = JSON.parse(localStorage.getItem("notes"));
    setNotes(() => notes_show);
  }
  const deleteNote = (id) => {
    console.log(id);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    notesObj.splice(id, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
  };
  return (
    <>
      <div className="wrapper">
        <div className="center_div">
          <h3>ADD NOTES</h3>
          <div className="note_take">
            <TextField
              className="input_style"
              label="Add and notes"
              defaultValue={item}
              onChange={add_Item}
            />
            <Button className="newBtn" color="primary" onClick={add_Note}>
              <AddIcon className="icon" />
            </Button>
          </div>
          <ol type="disc">
            {Notes.map((value, index) => (
              <Notelist
                key={index}
                text={value}
                deleteId={index}
                fun={deleteNote}
              />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
