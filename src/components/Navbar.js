import React from 'react'
import { Link } from 'gatsby'
import dcLogo from '../img/smallLogo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  render() {
    return (
      <div id="branding" role="branding">
        <div className="container">
          <div className="navigation">
            <div className="navigation-left">
              <Link className="navbar-item dcLogo" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/donate">
                Donate
              </Link>
              <Link className="navbar-item" to="/restaurants">
                Restaurants
              </Link>
            </div>
            <div className="navigation-right">
              <Link className="navbar-item" to="/about">
                About Us
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
