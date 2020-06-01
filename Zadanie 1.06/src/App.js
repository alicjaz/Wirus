import React,{useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Link} from 'react-router-dom'
import posts from './Posts.js';

function App() {
  
  const [post,setPost] = useState("");
  useEffect(()=>{
    fetch(" https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(json=>setPost(json));
    
  },[])
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component{Posts} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
