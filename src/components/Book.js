import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  }

  onChangeShelf = (element) => {
    const { onChange, book } = this.props
    const shelf = element.target.value
    onChange(book, shelf)
  }

  checkThumbnail = (book) => {
      return book.imageLinks ? book.imageLinks.thumbnail : ''
  }

  render() {
    const book = this.props.book
    const style = {
      width: 128,
      height:193,
      backgroundImage: 'url("'+ this.checkThumbnail(book) + '")'}

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
            style={style}>
            </div>
            <div className="book-shelf-changer">
              <select onChange={this.onChangeShelf} value={book.shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book
