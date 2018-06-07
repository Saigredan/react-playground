import React from 'react'
import styles from './Box.css'

class Box extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const items = Object.values(this.props.items || {}).map((item) => {
      return (
        <div className={styles.Box_item}>
          <h3>{item.title || 'Default title'}</h3>
          <p>{item.description || 'No description'}</p>
        </div>
      )
    })
    return (
      <div className='container'>
        {items}
      </div>
    )
  }
}

export default Box
