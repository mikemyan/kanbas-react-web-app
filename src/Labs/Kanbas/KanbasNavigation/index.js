import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BsSpeedometer } from "react-icons/bs";
import { BiBook } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { BsClockHistory } from "react-icons/bs";
import { PiVideoBold } from "react-icons/pi";
import { FaSignOutAlt } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import "./index.css";

function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];
  const linksToIcons = {
    Account: (
      <FaUserCircle className="wd-kanbas-navigation-icons wd-kanbas-navigation-profile-icon" />
    ),
    Dashboard: <BsSpeedometer className="wd-kanbas-navigation-icons" />,
    Courses: <BiBook className="wd-kanbas-navigation-icons" />,
    Calendar: <FaRegCalendarAlt className="wd-kanbas-navigation-icons" />,
    Inbox: <LiaEnvelopeOpenTextSolid className="wd-kanbas-navigation-icons" />,
    History: <BsClockHistory className="wd-kanbas-navigation-icons" />,
    Studio: <PiVideoBold className="wd-kanbas-navigation-icons" />,
    Commons: <FaSignOutAlt className="wd-kanbas-navigation-icons" />,
    Help: <FaQuestionCircle className="wd-kanbas-navigation-icons" />,
  };
  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linksToIcons[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
