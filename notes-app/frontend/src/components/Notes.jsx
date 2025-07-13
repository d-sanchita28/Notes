import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Note from './Note';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const fetchNotes = async () => {
     try {
      const res = await axios.get('http://localhost:5000/api/notes');
      setNotes(res.data);
    } catch (err) {
      console.error('Fetch notes error:', err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const parsedTags = tags
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag);
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/notes/${editId}`, { title, content, tags: parsedTags });
        setEditId(null);
      } else {
        await axios.post('http://localhost:5000/api/notes', { title, content, tags: parsedTags });
      }
      setTitle('');
      setContent('');
      setTags('');
      fetchNotes();
    } catch (err) {
      console.error('Submit error:', err.message);
    }
  };

  const handleDelete = async (id) => {
   try {
     await axios.delete(`http://localhost:5000/api/notes/${id}`);
     fetchNotes();
   } catch (err) {
     console.error('Delete error:', err.message);
   }
  };

  const handleEdit = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/notes/${id}`);
      setTitle(res.data.title);
      setContent(res.data.content);
      setEditId(id);
      setTags(res.data.tags ? res.data.tags.join(', ') : '');

    } catch (err) {
      console.error('Edit error:', err.message);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className={`notes-container ${darkMode ? 'dark' : ''}`}>
        <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      <h1>My Notes</h1>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
        />

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        
        <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter comma-separated tags (e.g., work, ideas)"
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <button type="submit">{editId ? 'Update' : 'Add'} Note</button>
      </form>

      <div className="notes-list">
        {notes
        .filter((note) =>
            note.title.toLowerCase().includes(search.toLowerCase()) ||
            (note.tags || []).some(tag => tag.toLowerCase().includes(search.toLowerCase()))
        )
        .map((note) => (
            <Note
            key={note._id}
            note={note}
            onDelete={handleDelete}
            onEdit={handleEdit}
            />
))}

      </div>
    </div>
  );
};

export default Notes;
