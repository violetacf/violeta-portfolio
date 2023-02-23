import './../MyProjects.css';
import LilyBloomPic from '../../../../Images/ProjectsImages/LilyBloomPics/LilyBloomPic.png';
import LilyBloomPic2 from '../../../../Images/ProjectsImages/LilyBloomPics/LilyBloomPic2.png';

export default function LilyBloom() {
  return (
    <div className="project-container">
      <h2 className="project-title">&lt;LilyBloom/&gt;</h2>
      <div className="images-container">
        <img
          className="project-image"
          src={LilyBloomPic}
          alt="Screen shot of an app called LilyBloom"
        />
        <img
          className="project-image"
          src={LilyBloomPic2}
          alt="Screen shot of an app called LilyBloom"
        />
      </div>
      <p>
        <br />
        Minimalist side project. Florist website
        <br />
        After finishing with my portfolio website (the one you're currently
        looking at) I wanted to do another side project, but I thought it would
        be nice to do something for a friend and have a project that somebody
        would be able to use and enjoy.
        <br />
        <br />
        Tech stack I used: CSS, React, Render, JavaScript.
        <br />
        <br />
      </p>
      <div className="buttons-container">
        <a
          href="https://lilybloom.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          <button id="project-button">&lt;Launch App/&gt;</button>
        </a>
        <a
          href="https://github.com/violetacf/lilybloom-frontend"
          target="_blank"
          rel="noreferrer"
        >
          <button id="project-button">&lt;See code in GitHub/&gt;</button>
        </a>
      </div>
    </div>
  );
}
