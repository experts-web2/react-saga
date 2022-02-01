const initialState = {
  name: "Hello World",
};
export default function user(state = initialState, action) {
  switch (action.type) {
    case "CHANGENAME":
      return {
        ...state,
        name: "Hi World",
      };
    default:
      return state;
  }
}
