import React, {useState} from "react";
import "./Metronome.css";
import sclick1 from './click1.wav';
import sclick2 from './click2.wav';

function Metronome() {
  const [metronomeState, setMetronomeState] = useState({
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4
  })

  const handleBpmChange = (event) =>{
    setMetronomeState({...metronomeState, bpm: event.target.value})
  }

  let click1 = new Audio(sclick1);
  let click2 = new Audio(sclick2);

  const startStop = () => {
      
      if (metronomeState.playing) {
          clearInterval(this.timer);
          setMetronomeState({...metronomeState, playing: false});
      }else{
          let timer = setInterval(playClick, (60 / metronomeState.bpm) * 1000);
          setMetronomeState({...metronomeState, count: 0, playing: true}, playClick)
      }
  }

  const playClick = () => {
    const { count, beatsPerMeasure } = metronomeState;

    if (count % beatsPerMeasure === 0){
        click2.play();
    }else {
        click1.play();
    }

    setMetronomeState({...metronomeState, count: (metronomeState.count + 1) % metronomeState.beatsPerMeasure})
  }

  return (
    <>
      <div className="metronome">
        <div className="bpm-slider">
          <div>{metronomeState.bpm} BPM</div>
          <input type="range" min="60" max="240" value={metronomeState.bpm}  onChange={handleBpmChange}/>
        </div>
        <button onClick={startStop}>{metronomeState.playing ? "Stop" : "Start"}</button>
      </div>
    </>
  );
}

export default Metronome;
