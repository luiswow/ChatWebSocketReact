import React, { useEffect, useState } from "react";
import { RoutesHandler } from "../../../../routes/routes";
import { Link, NavLink, Outlet } from "react-router-dom";

export const DashBoard = () => {
  const [accordionSideBar, setaccordionSideBar]: any = useState(false);

  const logic = (bool: boolean) => {
    if (bool) {
      return false;
    }
    return true;
  };

  return (
    <>
      <div>
        {/* Page Wrapper */}
        <div id="wrapper">
          {/* Sidebar */}
          <ul
            className={
              accordionSideBar
                ? `navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled`
                : `navbar-nav bg-gradient-primary sidebar sidebar-dark accordion`
            }
            id="accordionSidebar"
          >
            {/* Sidebar - Brand */}
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="index.html"
            >
              <div className="sidebar-brand-icon ">
                <i className="fas fa-bank" />
              </div>
              <div className="sidebar-brand-text mx-3">
                Bank Accounts Project
              </div>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}

            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">Interface</div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <i className="fas fa-bank" />
                <span>Bank Account</span>
              </a>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Actions</h6>
                  <Link className="collapse-item" to="/bank">
                    Bank Accounts
                  </Link>
                </div>
              </div>
            </li>
            {/* Nav Item - Utilities Collapse Menu */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
              >
                <i className="fas fa-comments" />
                <span>Chat web socket</span>
              </a>
              <div
                id="collapseUtilities"
                className="collapse"
                aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <Link className="collapse-item" to="chat-web-socket">
                    Chat web socket
                  </Link>
                </div>
              </div>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            {/* Nav Item - Pages Collapse Menu */}

            {/* Nav Item - Charts */}

            {/* Nav Item - Tables */}

            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
              <button
                onClick={() => {
                  let data = logic(accordionSideBar);
                  setaccordionSideBar(data);
                }}
                className="rounded-circle border-0"
                id="sidebarToggle"
              />
            </div>
            {/* Sidebar Message */}
          </ul>
          {/* End of Sidebar */}
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              {/* Topbar */}
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/* Sidebar Toggle (Topbar) */}
                <button
                  id="sidebarToggleTop"
                  onClick={() => {
                    let data = logic(accordionSideBar);
                    setaccordionSideBar(data);
                  }}
                  className="btn btn-link d-md-none rounded-circle mr-3"
                >
                  <i className="fa fa-bars" />
                </button>

                {/* Topbar Navbar */}
                <ul className="navbar-nav ml-auto">
                  {/* Nav Item - Search Dropdown (Visible Only XS) */}
                  <li className="nav-item dropdown no-arrow d-sm-none">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="searchDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-search fa-fw" />
                    </a>
                    {/* Dropdown - Messages */}
                    <div
                      className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                      aria-labelledby="searchDropdown"
                    >
                      <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control bg-light border-0 small"
                            placeholder="Search for..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              <i className="fas fa-search fa-sm" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>
                  {/* Nav Item - Alerts */}

                  {/* Nav Item - Messages */}
                </ul>
              </nav>
              {/* End of Topbar */}
              {/* Begin Page Content */}
              <div className="container-fluid">
                {/* Page Heading */}

                {/* Content Row */}
                <RoutesHandler />
              </div>
              {/* /.container-fluid */}
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Luis Reyes </span>
                </div>
              </div>
            </footer>
            {/* End of Footer */}
          </div>
          {/* End of Content Wrapper */}
        </div>
        {/* End of Page Wrapper */}
        {/* Scroll to Top Button*/}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
      </div>
    </>
  );
};
