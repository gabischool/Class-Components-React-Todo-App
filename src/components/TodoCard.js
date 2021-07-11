import React from "react";


const TodoCard = props => {
 console.log(props)
  
  return (

    <div>
    <div onClick ={()=>props.toggleItem(props.data.id)}
    className={`item ${props.data.completed ? " purchased" : ""}`}     
    
    >
    
      <p>{props.data.task}</p>

           
    </div>

<button onClick={() =>{props.handleClear(props.data.id)}}>X</button>

</div>
  );
};

export default TodoCard;