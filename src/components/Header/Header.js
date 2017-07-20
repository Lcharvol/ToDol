import React from 'react';
import { IndexLink, Link } from 'react-router';

import './Header.css';

const Header = () => (
  <div className="header">
       <h1><Link to="/">Todol</Link></h1>
  </div>

);

export default Header;
