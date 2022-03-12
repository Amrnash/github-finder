const githubReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_USER_REPOS":
      return { ...state, userRepos: action.payload };
    case "SET_LOADING":
      return { ...state, loading: true };
    case "UNSET_LOADING":
      return { ...state, loading: false };
    case "CLEAR":
      return { ...state, users: [] };
    default:
      return state;
  }
};
export default githubReducer;
