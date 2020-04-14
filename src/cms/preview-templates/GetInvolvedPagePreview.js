import React from 'react'
import PropTypes from 'prop-types'
import { GetInvolvedPageTemplate } from '../../templates/get-involved-page'

const GetInvolvedPagePreview = ({entry}) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <GetInvolvedPageTemplate
        subtitle = {entry.subtitle}
        section1 = {entry.section1}
        section2 = {entry.section2}
        section3 = {entry.section3}
    />
    )
  } else {
    return <div>Loading...</div>
  }
  
}

GetInvolvedPagePreview.propTypes = {
 entry : PropTypes.shape({
   getIn : PropTypes.func,
 })
}

export default GetInvolvedPagePreview
