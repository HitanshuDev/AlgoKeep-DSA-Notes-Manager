import { useState } from 'react';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import { sampleNotes } from './data/sampleNotes';
import Search from './components/Search.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Main from './components/Main.jsx';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <Home />
    },{
      path:"/main",
      element: <Main />
    }
  ]
)

function App() {

  return (
    <div>
      <RouterProvider router={router} /> 
    </div>
  //   <div className='bg-background'>
  //     <div className="max-w-3xl bg-background mx-auto py-4 px-4">
  //       <h1 className="text-3xl font-bold text-center text-tertiary mb-6">AlgoNotes</h1>
  //       <NoteForm onAdd={addNote} />
  //       <Search />
  //       <NotesList notes={notes} />
  //     </div>
  //   </div>
  // );
  )
}

export default App;
