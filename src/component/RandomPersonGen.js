import React from "react";
import axios from "axios";

class RandomPersonGen extends React.Component {
  state = { person: null, loading: true };

  handleClick = async () => {
    const resp = await axios.get("https://randomuser.me/api/");

    this.setState({ person: resp.data.results[0], loading: false });
  };

  render() {
    if (this.state.loading || !this.state.person) {
      return (
        <div>
          <div>didn't get a person</div>
          <button className="btn btn-info my-4" onClick={this.handleClick}>
            Clicke me to get Random Person Details....
          </button>
        </div>
      );
    }
    if (!this.state.loading || this.state.person) {
      return (
        <div className="my-3">
          <div className="my-3">GOT the person...</div>
          <div className="card">
            <div className="card-header text-center">
              gender: {this.state.person.gender}
            </div>
            <div className="card-body text-center">
              <img
                className="rounded-circle "
                src={this.state.person.picture.large}
                alt="random person pic"
              />
              <div className="mt-3">title : {this.state.person.name.title}</div>
              <div>firstName : {this.state.person.name.first}</div>
              <div>lastName: {this.state.person.name.last}</div>
              <div>country : {this.state.person.location.country}</div>
              <div>city : {this.state.person.location.city}</div>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-info my-4" onClick={this.handleClick}>
                Clicke me to get the Next Random Person Details
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default RandomPersonGen;
