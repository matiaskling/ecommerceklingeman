import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { getFirestore } from "./config/getFirestore";


getFirestore();



ReactDOM.render(<App />, document.getElementById("root"));