import Actions from "../Actions";

interface ReducerStateAnnotation {
  message: string;
}

const initialState: ReducerState = {
  message: "So did you learn bridge pattern?",
};

interface ReducerAction {
  type: string;
  payload: { [key: string]: string };
}

const reducer = (
  state = initialState,
  action: ReducerAction
): ReducerStateAnnotation => {
  const { type, payload } = action;
  switch (type) {
    case Actions.UPDATE_MESSAGE:
    case Actions.RESET_MESSAGE:
      return { ...state, ...payload };
    default:
      return { ...state };
  }
};

export default reducer;
export type ReducerState = ReducerStateAnnotation;
export type ReducerActionType = ReducerAction;
