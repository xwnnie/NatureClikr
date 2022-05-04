import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import UploadPhotoModal from "../UploadPhotoModal";

import { GiMountainCave } from "react-icons/gi";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const history = useHistory();
  
  const sessionUser = useSelector((state) => state.session.user);

  const [searchQuery, setSearchQuery] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push(`/search/${searchQuery}`);
  }

  let sessionLinks;
  if (sessionUser) {
    //show my page, upload picture, 
    sessionLinks = (
      <>
        <NavLink exact to="/" id="explore-link">
          Explore
        </NavLink>
        <NavLink to="/my" id="nav-you-link">
          You
        </NavLink>
        <form id="nav-search" onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <UploadPhotoModal />
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    //login, signup buttons
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
      <nav className="navbar">
        <div className="navbar-logo">
          <GiMountainCave />
          <span> NatureClikr</span>
        </div>
        {isLoaded && sessionLinks}
      </nav>

  );
}

export default Navigation;
