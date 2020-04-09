import React from 'react'
import PropTypes from 'prop-types'
import { RestaurantsPageTemplate } from '../../templates/restaurants-page'

const RestaurantsPagePreview = ({ entry, widgetFor }) => (
  <RestaurantsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

RestaurantsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default RestaurantsPagePreview
