import './About.css';
import MyPicture from '../../Images/MyPicture.JPG';
import SpeakerSound from '../../Images/SpeakerSound.png';
import CodeAbout from './CodeAbout';
import ContactLinks from '../ContactLinks/ContactLinks';

function About() {
  let audio = new Audio('/violeta.m4a');
  const start = () => {
    audio.play();
  };
  return (
    <div className="about-container">
      <div className="img-intro-about-container">
        <div className="my-picture-container">
          <img src={MyPicture} id="my-pic" alt="portrait of Violeta"></img>
        </div>
        <div className="intro-about-container">
          <CodeAbout />
          <div className="how-to-speaker">
            <h2 className="subtitle" onClick={start}>
              Hear how to pronounce my name
            </h2>
            {/* [bjo'leta] */}
            <img
              id="speaker-pic"
              src={SpeakerSound}
              alt="speaker to press and hear the sound"
              onClick={start}
            />
          </div>
        </div>
      </div>
      <div className="intro-text-container">
        <p>
          I am a Madrilenian based in Bristol. <br /> I originally studied
          Primary Teaching and specialised in Autism Spectrum Disorder. <br />
          For the past five years I have worked as a SEND Tutor with people with
          limited communication and special educational needs, and I developed a
          passion for inclusion and accessibility. <br />I discovered
          programming last year through some online tutorials, which led me to
          enroll on a short course at the City of Bristol College, where I
          learnt the basics of Python. I wanted to learn more and after I
          decided to change careers and start from zero in another field I
          looked for bootcamps (didn't have any time to lose!). <br />I am one
          of the lucky people that studied with the School of Code, where I have
          learnt JavaScript, CSS, HTML, TypeScript, React, agile team working
          skills. <br />
          My experience makes me aware of the needs of people that might not
          have the voice to give feedback. <br />
          Therefore, I believe I can make a difference towards making sites more
          accessible to the broad spectrum of potential users. Feel free to take
          a look into my portfolio and if you like my work contact me on
          Linkedin, Twitter or Github.
        </p>
      </div>
      <div className="contact-function-container">
        <ContactLinks />
      </div>
    </div>
  );
}

export default About;
