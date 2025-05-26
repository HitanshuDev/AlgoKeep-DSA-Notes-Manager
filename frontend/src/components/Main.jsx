import React from 'react';
import { useState } from 'react';
import NoteForm from './NoteForm';
import NotesList from './NotesList';
import { sampleNotes } from '../data/sampleNotes';
import Search from './Search.jsx';
import Header from './Header.jsx';

function Main() {
  const [notes, setNotes] = useState(sampleNotes);

  const addNote = (note) => {
    setNotes([note, ...notes]);
  };

  return (
    <div className='bg-background h-screen'>
      <div className="max-w-3xl bg-background mx-auto px-4">
        <Header />
        <NoteForm onAdd={addNote} />
        <Search />
        <NotesList notes={notes} />
      </div>
    </div>
  );
}

export default Main;