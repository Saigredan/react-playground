import React from 'react'
import PropTypes from 'prop-types'

class Footer extends React.Component {
  static propTypes = {
    author: PropTypes.node.isRequired,
    year: PropTypes.number.isRequired
  }
  static defaultProps = {
    author: {
      firstName: 'Daniel',
      lastName: 'Grek',
      gitHub: 'Saigredan',
      gitHubUrl: 'https://github.com/Saigredan'
    },
    year: new Date().getFullYear()
  }
  render () {
    const { author, year } = this.props
    return (
      <div className='Footer' style={{margin: '30px 0 0 0'}}>
        <div className='container'>
          <div className='row'>
            <div className='col' style={{textAlign: 'center'}}>
               By {author.firstName} {author.lastName} (@GitHub {author.gitHub}) {year}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
