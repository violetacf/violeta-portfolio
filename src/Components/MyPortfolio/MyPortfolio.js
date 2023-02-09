// import MyProjects from './My-projects/my-projects';
import ContactLinks from '../ContactLinks/ContactLinks';
import './MyPortfolio.css';
import MyProjects from './MyProjects/MyProjects';

export default function MyPortfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio">
        <p className="code-text-container">
          <span id="my-name" className="variable">
            let
          </span>{' '}
          <span id="my-name" className="name">
            portfolio
          </span>
          <span id="my-name" className="parenthesis">
            {' '}
            ={' '}
          </span>
          <span id="my-name" className="string">
            'My projects'
          </span>
          <span id="my-name" className="parenthesis">
            ;
          </span>
        </p>
        <p className="intro-portfolio-container">
          Here you can find some of the projects that I have been part of, click
          on the buttons and you can interact with them and also check out the
          code on Github:
        </p>
        <MyProjects />
      </div>
      <ContactLinks />
    </div>
    // </div>
  );
}
