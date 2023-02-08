import './About.css';

export default function CodeAbout() {
  return (
    <p className="code-text-container">
      <span className="variable" id="my-name">
        const
      </span>{' '}
      <span className="name" id="my-name">
        name
      </span>
      <span className="parenthesis" id="my-name">
        {' '}
        ={' '}
      </span>
      <span className="string" id="my-name">
        {' '}
        'Violeta'
      </span>
      <span className="parenthesis" id="my-name">
        ;
      </span>
      <br></br>
      <span className="variable">const</span>{' '}
      <span className="name">learning</span>
      <span className="parenthesis"> = </span>
      <span className="name"> true</span>
      <span className="parenthesis">;</span>
      <br></br>
      <span className="variable">let</span>{' '}
      <span className="name">spokenLanguages</span>
      <span className="parenthesis"> = [</span>
      <span className="string">'Spanish', 'English'</span>
      <span className="parenthesis">];</span>
      <br></br>
      <span className="variable">let</span> <span className="name">skills</span>{' '}
      <span className="parenthesis">= [</span>
      <span className="string">
        'JavaScript', 'CSS', 'html', 'Figma', 'Trello', 'Agile Methodology',
        'TypeScript', 'React'
      </span>
      <span className="parenthesis">];</span>
    </p>
  );
}
