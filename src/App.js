import React, { useState, useEffect } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MainView from './components/MainView';
import {PLAYER_URL} from './config';
import NoConnectionView from './components/NoConnectionView';


function App() {

  const [player, setPlayer] = useState()

  const [timeStamp, setTimeStamp] = useState(0)
  const [idleCount, setIdleCount] = useState(0)

  const fetchPlayer = () => {
    fetch(PLAYER_URL)
    .then(response => response.json())
    .then(result => {
        setPlayer(result)
    })
  }

  useEffect(() =>{
    let interval = setInterval(() => {fetchPlayer()}, 1000)
    return () => clearInterval(interval)
  })

  useEffect(() => {
    if(player && (player.trackTime !== timeStamp)){
      setTimeStamp(player.trackTime);
      setIdleCount(0);
    } else {
      setIdleCount(idleCount+1);
    }
  },[player])



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
        {player && !(idleCount>(60*60)) ? <MainView player={player}/> : <NoConnectionView /> }
      </ThemeProvider>
    </div>
  );
}

export default App;
