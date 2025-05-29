import { useState } from 'react';
import CodeInput from './CodeInput'; // adjust the path as needed

export default function NoteForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('C++');
  const [code, setCode] = useState('');
  const [algorithm, setAlgorithm] = useState('');

  const isDisabled = !title || !code || !algorithm;


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
        className="border p-2 w-full bg-transparent text-primary"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className="border p-2 w-full bg-transparent text-primary"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option className = 'bg-background text-primary' value="C++">C++</option>
        <option className = 'bg-background text-primary' value="Java">Java</option>
        <option className = 'bg-background text-primary' value="Python">Python</option>
      </select>

      <CodeInput value={code} onChange={setCode} />

      <textarea
        className="border p-2 w-full h-24 bg-transparent text-primary"
        placeholder="Algorithm / Explanation"
        value={algorithm}
        onChange={(e) => setAlgorithm(e.target.value)}
      />

      <button
        type="submit"
        disabled={isDisabled}
        className={`bg-tertiary hover:bg-accent text-secondary px-4 py-2 rounded ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
      Save Note
      </button>

    </form>
  );
}
