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
        Description: JavaScript, React, CSS, Pair programming, useContext.
        programming in 6 hours

        As a team of six, we developed an application to query a database of
        food products looking for allergens that related to common conditions so
        that a user can determine whether a specific product is safe to eat. We
        used ElephantSQL, Auth0, CSS, Figma, Trello, Miro, Supertest, React,
        Material UI, Render, Quagga package, msw package.

        Week 11 Hackathon with the School of Code. This week we learnt about deployment
        <br />
        <br />
        Week 11 Hackathon with the School of Code. This week we learnt about
        deployment. We chose to make a Christmas related app and came with the
        idea of an advent of yoga. We also added a useContext to make dark mode
        for the site. We created our own database with 25 days, each containing
        an object with a picture, description, name of pose. We deployed this
        app using Render, we also used Netlify during the week. This was the
        first project that we deployed back end and front end. Stretch goal for
        the app: create different difficulties for the user to choose from, and
        to link the days with the date, so the user wouldn't be able to see days
        ahead.
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
