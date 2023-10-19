import ModuleList from "../Modules/ModuleList";
import Status from "./status";

function Home() {
  return (
    <div className="row">
      <div className="col-8">
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div className="col-3 me-1">
        <h2>Status</h2>
        <Status />
      </div>
    </div>
  );
}
export default Home;
