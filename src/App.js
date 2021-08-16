import './App.css';
import Header from './MyComponent/Header';
import  Todos  from './MyComponent/Todos';
import  Footer  from './MyComponent/Footer';
import AddTodo from './MyComponent/AddTodo';
import { useState,useEffect} from 'react';
import About from './MyComponent/About';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo=[];
}
else{
  initTodo=JSON.parse(localStorage.getItem("todos"));
}
  const onDelete=(todo)=>{
    console.log("I am delete of todo",todo);

    setTodos(todos.filter((e)=>{
      return e !== todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo=(title,desc)=>{
    console.log("i am adding todo",title,desc);
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
       sno=todos[todos.length-1].sno + 1;
    }
   
    const myTodo= {
      sno:sno, 
      title:title,
      desc:desc,
  }
  setTodos([...todos,myTodo]);
  console.log(myTodo);
}
  const [todos,setTodos]=useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])  
  /*{
      sno:1,
      title:'Go to Market',
      desc:"you need to go market to get this job done"
    },

    {
      sno:2,
      title:'Go to School',
      desc:"you need to go market to get this job done"
    },

    {
      sno:3,
      title:'Go to Clg',
      desc:"you need to go market to get this job done"
    },
  ]);*/
 // let name='omkar';
  return (
  <>
  <Router>
  <Header title="My Todo List" searchBar={false}/>
  <Switch>
          <Route exact path="/" render={()=>{
            return (
              <>
            <AddTodo addTodo={addTodo}/>
  <Todos todos={todos} onDelete={onDelete}/>
            </>
            )}}>
          </Route>
          <Route exact path="/about">
          <About />
          </Route>
          </Switch>
  
  <Footer/>
  </Router>
</>
    );
}

export default App;
