import React from "react"
import { connect } from "react-redux"

import Page from "../components/Page"
import { getPhotos } from "../actions/PageAction"
import { getPhotosV2 } from "../actions/PageAction"

function PageContainer({
  page: { year, photos, loading },
  getPhotosAction,
  getPhotosV2Action,
}) {
  return (
    <>
      <Page
        year={year}
        photos={photos}
        getPhotos={getPhotosAction}
        loading={loading}
        getPhotosV2={getPhotosV2Action}
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
    getPhotosV2Action: () => dispatch(getPhotosV2()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer)
