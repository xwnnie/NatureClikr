import { Link } from "react-router-dom";

import "./Footbar.css";

const Footbar = () => {
  return (
    <nav className="footbar">
      <div>Xiaowen Nie</div>
      <Link>
        <i className="fa-brands fa-github" />
      </Link>
      <Link>
        <i className="fa-brands fa-linkedin" />
      </Link>
    </nav>
  );
};

export default Footbar;
