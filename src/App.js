import React from "react";
import {Provider} from 'react-redux';
import Counter from "./Component/Counter";
function App() {
  return (
     <Provider>
      <Counter/>
     </Provider>
  );
}

export default App;
