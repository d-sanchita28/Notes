import React from 'react';

const Note = ({ note, onDelete, onEdit }) => {
  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <div className="note-actions">
        <button onClick={() => onEdit(note._id)}>Edit</button>
        <button onClick={() => onDelete(note._id)}>Delete</button>
      </div>
      {note.tags && note.tags.length > 0 && (
      <div className="tags">
        {note.tags.map((tag) => (
          <span className="tag" key={tag}>#{tag}</span>
        ))}
      </div>
)}
    </div>
  );
};

export default Note;
