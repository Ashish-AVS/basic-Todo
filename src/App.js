import './App.css';
import "antd/dist/antd.css";
import Todos from './Todos';
import NewTodo from './NewTodo';
import firebase from './utils/firebase';
import React, {useEffect} from 'react';


function App() {


  // useEffect(() => {
  //   const todoRef = firebase.database().ref("Todo");
  //   todoRef.on('value', (snapshot) => {
  //       console.log(snapshot.val());
  //   } )
  // }, [])


  return (
    <div className="App">
      <nav className="Navbar">
        Todo List
      </nav>
      <NewTodo />
    </div>
  );
}

export default App;
