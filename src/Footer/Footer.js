import React from 'react'
import PropTypes from 'prop-types'
import styles from './Footer.css'

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
      <div className={styles.Footer}>
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
