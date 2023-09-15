import logo from '../assets/logo.svg'
import Menu from '../assets/Menu.svg'




const Navbar = () => {

  return (
    <nav className='max-w-6xl flex justify-between items-center py-4 mx-auto'>
      <div className='flex items-center space-x-4'>
        <img
          src={logo}
          alt="homepage logo"
        />
        <p className='font-bold'>MovieBox</p>
      </div>
      <form>
        <input type="text" placeholder="what do you want to watch?" />
      </form>
      <div className='flex space-x-4 items-center'>
        <button className='font-bold'>Sign in</button>
        <img src={Menu} alt="menu-icon" />
      </div>
    </nav>
  );
}

export default Navbar