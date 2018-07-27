import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'

class ListBooks extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		onChange: PropTypes.func.isRequired
	}

	render() {
		const books = this.props.books

		return (
			<div className="list-books">
				<div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
        		<BookShelf
        			books={books}
        			title='All'
        		/>
        </div>

        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
		)
	}
}

export default ListBooks;