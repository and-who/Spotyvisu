import React, { useEffect, useRef, useMemo, useState } from 'react';
import { useColor } from 'color-thief-react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ProgressBar from '../ProgressBar'
import {PLAYER_RESUME_URL, PLAYER_PAUSE_URL} from '../../config';
import { getColor } from '../../tools/colors';

const TrackInfo = (props) => {
  const {player} = props

  const firstTrackTimeRef = useRef();
  const secondTrackTimeRef = useRef();
  useEffect(() => {
    secondTrackTimeRef.current = firstTrackTimeRef.current
    firstTrackTimeRef.current = player.trackTime;
  });

  const firstTrackTime = firstTrackTimeRef.current;
  const secondTrackTime = secondTrackTimeRef.current;
  const isPaused = firstTrackTime === player.trackTime && secondTrackTime === player.trackTime

  const onPlayPause = () =>  {
    if(isPaused) {
      fetch(PLAYER_RESUME_URL)
    } else {
      fetch(PLAYER_PAUSE_URL)
    }
  }

  const imageKey = player.image?.key
  const [color, setColor] = useState();
  useMemo(() => imageKey && getColor(`https://i.scdn.co/image/${imageKey}`), [imageKey]).then(result => setColor(result))
  
  return (
    <div onClick={onPlayPause} className="TrackInfo">
      <div className="TrackInfo__art">
        <img src={`https://i.scdn.co/image/${player.image.key}`} className="TrackInfo__image" alt="art" />
        {isPaused && (<div className="TrackInfo__pause-overlay"><PlayCircleFilledIcon className="TrackInfo__pause-icon"/></div>) }
      </div>
      <div className="TrackInfo__infos">
        <ProgressBar progress={player.trackTime/(player.track.duration/100)} color={color}/>
        <div className="TrackInfo__infos-text">
          <h2 className="TrackInfo__infos-track">{player.track.name}</h2>
          <h3 className="TrackInfo__infos-artist">{player.track.artist.map(artist => artist.name).join(', ')}</h3>
        </div>
      </div>
    </div>
  );
}

export default TrackInfo;