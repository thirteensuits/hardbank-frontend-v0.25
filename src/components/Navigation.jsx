import React from "react";
import { NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import store4 from "../redux/store4";
import Login from '../functions/Login'
import img from './images/hardbank.jpg';
import { NavHashLink as Link } from 'react-router-hash-link';




function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container navbar_header">
          <NavLink className="navbar-brand" to="/">
          <img src={img} />
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <Link className="nav-link" to='/Demo#buy'>Buy</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Demo#claim">
                  Claim
                </Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/owner">
                  Owner
                </NavLink>
              </li>
              &nbsp;&nbsp;&nbsp;
              <li className="nav-item">
              <Provider store={store4}>
              <Login />
              </Provider>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;