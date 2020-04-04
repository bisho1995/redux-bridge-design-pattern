import Actions from "../../../Actions";
import { ReducerActionType } from "../../../reducer";

export type UpdateMessageType = (message: string) => ReducerActionType;

const updateMessage: UpdateMessageType = (
  message: string
): ReducerActionType => {
  console.log("BNPL update message");
  return {
    type: Actions.UPDATE_MESSAGE,
    payload: {
      message: `update message from bnplApp ${message}`,
    },
  };
};

export default updateMessage;
