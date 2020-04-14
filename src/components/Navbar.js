import React from 'react'
import { Link } from 'gatsby'

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
              <div className="navbar-item">
                <Link to="/">
                Home
                </Link>
              </div>
              <div className="navbar-item">
                <Link to="/get-involved">
                Get Involved
                </Link>
              </div>
              <div className="navbar-item">
                 <Link to="/restaurants">
                Restaurants
              </Link>
              </div>
            </div>
            <div className="navigation-right">
              {/* <Link className="navbar-item" to="/about">
                About Us
              </Link> */}
              <div className="navbar-item">
                <Link to="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
