import db from "../../Kanbas/Database";
import { FiMenu } from "react-icons/fi";
import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
  Link,
} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [empty, kanbas, classes, id, screen] = pathname.split("/");
  //const URL = "https://kanbas-node-server-app-2vdz.onrender.com/api/courses";
  //const URL = "http://localhost:4000/api/courses";
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  // const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <nav className="wd-breadcrumb-divider" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link
              to={`/Kanbas/Courses/${courseId}`}
              className={`list-group-item wd-breadcrumb`}
            >
              {course.number}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {screen}
          </li>
        </ol>
      </nav>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
            overflowX: "hidden",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h2>Piazza</h2>} />
            <Route path="Zoom Meetings" element={<h2>Zoom Meetings</h2>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Quizzes" element={<h2>Quizzes</h2>} />
            <Route path="Grades" element={<Grades />} />
            <Route path="People" element={<h2>People</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
