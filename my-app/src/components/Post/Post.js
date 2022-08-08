import React, { useEffect, useState } from 'react';

const Post = () => {
    const [userPost, setUserPost] = useState([]);

    const getUserPost = async () => {
        const api = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await api.json();
        setUserPost(data);
        console.log(data.title);
        console.log(userPost.title + 'heello');
    }
    useEffect(() =>{
        getUserPost();
    },[]);

    return (
        <div>
            <h1 style={{color:'red'}}>{userPost.title}</h1>
            {

            userPost.map((post) =>(
                <div>
                    <h2>{post.title}</h2>
                </div>
            )
                
            )
            }
        </div>
    );
};

export default Post;