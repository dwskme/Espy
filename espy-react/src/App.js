import './styles/style.css';


function App() {
  return (
    <div className="App">
      <aside>
        <ul className="list-none">
          <li>
            <div className="Logo">
              LOGO
            </div>
          </li>
          <div className="Menu">
            <li>
              <h2> Menu</h2>
            </li>
            <li>
              <span>
                Home
              </span>
            </li>
            <li>
              <span>
                Discover
              </span>
            </li>
            <li>
              <span>
                Likes
              </span>
            </li>
            <li>
              <span>
                Recent
              </span>
            </li>
            <li>
              <span>
                Saved
              </span>
            </li>
          </div>
          <div className="Categories bg-bl">
            <li>  <h2> Categories</h2></li>
            <li>
              <span>
                Books
              </span>
            </li>
            <li>
              <span>
                Movies
              </span>
            </li>
            <li>
              <span>
                TV-Series
              </span>
            </li>
          </div>
          <div className="General">
            <li>  <h2> General</h2></li>
            <li>
              <span>
                Settings
              </span>
            </li>
            <li>
              <span>
                Logout
              </span>
            </li>
          </div>
        </ul>
      </aside>
    </div >
  );
}

export default App;
