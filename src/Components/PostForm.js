import React, { Component } from 'react'

export default class PostForm extends Component {
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

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(post)
        }).then(res => res.json())
        .then(data => console.log(data)); 
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
