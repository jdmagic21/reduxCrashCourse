import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import PropTypes from 'prop-types';
import {createPost} from '../Actions/postActions'; 

class PostForm extends Component {
    constructor(props){
        super(props); 
        this.onChange = this.onChange.bind(this); 
        this.onSubmit = this.onSubmit.bind(this); 

        this.state = {
            title: '', 
            body: ''
        };
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault(); 

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <h1>Add Posts</h1>

                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label><br/>
                        <input name="title" type="text" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <br/>
                    <div>
                        <label>Body:</label><br/>
                        <textarea name="body" type="text" onChange={this.onChange} value={this.state.body}></textarea>

                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>


            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(PostForm); 
