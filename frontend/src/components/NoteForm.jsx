import { useState } from 'react';

export default function NoteForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('C++');
  const [code, setCode] = useState('');
  const [algorithm, setAlgorithm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { title, language, code, algorithm };
    onAdd(newNote);
    setTitle('');
    setLanguage('C++');
    setCode('');
    setAlgorithm('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-secondary p-4 rounded shadow">
      <h2 className="text-xl font-bold text-tertiary">Add New Note</h2>

      <input
        className="border p-2 w-full bg-transparent"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className="border p-2 w-full bg-transparent text-primary"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="C++">C++</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
      </select>

      <textarea
        className="border p-2 w-full h-32 bg-transparent text-primary"
        placeholder="Paste your code here"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <textarea
        className="border p-2 w-full h-24 bg-transparent"
        placeholder="Algorithm / Explanation"
        value={algorithm}
        onChange={(e) => setAlgorithm(e.target.value)}
      />

      <button type="submit" className="bg-tertiary hover:bg-accent text-secondary px-4 py-2 rounded">
        Save Note
      </button>
    </form>
  );
}
