import React from 'react';
import {Toolbar} from 'Toolbar';
import {AddPost} from 'AddPost';
import {Posts} from 'Posts';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddingPost: false,
            posts: []
        };
        this.handleSavePost = this.handleSavePost.bind(this);
        this.handleAddPost = this.handleAddPost.bind(this);
        this.handleDeletePost = this.handleDeletePost.bind(this);
    }

    handleAddPost() {
        this.setState({
            isAddingPost: !this.state.isAddingPost
        })
    }

    handleSavePost(post) {
        this.setState({
            posts: [post, ...this.state.posts]
        })
    }

    handleCancelPost() {
        console.log('cancel');
    }

    handleDeletePost(e) {
        console.log('delete');
    }

    render() {
        return (
            <div>
                <Toolbar handleAddPost={this.handleAddPost}/>
                {this.state.isAddingPost ? <AddPost handleSavePost={this.handleSavePost} handleCancelPost={this.handleCancelPost} /> : null}
                <Posts posts={this.state.posts} handleDeletePost={this.handleDeletePost}/>
            </div>
        )
    }
}
