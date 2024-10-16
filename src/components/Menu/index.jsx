import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <h1>Interactive Projects</h1>
      <ul>
        <li>
          <Link to="/infinite-grid">Infinite Grid</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

