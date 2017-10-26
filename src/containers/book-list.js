import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book=>{
      return (
        <li
          key={book.title}
          onClick={()=> this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //whatever is returned will be set up as props

  return {
    books: state.books
  };
}

//anything returned will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  //whenever select book is called result should be passed to all our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
  //dispatch is what spits everything out
}

//promote BookList from component to container, needs to know as dispatch toMakeBook
export default connect(mapStateToProps, mapDispatchToProps)(BookList);