import React from 'react';
import {Link, Outlet} from "react-router-dom";

import './App.css';

function App() {
    return (
        <div className="App">
            <div className="title">Wordle</div>
            <Link to={"/gamepage/easy"} className="easy">Easy</Link>
            <Link to={"/gamepage/medium"} className="medium">Medium</Link>
            <Link to={"/gamepage/hard"} className="hard">Hard</Link>
            <Link to={"/rulepage"} className="rules">Rules</Link>
            <Outlet/>
        </div>
    );
}

export default App;
