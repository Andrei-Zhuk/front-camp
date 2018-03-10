import React from 'react';
import uniqid from 'uniqid';

export class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            author: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.savePost = this.savePost.bind(this);
        this.cancelPost = this.cancelPost.bind(this);
    }

    handleInputChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    savePost(e) {
        e.preventDefault();
        const {handleSavePost} = this.props;
        const {title, content, author} = this.state;
        let id = uniqid();
        handleSavePost({title, content, author, id});
        this.setState({
            title: "",
            content: "",
            author: ""
        });
    }

    cancelPost(e) {
        e.preventDefault();
        const {handleCancelPost} = this.props;
        handleCancelPost();
        this.setState({
            title: "",
            content: "",
            author: ""
        });
    }

    render() {
        return (
            <div>
                <div>
                    <form>
                        <input placeholder="Type a title" name="title" value={this.state.title} onChange={this.handleInputChange}/>
                        <input placeholder="Type a content" name="content" value={this.state.content} onChange={this.handleInputChange}/>
                        <input placeholder="Type an author" name="author" value={this.state.author} onChange={this.handleInputChange}/>
                        <button onClick={this.savePost} >Save</button>
                        <button onClick={this.cancelPost} >Cansel</button>
                    </form>
                </div>
            </div>
        )
    }
}
