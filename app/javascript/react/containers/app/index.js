import React from "react";
import { Link } from "react-router-dom";

export const AppContainer = ({ children }) => (
  <div className="app">
    <nav className="navbar navbar-light shadow-sm mb-5">
      <Link to="/" className="navbar-brand mb-0 h1">
        Beacon shop 🚀
      </Link>
    </nav>
    <div className="container">{children}</div>
    <div className="m-5" />
  </div>
);
