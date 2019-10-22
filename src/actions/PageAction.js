export const GET_PHOTOS_REQUEST = "GET_PHOTOS_REQUEST"
export const GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS"

export function getPhotos() {
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
          let photo = []
          el.photos.data.forEach(item => {
            photo = item.images.filter(element => element.height === 320)
          })
          fbAlbum.push(photo[0].source)
        })
        dispatch({
          type: GET_PHOTOS_SUCCESS,
          payload: fbAlbum,
        })
      }
    )
  }
}

// по клику на кнопку с номером года
// меняется год в заголовке
// ниже (где должны быть фото),
//  появляется текст "Загрузка..."
// после удачной загрузки*
// убрать текст "Загрузка..."
// отобразить строку:
// "У тебя ХХ фото"
// (зависит, от длины массива, переданного
// в action.payload)
