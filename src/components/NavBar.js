import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';

const NavBar = props => {
  return(
    <nav className="navbar has-background-light" role="navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <span className="icon has-text-danger">
            <FontAwesomeIcon icon={faMap}/>
          </span>
          <strong>Place Finder</strong>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
