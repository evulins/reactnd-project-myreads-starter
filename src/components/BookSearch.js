import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


class BookSearch extends Component {

	static propTypes = {
    books: PropTypes.array.isRequired,
    searchBook: PropTypes.func.isRequired,
    moveBook: PropTypes.func.isRequired
	}

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    const searchBook = this.props.searchBook
    searchBook(query)
  }

  clearQuery = () => {
    this.setState({ query: ''})
  }

	render() {
    const books = this.props.books
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

export default BookSearch