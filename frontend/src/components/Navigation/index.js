import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import UploadPhotoModal from "../UploadPhotoModal";
import { FaCloudUploadAlt } from "react-icons/fa";
import { GiMountainCave } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

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
        <form id="nav-search">
          <input type="text" />
          <button>
            <FaSearch />
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
