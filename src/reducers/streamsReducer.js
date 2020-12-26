import _ from "lodash";
export default (state = {}, actions) => {
  // actions.type is coming from apis
  switch (actions.type) {
    //   _.MAPKEYS-->TO CONVERT THE OBJ INTO ARRAY
    case "FETCH_STREAMS":
      return { ...state, ..._.mapKeys(actions.payload, "id") };
    //will find "id" in object and assign the value of tht id
    case "FETCH_STREAM":
      return { ...state, [actions.payload.id]: actions.payload }; //key interpolation
    case "EDIT_STREAM":
      return { ...state, [actions.payload.id]: actions.payload };
    case "CREATE_STREAM":
      return { ...state, [actions.payload.id]: actions.payload };
    case "DELETE_STREAM":
      // OMIT WILL RETURN NEW OBJ OF STATE BY DEFAULT
      return _.omit(state, actions.payload);
    default:
      return state;
  }
};
