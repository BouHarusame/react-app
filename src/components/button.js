import React from 'react'
import '../assets/button.css'
class Button extends React.Component {
  render() {
    const className = [
      "calculator-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ]; 
    return (
      <div className={className.join(' ')}>
        < button onClick = {
          this.handleClick
        } > {
          this.props.name
        } </button>
      </div>
    )
  }
  handleClick () {
    this.props.handleResult(this.props.name)
  }
}
export default Button