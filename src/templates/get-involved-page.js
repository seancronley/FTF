import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import firstDonationPhoto from '../img/firstDonationPhoto.jpg'

export const GetInvolvedPageTemplate = ({ subtitle, section1, section2, section3}) => {

  function openDonate() {
    window.open('https://www.gofundme.com/f/feed-the-frontline-dmv');
  }

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-full getInvolved-header">
            <p className="getInvolved-large">Get Involved!</p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-5">
            <div className="getInvolvedBlock">
              <p className="getInvolved-large">{subtitle}</p>
            </div>
            <div className="getInvolvedBlock">
              <p className="getInvolved-large">{section1.header}</p>
              <p className="getInvolved-medium">{section1.text}</p>
            </div>
            <div className="getInvolvedBlock donate-button">
              <button class="button button--simple button--border-thick button--text-thick" data-text="Donate Now!" onClick={openDonate}><span>Donate Now!</span></button> 
            </div>
            <div className="getInvolvedBlock">
              <p className="getInvolved-large">{section2.header}</p>
              <p className="getInvolved-medium">{section2.text}</p>
            </div>
            <div className="getInvolvedBlock-small">
              <p className="getInvolved-medium"><a href="https://www.facebook.com/FeedtheFrontlineDMV">Facebook</a></p>
              <p className="getInvolved-medium"><a href="https://instagram.com\feedthefrontlinedmv">Instagram</a></p>
            </div>
            <div className="getInvolvedBlock">
              <p className="getInvolved-large">{section3.header}</p>
              <p className="getInvolved-medium">{section3.text}</p>
             
            </div>
          </div>
          <div className="column is-6">
            <div className="photoContainer">
              <img className="firstPhoto" src={firstDonationPhoto}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

GetInvolvedPageTemplate.propTypes = {
  subtitle: PropTypes.string,
  section1: PropTypes.shape({
    header: PropTypes.string,
    text: PropTypes.string
  }),
  section2: PropTypes.shape({
    header: PropTypes.string,
    text: PropTypes.string
  }),
  section3: PropTypes.shape({
    header: PropTypes.string,
    text: PropTypes.string
  })
}

const GetInvolvedPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <GetInvolvedPageTemplate
        subtitle={frontmatter.subtitle}
        section1={frontmatter.section1}
        section2={frontmatter.section2}
        section3={frontmatter.section3}
      />
    </Layout>
  )
}

GetInvolvedPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default GetInvolvedPage

export const getInvolvedPageQuery = graphql`
  query GetInvolvedPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        subtitle
        section1 {
          header
          text
        }
        section2 {
          header
          text
        }
        section3 {
          header
          text
        }
      }
    }
  }
`
