import React from "react";
import { TbFileImport } from "react-icons/tb";
import { RxExit } from "react-icons/rx";
import { BiTargetLock } from "react-icons/bi";
import { ImStatsBars } from "react-icons/im";
import { GrAnnounce } from "react-icons/gr";
import { IoNotificationsOutline } from "react-icons/io5";
import { PiNumberCircleFiveFill } from "react-icons/pi";
function Status() {
  return (
    <div>
      <div className="d-flex list-group mt-3" style={{ width: 250 }}>
        <button className="btn btn-light text-start mb-2">
          <TbFileImport className="me-2" />
          Import Existing Content
        </button>
        <button className="btn btn-light text-start mb-2">
          <RxExit className="me-2" />
          Import from commons
        </button>
        <button className="btn btn-light text-start mb-2">
          <BiTargetLock className="me-2" />
          Choose Home Page
        </button>
        <button className="btn btn-light text-start mb-2">
          <ImStatsBars className="me-2" />
          View Course Stream
        </button>
        <button className="btn btn-light text-start mb-2">
          <GrAnnounce className="me-2" />
          New Announcement
        </button>
        <button className="btn btn-light text-start mb-2">
          <ImStatsBars className="me-2" />
          New Analytics
        </button>
        <button className="btn btn-light text-start mb-2">
          <IoNotificationsOutline className="me-2" />
          View Course Notifications
        </button>
      </div>
      <h3>To Do</h3>
      <hr />
      <button className="btn bg-white text-start mb-2" style={{ color: "red" }}>
        <PiNumberCircleFiveFill className="me-2" />
        Grade A1 - ENV + HTML
      </button>
    </div>
  );
}
export default Status;
