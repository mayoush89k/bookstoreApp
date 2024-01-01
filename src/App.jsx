import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Component/Homepage";
import Book from "./Component/Book";

function App() {
  const url = "https://book-store-wj3m.onrender.com/books";
  // const url = "https://bank-api-ow7v.onrender.com/users";
  const [bookList, setBookList] = useState([]);

  async function fetchData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log("data: ", data);
    setBookList(data);
  }
  useEffect(() => {
    fetchData();
    console.log(bookList);
  }, []);
  const addUser = async () => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author: { name: "may" },
        title: "testing",
        genre: "drama",
        coverImage: "1qa@WS3ed",
      }),
    });
    const data = await res.json();
    console.log(data);
    fetchData();
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage bookList={bookList} />} />
          <Route path="/:id" element={<Book url={url}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
