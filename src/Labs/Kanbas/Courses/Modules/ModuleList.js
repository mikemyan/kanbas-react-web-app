import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../Database";
import { FiPlus } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { LuMoreVertical } from "react-icons/lu";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  const handleButton = () => {
    console.log("Actually saving assignment TBD in later assignments");
  };
  return (
    <div>
      <div className="d-flex flex-row-reverse mb-3">
        <button onClick={handleButton} className="btn btn-light mx-2">
          <LuMoreVertical style={{ fontSize: "1.2em" }} className="mb-1" />
        </button>
        <button onClick={handleButton} className="btn btn-danger mx-1">
          <FiPlus style={{ fontSize: "1.2em" }} className="me-2 mb-1" />
          Module
        </button>
        <div class="dropdown mx-1">
          <button
            class="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <AiOutlineCheckCircle
              style={{ color: "green", fontSize: "1.2em" }}
              className="me-2 mb-1"
            />
            Dropdown button
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <button onClick={handleButton} className="btn btn-light mx-1">
          View Progress
        </button>
        <button onClick={handleButton} className="btn btn-light mx-1">
          Collapse All
        </button>
      </div>
      <hr />
      <div>
        <ul className="list-group">
          {modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li key={index} className="list-group-item">
                <h3>{module.name}</h3>
                <p>{module.description}</p>
                {module.lessons && (
                  <ul className="list-group">
                    {module.lessons.map((lesson, index) => (
                      <li key={index} className="list-group-item">
                        <h4>{lesson.name}</h4>
                        <p>{lesson.description}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
export default ModuleList;
