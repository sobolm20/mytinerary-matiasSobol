
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Cities from './pages/Cities.jsx'
import Main from './layouts/MainL';
import CityDetails from './pages/CityDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    Children: [
      { path: '/', element: <Home /> },
      { path: '/cities', element: <Cities /> },
      { path: '/cities/:id', element: <CityDetails /> },
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;           
}

export default App