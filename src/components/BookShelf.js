import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    moveBook: PropTypes.func.isRequired
  }



  render() {
    const books = this.props.books
    const moveBook = this.props.moveBook
    
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index) => (
              <Book 
                book={book}
                onChange={moveBook}
                key={index}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;