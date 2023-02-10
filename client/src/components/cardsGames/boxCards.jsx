import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
/* components */
import Cards from "./Cards";
import './cssBox&Cards/boxCards.css'



export default function BoxCards() {

    const All100GamesList = useSelector((state) => state.all100Games);
    /* const SearchGamesList = useSelector((state) => state.searchedGames);
    const FilteredGamesList = useSelector((state) => state.filteredGmaes); */

    /* console.log('acaaa =>>>>>>>', All100GamesList)
    console.log('acaaa =>>>>>>>', SearchGamesList)
    console.log('acaaa =>>>>>>>', FilteredGamesList) */

    /* States to pages */
    const [page, setPage] = useState({
        pages: 1
    })

    let toView;

   /*  if (FilteredGamesList.length) toView = FilteredGamesList

    if (SearchGamesList.length && FilteredGamesList.length === 0) toView = SearchGamesList */

    /* i0f (SearchGamesList.length === 0 && FilteredGamesList.length === 0) */toView = All100GamesList

    /* console.log('toView =====> ', toView) */

    console.log('toView =>>>>> ', toView)

    return (
        <section className="cardsBox">
            {
                toView.map((game, index) => {
                    console.log(game.name)
                    return (
                        <Cards
                            key={index}
                            id={game.id}
                            name={game.name}
                            bg_image={game.bg_image}
                            released={game.released}
                            rating={game.rating}
                            parent_platforms={game.parent_platforms/* .map(platform => platform.platform.name) */}
                            stores={game.stores/* .map(store => store.store.name) */}
                            genres={game.genres/* .map(genre => genre.name) */}
                            tags={game.tags/* .map(tag => tag.name) */}
                        />
                    )
                })
            }
        </section>

    )
}






/* {
                x.map(game => {
                    return (
                        <Cards
                            id={game.id}
                            name={game.name}
                            bg_image={game.background_image}
                            released={game.released}
                            rating={game.rating}
                            parent_platforms={game.parent_platforms.map(platform => platform.platform.name)}
                            stores={game.stores.map(store => store.store.name)}
                            genres={game.genres.map(genre => genre.name)}
                            tags={game.tags.map(tag => tag.name)}
                        />
                    )
                })

            } */