import React, { Component } from "react";
import "./App.css";

import Book from "./Book";


const chart = [
  {
    id: 1,
    peepsID: '1',
    bookLikedID: '1',//imran series
  },
  {
    id: 2,
    peepsID: '2',
    bookLikedID: '1', //imrans
  },
  {
    id: 3,
    peepsID: '4',
    bookLikedID: '5',
  },
  {
    id: 4,
    peepsID: '5',
    bookLikedID: '2',
  },
  {
    id: 5,
    peepsID: '3',
    bookLikedID: '5',
  },
  {
    id: 6,
    peepsID: '6',
    bookLikedID: '4',
  },
];

const peeps = {
  1: {
    id: 1,
    name: 'Fazal Deen',
    readerCategory: 'champ',
  },
  2: {
    id: 2,
    name: 'Irfan',
    readerCategory: 'rising-star',
  },
  3: {
    id: 3,
    name: 'Muneeb',
    readerCategory: 'beginner',
  },
  4: {
    id: 4,
    name: 'Osama',
    readerCategory: 'champ',
  },
  5: {
    id: 5,
    name: 'Najam',
    readerCategory: 'champ',
  },
  6: {
    id: 6,
    name: 'Aamir',
    readerCategory: 'beginner',
  },
};

const books = {
  1: {
    id: 1,
    name: 'Imran Series',
  },
  2: {
    id: 2,
    name: 'Harry Potter',
  },
  3: {
    id: 3,
    name: 'I Am Malala',
  },
  4: {
    id: 4,
    name: 'Bang-e-Dara by Allama Iqbal',
  },
  5: {
    id: 5,
    name: 'Jokes 101',
  },
};
class App extends Component {
 constructor(props){
   super(props);
   
   this.peepsLikeBook = {};

chart.map(char=>{
  const bookID = char.bookLikedID;
  if(this.peepsLikeBook[bookID]){
    this.peepsLikeBook[bookID].push(char.peepsID) 
  }
  else{
    this.peepsLikeBook[bookID]=[char.peepsID]
  }
console.log(this.peepsLikeBook)
})
 

 }


 
  render() {
    return (
      <div className="App">
       
          
        <h2>How Popular is Your Favorite Movie?</h2>
      <Book   peeps={peeps} books={books}  peepsLikeBook={this.peepsLikeBook} />
      </div>
    );
  }
}

export default App;