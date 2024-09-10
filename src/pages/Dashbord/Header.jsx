const Header = () => {
    return (
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">CityConnect</div>
  
        {/* User Profile */}
        <div className="flex items-center space-x-4">
          <span>Welcome, User</span>
          <img
            src="https://via.placeholder.com/40"
            alt="User Profile"
            className="w-10 h-10 rounded-full border-2 border-gray-200"
          />
        </div>
      </header>
    );
  };
  
  export default Header;
  