import React  from 'react';
import Peeps from './Peeps' 
const Book =({books,peeps,peepsLikeBook})=>{
   let  booklist= Object.values(books).map(book=>{
        return(
            <div key={book.id}>
<h2>{book.name}</h2>
{
    (peepsLikeBook[book.id]) ?
       <div>
           <p>likes by</p>
 <Peeps  peeps={peeps} peepsLikeBook={peepsLikeBook[book.id]}/> 
           </div>
   :
    <p>no one likes it</p>
 
}
</div>
                )

    })
    return(
        <div>
        {
      booklist
        }
        </div>
       
      
    )
}

export default Book;