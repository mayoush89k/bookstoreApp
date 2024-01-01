import React from "react";
import "./style.css";
import ContinueReading from "./ContinueReading";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function Homepage({ bookList }) {
  const navigate = useNavigate()
  return (
    <div className="page">
      <ContinueReading bookList={bookList} />
      <Header title="All Books" />
      <div onClick={() => {}} id="container">
        {bookList.map((book) => (
          <div
            key={book.id}
            className="card"
            onClick={() => {
              navigate(`/${book.id}`, { state: { id: book.id } });
            }}
          >
            <img src={book.coverImage} alt={`${book.title} cover`} />
            <p>{book.averageRating}</p>
            <h3> {book.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
