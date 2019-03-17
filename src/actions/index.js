import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

//ACTION CREATOR - vi använder dispatch då vi måste ha middleware för API.

//dispatch actions till reducers :)
export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  //vi dispatchar till fetchPosts
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  //vi hämtar ut varje unik "key" från states med userid som en key.
  userIds.forEach(id => dispatch(fetchUser(id)));
  //vi dispatchar varje user en gång till vår reducers
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  //vi hämtar informationen från apin och sparar det i response.
  dispatch({ type: "FETCH_POSTS", payload: response.data });
  //vi dispatchar dessa till reducers så att de kan göra något med dem.
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

/*export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
})*/

/*export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});*/

/*export const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: response.data });
})*/
