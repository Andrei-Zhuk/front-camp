import React from 'react';


export const Post = (props) => {
    let {id, title, author, content, handleDeletePost} = props;
    return (
        <div>
            <h2>Title:   {title}</h2>
            <h3>Author: {author}</h3>
            <p>Content: {content}</p>
            <button onClick={() => {handleDeletePost(id)}}>Delete</button>
        </div>
    );
}
