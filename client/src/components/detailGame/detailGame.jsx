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
            <img src={DetailVGame_byId.image} />
            <h3>
                {DetailVGame_byId.description}
            </h3>
            <h5>
                {DetailVGame_byId.released}
            </h5>
            <h5>
                {DetailVGame_byId.rating}
            </h5>
            <h4>
                {DetailVGame_byId.parent_platforms}
            </h4>
            <h4>
                {DetailVGame_byId.platf_especific}
            </h4>
            <h4>
                {DetailVGame_byId.stores}
            </h4>
            <h4>
                {DetailVGame_byId.genres}
            </h4>
            <ul>
                {
                    DetailVGame_byId.tags
                }
            </ul>

        </div>
    )

}

export default DetailGame