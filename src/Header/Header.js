import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }
  static defaultProps = {
    title: 'Simple CRUD Page',
    description: 'This is a test page indeed'
  }
  render () {
    const { title, description } = this.props
    return (
      <div className='Header' style={{margin: '0 0 60px 0', padding: '30px 0'}}>
        <div className='container'>
          <h1 className='Header-title'>{title}</h1>
          <p className='Header-description'>{description}</p>
        </div>
      </div>
    )
  }
}

export default Header
