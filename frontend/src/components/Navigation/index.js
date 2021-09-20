import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <section>
      <header>
        <NavLink exact to="/" ><img
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt="airBnB logo"
          className="header-logo"
        />
        </NavLink>
        <div className="search-bar">
          <textarea
            className="search"
            placeholder="Start your search"
          />
        </div>
        <ul>
          <li className="navigation">
            <NavLink
              className="home-link"
              exact to="/">
                Home
            </NavLink>
            {isLoaded && sessionLinks}
          </li>
        </ul>
      </header>
    </section>
  );
}

export default Navigation;
