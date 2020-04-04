import Actions from "../../Actions";
import { ReducerActionType } from "../../reducer";

export type ResetMessageType = () => ReducerActionType;

const resetMessage: ResetMessageType = (): ReducerActionType => ({
  type: Actions.UPDATE_MESSAGE,
  payload: {
    message: "",
  },
});

export default resetMessage;
