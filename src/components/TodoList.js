import React from "react";
import ToDoListCard from "./ToDoListCard";


const ToDoList = props => {
  
  return (
    <div className="ToDo-list">
      {props.items.map(item => (
        <ToDoListCard key={item.id} data={item} toggleItem={props.toggleItem} />
      ))}
      
    </div>
  );
};

export default ToDoList;
