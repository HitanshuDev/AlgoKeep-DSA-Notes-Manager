import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Main from './components/Main.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <Home />
    },{
      path:"/main",
      element: <Main />
    },{
      path:"/login",
      element: <Login />
    },{
      path:"/signup",
      element: <Signup />
    }
  ]
)

function App() {

  return (
    <div>
      <RouterProvider router={router} /> 
    </div>
  )
}

export default App;
