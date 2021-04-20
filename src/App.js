import React from "react"
import './App.css';
import Slidebar from "./Slidebar"
import Headerr from "./Headerr"
import Feed from "./Feed"
import Widget from "./Widget"
import Login from "./Login"
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">

      {
        !user ? (
          <Login />
        ) : (
          <>
            <Headerr />
            <div className="app_body">
              <Slidebar />
              <Feed />
              <Widget />
            </div>
          </>
        )
      }


    </div>
  );
}

export default App;
