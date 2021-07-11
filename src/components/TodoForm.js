import React from "react"

class TodoForm extends React.Component {
  constructor(props) {
    super()

    this.state = {
      newName: ""
    }
  }

  // When creating a function in class, get rid off "const" and use arrow function
  handleChange = (event) => {
      this.setState({
        newName: event.target.value
      })
  }





handleSubmit = (event) => {
    event.preventDefault()
  
    this.props.addItem(this.state.newName)

    this.setState({
      newName: ""
    })
  }
   


  handleClear = (id)  => {

    const filteredItems = this.state.duties.filter(item => {

      if (item.id===id) {

        return item.id !== id 

      } 

    })
     
     this.setState({
      duites : filteredItems


     })
       

   }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        name="newName"
        value={this.state.newName}
        onChange={this.handleChange}
      />
      <button>Add</button>
        
        
      
    </form>
    )
  }

}

export default TodoForm;   
