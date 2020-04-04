import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import MyComponent from "./MyComponent";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <MyComponent />
    </Provider>
  );
}

export default App;
