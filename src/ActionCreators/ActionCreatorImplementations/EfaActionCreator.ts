import { actionCreatorTypes } from "../ActionCreatorInterface";
import ActionCreator from "../AbstractActionCreator";
import updateMessage from "../actionImplementations/updateMessage/efaUpdateMessage";

class EfaActionCreator extends ActionCreator {
  constructor() {
    super({ updateMessage });
  }
  public getActionCreators(): actionCreatorTypes {
    return this.actionCreators;
  }
}

const actionCreator: actionCreatorTypes = new EfaActionCreator().getActionCreators();

export default actionCreator;
