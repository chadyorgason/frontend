import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopBanner from "./Blah";
import MovieList from "./Movies";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <ul className="list-group list-group-flush">
          <>
            <Link to="/" className="list-group-item">
              Home
            </Link>
          </>
          <>
            <Link to="/podcast" className="list-group-item">
              Podcast
            </Link>
          </>
          <>
            <Link to="/movies" className="list-group-item">
              Movies List
            </Link>
          </>
        </ul>
      </div>
      <div className="row">
        <div className="col-2">
          <img src="./JoelHiltonHeadshot (1).jpg" alt="companyLogo" />
        </div>
        <div className="col align-self-center text-start"></div>
      </div>
      <div>
        <p>This is Joel's Movie Collection. Browse using the links</p>
      </div>
    </>
  );
}

export default Home;
