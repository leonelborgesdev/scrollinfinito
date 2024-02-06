import { CARGAR_IMAGES } from "./types";

export const loadMoreImages = (contador_imagenes) => {
  // Incrementar el contador de imágenes visibles
  console.log("contador_imagenes", contador_imagenes);
  return function (dispatch) {
    dispatch({
      type: CARGAR_IMAGES,
      payload: contador_imagenes + 10,
    });
  };
};
