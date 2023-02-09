import SpeakerSoundDark from '../../Images/SpeakerSoundDark.png';
import SpeakerSoundLight from '../../Images/SpeakerSoundLight.png';
import { useState } from 'react';

export default function SpeakerSound({ onClick }) {
  const [over, setOver] = useState(false);
  return (
    <div onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)}>
      <img
        id="speaker-pic"
        src={over ? SpeakerSoundLight : SpeakerSoundDark}
        alt="speaker to click and hear my name"
        onClick={onClick}
      />
    </div>
  );
}
