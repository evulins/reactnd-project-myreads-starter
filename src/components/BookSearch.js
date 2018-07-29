import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import PropTypes from 'prop-types'


class BookSearch extends Component {

	static propTypes = {
    moveBook: PropTypes.func.isRequired,
    userBooks: PropTypes.array.isRequired
	}

  state = {
    books: [],
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    this.searchBook(query)
  }

  searchBook = (query) => {
    if(query.length === 0) {
     this.setState({ books: [] })
    } else {
      BooksAPI.search(query).then((response) => {
        if (Array.isArray(response)) {
          this.setState({ books: response })
        } else {
          this.setState({ books: [] })
        }
      })
    }
  }

  shelfStatus = (book) => {
    const userBooks = this.props.userBooks
    const ids = userBooks.map((book) => {
        return book.id
      })
    return ids.includes(book.id)
  }

  findInUserBooks = (book) => {
    const userBooks = this.props.userBooks
    return userBooks.find(x => x.id === book.id)
  }

  putBooksOnShelfs = () => {
    const books = this.state.books
    const booksOnShelfs = books.map(book => {
      const userBook = this.findInUserBooks(book)
      if (userBook) {
        return { ...book, shelf: userBook.shelf }
      } else {
        return { ...book, shelf: 'none' }
      }
    })
    return booksOnShelfs
  }

	render() {
    const books = this.putBooksOnShelfs()
    const moveBook = this.props.moveBook
    
		return (
			<div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book, index) => {
              return(
                <Book 
                  book={book}
                  onChange={moveBook}
                  key={index}
                />)
            })}
          </ol>
        </div>
      </div>
		)
	}
}

export default BookSearch