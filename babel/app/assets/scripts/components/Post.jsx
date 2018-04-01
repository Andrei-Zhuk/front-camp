import React from 'react';
import {connect} from "react-redux";

import {removePost} from './../actions/actions.jsx';

const Post = (props) => {
    let {id, title, author, content, removePost} = props;
    return (
        <div>
            <h2>Title:   {title}</h2>
            <h3>Author: {author}</h3>
            <p>Content: {content}</p>
            <button onClick={() => {removePost(id)}}>Delete</button>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removePost(id) {
        console.log('dispatch');
        dispatch(removePost(id))
    }
});

export default connect(null, mapDispatchToProps)(Post);
