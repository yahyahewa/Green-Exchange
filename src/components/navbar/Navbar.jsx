
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import Logo from "./Logo";
import DropDownMenu from "./DropDownMenu";


const LINKS = [
  { title: 'Home', path: '/' },
  { title: 'Items', path: '/Items' },
  { title: 'About', path: '/foundItems' },
  { title: 'F&Q', path: '/faq' },
  
];

const NavbarComponent = ({ toggleDropDown }) => {
  /
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light flex justify-between items-center px-10 py-4 lg:max-w-[85rem] mx-auto ">
      <Link to="/" className="font-bold  text-md text-neutral-600">
        <Logo/>
      </Link>

      <div className="md:hidden" onClick={toggleDropDown}>
       <DropDownMenu/>
      </div>

      <div className=" hidden md:block">
        <div className="flex items-center sm:gap-8 md:gap-10 lg:gap-24 2xl:gap-32">
          <ul className="flex flex-row justify-around gap-5 md:gap-8 lg:gap-12 font-medium text-neutral-500">
            {LINKS.map((link, index) => (
              <NavItem key={index} href={link.path}>
                {link.title}
              </NavItem>
            ))}
          </ul>
          <button className='btn btn-primary py-1  rounded-md btn-md bg-green-700/80 text-neutral-100 border-0  hover:bg-green-700 transition-all'>Get Started</button>
        
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;