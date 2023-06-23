

import { NavLink } from 'react-router-dom';

const NavItem = ({ href, children, toggleDropDown }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'text-green-500 transition  text-sm'
            : 'text-neutral-500/75 hover:text-neutral-500 hover:scale-105 transition  text-sm'
        }
        to={href}
        onClick={toggleDropDown}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;