import { lazy, Suspense, useState } from "react";
import { FaSearch, FaUserFriends, FaBell, FaSignOutAlt } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

const SearchModal = lazy(() => import("../Modal/Search/Search"));
const NewGroupModal = lazy(() => import("../Modal/NewGroup/NewGroup"));
const NotificationModal = lazy(() =>
  import("../Modal/Notifications/Notifications")
);

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNewGroupOpen, setIsNewGroupOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleSearch = () => {
    // setIsSearchOpen(!isSearchOpen);
    setIsSearchOpen((prev) => !prev);
    setIsNewGroupOpen(false);
    setIsNotificationOpen(false);
  };

  const handleNewGroup = () => {
    // setIsNewGroupOpen(!isNewGroupOpen);

    setIsNewGroupOpen((prev) => !prev);
    setIsSearchOpen(false);
    setIsNotificationOpen(false);
  };

  const handleNotification = () => {
    // setIsNotificationOpen(!isNotificationOpen);
    setIsNotificationOpen((prev) => !prev);
    setIsSearchOpen(false);
    setIsNewGroupOpen(false);
  };

  const handleAddFriend = () => {
    // Logic for adding a friend
  };

  const handleLogout = () => {
    // Logic for logging out
  };

  return (
    <>
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
              onClick={handleNewGroup}
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
            <button
              onClick={handleNotification}
              className="cursor-pointer hover:text-white/80"
            >
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

      {/* Search Modal */}
      {isSearchOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <SearchModal />
        </Suspense>
      )}

      {isNewGroupOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <NewGroupModal />
        </Suspense>
      )}

      {isNotificationOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <NotificationModal />
        </Suspense>
      )}
    </>
  );
};

export default Header;
