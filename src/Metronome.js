import React, {useState} from "react";
import "./Metronome.css";

function Metronome() {
  const [metronomeState, setMetronomeState] = useState({
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4
  })

  return (
    <>
      <div className="metronome">
        <div className="bpm-slider">
          <div>{metronomeState.bpm} BPM</div>
          <input type="range" min="60" max="240" value={metronomeState.bpm} />
        </div>
        <button>{metronomeState.playing ? "Stop" : "Start"}</button>
      </div>
    </>
  );
}

export default Metronome;
