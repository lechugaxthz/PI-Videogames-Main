import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeAllGames from './components/homeAllGames';
import axios from "axios"
import './App.css';
import Nav from './components/inNav/nav.jsx';
import DetailGame from './components/detailGame/detailGame';



function App() {
  /* const [allGames, setAllGames] = useState() */

  /* useLayoutEffect(() => {
    axios.get(`http://localhost:3001/videogames`)
      .then(data => {
        console.log(data.data);
        setAllGames(data.data)
      })
      .catch(err => {
        console.log('error :', err);
        window.alert('nos hemos quedado sin llamados al parecer...', err)
      })
  }, []) */

  return (
    <div className="App">
      <Nav />
      <Routes>

        <Route path='/videogames' element={<HomeAllGames/>} />
        <Route path='videogame/:id' element={<DetailGame/>} />
      </Routes>
    </div>
  );
}

export default App;
