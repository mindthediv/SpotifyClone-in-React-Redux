import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-2">
      <nav
        className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="nav-container">
          <Link to={"/"}>
            <img
              src="../public/logo/Spotify_Logo.png"
              alt="Spotify_Logo"
              width="131"
              height="40"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <a className="nav-item nav-link" href="index.html">
                    <i className="fas fa-home fa-lg"></i>&nbsp; Home
                  </a>
                </li>
                <li>
                  <a className="nav-item nav-link" href="#">
                    <i className="fas fa-book-open fa-lg"></i>&nbsp; Your
                    Library
                  </a>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div
                      className="input-group-append"
                      style={{ marginBottom: "4%" }}
                    >
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon1"
                        // onClick="search()"
                      >
                        GO
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="nav-btn">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn" type="button">
            Login
          </button>
          <div>
            <a href="#" className="text-decoration-none">
              Cookie Policy
            </a>
            |
            <a href="#" className="text-decoration-none">
              {" "}
              Privacy
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Sidebar;
