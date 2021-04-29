import React, { useState, useEffect } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MainView from './components/MainView';
import {PLAYER_URL} from './config';


function App() {

  const [player, setPlayer] = useState()

  const fetchPlayer = () => {
    fetch(PLAYER_URL)
    .then(response => response.json())
    .then(result => {
        setPlayer(result)
    })
  }

  useEffect(() =>{
    let interval = setInterval(() => {fetchPlayer()}, 1000)
    //destroy interval on unmount
    return () => clearInterval(interval)
  })

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      secondary: {
        main: '#666',
      },
    },
  });


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {player ? <MainView player={player}/> : <h1>Not Connected</h1> }
      </ThemeProvider>
    </div>
  );
}

export default App;
