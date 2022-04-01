import React from 'react';
import './HomePage.css';
import {Link} from "react-router-dom";

export function HomePage() {
  return (
    <div className="page">
      <div className="title">Wordle</div>
      <Link to={"/gamepage"} className="easy">Easy</Link>
      <Link to={"/gamepage"} className="medium">Medium</Link>
      <Link to={"/gamepage"} className="hard">Hard</Link>
      <Link to={"/rulepage"} className="rules">Rules</Link>
    </div>
  );
}
