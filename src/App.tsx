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

  const posts = [
    {
        id: 4,
        title: "Girls on track",
        description: "Adrenaline, emotions, accidents and many more in our latest race article",
        article_text: 'Eu ad ut laboris sit officia non exercitation reprehenderit quis.',
        header_image: require('./Img/girls-on-track--1000x600.jpg'),
    },
    {
        id: 3,
        title: "Title 3",
        description: "Lorem Ipsum",
        article_text: "Amet Lorem deserunt quis anim quis mollit est reprehenderit qui aliquip.",
        header_image: require('./Img/girls-on-track--1000x600.jpg'),
    },
    {
        id: 2,
        title: "Title 2",
        description: "Lorem Ipsum",
        article_text: "Voluptate reprehenderit veniam cillum Lorem enim ea ea.",
        header_image: require('./Img/girls-on-track--1000x600.jpg'),
    },
    {
        id: 1,
        title: "Title 1",
        description: "Lorem Ipsum",
        article_text: "Aute nulla nostrud reprehenderit commodo incididunt anim aute.",
        header_image: require('./Img/girls-on-track--1000x600.jpg'),
    },
];

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
            <Route path='/' element={<Home {...posts}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/praga' element={<Praga/>}/>
            <Route path='/posts' element={<Posts/>}/>
            <Route path="posts/:id" element={<Post />} />
            <Route path='*' element={<ErrorPage/>}/>
          </Routes>
        </Layout>      
    </div>
  );
}

export default App;
