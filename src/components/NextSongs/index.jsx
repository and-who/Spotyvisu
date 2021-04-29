import { useColor } from 'color-thief-react'

const buildTrackCard= (track,index) => {
  return (
    <div key={track.track.name} onClick={()=>{console.log(`Next ${index}`)}} style={{backgroundColor: track.color}} className="NextSongs__card">
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
  const result1 = useColor(`https://i.scdn.co/image/${player.nextTracks[0].image.key}`, 'hex', { crossOrigin: 'anonymous'})
  const result2 = useColor(`https://i.scdn.co/image/${player.nextTracks[1].image.key}`, 'hex', { crossOrigin: 'anonymous'})
  if(nextTracksWithColor.length > 0){
    nextTracksWithColor[0].color=result1.data

    if(nextTracksWithColor.length > 1){
      nextTracksWithColor[1].color=result2.data
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