import { createContext, useEffect, useReducer } from "react";
import githubReducer from "../reducers/githubReducer";
const GITHUB_URL = "https://api.github.com";
const GITHUB_TOKEN = "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";

const githubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = { users: [], loading: false };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  const fetchUsersByName = async (name) => {
    dispatch({ type: "SET_LOADING" });
    const response = await fetch(`${GITHUB_URL}/search/users?q=${name}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    dispatch({ type: "SET_USERS", payload: data.items });
    dispatch({ type: "UNSET_LOADING" });
  };
  return (
    <githubContext.Provider value={{ state, dispatch, fetchUsersByName }}>
      {children}
    </githubContext.Provider>
  );
};
export default githubContext;
