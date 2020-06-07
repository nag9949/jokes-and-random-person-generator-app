import React from "react";
import JokesApi from "./JokesApi";
import RandomPersonGen from "./RandomPersonGen";

class App extends React.Component {
  render() {
    return (
      <div className="container my-4">
        <JokesApi />

        <div className="mb-4"></div>

        <RandomPersonGen />
      </div>
    );
  }
}

export default App;
