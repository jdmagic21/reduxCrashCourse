import React from 'react';
import './App.css';
import {Provider} from 'react-redux'; 


import Posts from './Components/Posts'; 
import PostsForm from'./Components/PostForm'; 

import store from './store'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">       
       <h1 className="App-title">Welcome to React</h1>
      </header>
    <PostsForm />
    <hr/>
    <Posts />
    </div>
    </Provider>
  );
}

export default App;
