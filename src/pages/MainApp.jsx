import { Routes, Route, useNavigate, NavLink } from "react-router-dom";
import { NewsPage } from "./NewsPage";
import { HomePage } from "./HomePage";
import Tooltip from "@mui/material/Tooltip";
import icons from "../assets/svg/svg-icons.svg";
import "../assets/styles/index.scss";
import { TeachPage } from "./TeachPage";
import { PetitionPage } from "./PetitionPage";
import { UserPage } from "./UserPage";

export const MainApp = () => {
  const navigate = useNavigate();
  const onLogOut = () => {
    navigate("/", {
      replace: true,
    });
  };
  return (
    <div className="d-flex containerHome">
      {/* SIDEBAR SECTION */}
      <div className="sideBar">
        <div className="d-flex justify-content-center">
          <h2 className="mt-3">RFK-ADMIN</h2>
        </div>
        <hr />
        <div
          id="body_sidebar"
          className="d-flex flex-column justify-content-between"
        >
          <div className="menu_options">
            <NavLink
              to="home"
              className={({ isActive }) =>
                `btn_menu ${isActive ? "isActive" : ""}`
              }
            >
              <svg>
                <use xlinkHref={`${icons}#svg-home`} />
              </svg>
              <span>Home</span>
            </NavLink>
            <NavLink
              to="news"
              className={({ isActive }) =>
                `btn_menu ${isActive ? "isActive" : ""}`
              }
            >
              <svg>
                <use xlinkHref={`${icons}#svg-news`} />
              </svg>
              <span>News</span>
            </NavLink>
            <NavLink
              to="teach"
              className={({ isActive }) =>
                `btn_menu ${isActive ? "isActive" : ""}`
              }
            >
              <svg>
                <use xlinkHref={`${icons}#svg-books`} />
              </svg>
              <span>Teaching</span>
            </NavLink>
            <NavLink
              to="petition"
              className={({ isActive }) =>
                `btn_menu ${isActive ? "isActive" : ""}`
              }
            >
              <svg>
                <use xlinkHref={`${icons}#svg-get`} />
              </svg>
              <span>Petitions</span>
            </NavLink>
            <NavLink
              to="users"
              className={({ isActive }) =>
                `btn_menu ${isActive ? "isActive" : ""}`
              }
            >
              {" "}
              <svg>
                <use xlinkHref={`${icons}#svg-user`} />
              </svg>
              <span>User</span>
            </NavLink>
          </div>

          <div className="profile">
            <div className="profileGroup">
              <span className="profile_title">PROFILE</span>
              <span className="profile_name">Matt Portana</span>
            </div>
            <Tooltip title="Log Out">
              <svg type="button" id="icon-logOut" onClick={onLogOut}>
                <use xlinkHref={`${icons}#svg-logout`} />
              </svg>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* BODY SECTION */}
      <div className="container_body">
        <div className="container d-flex mt-2">
          <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="teach" element={<TeachPage />} />
            <Route path="petition" element={<PetitionPage />} />
            <Route path="users" element={<UserPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
