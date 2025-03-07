import { NavLink } from 'react-router-dom';
import './Nabar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="company-name">Root Riot</div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/Dr. Botanist" className={({ isActive }) => (isActive ? 'active' : '')}> Dr. Botanist</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/care" className={({ isActive }) => (isActive ? 'active' : '')}>Plant Care Guide</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/help" className={({ isActive }) => (isActive ? 'active' : '')}>Help Center</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;