import { useState } from 'react';
import CodeInput from './CodeInput'; // adjust the path as needed

export default function NoteForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [problem, setProblem] = useState('');
  const [language, setLanguage] = useState('C++');
  const [code, setCode] = useState('');
  const [algorithm, setAlgorithm] = useState('');
  const [loading, setLoading] = useState(false);

  const isDisabled = !title || !code || !algorithm;


  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { title, problem, language, code, algorithm };
    onAdd(newNote);
    setTitle('');
    setProblem('');
    setLanguage('C++');
    setCode('');
    setAlgorithm('');
  };

  const token = localStorage.getItem('token');

  const handleGenerateAlgorithm = async () => {
    if (!code) {
      alert('Please write some code first.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/generate-algorithm`, { // Replace with your GPT/Gemini API URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Add this if using an API key
        },
        body: JSON.stringify({
          code: `Explain the algorithm of the following ${language} code and just give the body of the algorithm:\n\n${code}`,
          // max_tokens: 500 // Adjust token limit based on API
        })
      });

      const data = await res.json();
      // Adjust this based on API's response structure
      const generatedAlgorithm = data.algorithm || 'No response generated';


      setAlgorithm(generatedAlgorithm);
    } catch (err) {
      console.error('Error generating algorithm:', err);
      alert('Failed to generate algorithm');
    } finally {
      setLoading(false);
    }
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
      
      <textarea
        className="border p-2 w-full h-24 bg-transparent text-primary"
        placeholder="Problem Statement"
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
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

      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={handleGenerateAlgorithm}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? 'Generating...' : 'Generate Algorithm'}
        </button>

        {/* <button
          type="submit"
          disabled={isDisabled}
          className={`bg-tertiary hover:bg-accent text-secondary px-4 py-2 rounded ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Save Note
        </button> */}
      </div>

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
