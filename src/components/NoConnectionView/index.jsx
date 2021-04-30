import { useEffect, useState } from "react";
import logo from '../../assets/spotify.png'


const NoConnectionView = () => {
  const [timeString, setTimeString] = useState();

  console.log(logo)

  useEffect(()=> {
      const intervalID = setInterval(() => {
        const date = new Date();
        setTimeString(date.toLocaleTimeString(navigator.language, {
          hour: '2-digit',
          minute:'2-digit'
        }));
      }, 1000);

      return () => clearInterval(intervalID)

  },[])
  return (
    <div className="NoConnectionView">
      <h1 className="NoConnectionView__time">{timeString}</h1>
      <p className="NoConnectionView__text">Verbinde dich über Spotify - <img className="NoConnectionView__logo" src={logo} alt="logo" /></p>
    </div>
  );
}

export default NoConnectionView;