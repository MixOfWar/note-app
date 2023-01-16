import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { useNote } from "./NoteLayout";
import { EditNoteProps } from "../utils/types";
import NoteForm from "../components/NoteForm";

const EditNote = ({ onSubmit, onAddTag, availableTags }: EditNoteProps) => {
  const note = useNote();

  return (
    <>
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={data => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  )
}

export default EditNote;