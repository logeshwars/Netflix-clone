import { SignalCellularNullTwoTone } from "@material-ui/icons";

export const initialstate = {
  movie: null,
  top: null,
  left: SignalCellularNullTwoTone,
  genre: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_POPUP":
      return {
        ...state,
        movie: action.movie,
         left: action.left,
      };
      case "SET_RECT":
      return {
        ...state,
        top: action.top,
       
      };
    case "SET_GENRE":
      return {
        ...state,
        genre: action.genre,
      };
    default:
      return { state };
  }
};
