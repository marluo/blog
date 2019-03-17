import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
//vi hookar upp vår reducer postsReducer med hela våra "global state genom att importera den här"

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});
