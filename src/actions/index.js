import stream from "../apis/stream";
import history from "../history";
export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  // to get the userId from auth and use it in streams=>WE USED GETSTATE
  const userId = getState().auth.userId;

  const response = await stream.post("/streams", { ...formValues, userId }); //handle
  dispatch({ type: "CREATE_STREAM", payload: response.data });

  /* to do programmatic navigation to get user back to the root route */
  history.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  const response = await stream.get("/streams"); //handle
  dispatch({ type: "FETCH_STREAMS", payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await stream.get(`/streams/${id}`); //handle
  dispatch({ type: "FETCH_STREAM", payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await stream.patch(`/streams/${id}`, formValues); //handle
  dispatch({ type: "EDIT_STREAM", payload: response.data });
  history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  await stream.delete(`/streams/${id}`); //handle
  dispatch({ type: "DELETE_STREAM", payload: id });
  history.push("/");
};
