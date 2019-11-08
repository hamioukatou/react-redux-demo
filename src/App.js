import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
// import CakeContainer from "./components/CakeContainer";
// import CakeHookContainer from "./components/CakeHookContainer";
// import IcecreamContainer from "./components/IcecreamContainer";
import CombinedContainer from "./components/CombinedContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <h1>Ice cream : Using Hooks</h1>
        <IcecreamContainer />
        <h1>Cake : Using Hooks</h1>
        <CakeHookContainer />
        <h1>Cake : Without ssing Hooks</h1>
        <CakeContainer /> */}
        <CombinedContainer />
      </div>
    </Provider>
  );
}

export default App;
