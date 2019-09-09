import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
Exercise.propTypes = {
  username: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.number,
  date: PropTypes.string
};

export default Exercise;
