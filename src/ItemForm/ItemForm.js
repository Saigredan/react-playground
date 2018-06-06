import React from 'react'
import Input from '../Input'
const STORAGE_ID = 'CRUD_ITEMS'

class ItemForm extends React.Component {
  submitAction = event => {
    event.preventDefault()
    console.log('Submiting..')
    let items = {}
    try {
      items = JSON.parse(window.localStorage.getItem(STORAGE_ID)) || {}
    } catch (_) {}

    let title = document.getElementById('form_title').value
    let description = document.getElementById('form_description').value

    if (title && description) items[title] = { title, description }
    console.log(items)
    try {
      window.localStorage.setItem(STORAGE_ID, JSON.stringify(items))
    } catch (_) {}
    event.target.reset()
  }
  clearStorage = () => {
    console.log('Clearing storage..')
    window.localStorage.setItem(STORAGE_ID, null)
  }
  render () {
    return (
      <div className='container' style={{margin: '40px auto 40px'}}>
        <form onSubmit={this.submitAction}>
          <Input name='title' id='form_title' placeholder='Set task title' label='Task title' />
          <Input name='description' id='form_description' placeholder='Set task description' label='Task description' />
          <Input type='submit' name='submit' id='from_submit' placeholder='Submit' />
        </form>
        <button className='btn btn-danger' onClick={this.clearStorage}> Clear storage </button>
      </div>
    )
  }
}

export default ItemForm
