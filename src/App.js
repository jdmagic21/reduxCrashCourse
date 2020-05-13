import React from 'react';
import './App.css';
import Posts from './Components/Posts'; 
import PostsForm from'./Components/PostForm'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">       
       <h1 className="App-title">Welcome to React</h1>
      </header>
    <PostsForm />
    <hr/>
    <Posts />

    </div>
  );
}

export default App;
