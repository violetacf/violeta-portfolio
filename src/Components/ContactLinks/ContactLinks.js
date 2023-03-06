import './ContactLinks.css';
import TwitterLogo from './../../Images/ContactLogos/TwitterLogo.png';
import LinkedinLogo from './../../Images/ContactLogos/LinkedinLogo.png';
import GitHubLogo from './../../Images/ContactLogos/GitHubLogo.png';
import ArrowDown from './../../Images/ArrowDown.png';

function ContactLinks() {
  return (
    <div className="links-container">
      <div className="contact-container">
        <h2 className="subtitle">You can contact me here!</h2>
        <img className="arrow" src={ArrowDown} alt="arrow down"></img>
      </div>
      <a href="https://github.com/violetacf" target="_blank" rel="noreferrer">
        <div className="img-logo-container">
          <img className="links-logo" src={GitHubLogo} alt="GitHub logo" />
          <p>GitHub</p>
        </div>
      </a>
      <a
        href="https://twitter.com/viocodingleta"
        target="_blank"
        rel="noreferrer"
      >
        <div className="img-logo-container">
          <img className="links-logo" src={TwitterLogo} alt="Twitter logo" />
          <p>Twitter</p>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/violeta-cf/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="img-logo-container">
          <img className="links-logo" src={LinkedinLogo} alt="Linkedin logo" />
          <p>Linked in</p>
        </div>
      </a>
    </div>
  );
}

export default ContactLinks;
