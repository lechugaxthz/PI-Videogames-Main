import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllGamesGenres, PostGameInDb, ResetAlertPost } from "../../redux/action/actions";

export default function PostGame() {

    const dispatch = useDispatch()

    const messageOfBack = useSelector(state => state.message)



    const [createName, setCreateName] = useState('')
    const [createDescription, setCreateDescription] = useState('')
    const [createRealeasedDate, setCreateRealeasedDate] = useState('')
    const [createRating, setCreateRating] = useState('')
    const [PC, setPC] = useState(false)
    const [PS, setPS] = useState(false)
    const [Xbox, setXbox] = useState(false)
    const [Nintendo, setNintendo] = useState(false)
    const [createImage, setImage] = useState('')
    /* genres State */
    const [Action, setAction] = useState(false)
    const [Indie, setIndie] = useState(false)
    const [Adventure, setAdventure] = useState(false)
    const [RPG, setRPG] = useState(false)
    const [Strategy, setStrategy] = useState(false)
    const [Shooter, setShooter] = useState(false)
    const [Casual, setCasual] = useState(false)
    const [Simulation, setSimulation] = useState(false)
    const [Puzzle, setPuzzle] = useState(false)
    const [Arcade, setArcade] = useState(false)
    const [Platformer, setPlatformer] = useState(false)
    const [Racing, setRacing] = useState(false)
    const [MMO, setMMO] = useState(false)
    const [Sports, setSports] = useState(false)
    const [Fighting, setFighting] = useState(false)
    const [Family, setFamily] = useState(false)
    const [BoardGames, setBoardGames] = useState(false)
    const [Educational, setEducational] = useState(false)
    const [Card, setCard] = useState(false)

    let allGenresState = [
        { name: 'Action', state: Action, set: setAction },
        { name: 'Indie', state: Indie, set: setIndie },
        { name: 'Adventure', state: Adventure, set: setAdventure },
        { name: 'RPG', state: RPG, set: setRPG },
        { name: 'Strategy', state: Strategy, set: setStrategy },
        { name: 'Shooter', state: Shooter, set: setShooter },
        { name: 'Casual', state: Casual, set: setCasual },
        { name: 'Simulation', state: Simulation, set: setSimulation },
        { name: 'Puzzle', state: Puzzle, set: setPuzzle },
        { name: 'Arcade', state: Arcade, set: setArcade },
        { name: 'Platformer', state: Platformer, set: setPlatformer },
        { name: 'Racing', state: Racing, set: setRacing },
        { name: 'MMO', state: MMO, set: setMMO },
        { name: 'Sports', state: Sports, set: setSports },
        { name: 'Fighting', state: Fighting, set: setFighting },
        { name: 'Family', state: Family, set: setFamily },
        { name: 'BoardGames', state: BoardGames, set: setBoardGames },
        { name: 'Educational', state: Educational, set: setEducational },
        { name: 'Card', state: Card, set: setCard }
    ]

    console.log('name ======> ', createName);
    console.log('true or false =>>>>> ', createName === '');

    let newGame

    let toCreate = (event) => {
        event.preventDefault()

        let patternImgUrl = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
        let patternName = /^[a-zA-Z0-9ñÑ\s]+$/;
        let patternDescription = /^[^@+\-\*\{\}\[\]\/%\|°¬~]+$/;



        newGame = {
            name: '',
            description: '',
            released: '',
            rating: '',
            plataforms: [],
            image: '',
            genres: [],
        }

        if (createName !== '' && createDescription !== '') {

            if (patternName.test(createName)) {
                newGame.name = createName
            } else {
                window.alert('el nombre asignado no cumple con las condiciones requeridas, las cuales indican que no debe presentar "@ , . ; { } [ ] + * - \ / % $ # ( ) ! ? ¿ ! | ° ¬ ~"')
            }
            if (patternDescription.test(createDescription)) {
                newGame.description = createDescription
            } else {
                window.alert('la descripcion asignada no cumple con las condiciones requeridas, las cuales indican que no debe presentar "@ + - * { } [ ] \ / % | ° ¬ ~ "')
            }

            if (createRating) {
                newGame.rating = createRating
            } else {
                newGame.rating = 0
            }

            if (createImage !== '') {
                if (patternImgUrl.test(createImage)) {
                    newGame.image = createImage
                } else {
                    window.alert(
                        'la url no tiene el fromato correcto. no cumple con los siguientes requisitos: Protocolo (http / https); Dominio de nivel superior (ejemplo: .com, .org, .net); Nombre de host (www es opcional); Puerto (opcional); Ruta (opcional)'
                    )
                }
            }

            if (PS || PC || Xbox || Nintendo) {
                if (Action || Indie || Adventure || RPG || Strategy || Shooter || Casual || Simulation || Puzzle || Arcade || Platformer || Racing || MMO || Sports || Fighting || Family || BoardGames || Educational || Card) {
                    if (PC) newGame.plataforms.push('PC')
                    if (PS) newGame.plataforms.push('PS')
                    if (Xbox) newGame.plataforms.push('Xbox')
                    if (Nintendo) newGame.plataforms.push('Nintendo')
                    if (Action) newGame.genres.push('Action')
                    if (Indie) newGame.genres.push('Indie')
                    if (Adventure) newGame.genres.push('Adventure')
                    if (RPG) newGame.genres.push('RPG')
                    if (Strategy) newGame.genres.push('Strategy')
                    if (Shooter) newGame.genres.push('Shooter')
                    if (Casual) newGame.genres.push('Casual')
                    if (Simulation) newGame.genres.push('Simulation')
                    if (Puzzle) newGame.genres.push('Puzzle')
                    if (Arcade) newGame.genres.push('Arcade')
                    if (Platformer) newGame.genres.push('Platformer')
                    if (Racing) newGame.genres.push('Racing')
                    if (MMO) newGame.genres.push('Massively Multiplayer')
                    if (Sports) newGame.genres.push('Sports')
                    if (Fighting) newGame.genres.push('Fighting')
                    if (Family) newGame.genres.push('Family')
                    if (BoardGames) newGame.genres.push('Board Games')
                    if (Educational) newGame.genres.push('Educational')
                    if (Card) newGame.genres.push('Card')
                    dispatch(PostGameInDb(newGame))
                    toAlert()
                } else {
                    window.alert('si que es un des generado')
                }
            } else {
                window.alert('si no está en ninguna plataforma, para que subes un juego que nadie va a jugar ?')
            }

        } else {
            if (createName !== '') window.alert('falta poner una descripción')
            if (createDescription !== '') window.alert('falta poner un nombre')
        }


    }

    let toAlert = () => {
        if (messageOfBack !== '') {
            window.alert(messageOfBack)
            dispatch(ResetAlertPost())
            setCreateName('')
            setCreateDescription('')
            setCreateRealeasedDate('')
            setCreateRating('')
            setPC(false)
            setPS(false)
            setXbox(false)
            setNintendo(false)
            setImage('')
            setAction(false)
            setIndie(false)
            setAdventure(false)
            setRPG(false)
            setStrategy(false)
            setShooter(false)
            setCasual(false)
            setSimulation(false)
            setPuzzle(false)
            setArcade(false)
            setPlatformer(false)
            setRacing(false)
            setMMO(false)
            setSports(false)
            setFighting(false)
            setFamily(false)
            setBoardGames(false)
            setEducational(false)
            setCard(false)
        }
    }


    return (
        <div>
            <h1>crea tu propio juego :D</h1>
            <br />
            <form onSubmit={toCreate}>
                <label>
                    <h3>
                        name:
                    </h3>
                    <input type={"text"} onChange={(event) => setCreateName(event.target.value)} />
                </label>
                <label>
                    <h3>
                        description:
                    </h3>
                    <input type={"text"} onChange={(event) => setCreateDescription(event.target.value)} />
                </label>
                <label>
                    <h3>
                        released date:
                    </h3>
                    <input type={"text"} onChange={(event) => setCreateRealeasedDate(event.target.value)} />
                </label>
                <label>
                    <h3>
                        rating:
                    </h3>
                    <input type={"number"} onChange={(event) => setCreateRating(event.target.value)} />
                </label>
                <label>
                    <h3>
                        platforms:
                    </h3>
                    <input checked={PC} type={"checkbox"} onChange={() => setPC(!PC)} /> PC
                    <input checked={PS} type={"checkbox"} onChange={() => setPS(!PS)} /> PS
                    <input checked={Xbox} type={"checkbox"} onChange={() => setXbox(!Xbox)} /> Xbox
                    <input checked={Nintendo} type={"checkbox"} onChange={() => setNintendo(!Nintendo)} /> Nintendo
                </label>
                <label>
                    <h3>
                        url Image:
                    </h3>
                    <input type={"text"} onChange={(event) => setImage(event.target.value)} />
                </label>
                <label>
                    <h3>
                        genres:
                    </h3>
                    {
                        allGenresState.map(gen => {
                            return (
                                <>
                                    <h4>{gen.name}</h4>
                                    <input checked={gen.state} type={"checkbox"} onChange={() => gen.set(!gen.state)} />
                                </>
                            )
                        })
                    }
                </label>
                <div>
                    <button type="submit">Post Game</button>
                </div>
            </form>
        </div>
    )

}