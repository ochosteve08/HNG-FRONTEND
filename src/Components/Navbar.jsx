import logo from '../assets/logo.svg'
import Menu from '../assets/Menu.svg'
import Search from './Search';





const Navbar = () => {

  return (
    <nav className=" flex justify-between items-center py-4 mx-auto text-white">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="homepage logo" />
        <p className="font-bold hidden sm:flex">MovieBox</p>
      </div>
      <Search />
      <div className="flex space-x-4 items-center">
        <button className="font-bold hidden sm:flex">Sign in</button>
        <img src={Menu} alt="menu-icon" />
      </div>
    </nav>
  );
}

export default Navbar