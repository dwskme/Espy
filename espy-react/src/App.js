import './styles/style.css';

function App() {
  return (
    <div className="App flex relative min-h-screen">
      {/* mobile menu bar */}
      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        {/* mobile menu logo */}
        <a href='#logo' className=" block p-4 text-white font-bold"> LOGO</a>
        {/* mobile menu buttons */}
        <button className="p-4 focus:outline-none focus:bg-gray-700">
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <aside className="bg-blue-300 text-black-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <a href='#home' className="text-white flex items-center space-x-2 ">
          <span>LOGO</span>
        </a>
        <ul className="list-none list-outside">
          <div className="Menu text-white space-x-4 space">
            <li><h2> Menu</h2></li>
            <li><a href='#home' className="block py-2.5 px-4 hover:text-blue-600">Home</a></li>
            <li><a href='#discover' className="block py-2.5 px-4 hover:text-blue-600">Discover</a></li>
            <li><a href='#likes' className="block py-2.5 px-4 hover:text-blue-600">Likes</a></li>
            <li><a href='#recent' className="block py-2.5 px-4 hover:text-blue-600">Recent</a></li>
            <li><a href='#saved' className="block py-2.5 px-4 hover:text-blue-600">Saved</a></li>
          </div>
        </ul>
      </aside>
      <div className="Content flex-1 text-2xl font-bold">
        Content goes here
      </div>
    </div >
  );
}

export default App;
