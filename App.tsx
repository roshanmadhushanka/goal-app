import React from 'react';
import {Provider} from "react-redux";
import 'react-native-get-random-values';
import {store} from "./app/redux/store";
import Main from "./app/container/main.container";

const App: React.FC = () => {
  return (
      <Provider store={store}>
          <Main/>
      </Provider>
  )
}

export default App;