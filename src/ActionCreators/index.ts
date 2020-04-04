import { actionCreatorTypes } from "./ActionCreatorInterface";
import advanzActionCreator from "./ActionCreatorImplementations/AdvanzActionCreator";
import efaActionCreator from "./ActionCreatorImplementations/EfaActionCreator";
import bnplActionCreator from "./ActionCreatorImplementations/BnplActionCreator";

const actionCreatorsImplementations: { [key: string]: actionCreatorTypes } = {
  ADVANZ: advanzActionCreator,
  EFA: efaActionCreator,
  BNPL: bnplActionCreator,
};

const actionCreator = (product: string): actionCreatorTypes => {
  console.log({ product });
  return actionCreatorsImplementations[product];
};

export default actionCreator;
