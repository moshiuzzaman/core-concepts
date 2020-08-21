import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const friend=['Naim', 'kader', 'akash','miaraj']
  const friendDetails=[
    {name: "Naim", father:"Jani Na"},
    {name: "kader", father:"Abul Kalam"},
    {name: "akash", father:"Eman Ali"},
    {name: "miaraj", father:"Nojurul"},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Datafatch></Datafatch>
        <Counter></Counter>
    <ul>
      {
        friend.map(name=><li>{name}</li>)
      }
    </ul>
    {
      friendDetails.map(single=><Friend all={single}></Friend>)
    }
     </header>
    </div>
  );
}
function Counter(){
  const [count, setCount]=useState(140)
  return(
    <div>
      <h1>counter : {count}</h1>
  <button onClick={()=>setCount(count+1)}>Incress</button>
  <button onMouseMove={()=>setCount(count-1)}>deCriss</button>
    </div>
  )
}
function Friend(props){
let style={
  border:"2px solid red"
}
let {name , father}=props.all
  return(
    <div style={style}>
      <h1>{name}</h1>
      <h3>{father}</h3>
      <h3>mother Name</h3>
    </div>
  )
}
function Datafatch(){
  const [post,setPost]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>setPost(data))
  },[])
  return(
    <div>
      <h1>count data :</h1>
      <ul>
        {
          post.map(post=><div><li>Post No : {post.id}</li><p>Post Title:<br></br>{post.title}</p></div>)}
      </ul>
    </div>
  )
}

export default App;
