import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
function Assignment5() {
  const API_BASE = process.env.REACT_APP_BASE_API_URL;
  const URL = `${API_BASE}/a5`;
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a
          //href="https://kanbas-node-server-app-2vdz.onrender.com/a5/welcome"
          //href="http://localhost:4000/a5/welcome"
          href={`${URL}/welcome`}
          className="list-group-item"
        >
          Welcome
        </a>
      </div>
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
}
export default Assignment5;
