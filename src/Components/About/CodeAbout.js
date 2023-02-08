import './About.css';

export default function CodeAbout() {
  return (
    <p className="code-text-container">
      <span id="variable">const</span> <span id="name">name</span>
      <span id="parenthesis"> = </span>
      <span id="string"> 'Violeta'</span>
      <span id="parenthesis">;</span>
      <br></br>
      <span id="variable">const</span> <span id="name">learning</span>
      <span id="parenthesis"> = </span>
      <span id="name"> true</span>
      <span id="parenthesis">;</span>
      <br></br>
      <span id="variable">let</span> <span id="name">spokenLanguages</span>
      <span id="parenthesis"> = [</span>
      <span id="string">'Spanish', 'English'</span>
      <span id="parenthesis">];</span>
      <br></br>
      <span id="variable">let</span> <span id="name">skills</span>{' '}
      <span id="parenthesis">= [</span>
      <span id="string">
        'JavaScript', 'CSS', 'html', 'Figma', 'Trello', 'Agile Methodology',
        'TypeScript', 'React'
      </span>
      <span id="parenthesis">];</span>
    </p>
  );
}
