import React from 'react';
import Layout from './Layout';
import './Styles/App.css';
import { Home, About, Praga} from './pages'
//import { useRoutes } from 'react-router-dom';
import ErrorPage from './Error';
import { Route, Routes } from 'react-router-dom';

function App() {

  /*
    const route = useRoutes([
      {
        path: '/',
        element: <Layout/>,
        children: [
          {
            index: true,
            element: <Home/>,
          },
          {
            path: "about",
            element: <About/>,
          },
          {
            path: "praga",
            element: <Praga/>,
          },
          {
            path: "*",
            element: <ErrorPage/>,
          }
        ]
      }
    ]) 
  */

  return (
    <div className="App">
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/praga' element={<Praga/>}/>
            <Route path='*' element={<ErrorPage/>}/>
          </Routes>
        </Layout>      
    </div>
  );
}

export default App;
