import React from "react";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const Navbar = () => {
  return (
    <>
      <ul
        class="nav nav-pills d-flex justify-content-end bg-lighter "
        id="tabs_2"
        role="tablist"
      >
        <li class="nav-item ">
          <a
            class="nav-link "
            id="home-tab"
            //data-toggle="tab"
            href="#tabs_2_1"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            <span class="nav-link-icon ">
              <CloudDownloadIcon />
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#tabs_2_2"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            <span class="nav-link-icon d-block">
              <LocalAtmIcon />
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="contact-tab"
            data-toggle="tab"
            href="#tabs_2_3"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            <span class="nav-link-icon d-block">
              <NotificationsIcon />
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="contact-tab"
            data-toggle="tab"
            href="#tabs_2_3"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            <span class="nav-link-icon d-block">
              <AccountCircleIcon className="profile_id" /> Temporary
            </span>
          </a>
        </li>
      </ul>
    </>
  );
};
export default Navbar;
