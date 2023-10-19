import db from "../../Database";
import { useParams } from "react-router-dom";
import { FiFilter } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { FaFileImport } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import "./index.css";
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  return (
    <div>
      <h1>Grades</h1>
      <div className="float-end me-4">
        <button className="btn btn-light ms-2">
          <FaFileImport />
          Import
        </button>
        <button
          className="dropdown btn btn-light dropdown-toggle ms-2"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaFileExport />
          Export
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
        <button className="btn btn-light ms-2">
          <IoMdSettings />
        </button>
      </div>
      <div className="wd-home-tabs-float-done"></div>
      <hr className="me-4" />
      <div className="container text-start my-2 me-4 float-start">
        <div className="row">
          <div className="col">
            <label for="text-fields-student-name">
              <b>Student Names</b>
            </label>
          </div>
          <div className="col">
            <label for="text-fields-assignment-name">
              <b>Assignment Names</b>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              className="form-control position-absolute w-25 px-4"
              id="text-fields-student-name"
              placeholder="Search Students"
            />
            <BsSearch className="position-relative ms-2 mt-2" />
          </div>
          <div className="col">
            <input
              className="form-control position-absolute w-25 px-4"
              id="text-fields-assignment-name"
              placeholder="Search Assignments"
            />
            <BsSearch className="position-relative ms-2 mt-2" />
          </div>
        </div>
      </div>

      <div className="wd-home-tabs-float-done"></div>

      <button className="btn btn-light mx-2 my-4" type="button">
        <FiFilter style={{ fontSize: "1.2em" }} className="mb-1" />
        Apply Filters
      </button>

      <div className="table-responsive me-4">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
