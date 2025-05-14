import { useState } from 'react';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import { sampleNotes } from './data/sampleNotes';

function App() {
  const [notes, setNotes] = useState(sampleNotes);

  const addNote = (note) => {
    setNotes([note, ...notes]);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">AlgoNotes</h1>
      <NoteForm onAdd={addNote} />
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
