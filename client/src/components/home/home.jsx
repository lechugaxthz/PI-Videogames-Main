import React from "react";
import { Link } from "react-router-dom";
import './home/home.css'


const Home = () => {

    
    return (
        <div className="home">
            <Link to='/videogames'><button className="toAll">all Games</button></Link>
        </div>
    )
}

export default Home