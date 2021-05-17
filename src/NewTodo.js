import React, {useState} from 'react';
import { Input, Typography, Button, Checkbox } from 'antd';
import './App.css'

const Todos = () => {
    const [queryBody, setQueryBody] = useState("");
    const [data, setData] = useState([]);
    const addTodoHandler = () => {
        if(!queryBody){
            alert("Enter a Todo")
            return
        }
        const d = new Date();
        const newObj = {id:d.getSeconds()+d.getUTCMilliseconds(), Body:queryBody, striked:false};
        setData(prevState => [...prevState, newObj]);
        setQueryBody("")
    }
    const removeTodos = (id) => {
        const newData = data.filter(todo => todo.id!==id);
        setData(newData);
    }

    const handleStrike = (id) => {
        const temp = data.map(el => {
            if(el.id === id) el.striked = !el.striked
            return el;
        })
        setData(temp);
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