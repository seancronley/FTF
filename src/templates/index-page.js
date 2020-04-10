import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import logo from '../img/FTF-SuperCropped.png'
import Content, { HTMLContent } from '../components/Content'

export const IndexPageTemplate = ({heading, mainpitch, description}) => {
  function openDonate() {
    window.open('https://www.gofundme.com/f/feed-the-frontline-dmv');
  };

  return (
    <div>
      <div className="blue">
        <div className="center-logo">
          <img src={logo} alt="website logo" className="mainLogo"/>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h5 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h5>
                      <p>We will make food orders at various local restaurants, bakeries, and coffee shops and deliver the food to Washington DC, Virginia, and Maryland hospitals, COVID-19 testing centers, and doctor’s offices.
                      <br/><br/>
                      We hope to to support the workers who are taking tremendous risks to be on the frontlines who are saving lives and caring for those we love, while supporting local restaurants, who are in dire need of business. 100% of your donation will go towards locally owned restaurants (no large chain restaurants) and then to our healthcare workers.
                      <br/><br/>
                      Think of the money you would spend on a dinner out, on a fancy cocktail at happy hour, or on your morning coffee - donate that money to us, and we'll make sure it gets to frontline workers who need it. Any amount will make a huge difference in supporting our frontline workers and community!
                      <br/><br/>
                      For any questions or to get involved, please email us at <a href="mailto:feedthefrontlinedmv@gmail.com">feedthefrontlinedmv@gmail.com.</a></p>
                    </div>
                  </div>
                </div>
                <div className="centeredButton">
                  <div class="box bg-3">
                    <button class="button button--simple button--border-thick button--text-thick" data-text="Donate!" onClick={openDonate}><span>Donate!</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
      heading={frontmatter.heading}
      mainpitch={frontmatter.mainpitch}
      description={frontmatter.description}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        mainpitch {
          title
          description
        }
        description
      }
    }
  }
`
