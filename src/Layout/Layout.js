import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ItemForm from '../ItemForm'
import Box from '../Box'

const STORAGE_ID = 'CRUD_ITEMS'

class Layout extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  verifyStorage = () => {
    setInterval(() => {
      try {
        const storedObject = window.localStorage.getItem(STORAGE_ID)
        this.setState({items: JSON.parse(storedObject || '{}')})
      } catch (_) {
        this.setState({items: {}})
      }
    }, 200)
  }

  componentWillMount () {
    this.verifyStorage()
  }
  render () {
    const { items } = this.state
    const currentContent = items ? <Box items={items} /> : <p />
    return (
      <div>
        <Header />
        {currentContent}
        <ItemForm />
        <Footer />
      </div>
    )
  }
}

export default Layout
