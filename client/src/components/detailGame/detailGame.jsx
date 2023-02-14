import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GetDetailGame } from "../../redux/action/actions";



const DetailGame = () => {

    const dispatch = useDispatch();
    const videogame = useParams();
    let id = videogame.id

    useEffect(() => {
        dispatch(GetDetailGame(id))
    }, [dispatch, id]);

    const DetailVGame_byId = useSelector(state => state.detailGame)

    /* let resultss = []

    DetailVGame_byId.map(prop => {
        resultss.push(prop.id, prop.name, prop.description, prop.released, prop.rating, prop.background_image, prop.parent_platforms, prop.platf_especific, prop.stores, prop.genres, prop.tags, prop.image)
    })

    console.log('detaillll ===========> ', resultss) */


    return (
        <div>
            <Link to='/videogames'>
                <button>back</button>
            </Link>
            <h1>
                {DetailVGame_byId.name}
            </h1>
            <img src={DetailVGame_byId.background_image} />
            {/* <div>
                {
                    DetailVGame_byId.image.map(img => {
                        return (
                            <img src={img} />
                        )
                    })
                }
            </div> */}
            <h3>
                <h5>Description:</h5>
                {DetailVGame_byId.description}
            </h3>
            <h4>
                <h5>Released Date:</h5>
                {DetailVGame_byId.released}
            </h4>
            <h4>
                <h5>Rating:</h5>
                💥{DetailVGame_byId.rating}
            </h4>
            <h4>
                <h5>Platforms:</h5>
                {DetailVGame_byId.parent_platforms}
            </h4>
            <h4>
                <h5>Consoles:</h5>
                {DetailVGame_byId.platf_especific}
            </h4>
            <h4>
                <h5>Stores:</h5>
                {DetailVGame_byId.stores}
            </h4>
            <h4>
                <h5>Genres:</h5>
                {DetailVGame_byId.genres}
            </h4>
            <h5>All Tags:</h5>
            <ul>
                {
                    DetailVGame_byId.tags
                }
            </ul>

        </div>
    )

}

export default DetailGame