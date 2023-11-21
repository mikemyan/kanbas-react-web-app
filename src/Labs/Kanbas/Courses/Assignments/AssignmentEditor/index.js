import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} from "../assignmentsReducer";
import * as client from "../client";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const dispatch = useDispatch();
  let isNewAssignment = assignmentId === "AddNew";
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    dispatch(addAssignment({ ...assignment, course: courseId }));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleUpdate = () => {
    console.log("Actually saving assignment TBD in later assignments");
    dispatch(updateAssignment({ assignment }));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const handleAddAssignment = () => {
    client.createAssignment(courseId, assignment).then((assignment) => {
      dispatch(addAssignment(assignment));
    });
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const handleUpdateAssignment = async () => {
    const status = await client.updateAssignment(assignment._id, assignment);
    dispatch(updateAssignment(assignment));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  useEffect(() => {
    if (isNewAssignment) {
      const currentAssignment = {
        title: "New Assignment",
        description: "New Assignment Description",
        points: "98",
        due: "2021-01-15",
        from: "2021-01-01",
        until: "2021-02-01",
      };
      dispatch(selectAssignment(currentAssignment));
    } else {
      const currentAssignment = assignments.find((a) => a._id === assignmentId);
      dispatch(selectAssignment(currentAssignment));
    }
  }, [assignmentId]);
  return (
    <div>
      <h2>Assignment Name</h2>
      <input
        value={assignment.title}
        style={{ width: "95%" }}
        placeholder="Please Enter Assignment Name"
        className="form-control mb-2 me-2"
        onChange={(e) =>
          dispatch(selectAssignment({ ...assignment, title: e.target.value }))
        }
      />
      <textarea
        className="form-control mb-2 me-2"
        value={assignment.description}
        style={{ width: "95%" }}
        placeholder="Please Enter Assignment Description"
        onChange={(e) =>
          dispatch(
            selectAssignment({ ...assignment, description: e.target.value })
          )
        }
      />
      <div class="row">
        <div class="col-4 text-end pt-2">
          <label for="text-fields-points">Points</label>
        </div>
        <div class="col-6 text-start mb-2">
          <input
            class="form-control"
            id="text-fields-points"
            type="number"
            value={assignment.points}
            onChange={(e) =>
              dispatch(
                selectAssignment({ ...assignment, points: e.target.value })
              )
            }
          />
        </div>
      </div>
      <div class="row">
        <div class="col-4 text-end pt-2">Assign</div>
        <div class="col-6 text-start border border-secondary p-3 pb-0 mt-2">
          <label for="text-fields-due">
            <b>Due</b>
          </label>
          <input
            class="form-control"
            type="date"
            id="text-fields-due"
            value={assignment.due}
            onChange={(e) =>
              dispatch(selectAssignment({ ...assignment, due: e.target.value }))
            }
          />

          <div class="container text-start my-2">
            <div class="row">
              <div class="col">
                <label for="text-fields-available-from">
                  <b>Available from</b>
                </label>
              </div>
              <div class="col">
                <label for="text-fields-until">
                  <b>Until</b>
                </label>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <input
                  class="form-control"
                  type="date"
                  id="text-fields-available-from"
                  value={assignment.from}
                  onChange={(e) =>
                    dispatch(
                      selectAssignment({ ...assignment, from: e.target.value })
                    )
                  }
                />
              </div>
              <div class="col">
                <input
                  class="form-control"
                  type="date"
                  id="text-fields-until"
                  value={assignment.until}
                  onChange={(e) =>
                    dispatch(
                      selectAssignment({ ...assignment, until: e.target.value })
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="float-end">
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-danger me-2"
        >
          Cancel
        </Link>
        <button
          onClick={
            isNewAssignment ? handleAddAssignment : handleUpdateAssignment
          }
          className="btn btn-success me-2"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;
