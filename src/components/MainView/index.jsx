import TrackInfo from '../TrackInfo'
import NextSongs from '../NextSongs'
import VolumeControl from '../VolumeControl'
const MainView = (props) => {
  const {player} = props
  return (
    <div className="MainView">
      <div className="MainView__tack">
        <TrackInfo player={player}/>
      </div>
      <div className="MainView__next">
        {player.nextTracks && <NextSongs player={player}/>}
      </div>
      <div className="MainView__volume">
        <VolumeControl/>
      </div>
    </div>
  );
}

export default MainView;