import { ResetMessageType } from "./actionImplementations/resetMessage";
import { UpdateMessageType } from "./actionImplementations/updateMessage/advanzUpdateMessge";

export type actionCreatorTypes = {
  resetMessage: ResetMessageType;
  updateMessage: UpdateMessageType;
};

export default interface ActionCreatorInterface {
  getActionCreators: () => actionCreatorTypes;
}
