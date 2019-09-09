import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      data: new Date(),
      users: []
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/api/exercises/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          username: response.data.username,
          description: response.data.description,
          duration: response.data.duration,
          date: new Date(response.data.date)
        });
      })
      .catch(error => console.log(error));

    axios
      .get("/api/users/")
      .then(res => {
        if (res.data.length > 0) {
          this.setState({
            users: res.data.map(user => user)
          });
        }
      })
      .catch(err => console.log(err));
  }
  //update username
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  //update description
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  //update duration
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  //update date
  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    const { username, description, duration, date } = this.state;
    e.preventDefault();

    const exercise = {
      username,
      description,
      duration,
      date
    };

    axios
      .post(`/api/exercises/update/${this.props.match.params.id}`, exercise)
      .then(res => {
        window.location = "/";
      });
  }
  render() {
    return (
      <div>
        <h1 className="title">Edit Exercise Log</h1>
        <form onSubmit={this.onSubmit}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left is-expanded">
              <span className="select is-fullwidth">
                <select
                  ref="userInput"
                  required
                  type="text"
                  placeholder="e.g Nelly"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                >
                  {this.state.users.map(user => {
                    return (
                      <option key={user._id} value={user.username}>
                        {user.username}
                      </option>
                    );
                  })}
                </select>
              </span>
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control has-icons-left has-icons-right">
              <input
                required
                className="input"
                type="text"
                placeholder="e.g Swimming"
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-tasks"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Duration (mins)</label>
            <div className="control has-icons-left has-icons-right">
              <input
                required
                className="input"
                type="text"
                placeholder="e.g 60"
                value={this.state.duration}
                onChange={this.onChangeDuration}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-clock"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Date</label>
            <div className="control has-icons-left has-icons-right">
              <DatePicker
                required
                className="input"
                type="text"
                placeholder="e.g date"
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-calendar"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                type="submit"
                value="Edit Exercise Log"
                className="button is-primary"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default EditExercise;
