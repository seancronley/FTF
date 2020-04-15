import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import logo from '../img/FTF-SuperCropped.png'

export const IndexPageTemplate = ({
  title
}) => {

  function openDonate() {
    window.open('https://www.gofundme.com/f/feed-the-frontline-dmv');
  }

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
                  <div className="columns">
                    <div className="column is-12">
                      <h5 className="has-text-weight-semibold is-size-2">
                        {title}
                      </h5>
                      <p className="text">We are a charity fund whose mission is to feed and support our frontline healthcare workers. We will make food orders at various local restaurants, bakeries, and coffee shops and deliver the food to Washington DC, Virginia, and Maryland hospitals, 
                        COVID-19 testing centers, doctor’s offices, etc...
                      <br/><br/>
                        We hope to support the frontline workers who are taking tremendous risks to save lives and care for those we love, while also supporting local restaurants, who are in dire need of business. 100% of your donation will go towards locally owned restaurants (no large chain restaurants) and then to our healthcare workers.
                      <br/><br/>
                         For any questions or to get involved, please email us at <a href="mailto:feedthefrontlinedmv@gmail.com">feedthefrontlinedmv@gmail.com.</a> or visit our contact page.</p>
                    </div>
                  </div>
                </div>
                <div className="centeredButton">
                  <button class="button button--simple button--border-thick button--text-thick" data-text="Donate Now!" onClick={openDonate}><span>Donate Now!</span></button> 
                </div>
                <div class="gfm-embed" data-url="https://www.gofundme.com/f/feed-the-frontline-dmv/widget/large"></div><script defer src="https://www.gofundme.com/static/js/embed.js"></script>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string
}

const IndexPage = ({ data }) => {
  const {frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
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
        title
      }
    }
  }
`
