import React  from 'react';

 const Peeps=({peeps,peepsLikeBook})=>{
  let user = peepsLikeBook.map(book=>{
        return(
            <ul key={peeps[book].name}>
                <li >
                    {peeps[book].name}
                </li>
            </ul>
        )
        })
    return(
        <div>
        {user}
        </div>
      
    )

 }

    
     

export default Peeps