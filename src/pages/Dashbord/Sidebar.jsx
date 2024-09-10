const Sidebar = () => {
    return (
      <aside className="bg-gray-900 text-white w-64 h-screen p-4 space-y-6">
        <nav>
          <ul className="space-y-4">
            <li className="hover:bg-gray-700 p-2 rounded">
              <a href="#">Overview</a>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              <a href="#">Reports</a>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              <a href="#">Department Collaborations</a>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              <a href="#">Notifications</a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  };

export default Sidebar;  