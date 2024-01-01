import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Book({ url }) {
  const { id } = useParams();
  const [book, setBook] = useState({});
  useEffect(() => {
    fetchBook();
    console.log(book)
  }, []);

  async function fetchBook() {
    const res = await fetch(url +"/"+ id);
    console.log(url + '/' + id)
    const data = await res.json();
    setBook(data);
  }
  return <div className="page">

     <h1>{book.title}</h1>
    <img src={book.coverImage} alt={`${book.title} cover`} />
    <p>Author: {book.author.name}</p>
    <p>Publisher: {book.publisher}</p>  
    <p>Price: {book.price}</p>  
    <p>Pages: {book.pages}</p>  
    <p>Average Rating: {book.averageRating}</p> 
  </div>;
}
