import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div className="mx-2">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <hr />
      <h5>Course</h5>
      <div className="float-end me-4">
        <button className="btn btn-success" onClick={addNewCourse}>
          Add
        </button>

        <button className="btn btn-primary ms-2" onClick={updateCourse}>
          Update
        </button>
      </div>
      <div className="form-group row ms-2">
        <div className="col-sm-8 mb-2">
          <input
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
        </div>
        <div className="col-sm-8 mb-2">
          <input
            value={course.number}
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
        </div>
      </div>
      <div className="form-group row ms-2">
        <div className="col-sm-8 mb-2">
          <input
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
        </div>
        <div className="col-sm-8 mb-2">
          <input
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
        </div>
      </div>
      <div className="list-group mx-3">
        {courses.map((course) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
            className="list-group-item"
          >
            <div className="float-end">
              <button
                className="btn btn-warning me-2"
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }}
              >
                Delete
              </button>
            </div>
            {course.name}
          </Link>
        ))}
      </div>
      <div className="wd-dashboard">
        <div className="flex-row row row-cols-2 row-cols-md-3 g-4 wd-dashboard-grid">
          {courses.map((course) => (
            <div class="card col">
              <img
                src="/images/coursecover.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="card-title"
                >
                  <h5>
                    {course.number} {course.name}
                  </h5>
                  <p class="card-text">
                    This is the {course.number} {course.name} SEC 01 Fall 2023
                    [VTL-2-OL] class, please see detailed description.
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
