import React from "react";

import ToDoList from "./components/ToDoList";
import ToDoListForm from "./components/ToDoListForm";
import "./styles.css";


const MyToDo = [
  {
    task: "Organize Garage",
    id: 1,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 2,
    completed: false
  }
]

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      ToDos: MyToDo,
      anotherState: []
    }
  }

  toggleItem = (id) => {
  
    
    this.setState({
      ToDo: this.state.ToDos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item;
        }
      })
    })
  }

  addTask = (newTask) => {
   
    const newObject = {
      task: newTask,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ToDos: [...this.state.ToDos, newObject]
    })
  }

  render() {
     return (
      <div className="App">
         <h1>ToDo List: MVP</h1>
          
        
        <div className="header">
         

          <ToDoListForm addTask={this.addTask} />
        </div>
        <ToDoList 
          items={this.state.ToDos} 
          toggleItem={this.toggleItem} 
        />
      </div>
    );
     }

  }


export default App;