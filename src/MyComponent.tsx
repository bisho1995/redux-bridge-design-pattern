import React from "react";
import { connect } from "react-redux";
import { ReducerState } from "./reducer";
import products from "./common/constants/products";
import Actions from "./ActionCreators";

interface MyComponentProps {
  message: string;
  updateMessage: (message: string) => any;
}

const MyComponent: React.FC<MyComponentProps> = ({
  message,
  updateMessage,
}) => {
  return (
    <>
      <select
        id="products"
        onChange={({ target: { value } }) => updateMessage(value)}
      >
        {products.map(({ value, text }) => (
          <option value={value} key={value}>
            {text}
          </option>
        ))}
      </select>
      <p style={{ display: "inline-block", marginLeft: "20px" }}>
        <b>Message: </b>
        {message}
      </p>
    </>
  );
};

const mapStateToProps = ({ message }: ReducerState) => ({ message });

// todo: figure out this any issue
const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  updateMessage: (message: string) =>
    dispatch(Actions(message).updateMessage(message)),
});

// todo: find out what the fuck is this issue
// todo: add type annotation for connect
// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
