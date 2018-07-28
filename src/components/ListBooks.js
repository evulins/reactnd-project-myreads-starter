import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class ListBooks extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		shelfs: PropTypes.object.isRequired,
		moveBook: PropTypes.func.isRequired
	}

	render() {
		const { books, shelfs, moveBook } = this.props

		return (
			<div className="list-books">
				<div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
        		{Object.getOwnPropertyNames(shelfs).map(shelf => {
	        		return(
	        			<BookShelf
		        			books={books.filter((book) => {
		        				return book.shelf === shelf
		        			})}
		        			title={shelfs[shelf]}
		        			moveBook={moveBook}
		        			key={shelf}
	        			/>
	        			)
        		})}
        </div>

        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
		)
	}
}

export default ListBooks;