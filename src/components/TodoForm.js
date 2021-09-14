import React from "react"
import './Todo.css'

class TodoForm extends React.Component{

    constructor(){
        super()
    
        this.state = {
            newTask : ""
        }
    }


    handleChange = (event) => {
        this.setState({
            newTask: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.add(this.state.newTask)

        this.setState({
            newTask : ''
        })
    }
   
    render(){

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type='text'
                    name='newtask'
                    value={this.state.newTask}
                    onChange={this.handleChange}
                    placeholder='To do list '
                    />
                    <button className='add'>Add Todo</button>
                    <button   className='clearBtn'
                     >Clear Completed</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;