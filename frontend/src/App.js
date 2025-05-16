import { useState } from 'react';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import { sampleNotes } from './data/sampleNotes';
import Search from './components/Search.jsx';

function App() {
  const [notes, setNotes] = useState(sampleNotes);

  const addNote = (note) => {
    setNotes([note, ...notes]);
  };

  return (
    <div className='bg-background'>
      <div className="max-w-3xl bg-background mx-auto py-4 px-4">
        <h1 className="text-3xl font-bold text-center text-tertiary mb-6">AlgoNotes</h1>
        <NoteForm onAdd={addNote} />
        <Search />
        <NotesList notes={notes} />
      </div>
    </div>
  );
}

export default App;
