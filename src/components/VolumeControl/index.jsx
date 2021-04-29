import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import {PLAYER_VOLUME_URL} from '../../config';

const VolumeControl = (props) => {

  const setVolume = (volume) => {
    const MAX_VOLUME = 65536
    const VOLUME_PERCENT = Math.floor(MAX_VOLUME/100)
    fetch(`${PLAYER_VOLUME_URL}${volume*VOLUME_PERCENT}`)
  }

  return (
    <div className="VolumeControl">
      <ButtonGroup size="large" variant="contained" fullWidth={true} color="primary" aria-label="outlined primary button group">
        <Button onClick={()=>{setVolume(0)}} size="large" style={{ borderTopLeftRadius: '1rem',  borderBottomLeftRadius: '1rem'}}><VolumeOffIcon/></Button>
        <Button onClick={()=>{setVolume(8)}} size="large"><VolumeMuteIcon/></Button>
        <Button onClick={()=>{setVolume(15)}} size="large"><VolumeDownIcon/></Button>
        <Button onClick={()=>{setVolume(66)}} size="large" style={{ borderTopRightRadius: '1rem',  borderBottomRightRadius: '1rem'}}><VolumeUpIcon/></Button>
      </ButtonGroup>
    </div>
  );
}

export default VolumeControl;