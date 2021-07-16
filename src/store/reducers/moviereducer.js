const initialState = {
  movieList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      const movieAdd = [...state.movieList, action.payload];
      return {
        ...state,
        movieList: movieAdd
      };
      break;

    default:
      return state;
  }
};

export default reducer;
