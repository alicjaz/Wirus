import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Switch} from "react-router-dom";

function Posts() {

    const [post,setPost] = useState("");
    useEffect(()=>{
        fetch(" https://jsonplaceholder.typicode.com/posts")
            .then(res=>res.json())
            .then(json=>setPost(json));

    },[])
    return (

            <div className="App">
                <h1>All posts titles</h1>
                <div className="posts">

                        <ul>
                            {Object.keys(post).map((item,i)=>(
                                <li key={i}>
                                    <Link to={"/post/"+post[item].id}>
                                        <span> {post[item].title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                </div>
            </div>

    );
}


export default App;