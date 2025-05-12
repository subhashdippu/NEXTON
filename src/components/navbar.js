import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); // initialize navigate

  return (
    <header className="bg-[#0F1623] w-full px-6 py-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="text-white">
        <h1 className="text-2xl font-bold">NEXTON</h1>
        <p className="text-xs text-gray-300"> eCommerce</p>
      </div>

      {/* Search Box */}
      <div className="flex items-center bg-[#F3F3F3] px-4 py-2 rounded-full w-full max-w-md mx-4">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search in products..."
          className="bg-transparent outline-none text-sm w-full"
          onClick={() => navigate("/radha")}
        />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <FaUser className="text-gray-300 text-lg" />
        <div className="relative">
          <FaShoppingCart className="text-gray-300 text-lg" />
          <span className="absolute -top-2 -right-2 bg-sky-400 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            3
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
