import React from 'react'
class ControlTodo extends React.Component {
  state = {
    taskA: '',
    taskB: '',
    list: []
  }
  render() {
    return (
      <>
        <div>
          <div>
            <input
              name="taskA"
              value={this.state.taskA}
              onChange={this.handleChange}
            />
            <button
              onClick={e => {
                this.handleClick('taskA')
              }}
            >
              添加任务A
            </button>
          </div>
          <div>
            <input
              name="taskB"
              value={this.state.taskB}
              onChange={this.handleChange}
            />
            <button
              onClick={e => {
                this.handleClick('taskB')
              }}
            >
              添加任务B
            </button>
          </div>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={item + index}>
                {item} <button onClick={ () => { this.handleDelete(index) }}>X</button>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
  handleChange = e => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleClick = name => {
    if (!this.state[name]) return
    this.setState({
      list: [...this.state.list, this.state[name]],
      [name]: ''
    })
  }
  handleDelete = index => {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}
export default ControlTodo
