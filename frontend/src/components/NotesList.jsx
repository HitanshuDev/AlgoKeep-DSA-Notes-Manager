import { useState } from 'react';
import { IoIosArrowDropdown, IoIosArrowDropupCircle } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md"; // Icons
import { cpp } from '@codemirror/lang-cpp';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

export default function NotesList({ notes, setNotes, searchTerm }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editNote, setEditNote] = useState({});
  const token = localStorage.getItem('token');

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setEditIndex(null);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this note?");
    if (!confirmed) return;

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/notes/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error('Failed to delete note');

      setNotes(notes.filter(note => note._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEdit = (index, note) => {
    setEditIndex(index);
    setEditNote(note);
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/notes/${editNote._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editNote),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to update');

      const updatedNotes = [...notes];
      updatedNotes[editIndex] = data.note;
      setNotes(updatedNotes);
      setEditIndex(null);
    } catch (err) {
      alert(err.message);
    }
  };

    const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.language.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.algorithm.toLowerCase().includes(searchTerm.toLowerCase())
    );


  return (
    <div className="mt-6 space-y-4 min-h-screen">
      {filteredNotes.map((note, index) => (
        <div key={note._id} className="border p-4 bg-secondary rounded relative">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-primary">
              {note.title} ({note.language})
            </h3>
            <div className="flex items-center gap-2">
              <button onClick={() => handleEdit(index, note)} className="text-xl text-yellow-500"><MdEdit /></button>
              <button onClick={() => handleDelete(note._id)} className="text-xl text-red-500"><MdDelete /></button>
              <button onClick={() => toggleDropdown(index)} className="text-3xl text-tertiary">
                {openIndex === index ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdown />}
              </button>
            </div>
          </div>

          {openIndex === index && (
            <div className="mt-4 space-y-2">
              {editIndex === index ? (
                <>
                  <input
                    value={editNote.title}
                    onChange={e => setEditNote({ ...editNote, title: e.target.value })}
                    className="w-full p-2 rounded bg-background text-primary border"
                  />

                  <textarea
                    value={editNote.problem}
                    onChange={e => setEditNote({ ...editNote, problem: e.target.value })}
                    className="w-full p-2 rounded bg-background text-primary border"
                    rows={3}
                    placeholder="Problem Statement"
                  />

                  <CodeMirror
                    value={editNote.code}
                    theme={vscodeDark}
                    extensions={[cpp()]}
                    onChange={(value) => setEditNote({ ...editNote, code: value })}
                  />
                  <textarea
                    value={editNote.algorithm}
                    onChange={e => setEditNote({ ...editNote, algorithm: e.target.value })}
                    className="w-full p-2 rounded bg-background text-primary border"
                    rows={3}
                  />
                  <button onClick={handleUpdate} className="px-4 py-1 bg-tertiary text-white rounded">Save</button>
                </>
              ) : (
                <>
                  <p className="text-primary"><strong>Problem:</strong> {note.problem}</p>

                  <CodeMirror
                    className="max-h-80 overflow-auto"
                    value={note.code}
                    theme={vscodeDark}
                    extensions={[cpp()]}
                    readOnly={true}
                  />

                  <p className="text-primary"><strong>Algorithm:</strong></p>

                  <pre className="mt-2 text-primary max-h-80 overflow-auto" >{note.algorithm}</pre>
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
