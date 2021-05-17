import React from 'react';
import { Data } from './Data';
import { Row, Col, Card } from 'antd';
import './App.css'

const Todos = () => {
    return(
        <div style={{marginTop:"50px"}}>
           {
               Data.map(el => 
                <div className="todo-item">
                    <p className="todo-item-title">Title: {el.Title}</p>
                    <p className="todo-item-body">{el.Body}</p>
                </div>
               )
           }
        </div>
    )
}

export default Todos;