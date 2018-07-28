import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './components/ListBooks'
import BookSearch from './components/BookSearch'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    shelfs: {
      'wantToRead': 'Want to Read',
      'currentlyReading': 'Currently Reading',
      'read': 'Read'
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }



  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks 
            books={this.state.books} 
            shelfs={this.state.shelfs}

          />
        )}/>

        <Route path="/search" render={({ history }) => (
          <BookSearch
             myBooks={this.state.books}
          />
        )}/>
      </div>


    )
  }
}

export default BooksApp
