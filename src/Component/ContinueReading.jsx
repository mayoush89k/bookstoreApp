import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "./Header";

export default function ContinueReading({ bookList }) {
  const [reading, setReading] = useState([]);

  useEffect(() => {
    setReading(bookList.filter((book) => book.readingProgress > 0));
    console.log(reading);
  }, [bookList]);

  return (
    <div>
      <Header title="Continue Reading" />
      <div id="container">
        {reading.map((book) => (
          <div key={book.id} className="card">
            <img src={book.coverImage} alt={`${book.title} cover`} />
            <h5>{book.title}</h5>
            {/* filling bar */}
            <div id="myProgress">
              <div
                id="myBar"
                style={{
                  height: "10px",
                  backgroundColor: "green",
                  width: `${((book.readingProgress * 100) / book.pages).toFixed()}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
