import "./Footbar.css";

const Footbar = () => {
  return (
    <nav className="footbar">
      <ul id="techs">
        <li>Javascript</li>
        <li>|</li>
        <li>React</li>
        <li>|</li>
        <li>Redux</li>
        <li>|</li>
        <li>Express</li>
        <li>|</li>
        <li>PostgreSQL</li>
        <li>|</li>
        <li>HTML5</li>
        <li>|</li>
        <li>CSS</li>
      </ul>
      <div>Xiaowen Nie</div>
      <a
        href="https://github.com/xwnnie/NatureClikr"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i className="fa-brands fa-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/xiaowennie"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i className="fa-brands fa-linkedin" />
      </a>
    </nav>
  );
};

export default Footbar;
