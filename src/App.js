import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/App.css"


const dutiesList = [
  
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];

class App extends React.Component {

  constructor() {
    super()

    this.state = {
    duties: dutiesList,
  
    }
  }
    
  toggleItem = (id) => {

    this.setState({
      duties: this.state.duties.map(item => {
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
   
  addItem = (newItem) => {
   
    const newObject= {
      task: newItem,
      id: Date.now(),
      completed: false
    }

    this.setState({
      duties: [...this.state.duties, newObject ]
    })
  }
  
  
 
      



  render() {
     return (
      <div className="App">
        <div className="header">
          <h1>To do List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList 
          items={this.state.duties} 
         toggleItem={this.toggleItem} 
         handleClear ={this.handleClear}
        />
      </div>
    );
     }

  }


export default App;
