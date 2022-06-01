import React, { useState } from 'react';

const Tour = ({name,info,image,price}) => {
 // const{name,info,image,price}=tour;
 const[readmore,SetReadmore]=useState(false);
  return <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">
          ${price}
        </h4>
      </div>
      <p>  {readmore?  info : `${info.substring(0,150)}...`}<button onClick={()=>SetReadmore(! readmore)}>{readmore ? 'less':'more'}</button></p>
      <button className='delete-btn'>non interested </button>
    </footer>
  </article>;
};

export default Tour;
