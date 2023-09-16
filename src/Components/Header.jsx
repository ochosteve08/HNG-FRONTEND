/* eslint-disable react/prop-types */
import Navbar from "./Navbar";
import Poster from "../assets/Poster.svg";
import Description from "../assets/Description.svg";
import Pagination from "../assets/Pagination.svg";

const Header = ({ setMovies }) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[90vh]"
      style={{ backgroundImage: `url(${Poster})` }}
    >
      <div className="px-4 lg:px-8 max-w-6xl mx-auto">
        <Navbar setMovies={setMovies} />
        <div className="flex justify-between items-center">
          <div className="w-full xs:w-3/4 md:w-3/5 lg:w-4/5 my-16">
            <img src={Description} alt="hero details" />
          </div>
          <img className="xl:-mr-20" src={Pagination} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
