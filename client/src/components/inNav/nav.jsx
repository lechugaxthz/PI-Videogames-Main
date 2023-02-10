import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ResetGames, searchGames } from "../../redux/action/actions";
import './cssInNav/nav.css'

const NavBar = () => {

    const dispatch = useDispatch()

    const [searchGameName , setSearchGameName] = useState('')

    const getName = (event) => {
        console.log(event.target.value);
        setSearchGameName(event.target.value)
    }


    return (
        <section >
            {/* poner alguna imagen de logo que está ya cargada... */}
            <div>
                <input type='text' placeholder="search game" onChange={getName} />
                <button onClick={() => {dispatch(searchGames(searchGameName))}}>Search</button>
            </div>
            <hr/>
            <div>
                <button onClick={() => {dispatch(ResetGames())}}>Reset</button>
            </div>
        </section>
    )
}

export default NavBar