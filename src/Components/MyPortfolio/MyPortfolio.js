// import MyProjects from './My-projects/my-projects';
import ContactLinks from '../ContactLinks/ContactLinks';
import './MyPortfolio.css';
import MyProjects from './MyProjects/MyProjects';

export default function MyPortfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio">
        <h1 id="page-title">My Portfolio...</h1>
        <p className="intro-text-container">
          Here you can find some of the projects that I have been part of, click
          on the buttons and you'll find them:
        </p>
        <MyProjects />
      </div>
      <ContactLinks />
    </div>
    // </div>
  );
}
