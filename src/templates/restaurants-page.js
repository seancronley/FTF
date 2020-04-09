import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'


export const RestaurantsPageTemplate = ({ title, content, contentComponent, subtitle }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <h3 className="subtitle">
                {subtitle}
              </h3>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

RestaurantsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle : PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const RestaurantsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <RestaurantsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        content={post.html}
      />
    </Layout>
  )
}

RestaurantsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default RestaurantsPage

export const restaurantsPageQuery = graphql`
  query RestaurantsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`
