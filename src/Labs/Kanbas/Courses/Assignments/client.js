import axios from "axios";
const COURSES_URL =
  "https://kanbas-node-server-app-2vdz.onrender.com/api/courses";
const ASSIGNMENTS_URL =
  "https://kanbas-node-server-app-2vdz.onrender.com/api/assignments";
export const findAssignmentsForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
};
export const createAssignment = async (courseId, assignment) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};
export const deleteAssignment = async (assignmentId) => {
  const response = await axios.delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
  return response.data;
};
export const updateAssignment = async (assignmentId, assignment) => {
  const response = await axios.put(
    `${ASSIGNMENTS_URL}/${assignmentId}`,
    assignment
  );
  return response.data;
};
