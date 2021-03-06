export default function citiesReducer(state, action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case 'LOAD_CITIES':
      return action.payload;
    default:
      return state;
  }
}

