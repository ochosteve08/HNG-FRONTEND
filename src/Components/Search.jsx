import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <form className="flex items-center relative w-1/2 ">
      <input
        className="bg-transparent  p-2 border rounded-md w-full outline-white "
        type="text"
        placeholder="what do you want to watch?"
      />
      <button
        className="absolute right-0 px-3 cursor-pointer hover:scale-150 hover:shadow-lg transform transition-transform"
        type="submit"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default Search;
