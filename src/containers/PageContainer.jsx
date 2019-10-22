import React from "react"
import { connect } from "react-redux"

import Page from "../components/Page"
import { getPhotos } from "../actions/PageAction"

function PageContainer({ page: { year, photos, loading }, getPhotosAction }) {
  return (
    <>
      <Page
        year={year}
        photos={photos}
        getPhotos={getPhotosAction}
        loading={loading}
      ></Page>
    </>
  )
}

const mapStateToProps = store => {
  return {
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: () => dispatch(getPhotos()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer)
