import React from "react";
import { Link } from "react-router-dom";

import './cssBox&Cards/cards.css'

export default function Cards(props) {

    const { id, name, bg_image, released, rating, genres } = props

    /* console.log('of props =>>>>>>> ', name) */

    return (
        <section className="inBox" /* onClick={id} */>{/* acá va a ir el on click que mandé al id ese para los datos particulares del juego */}
            <div>
                <h1>{name}</h1>{/* tranquilamente podria poner el "id" en lo que es name y bg_image, asi no pisamos nada...  */}
            </div>
            <img className="imgProp" src={bg_image} alt='imagen del juego' />
            <h3>{released}</h3>
            <h3>💥{rating}</h3>

            <ul className="sectionCard">
                Genres:
                {
                    genres.map(gen => {
                        return (
                            <li className="props">
                                {gen.name}
                            </li>
                        )
                    })
                }
            </ul>

            <Link className="link" to={`/videogame/${id}`} >
                <h5>About: {name}</h5>
            </Link>
        </section >
    )


}