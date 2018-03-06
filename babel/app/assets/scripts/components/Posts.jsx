import React from 'react';
import uniqid from 'uniqid';

export const Posts = (props) => {
    let {handleDeletePost} = props;
    return props.posts.map((post) => {
        return (
            <div key={uniqid()}>
                <h2>{post.title}</h2>
                <h3>{post.author}</h3>
                <p>{post.content}</p>
                <button onClick={handleDeletePost} >Delete</button>
            </div>
        )
    })
}
