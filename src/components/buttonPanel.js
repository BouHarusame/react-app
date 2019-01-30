import React from 'react'
import '../assets/buttonPanel.css'
import Button from './button'
class ButtonPanel extends React.Component {
  render() {
    return (
      <div className="buttonPanel-wrapper">
        {this.props.list.map(item => {
          return (
              <Button
                name={item.name}
                orange={item.orange}
                wide={item.wide}
                key={item.id}
              />
          )
        })}
      </div>
    )
  }
}
export default ButtonPanel
