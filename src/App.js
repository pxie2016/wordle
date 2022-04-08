import React from 'react';
import {Link, Outlet} from "react-router-dom";

import './App.css';

function App() {
    return (
        <div className="App">
            <div className="title">Wordle</div>
            <div className='level'>
            <Link to={"/gamepage/easy"} className="easy">Easy</Link>
            <Link to={"/gamepage/medium"} className="medium">Medium</Link>
            <Link to={"/gamepage/hard"} className="hard">Hard</Link>
            <Link to={"/rulepage"} className="rules">Rules</Link>
            {/* <div className='grid'></div> */}
            <Outlet/>
            </div>
        </div>
    );
}

export default App;
