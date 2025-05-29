import { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { cpp } from '@codemirror/lang-cpp';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';


export default function NotesList({ notes }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-6 space-y-4">
      {notes.map((note, index) => (
        <div key={index} className="border p-4 bg-secondary rounded relative">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-primary">
              {note.title} ({note.language})
            </h3>
            <button
              className="text-3xl text-tertiary hover:underline"
              onClick={() => toggleDropdown(index)}
            >
              {openIndex === index ?  <IoIosArrowDropupCircle /> : <IoIosArrowDropdown />}
            </button>
          </div>

          {openIndex === index && (
            <div className="mt-4">
              
              <CodeMirror
                className='max-h-80 overflow-auto'
                value={note.code}
                theme={vscodeDark}
                extensions={[cpp()]} // You can dynamically load based on note.language
                readOnly={true}
                basicSetup={{
                  lineNumbers: true,
                  highlightActiveLine: false,
                  foldGutter: false,
                }}
              />

              <p className="mt-2 text-primary">{note.algorithm}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
