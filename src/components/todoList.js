import React from 'react'

class TodoList extends React.Component {
  state = {
    val: '',
    list: [1, 2, 3]
  }
  render() {
    return (
      <div>
        <input value={this.state.val} onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>添加</button>
        <ul>
          {
            this.state.list.map((item,index) => {
              return (
                <li key={item + index}>{item}
                  <button onClick = {
                    () => {
                      this.handleDelete(index)
                    }
                  } > X </button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
  handleChange = e => {
    console.log(e.target.value)
    this.setState({
      val: e.target.value
    })
  }
  handleClick = () => {
    this.setState({
      list: [...this.state.list, this.state.val],
      val: ''
    })
  }
  handleDelete = (index) => {
    let list = this.state.list
    list.splice(index, 1)
    // console.log(list.splice(index, 1))
    this.setState({
      list
    })
  }
}
export default TodoList