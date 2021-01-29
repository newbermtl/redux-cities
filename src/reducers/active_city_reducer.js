export default function activeCityReducer(state, action) {
  if (state === undefined) {
    return null;
  }
  switch (action.type) {
    case 'ACTIVATE_CITY':
      return action.payload;
    default:
      return state;
  }
}
