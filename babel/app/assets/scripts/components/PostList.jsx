import React from 'react';
import {Post} from 'Post';

export const PostList = (props) => {
    let {handleDeletePost, posts} = props;

    return posts.map((post) => {
        return <Post key={post.id} {...post} handleDeletePost={handleDeletePost}/>
    })
}