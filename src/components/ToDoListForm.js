import React from "react"

class ListForm extends React.Component {
  constructor(props) {
    super()

    this.state = {
      newTask: ""
    }
  }

  // When creating a function in class, get rid off "const" and use arrow function
  handleChange = (event) => {
      this.setState({
        newTask: event.target.value
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  
    this.props.addTask(this.state.newTask)

    this.setState({
      newTask: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        name="newTask"
        value={this.state.newTask}
        onChange={this.handleChange}
      />
      <button>Add ToDo </button>
      
      <button className="button">clear completed </button>
    </form>
    )
  }

}

export default ListForm;