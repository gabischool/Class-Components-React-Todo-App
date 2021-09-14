// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
const TodoList = props => {

    return(
            <div >
               {props.lists.map( list => (
                   <Todo data = {list} key={list.id} completed={props.completed} />
               ))}
            </div>
        )
    }


export default TodoList;