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
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">Add New Note</h2>

      <input
        className="border p-2 w-full"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className="border p-2 w-full"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="C++">C++</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
      </select>

      <textarea
        className="border p-2 w-full h-32"
        placeholder="Paste your code here"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <textarea
        className="border p-2 w-full h-24"
        placeholder="Algorithm / Explanation"
        value={algorithm}
        onChange={(e) => setAlgorithm(e.target.value)}
      />

      <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
        Save Note
      </button>
    </form>
  );
}
