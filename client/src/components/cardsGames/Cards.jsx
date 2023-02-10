import React from "react";

import './cssBox&Cards/cards.css'

export default function Cards(props) {

    const { id, name, bg_image, released, rating, parent_platforms, stores, genres, tags } = props

    console.log('of props =>>>>>>> ', name)


    return (
        <section className="inBox" /* onClick={id} */>{/* acá va a ir el on click que mandé al id ese para los datos particulares del juego */}
            <h1>{name}</h1>{/* tranquilamente podria poner el "id" en lo que es name y bg_image, asi no pisamos nada...  */}
            <img className="imgProp" src={bg_image} alt='imagen del juego' />
            <h3>{released}</h3>
            <h3>{rating}</h3>
            <section className="sectionCard">
                {
                    parent_platforms.map(parent_platform => {
                        return (
                            <h4 className="props"/* onClick={parent_platform} */>{/* un filtrado por la plataforma compatible */}
                                {parent_platform}
                            </h4>
                        )
                    })
                }
            </section>
            <section className="sectionCard">
                {
                    stores.map(store => {
                        return (
                            <h4 className="props" /* onClick={store} */>{/* un filtrado de los 100 juegos X la stores que se venden */}
                                {store}
                            </h4>

                        )

                    })
                }
            </section>
            <section className="sectionCard">
                {
                    genres.map(genre => {
                        return (
                            <h4 className="props"/* onClick={genre} */>{/* un filtrado de los 100 juegos que traemos acorde al genero seleccionado */}
                                {genre}
                            </h4>
                        )
                    })
                }
            </section>
            <section className="sectionCard">
                {
                    tags.map(tag => {
                        return (
                            <h4 className="props"/* onClick={tag} */>{/* un filtrafo de los 100 juegos que traemos acorde al tag presentado */}
                                {tag}
                            </h4>
                        )
                    })
                }
            </section>
        </section >
    )


}