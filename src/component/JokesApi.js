import React from "react";
import axios from "axios";

class JokesApi extends React.Component {
  state = {
    fact: "i am the joke's generator hehe",
  };

  getFactDataFromApi = async () => {
    const Jokesresponse = await axios.get(
      "https://api.icndb.com/jokes/random/"
    );

    this.setState({ fact: Jokesresponse.data.value.joke });
  };

  render() {
    return (
      <div className=" card">
        <h5 className="card header text-center text-warning p-2">
          Chuck Norris Facts
        </h5>

        <div className="card-body">"{this.state.fact}"</div>

        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={this.getFactDataFromApi}
        >
          Get a new joke
        </button>
      </div>
    );
  }
}

export default JokesApi;
