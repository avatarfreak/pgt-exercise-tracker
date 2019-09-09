import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link
        to={`/edit/${props.exercise._id}`}
        className="button is-info is-rounded is-outlined is-small"
      >
        <span title="edit">
          <i className="fa fa-edit"></i>
        </span>
      </Link>
      |
      <Link
        className="button is-danger is-rounded is-outlined is-small "
        to="#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        <span>
          <i className="fa fa-trash"></i>
        </span>
      </Link>
    </td>
  </tr>
);
export class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: []
    };
    this.deleteExercise = this.deleteExercise.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/exercises/")
      .then(res => {
        this.setState({
          exercises: res.data
        });
      })
      .catch(err => console.log(err));
  }

  deleteExercise(id) {
    axios.delete(`/api/exercises/${id}`).then(() => {
      this.setState({
        exercise: this.state.exercises.filter(data => data._id !== id)
      });
      window.location = "/";
    });
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3 className="title is-h3 has-text-centered">Logged Exercises</h3>
        <table className="table is-hoverable is-fullwidth">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ExercisesList;
