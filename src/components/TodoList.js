import React, { useEffect } from 'react';
import firebase from '../utils/firebase';
import NewTodo from '../NewTodo';

export default TodoList = () => {
    
    useEffect(() => {
        const todoRef = firebase.database().ref("Todo");
        todoRef.on('value', (snapshot) => {
            console.log(snapshot.val());
        } )
    }, [])
    
    return(
        <div className="App">
            <NewTodo /> 
        </div>
    )
}