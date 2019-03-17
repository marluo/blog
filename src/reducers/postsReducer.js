export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
  //Keep a pure function, only use arguments that use their input
  //vi returnerar staten om den inte motsvarar "FETCH_POSTS"
};
