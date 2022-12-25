import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom'


const Post = () => {
    
    const {id} = useParams();
    
    const pageIdString = id+"";
    const pageIdNumber = parseInt(pageIdString);

    //id==4

    const fetchedPost = [
        {
            id: 4,
            title: "Girls on track",
            description: "Adrenaline, emotions, accidents and many more in our latest race article",
            article_text: 'Eu ad ut laboris sit officia non exercitation reprehenderit quis.',
            header_image: require('../Img/girls-on-track--1000x600.jpg'),
        },
        {
            id: 3,
            title: "Title 3",
            description: "Lorem Ipsum",
            article_text: "Amet Lorem deserunt quis anim quis mollit est reprehenderit qui aliquip.",
            header_image: require('../Img/girls-on-track--1000x600.jpg'),
        },
        {
            id: 2,
            title: "Title 2",
            description: "Lorem Ipsum",
            article_text: "Voluptate reprehenderit veniam cillum Lorem enim ea ea.",
            header_image: require('../Img/girls-on-track--1000x600.jpg'),
        },
        {
            id: 1,
            title: "Title 1",
            description: "Lorem Ipsum",
            article_text: "Aute nulla nostrud reprehenderit commodo incididunt anim aute.",
            header_image: require('../Img/girls-on-track--1000x600.jpg'),
        },
    ];

    

    const [data, setData] = useState(fetchedPost);

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
            {data.map((item) => {
            if(pageIdNumber === item.id) {
                return (
                    <div className='product-container' key={item.id}>
                        <div>
                        <img className='prod-image' src={item.header_image} alt='' />
                        </div>
                        <div>
                        <h1 className='brand'>{item.title}</h1>
                        <p>{item.article_text}</p>
                        </div>
                    </div>
                    );
            }
        })}
        </div>
    )
}

export default Post;