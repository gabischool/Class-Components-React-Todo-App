import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const appList = [
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
  constructor(){
    super()
    this.state ={
      appList:appList
    }
   }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //ADD NEW TASK 

  addTask = event => {
    const addNew = {
      task: event,
      id: Date.now(),
      completed: false
    }

    this.setState({
      appList:[...this.state.appList, addNew]
    })
  }


  completed = (id) => {
    const completedTask = this.state.appList.map(clickOne => {
      if(clickOne.id === id ){
        return {
          ...clickOne,
          completed:!clickOne.completed
        }
      }
      
        else {
          return clickOne
        }

    })

    this.setState({
      appList:completedTask
    })
  }

  filter = (id) => {
    const filter =this.state.appList.filter((fil) => {
      console.log(fil.completed === true);
      if(fil.id === id){
        return{
          ...fil,
          completed:true
        }
      }
      else{
        return fil
      }
    })
  }
  

  render() {

    return (

      <div className='todo'>
        <h2 className='title'>Welcome to your Todo App!</h2>
        <TodoForm add={this.addTask} filter={this.filter}/>
        <TodoList lists={this.state.appList} completed={this.completed}/>
      </div>

    );
  }
}

export default App;
