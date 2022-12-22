import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const Post = () => {

    /**
     * interface Post {
        id?: number,
        title?: {
            rendered?: string,
        }
        content?: {
            rendered?: string,
        }
    }

    const { id } = useParams();
    const [post, setPost] = useState<Post>({});

    useEffect(() => {
        const fetch = async () => {
        try {
            const { data } = await axios.get(`http://localhost/blueracing-cms/wordpress/wp-json/wp/v2/posts/${id}`);
            setPost(data);
        } catch (err) {
            if(err)
                console.error(err);
        }
        };
        fetch();
    },[id]);
     */
    
    return (
        <div>
            <article>
                <h1></h1>
            </article>
        </div>
    )
}

export default Post;