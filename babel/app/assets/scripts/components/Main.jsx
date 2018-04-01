import React from 'react';
import {connect} from "react-redux";
import {Route, Switch, Redirect, Link, withRouter} from 'react-router-dom';

import {Toolbar} from 'Toolbar';
import {AddPost} from 'AddPost';
import {PostList} from 'PostList';
import {savePost, changeSearchText, removePost} from './../actions/actions.jsx';

const Main = (props) => {
    let {savePost, changeSearchText, searchText, posts} = props;
    let filteredPosts = posts.filter((post) => {
        return post.author.indexOf(searchText) !== -1;
    })
    return (
        <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/post">Add new post</Link></li>
            </ul>

            <Switch>
                <Route exact path="/" render={props => <Toolbar changeSearchText={changeSearchText} searchText={searchText} />} />
                <Route path="/post" render={props => <AddPost savePost={savePost} />} />
                <Redirect to="/" />
            </Switch>
            <PostList posts={filteredPosts} />
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.posts,
    searchText: state.searchText
});

const mapDispatchToProps = dispatch => ({
    savePost(text) {
        dispatch(savePost(text))
    },
    changeSearchText(text) {
        dispatch(changeSearchText(text))
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
