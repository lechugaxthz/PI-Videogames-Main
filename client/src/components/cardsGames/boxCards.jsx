import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
/* components */
import Cards from "./Cards";
import './cssBox&Cards/boxCards.css'



export default function BoxCards() {

    const All100GamesList = useSelector((state) => state.all100Games);
    const SearchGamesList = useSelector((state) => state.searchedGames);
    const FilteredGamesList = useSelector((state) => state.filteredGames);

    /* console.log('acaaa =>>>>>>>', All100GamesList)
    console.log('acaaa =>>>>>>>', SearchGamesList) */
    console.log('acaaa =>>>>>>>', FilteredGamesList)

    let data

    if (SearchGamesList.length) {
        if (FilteredGamesList.length) {
            data = FilteredGamesList
        } else {
            data = SearchGamesList
        }
    } else {
        if (FilteredGamesList.length) {
            data = FilteredGamesList
        } else {
            data = All100GamesList
        }
    }

    /* pagess */
    const [currentPage, setCurrentPage] = useState(1);
    let gamesPerPage = 15;

    const lastIndex = currentPage * gamesPerPage;
    const firstIndex = lastIndex - gamesPerPage;
    const currentData = data.slice(firstIndex, lastIndex);

    const handleNextPg = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPg = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div>
            <section className="cardsBox">
                {
                    currentData.map((game) => {
                        return (
                            <Cards
                                key={game.id}
                                id={game.id}
                                name={game.name}
                                bg_image={game.bg_image}
                                released={game.released}
                                rating={game.rating}
                                genres={game.genres}

                            />
                        )

                    })

                }

                {/* {
                FilteredGamesList.length
                    ? FilteredGamesList.map((game, index) => {
                        return (
                            <Cards
                                key={index}
                                id={game.id}
                                name={game.name}
                                bg_image={game.bg_image}
                                released={game.released}
                                rating={game.rating}
                                genres={game.genres}

                            />
                        )
                    })
                    : SearchGamesList.length
                        ? SearchGamesList.map((game, index) => {
                            return (
                                <Cards
                                    key={index}
                                    id={game.id}
                                    name={game.name}
                                    bg_image={game.bg_image}
                                    released={game.released}
                                    rating={game.rating}
                                    genres={game.genres}
                                />
                            )
                        })
                        : All100GamesList.map((game, index) => {
                            return (
                                <Cards
                                    key={index}
                                    id={game.id}
                                    name={game.name}
                                    bg_image={game.bg_image}
                                    released={game.released}
                                    rating={game.rating}
                                    genres={game.genres}
                                />
                            )
                        })

            } */}
            </section>
            <button onClick={() => handlePrevPg()}>prev</button>
            <button onClick={() => handleNextPg()}>next</button>
        </div>

    )
}
