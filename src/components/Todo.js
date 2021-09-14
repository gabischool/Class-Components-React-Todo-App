import React from "react";
import './Todo.css'
const Todo = props => {

   
    return (
        <div onClick={() => props.completed(props.data.id)} 
        className={` ${props.data.completed ? 'completed' : '' }`}>
            <p className='task'>{props.data.task}</p>
        </div>
    )
}

export default Todo;