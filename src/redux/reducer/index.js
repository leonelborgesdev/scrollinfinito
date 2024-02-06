import { CARGAR_IMAGES } from "../actions/types";
const initialState = {
  images: [
    "https://flagcdn.com/w320/aw.png",
    "https://flagcdn.com/w320/ao.png",
    "https://flagcdn.com/w320/aw.png",
    "https://flagcdn.com/w320/aw.png",
    "https://flagcdn.com/w320/aw.png",
    "https://flagcdn.com/w320/aw.png",
    "https://flagcdn.com/w320/aw.png",
    "https://flagcdn.com/w320/aw.png",
    "https://flagcdn.com/w320/aw.png",
    "https://flagcdn.com/w320/ai.png",
    "https://flagcdn.com/w320/aw.png",
    "https://flagcdn.com/w320/aw.png",
    "https://flagcdn.com/w320/aw.png",
    "https://flagcdn.com/w320/am.png",
    "https://flagcdn.com/w320/aw.png",
    "https://flagcdn.com/w320/aw.png",
    "https://flagcdn.com/w320/aw.png",
    "https://flagcdn.com/w320/aw.png",
    "https://flagcdn.com/w320/aw.png",
    "https://flagcdn.com/w320/aw.png",
    "https://flagcdn.com/w320/be.png",
    "https://flagcdn.com/w320/be.png",
    "https://flagcdn.com/w320/be.png",
    "https://flagcdn.com/w320/be.png",
    "https://flagcdn.com/w320/be.png",
    "https://flagcdn.com/w320/be.png",
    "https://flagcdn.com/w320/be.png",
    "https://flagcdn.com/w320/be.png",
    "https://flagcdn.com/w320/be.png",
    "https://flagcdn.com/w320/be.png",
    "https://flagcdn.com/w320/be.png",
    "https://flagcdn.com/w320/be.png",
    "https://flagcdn.com/w320/be.png",
    "https://flagcdn.com/w320/be.png",
    "https://flagcdn.com/w320/be.png",
  ],
  visibleImagesCount: 10,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARGAR_IMAGES:
      return {
        ...state,
        visibleImagesCount: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
