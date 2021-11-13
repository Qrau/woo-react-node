export const token = (state = "", action) => {
  switch (action.type) {
    case "setToken":
      return action.token;
    default:
      return state;
  }
};
