import React ,{Component} from 'react';
import Book from './Book';


class MainComp extends Component{

render() {

    const { peeps, peepsLikeBook, books } = this.props;

    const booklist = Object.keys(books).map(id => (
      <Book
        key={id}
       peeps={peeps}
        peepsLikeBook={peepsLikeBook[id]}
        bookInfo={books[id]}
        
      />
    ));

    /*
    Return JSX
    */
    return <ul>{booklist}</ul>;
  }
}
export default MainComp;