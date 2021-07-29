import React from "react";


const Item = props => {
 

  return (
    <div onClick={() => props.toggleItem(props.data.id)}
    className={`item ${props.data.completed ? " completed" : ""}`}
    >
      <p>{props.data.task}</p>
      
    </div>
  );
};

export default Item;
