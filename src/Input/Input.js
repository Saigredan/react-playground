import React from 'react'
import PropTypes from 'prop-types'

class Input extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }
  static defaultProps = {
    type: 'text',
    placeholder: 'Set value'
  }
  render () {
    const { name, id, type, placeholder, label } = this.props
    const labelElement = label ? <label for={id} style={{margin: '0 10px 0 0'}}>{label}</label> : ''
    const input = type && type === 'submit'
      ? <input className='btn btn-warning' type='submit' value='Submit form' name={name} placeholder={placeholder} id={id} />
      : <input type={type} name={name} placeholder={placeholder} id={id} />
    return (
      <div className='form-group'>
        {labelElement}
        {input}
      </div>
    )
  }
}

export default Input
