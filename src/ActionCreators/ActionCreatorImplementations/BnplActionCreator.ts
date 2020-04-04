import { actionCreatorTypes } from "../ActionCreatorInterface";
import ActionCreator from "../AbstractActionCreator";
import updateMessage from "../actionImplementations/updateMessage/bnplUpdateMessage";

class BnplActionCreator extends ActionCreator {
  constructor() {
    super({ updateMessage });
  }
  public getActionCreators(): actionCreatorTypes {
    return this.actionCreators;
  }
}

const actionCreator: actionCreatorTypes = new BnplActionCreator().getActionCreators();

export default actionCreator;
