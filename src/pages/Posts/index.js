import React, {useEffect, useState} from 'react'
import Post from '../../Components/Post';
import axios from 'axios';
import { Link } from "react-router-dom";
import './posts.css';

export const Posts = () => {

  /**
   * const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("http://localhost/blueracing-cms/wordpress/wp-json/wp/v2/posts");
        setPosts(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
   */


  return (
    <div>
      <div className='latest-article'>
        <div>
          <h1>Latest article</h1>
          
          <p>Description</p>
        </div>
        <div>
          <div>img</div>
        </div>
        </div>
        <div className='more-articles'>
          <div className='more-articles-wrapper'>
          {/*
          {posts.map((el) => { return <Link to={`${el.id}`}>{el.title.rendered}</Link>})}
          */}
          </div>
        </div>
    </div>
  )
}
