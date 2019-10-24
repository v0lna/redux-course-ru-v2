export const GET_PHOTOS_REQUEST = "GET_PHOTOS_REQUEST"
export const GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS"

export function getPhotos() {
  return dispatch => {
    dispatch({ type: GET_PHOTOS_REQUEST })

    const fbAlbum = []
    //eslint-disable-next-line no-undef
    FB.api(
      "/me?fields=albums.limit(5){name,count,cover_photo{picture},year,likes,photos.limit(10){picture,images}}",
      response => {
        // FB.api('/me?fields=albums.limit(5){name,count,cover_photo{picture}}', response => {
        console.log(response)

        response.albums.data.forEach(el => {
          let photo = []
          el.photos.data.forEach(item => {
            photo = [
              ...photo,
              ...item.images.filter(element => element.height === 225),
            ]
          })
          photo.forEach(item => {
            // fbAlbums [ { albumName: "Фото обложки", photos: arrayWithPhotoSrc}, {} ]
            // console.log(item)
            fbAlbum.push(item.source)
          })
          // console.log(fbAlbum)
        })
        dispatch({
          type: GET_PHOTOS_SUCCESS,
          payload: fbAlbum,
        })
      }
    )
  }
}

export function getPhotosV2() {
  return dispatch => {
    dispatch({ type: GET_PHOTOS_REQUEST })

    const fbAlbum = []
    //eslint-disable-next-line no-undef
    FB.api(
      "/me?fields=albums.limit(5){name,count,cover_photo{picture},photos.limit(10){picture,images}}",
      response => {
        // FB.api('/me?fields=albums.limit(5){name,count,cover_photo{picture}}', response => {
        // console.log(response)

        response.albums.data.forEach(el => {
          // console.log(el)
          const obj = { albumName: el.name, photos: [] }
          // console.log(obj)
          let photo = []
          el.photos.data.forEach(item => {
            photo = [
              ...photo,
              ...item.images.filter(element => element.height === 225),
            ]
          })
          photo.forEach(item => {
            // fbAlbums [ { albumName: "Фото обложки", photos: arrayWithPhotoSrc}, {} ]
            // console.log(item)
            obj.photos = [...obj.photos, item.source]
          })
          fbAlbum.push(obj)
          console.log(fbAlbum)
          // console.log(obj)
        })
        dispatch({
          type: GET_PHOTOS_SUCCESS,
          payload: fbAlbum,
        })
      }
    )
  }
}
