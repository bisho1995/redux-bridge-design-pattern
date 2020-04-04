import ActionCreatorInterface, {
  actionCreatorTypes,
} from "./ActionCreatorInterface";
import resetMessageFn from "./actionImplementations/resetMessage";
import updateMessageFn from "./actionImplementations/updateMessage/bnplUpdateMessage";

const resetMessage = resetMessageFn;
const updateMessage = updateMessageFn;

abstract class AbstractActionCreator implements ActionCreatorInterface {
  protected actionCreators: actionCreatorTypes;

  constructor(newActionCreators: Partial<actionCreatorTypes>) {
    this.actionCreators = {
      resetMessage,
      updateMessage,
      ...newActionCreators,
    };
  }
  public abstract getActionCreators(): actionCreatorTypes;
}

export default AbstractActionCreator;
