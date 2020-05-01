export const IS_LOADING = (state, status) => {
  state.isLoading = status;
};

export const SIGN_UP_SUCCESS = state => {
  state.loginStatus = true;
};

export const SIGN_UP_FAIL = state => {
  state.loginStatus = false;
};
export const SIGN_IN_SUCCESS = state => {
  state.loginStatus = true;
};
export const SIGN_IN_FAIL = state => {
  state.loginStatus = false;
};

export const LOGIN_SUCCESS = state => {
  state.loginStatus = true;
};

export const LOGOUT = state => {
  state.loginStatus = false;
};
