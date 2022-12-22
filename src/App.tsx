import React from 'react';
import Layout from './Layout';
import './Styles/App.css';
import { Home, About, Praga} from './pages';
import Post from './Components/Post';
import { Posts } from './pages/Posts';
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
            <Route path='/posts' element={<Posts/>}/>
            <Route path='/posts/:id' element={<Post />}/>
            <Route path='*' element={<ErrorPage/>}/>
          </Routes>
        </Layout>      
    </div>
  );
}

export default App;
