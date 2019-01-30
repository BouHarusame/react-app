import React from 'react'
import PropTypes from 'prop-types'
import '../assets/result.css'

class Result extends React.Component {
  render() {
    return (
      <div className="calculator-result">
        <div>{this.props.total || '0'}</div>
      </div>
    )
  }
}
Result.propTypes = {
  total: PropTypes.string
}
export default Result
