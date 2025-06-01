import React from 'react';
import { useState, useEffect } from 'react';
import NoteForm from './NoteForm';
import NotesList from './NotesList';
import Search from './Search.jsx';
import Header from './Header.jsx';

function Main() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); 


  const token = localStorage.getItem('token');

  //fetch notes on component mount
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/notes`, {
          headers : {
            Authorization: `Bearer ${token}`,
          }
        });
        const data = await res.json();
        if(!res.ok) throw new Error(data.message || 'Failed to fetch notes');
        setNotes(data.notes);
      }catch(err){
        setError(err.message);
      }
    };

    fetchNotes();
  }, [token]);

  const addNote = async (note) => {
    try{
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/notes`,{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(note),
      });

      const data = await res.json();
      if(!res.ok) throw new Error(data.message || 'Failed to save note');
      setNotes([data.note, ...notes]);
    } catch (err){
      setError(err.message);
    }
  };

  return (
    <div className='bg-background min-h-screen'>
      <div className="max-w-3xl bg-background mx-auto px-4">
        <Header />
        <NoteForm onAdd={addNote} />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <NotesList notes={notes} searchTerm={searchTerm} setNotes={setNotes} />
      </div>
    </div>
  );
}

export default Main;