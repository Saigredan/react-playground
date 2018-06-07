import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.css'

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
      <div className={styles.Header}>
        <div className='container'>
          <h1 className='Header-title'>{title}</h1>
          <p className='Header-description'>{description}</p>
        </div>
      </div>
    )
  }
}

export default Header
