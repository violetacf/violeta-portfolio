import './../MyProjects.css';
import FoodMapPic from '../../../../Images/ProjectsImages/FoodMapPics/FoodMapPic.png';
import FoodMapPic2 from '../../../../Images/ProjectsImages/FoodMapPics/FoodMapPic2.png';

export default function FoodMap() {
  return (
    <div className="project-container">
      <h2 className="project-title">&lt;FoodMap/&gt;</h2>
      <div className="images-container">
        <img
          className="project-image"
          src={FoodMapPic}
          alt="Screen shot of an app called FoodMap"
        />
        <img
          className="project-image"
          src={FoodMapPic2}
          alt="Screen shot of an app called FoodMap"
        />
      </div>
      <p>
        <br />
        4-week Final Project with the School of Code.
        <br />
        As a team of six, we developed an application to query a database of
        food products looking for allergens that related to common conditions so
        that a user can determine whether a specific product is safe to eat.
        <br />
        <br />
        Tech stack we used: ElephantSQL, Auth0, CSS, Figma, Trello, Miro,
        Supertest, React, Material UI, Render, Quagga package, msw package.
        <br />
        <br />
        My main contributions were: working on the frontend; implementing Auth0;
        styling with CSS; monitoring and improving accessibility (I got us to a
        100% rating in Google Lighthouse), testing the main component of the app
        with React Testing Library (mocking the backend with msw); debugging;
        updating and assigning tickets in Trello; and keeping documentation up
        to date.
        <br />
        <br />
      </p>
      <div className="buttons-container">
        <a
          href="https://foodmap-hozp.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          <button id="project-button">&lt;Launch App/&gt;</button>
        </a>
        <a
          href="https://github.com/violetacf/final-project_frontend-FoodMap"
          target="_blank"
          rel="noreferrer"
        >
          <button id="project-button">&lt;See frontend in GitHub/&gt;</button>
        </a>
        <a
          href="https://github.com/violetacf/final-project_backend-FoodMap"
          target="_blank"
          rel="noreferrer"
        >
          <button id="project-button">&lt;See backend in GitHub/&gt;</button>
        </a>
      </div>
    </div>
  );
}
