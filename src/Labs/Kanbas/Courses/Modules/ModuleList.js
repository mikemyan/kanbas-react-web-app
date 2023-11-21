import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../Database";
import { FiPlus } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { LuMoreVertical } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import {
  setModules,
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  useEffect(() => {
    client
      .findModulesForCourse(courseId)
      .then((response) => dispatch(setModules(response)));
  }, [courseId]);
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);

  const handleButton = () => {
    console.log("Actually saving assignment TBD in later assignments");
  };
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module._id, module);
    dispatch(updateModule(module));
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
          <li className="list-group-item">
            <button
              className="btn btn-success float-end mt-2"
              onClick={handleAddModule}
            >
              Add
            </button>
            <button
              className="btn btn-primary float-end mt-2 me-2"
              onClick={handleUpdateModule}
            >
              Update
            </button>
            <input
              className="form-control my-2"
              style={{ width: "50%" }}
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }
            />
            <textarea
              className="form-control"
              style={{ width: "50%" }}
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }
            />
          </li>
          {modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li key={index} className="list-group-item">
                <button
                  className="btn btn-success float-end ms-2"
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger float-end"
                  onClick={() => handleDeleteModule(module._id)}
                >
                  Delete
                </button>
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
