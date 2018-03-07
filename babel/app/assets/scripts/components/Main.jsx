import React from 'react';
import {Toolbar} from 'Toolbar';
import {AddPost} from 'AddPost';
import {PostList} from 'PostList';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddingPost: false,
            posts: [],
            searchText: ""
        };
        this.handleSavePost = this.handleSavePost.bind(this);
        this.handleCancelPost = this.handleCancelPost.bind(this);
        this.handleAddPost = this.handleAddPost.bind(this);
        this.handleDeletePost = this.handleDeletePost.bind(this);
        this.handleChangeSearchText = this.handleChangeSearchText.bind(this);
    }

    handleAddPost() {
        this.setState({
            isAddingPost: true
        })
    }

    handleSavePost(post) {
        this.setState({
            posts: [post, ...this.state.posts],
            isAddingPost: false
        })
    }

    handleCancelPost() {
        this.setState({
            isAddingPost: false
        })
    }

    handleDeletePost(id) {
        this.setState({
            posts: this.state.posts.filter((post) => post.id !== id)
        })
    }

    handleChangeSearchText(e) {
        this.setState({
            searchText: e.target.value
        })
    }

    render() {
        let that = this
        let filteredPosts = this.state.posts.filter((post) => {
            return post.author.indexOf(that.state.searchText) !== -1
        })
        return (
            <div>
                <Toolbar handleAddPost={this.handleAddPost} searchText={this.state.searchText} handleChangeSearchText={this.handleChangeSearchText}/>
                {this.state.isAddingPost ? <AddPost handleSavePost={this.handleSavePost} handleCancelPost={this.handleCancelPost} /> : null}
                <PostList posts={filteredPosts} handleDeletePost={this.handleDeletePost}/>
            </div>
        )
    }
}
