import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered">
         <p className="getInvolved-large">Contact Us</p>
        </div>
        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <p className="getInvolved-medium">email : feedthefrontlinedmv@gmail.com</p>
              </div>
              <div className="column is-4">
              </div>
              <div className="column is-4 social">
                <p className="getInvolved-medium social-child follow-us">Follow us</p>
                <a className="social-child follow-us" title="facebook" href="https://www.facebook.com/FeedtheFrontlineDMV">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '3em', height: '3em' }}
                  />
                </a>

                <a className="social-child" title="instagram" href="https://instagram.com\feedthefrontlinedmv">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '3em', height: '3em' }}
                  />
                </a>
               
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
