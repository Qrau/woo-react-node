export const navState = (state = [], action) => {
  switch (action.type) {
    case "setNavState":
      return action.navState;
    default:
      return state;
  }
};
