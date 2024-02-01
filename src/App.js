import Addtodo from './Addtodo';
import './App.css';
import Todolist from './Todolist';
import React,{useState} from 'react';

function App() {
    const[Tododata,settododata]=useState([
      {id:1,Text:"todo list 1, nfi9 6"},
      {id:2,Text:"todo list 2 nor9ed  00"},
      {id:3,Text:"todo list 3 el nemchi lel play"},
      {id:4,Text:"todo lsist 4 nheb nrawh"},
    ]
    )
  
  return ( 
   <div class="container">
       <Addtodo/>
       <Todolist   Tododata={Tododata}  />
       
      
        </div>
    
  );
}

export default App;
