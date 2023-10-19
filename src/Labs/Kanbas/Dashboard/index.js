import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <hr />
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
