import './../MyProjects.css';
import AdventOfYogaPic from '../../../../Images/ProjectsImages/AdventOfYogaPics/AdventOfYogaPic.png';
import AdventOfYogaPic2 from '../../../../Images/ProjectsImages/AdventOfYogaPics/AdventOfYogaPic2.png';

export default function AdventOfYoga() {
  return (
    <div className="project-container">
      <h2 className="project-title">&lt;Advent of Yoga/&gt;</h2>
      <div className="images-container wider-image-container">
        <img
          className="project-image wider-image"
          src={AdventOfYogaPic}
          alt="advent of yoga preview light mode"
        />
        <img
          className="project-image wider-image"
          src={AdventOfYogaPic2}
          alt="advent of yoga preview night mode"
        />
      </div>
      <p>
        <br />
        1-day Hackathon with the School of Code.
        <br />
        Pair programming. This week we learnt about deployment. We chose to make
        a Christmas related app and came with the idea of an advent of yoga.
        This was the first project that we deployed back end and front end.
        <br />
        <br />
        Tech stack we used: ElephantSQL to create our own database with 25 days,
        each containing an object with a picture, Render for deployment, also
        learnt about Netlify during the week, CSS, Figma, React, JavaScript. We
        also added a useContext to make dark mode for the site.
        <br />
        <br />
        Stretch goals for the app: create different difficulties for the user to
        choose from, and to link the days with the date, so the user wouldn't be
        able to see days ahead.
        <br />
        <br />
      </p>
      <div className="buttons-container">
        <a
          href="https://advent-of-yoga-miko-violeta-hackathon.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          <button id="project-button">&lt;Launch App/&gt;</button>
        </a>
        <a
          href="https://github.com/violetacf/weel11_hackathon_advent-of-yoga-frontend"
          target="_blank"
          rel="noreferrer"
        >
          <button id="project-button">&lt;See frontend in GitHub/&gt;</button>
        </a>
        <a
          href="https://github.com/violetacf/weel11_hackathon_advent-of-yoga-backend"
          target="_blank"
          rel="noreferrer"
        >
          <button id="project-button">&lt;See backend in GitHub/&gt;</button>
        </a>
      </div>
    </div>
  );
}
