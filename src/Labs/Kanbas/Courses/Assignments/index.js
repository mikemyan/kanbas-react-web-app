import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./index.css";
import { LuMoreVertical } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import {
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} from "./assignmentsReducer";
import * as client from "./client";

function Assignments() {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const dispatch = useDispatch();
  useEffect(() => {
    client
      .findAssignmentsForCourse(courseId)
      .then((assignments) => dispatch(setAssignments(assignments)));
  }, [courseId]);
  const handleDeleteAssignment = (assignmentId) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };

  return (
    <div>
      <h2>Assignments for course {courseId}</h2>
      <div className="mb-3 float-start w-25">
        <input
          type="text"
          className="form-control"
          placeholder="Search for Assignment"
        />
      </div>
      <div className="float-end me-4">
        <button className="btn btn-light ms-2">+ Group</button>
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments/AddNew`}
          className="btn btn-danger ms-2"
        >
          + Assignment
        </Link>
        <button className="btn btn-light ms-2">
          <LuMoreVertical style={{ fontSize: "1.2em" }} className="mb-1" />
        </button>
      </div>
      <div class="wd-home-tabs-float-done"></div>
      <hr className="me-4" />
      <div className="list-group me-4">
        {courseAssignments.map((assignment) => (
          <div>
            <div
              key={assignment._id}
              className="list-group-item"
              onClick={() => {
                dispatch(selectAssignment(assignment));
                navigate(
                  `/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`
                );
              }}
            >
              {assignment.title}
            </div>
            <button
              className="btn btn-danger my-2 me-2 float-end"
              onClick={() => handleDeleteAssignment(assignment._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
