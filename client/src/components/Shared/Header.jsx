import { FaSearch, FaUserFriends, FaBell, FaSignOutAlt } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

const Header = () => {
  const handleSearch = () => {
    // Logic for search functionality
  };

  const handleAddGroup = () => {
    // Logic for adding a group
  };

  const handleAddFriend = () => {
    // Logic for adding a friend
  };

  const handleLogout = () => {
    // Logic for logging out
  };

  return (
    <header className="bg-red-400 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Title */}
        <h1 className="text-sm font-medium">Chattu</h1>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4 text-lg">
          <button
            onClick={handleSearch}
            className="cursor-pointer hover:text-white/80"
          >
            <FaSearch />
          </button>
          <button
            onClick={handleAddGroup}
            className="cursor-pointer text-white hover:text-white/80"
          >
            <FaPlusCircle color="#fffffffc" />
          </button>
          <button
            onClick={handleAddFriend}
            className="cursor-pointer hover:text-white/80"
          >
            <FaUserFriends />
          </button>
          <button className="cursor-pointer hover:text-white/80">
            <FaBell />
          </button>
          <button
            onClick={handleLogout}
            className="cursor-pointer hover:text-white/80"
          >
            <FaSignOutAlt />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
