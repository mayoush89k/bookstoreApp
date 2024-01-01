import React from "react";
import './style.css'
import { FaArrowRight } from "react-icons/fa";

export default function Header({title}) {
  return (
    <div id="header">
      <h4>{title}</h4>
      <p>
        <FaArrowRight />
      </p>
    </div>
  );
}
