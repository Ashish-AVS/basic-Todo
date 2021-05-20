import React, {useState, useEffect} from 'react';
import { Input, Typography, Button, Checkbox } from 'antd';
import './App.css'
import firebase from './utils/firebase'

const Todos = ({authData}) => {
    const [queryBody, setQueryBody] = useState("");
    const [data, setData] = useState([]);


    {console.log(authData.displayName, authData.email)}

    // Firebase Stuff

    useEffect(() => {
        const todoRef = firebase.database().ref("Todo");
        todoRef.on('value', (snapshot) => {
            // console.log(snapshot.val());
            const todos = snapshot.val();
            const todoList = [];

            for(let ids in todos) {
                todoList.push({id: ids, ...todos[ids]}); // Loop through and obj and push id
            }   
            //READ
            console.log(todoList);
            // console.log(data);
            setData(todoList);
        } )
      }, [])
    
    const addTodoHandler = () => {
        if(!queryBody){
            alert("Enter a Todo")
            return
        }
        const todo = { Body:queryBody, striked:false };

        // WRITE
        const todoRef = firebase.database().ref("Todo"); //Call it anything you want
        todoRef.push(todo);
        
        // setData(prevState => [...prevState, todo]);
        setQueryBody("")
    }
    const removeTodos = (id) => {
        // const newData = data.filter(todo => todo.id!==id);
        // setData(newData);
        const todoRef = firebase.database().ref('Todo').child(id);
        todoRef.remove();
        console.log(id)
    }

    const handleStrike = (id) => {
        const temp = data.map(el => {
            if(el.id === id) el.striked = !el.striked
            return el;
        })
        setData(temp);
        // const todoRef = firebase.database().ref('Todo').child('id');
        // todoRef.update({
        //     striked: !data
        // })
    }
    return(
        <div className="container">
        <Typography.Title level={2} style={{paddingTop:"10px", paddingLeft:"20px"}}>Enter Your Todo</Typography.Title>
           <Input.Search 
           placeholder="Enter your Todo" 
           allowClear 
           onSearch={addTodoHandler} 
           style={{margin: "2.5%", width:"90%"}} 
           onChange={(event) => setQueryBody(event.target.value)} 
           value={queryBody}/>
            <div>
           {
               data && data.map(el => 
                <div className="todo-item" key={el.id}>
                    <Checkbox style={{marginRight:"10px"}} onClick={() => handleStrike(el.id)}></Checkbox>
                    <span className="todo-item-body-checked" style={el.striked?{textDecoration:"line-through"}:{textDecoration:"none"}}>{el.Body}</span>
                    <Button onClick={() => removeTodos(el.id)} style={{float:'right'}}>Done</Button>
                </div>
               )
           }
            </div>

        </div>
    )
}

export default Todos;