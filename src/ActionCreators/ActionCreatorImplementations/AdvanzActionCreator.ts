import { actionCreatorTypes } from "../ActionCreatorInterface";
import ActionCreator from "../AbstractActionCreator";
import updateMessage from "../actionImplementations/updateMessage/advanzUpdateMessge";

class AdvanzActionCreator extends ActionCreator {
  constructor() {
    super({ updateMessage });
  }
  public getActionCreators(): actionCreatorTypes {
    return this.actionCreators;
  }
}

const actionCreator: actionCreatorTypes = new AdvanzActionCreator().getActionCreators();

export default actionCreator;
