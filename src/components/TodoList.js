import React from "react";
import TodoCard from "./TodoCard";

const TodoList= props => {

  return (
    <div className="shopping-list">
      {props.items.map(item => (
        <TodoCard key={item.id} data={item} 
        toggleItem={props.toggleItem} 
        handleClear={props.handleClear}
        />
    
      ))}
      
    </div>
  );
};

export default TodoList;