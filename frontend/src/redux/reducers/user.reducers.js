export const username = (state = "", action) => {
  switch (action.type) {
    case "setUsername":
      return action.username;
    default:
      return state;
  }
};

export const password = (state = "", action) => {
  switch (action.type) {
    case "setPassword":
      return action.password;
    default:
      return state;
  }
};

export const userId = (state = null, action) => {
  switch (action.type) {
    case "setUserId":
      return action.userId;
    default:
      return state;
  }
};

export const displayName = (state = "", action) => {
  switch (action.type) {
    case "setDisplayName":
      return action.displayName;
    default:
      return state;
  }
};

export const userEmail = (state = "", action) => {
  switch (action.type) {
    case "setUserEmail":
      return action.userEmail;
    default:
      return state;
  }
};

export const userLink = (state = "", action) => {
  switch (action.type) {
    case "setUserLink":
      return action.userLink;
    default:
      return state;
  }
};
export const loading = (state = false, action) => {
  switch (action.type) {
    case "setLoading":
      return action.loading;
    default:
      return state;
  }
};
export const loginSuccess = (state = false, action) => {
  switch (action.type) {
    case "setLoginSuccess":
      return action.loginSuccess;
    default:
      return state;
  }
};
export const token = (state = "", action) => {
  switch (action.type) {
    case "setToken":
      return action.token;
    default:
      return state;
  }
};
export const error = (state = "", action) => {
  switch (action.type) {
    case "setError":
      return action.error;
    default:
      return state;
  }
};
export const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case "setIsLoggedIn":
      return action.isLoggedIn;
    default:
      return state;
  }
};

export const userOrders = (state = [], action) => {
  switch (action.type) {
    case "setUserOrders":
      return action.userOrders;
    default:
      return state;
  }
};
