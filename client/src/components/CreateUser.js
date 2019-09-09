import React, { Component } from "react";
import axios from "axios";

export class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      users: []
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkName = this.checkName.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/users")
      .then(res => {
        if (res.data.length > 0) {
          this.setState({
            users: res.data.map(user => user.username)
          });
        }
      })
      .catch(err => {
        return "something went wrong";
      });
  }

  onChangeName(evt) {
    this.setState({
      username: evt.target.value
    });
  }

  onSubmit(evt) {
    evt.preventDefault();
    const user = {
      username: this.state.username
    };

    if (this.checkName(this.state.username)) {
      axios
        .post("/api/users/add", user)
        .then(res => console.log(res.data))
        .catch(err => {
          throw new Error(`something went wrong: ${err}`);
        });
    }
    this.setState({
      username: ""
    });
  }

  checkName(name) {
    let flag;

    if (name.length > 2) {
      if (this.state.users.includes(name)) {
        this.validation = `${name} is not available.`;
        this.status = `is-danger`;
      } else {
        this.validation = `${name} sucessfully added to database.`;
        this.status = `is-success`;
        flag = true;
      }
    } else {
      this.validation = `Minimum characters of length is three.`;
      this.status = `is-danger`;
      flag = false;
    }
    return flag;
  }
  render() {
    return (
      <div>
        <h2 className="title has-text-centered">Create New User</h2>
        <form onSubmit={this.onSubmit}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className={`input ${this.status}`}
                type="text"
                placeholder="e.g Nelly"
                value={this.state.username}
                onChange={this.onChangeName}
                onBlur={this.checkName}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
            <p className={`help ${this.status}`}>{this.validation}</p>
          </div>
          <div className="field">
            <div className="control">
              <button
                type="submit"
                className="button is-info is-rounded is-outlined"
              >
                <span className="icon">
                  <i className="fas fa-user-plus"></i>
                </span>
                <span>Create User</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateUser;
