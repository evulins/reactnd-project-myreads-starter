import React from 'react'
import Book from './Book'

const BookShelf = (props) => {
  const { books, moveBook } = props
  return (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
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

export default BookShelf