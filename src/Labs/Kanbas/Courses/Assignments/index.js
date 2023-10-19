import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { LuMoreVertical } from "react-icons/lu";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
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
        <button className="btn btn-danger ms-2">+ Assignment</button>
        <button className="btn btn-light ms-2">
          <LuMoreVertical style={{ fontSize: "1.2em" }} className="mb-1" />
        </button>
      </div>
      <div class="wd-home-tabs-float-done"></div>
      <hr className="me-4" />
      <div className="list-group me-4">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
          >
            {assignment.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
