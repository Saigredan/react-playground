import React from 'react'

class Box extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const items = Object.values(this.props.items || {}).map((item) => {
      return (
        <div>
          <h3>{item.title || 'Default title'}</h3>
          <p>{item.description || 'No description'}</p>
        </div>
      )
    })
    return (
      <div class='container'>
        <hr />
        {items}
        <hr />
      </div>
    )
  }
}

export default Box
