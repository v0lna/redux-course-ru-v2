export const GET_PHOTOS_REQUEST = "GET_PHOTOS_REQUEST"
export const GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS"

export function getPhotos(year) {
  return dispatch => {
    dispatch({ type: GET_PHOTOS_REQUEST, payload: year })

    setTimeout(() => {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: ["1", "2", "3"],
      })
    }, 1500)
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
