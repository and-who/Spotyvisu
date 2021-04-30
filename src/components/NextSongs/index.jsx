import { useColor } from 'color-thief-react'
import {PLAYER_NEXT_URL} from '../../config';
import {  useEffect, useMemo, useState } from 'react';
import { getColor } from '../../tools/colors';
const skipTracks = (numTracks) => {
  fetch(PLAYER_NEXT_URL).then(()=>{
    if(numTracks>1){
      skipTracks(numTracks-1)
    }
  })

}

const buildTrackCard= (track,index) => {
  return (
    <div key={track.track.name} onClick={()=>{skipTracks(index+1)}} style={{backgroundColor: track.color}} className="NextSongs__card">
          <img src={`https://i.scdn.co/image/${track.image.key}`} className="NextSongs__card-art" alt="art" />
          <div className="NextSongs__card-text">
            <h2 className="NextSongs__infos-track">{track.track.name}</h2>
            <h3 className="NextSongs__infos-artist">{track.track.artist.map(artist => artist.name).join(', ')}</h3>
          </div>
    </div>
  )
}

const NextSongs = (props) => {
  const {player} = props
  const nextTracksWithColor = player.nextTracks.map(nextTrack => ({...nextTrack, color:''}))
  const [color1, setColor1] = useState();
  const [color2, setColor2] = useState();

  const nextKey1 = player.nextTracks[0]?.image.key
  const nextKey2 = player.nextTracks[1]?.image.key

  useMemo(() => nextKey1 && getColor(`https://i.scdn.co/image/${nextKey1}`), [nextKey1]).then(result => setColor1(result))
  useMemo(() => nextKey2 && getColor(`https://i.scdn.co/image/${nextKey2}`), [nextKey2]).then(result => setColor2(result))

  if(nextTracksWithColor.length > 0){
    nextTracksWithColor[0].color=color1

    if(nextTracksWithColor.length > 1){
      nextTracksWithColor[1].color=color2
    }
  }
  
  return (
    <div className="NextSongs">
      <h2 className="NextSongs__next">Next:</h2>
      <div className="NextSongs__cards">
        {nextTracksWithColor.map((track,index) => buildTrackCard(track,index))}
      </div>
    </div>
  );
}

export default NextSongs;