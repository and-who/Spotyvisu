import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

const VolumeControl = (props) => {
  const {player} = props

  return (
    <div className="VolumeControl">
      <ButtonGroup size="large" variant="contained" fullWidth={true} color="primary" aria-label="outlined primary button group">
        <Button onClick={()=>{console.log('Mute')}} size="large" style={{ borderTopLeftRadius: '1rem',  borderBottomLeftRadius: '1rem'}}><VolumeOffIcon/></Button>
        <Button onClick={()=>{console.log('Low')}} size="large"><VolumeMuteIcon/></Button>
        <Button onClick={()=>{console.log('Medium')}} size="large"><VolumeDownIcon/></Button>
        <Button onClick={()=>{console.log('High')}} size="large" style={{ borderTopRightRadius: '1rem',  borderBottomRightRadius: '1rem'}}><VolumeUpIcon/></Button>
      </ButtonGroup>
    </div>
  );
}

export default VolumeControl;