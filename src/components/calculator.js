import React from 'react'
import Result from './result'
import ButtonPanel from './buttonPanel'
import '../assets/calculator.css'

class Calculator extends React.Component {
  state = {
    total: null,
    list: [
      {
        id: 1,
        name: 'MC'
      },
      {
        id: 2,
        name: '+/-'
      },
      {
        id: 3,
        name: '%'
      },
      {
        id: 4,
        name: '÷',
        orange: 'orange'
      },
      {
        id: 5,
        name: '7'
      },
      {
        id: 6,
        name: '8'
      },
      {
        id: 7,
        name: '9'
      },
      {
        id: 8,
        name: 'x',
        orange: 'orange'
      },
      {
        id: 9,
        name: '4'
      },
      {
        id: 10,
        name: '5'
      },
      {
        id: 11,
        name: '6'
      },
      {
        id: 12,
        name: '-',
        orange: 'orange'
      },
      {
        id: 13,
        name: '1'
      },
      {
        id: 14,
        name: '2'
      },
      {
        id: 15,
        name: '3'
      },
      {
        id: 16,
        name: '+',
        orange: 'orange'
      },
      {
        id: 17,
        name: '0',
        wide: 'wide'
      },
      {
        id: 18,
        name: '.'
      },
      {
        id: 19,
        name: '=',
        orange: 'orange'
      }
    ]
  }
  render() {
    return ( 
      <div className="calculator-wrapper">
        <Result total={this.state.total} />
        <ButtonPanel list={this.state.list} />
      </div>
    )
  }
}
export default Calculator
