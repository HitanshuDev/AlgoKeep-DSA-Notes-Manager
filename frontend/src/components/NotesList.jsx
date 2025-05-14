// export default function NotesList({ notes }) {
//     return (
//       <div className="mt-6 space-y-4">
//         {notes.map((note, index) => (
//           <div key={index} className="border p-4 bg-gray-50 rounded ">
//             <h3 className="text-lg font-semibold">{note.title} ({note.language})</h3>
//             <pre className="bg-gray-200 p-2 mt-2 text-sm overflow-auto max-h-40 ">{note.code}</pre>
//             <p className="mt-2">{note.algorithm}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
  
import { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";


export default function NotesList({ notes }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-6 space-y-4">
      {notes.map((note, index) => (
        <div key={index} className="border p-4 bg-gray-50 rounded relative">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              {note.title} ({note.language})
            </h3>
            <button
              className="text-3xl text-orange-600 hover:underline"
              onClick={() => toggleDropdown(index)}
            >
              {openIndex === index ?  <IoIosArrowDropupCircle /> : <IoIosArrowDropdown />}
            </button>
          </div>

          {openIndex === index && (
            <div className="mt-4">
              <pre className="bg-gray-200 p-2 text-sm overflow-auto max-h-60 whitespace-pre-wrap rounded">
                {note.code}
              </pre>
              <p className="mt-2">{note.algorithm}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
