import React from 'react';
import {Provider} from "react-redux";
import 'react-native-get-random-values';
import {store} from "./app/redux/store";
import Main from "./app/container/main.container";
import {StatusBar} from "expo-status-bar";

const App: React.FC = () => {
  return (

      <Provider store={store}>
          <StatusBar style='light'/>
          <Main/>
      </Provider>
  )
}

export default App;