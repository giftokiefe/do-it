import React from "react";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { FiCalendar } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { TbCalendarCheck } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

const SideBar = () => {
  const navigate = useNavigate();

  const handleTodayTask = () => {
    navigate("/TodayTask");
  };

  const handleSettings = () => {
    navigate("/Settings");
  };

  return (
    <div className="sidebar">
      <div className="profile-section">
        <img
          src={assets.user_icon}
          alt="profile picture"
          className="profile-img"
        />
        <div className="text-section">
          <p className="app-name">Do-it</p>
          <p className="user-name">Okiefe Gift</p>
        </div>
      </div>
      <hr className="custom-divider" />

      <div className="menu">
        <div className="menu-item" onClick={handleTodayTask}>
          <FiCalendar className="calendar-icon" />
          <p className="menu-text">Today's tasks</p>
        </div>
        <div
          className="menu-item"
          style={{ display: "flex", alignItems: "center" }}
        >
          <p className="task-option">
            <GoDotFill style={{ marginRight: "8px", color: "#FD99AF" }} />
            Personal
          </p>
        </div>

        <div
          className="menu-item"
          style={{ display: "flex", alignItems: "center" }}
        >
          <p className="task-option">
            <GoDotFill
              style={{
                marginRight: "8px",
                color: "#3FD4F4",
              }}
            />
            Freelance
          </p>
        </div>

        <div
          className="menu-item"
          style={{ display: "flex", alignItems: "center" }}
        >
          <p className="task-option">
            <GoDotFill
              style={{
                marginRight: "8px",
                color: "#FAC608",
              }}
            />
            Work
          </p>
        </div>
      </div>

      <div className="scheduled-tasks">
        <div>
          <TbCalendarCheck className="scheduled-tasks-icon" />
          <p>Scheduled tasks</p>
        </div>
      </div>

      <div className="settings">
        <div onClick={handleSettings}>
          <IoSettingsOutline className="settings-icon" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
