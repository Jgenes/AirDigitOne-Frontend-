import React from "react";

const DashboardWrapper = ({
  children,
  activePage = "dashboard",
  isSidenavOpen,
  toggleSidenav,
}) => {
  return (
    <div
      className={`g-sidenav-show bg-gray-100 ${
        isSidenavOpen ? "g-sidenav-pinned" : ""
      }`}
    >
      {/* ================= SIDEBAR ================= */}
      <aside
        className="sidenav navbar navbar-vertical navbar-expand-xs border-radius-lg fixed-start ms-2 bg-white my-2"
        id="sidenav-main"
        style={{ zIndex: 1050 }}
      >
        {/* BRAND */}
        <div className="sidenav-header">
          <i
            className="fas fa-times p-3 cursor-pointer text-dark opacity-5 position-absolute end-0 top-0 d-xl-none"
            onClick={toggleSidenav}
          ></i>

          <a className="navbar-brand px-4 py-3 m-0" href="/">
            <img
              src="/assets/img/logo-ct-dark.png"
              className="navbar-brand-img"
              width="26"
              height="26"
              alt="logo"
            />
            <span className="ms-1 text-sm text-dark font-weight-bold">
              Air Digital One
            </span>
          </a>
        </div>

        <hr className="horizontal dark mt-0 mb-2" />

        {/* MENU */}
        <div className="collapse navbar-collapse w-auto h-auto">
          <ul className="navbar-nav">

            {/* ===== DASHBOARD (NO DROPDOWN) ===== */}
            <li className="nav-item">
              <a
                href="/dashboard"
                className={`nav-link ${
                  activePage === "dashboard"
                    ? "active bg-gradient-dark text-white"
                    : "text-dark"
                }`}
              >
                <i className="material-symbols-rounded opacity-5">
                  dashboard
                </i>
                <span className="nav-link-text ms-1">Dashboard</span>
              </a>
            </li>

            {/* ===== MANAGEMENT DROPDOWN ===== */}
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                data-bs-toggle="collapse"
                href="#managementMenu"
                aria-expanded={["users", "projects"].includes(activePage)}
              >
                <i className="material-symbols-rounded opacity-5">group</i>
                <span className="nav-link-text ms-1">Jobs</span>
              </a>

              <div
                className={`collapse ${
                  ["users", "projects"].includes(activePage) ? "show" : ""
                }`}
                id="managementMenu"
              >
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item">
                    <a
                      href="/admin/employer-verifications"
                      className={`nav-link ${
                        activePage === "users"
                          ? "active bg-gradient-dark text-white"
                          : "text-dark"
                      }`}
                    >
                      Employers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/projects"
                      className={`nav-link ${
                        activePage === "projects"
                          ? "active bg-gradient-dark text-white"
                          : "text-dark"
                      }`}
                    >
                      Applications
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/projects"
                      className={`nav-link ${
                        activePage === "projects"
                          ? "active bg-gradient-dark text-white"
                          : "text-dark"
                      }`}
                    >
                      Interviews
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* ===== REPORTS DROPDOWN ===== */}
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                data-bs-toggle="collapse"
                href="#reportsMenu"
                aria-expanded={["sales-reports", "activity-reports"].includes(activePage)}
              >
                <i className="material-symbols-rounded opacity-5">bar_chart</i>
                <span className="nav-link-text ms-1">Reports</span>
              </a>

              <div
                className={`collapse ${
                  ["sales-reports", "activity-reports"].includes(activePage)
                    ? "show"
                    : ""
                }`}
                id="reportsMenu"
              >
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item">
                    <a
                      href="/sales-reports"
                      className={`nav-link ${
                        activePage === "sales-reports"
                          ? "active bg-gradient-dark text-white"
                          : "text-dark"
                      }`}
                    >
                      Sales Reports
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/activity-reports"
                      className={`nav-link ${
                        activePage === "activity-reports"
                          ? "active bg-gradient-dark text-white"
                          : "text-dark"
                      }`}
                    >
                      Activity Reports
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <hr className="horizontal dark my-2" />

            {/* ===== SETTINGS DROPDOWN ===== */}
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                data-bs-toggle="collapse"
                href="#settingsMenu"
                aria-expanded={["profile", "security"].includes(activePage)}
              >
                <i className="material-symbols-rounded opacity-5">settings</i>
                <span className="nav-link-text ms-1">Settings</span>
              </a>

              <div
                className={`collapse ${
                  ["profile", "security"].includes(activePage) ? "show" : ""
                }`}
                id="settingsMenu"
              >
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item">
                    <a
                      href="/profile"
                      className={`nav-link ${
                        activePage === "profile"
                          ? "active bg-gradient-dark text-white"
                          : "text-dark"
                      }`}
                    >
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/security"
                      className={`nav-link ${
                        activePage === "security"
                          ? "active bg-gradient-dark text-white"
                          : "text-dark"
                      }`}
                    >
                      Security
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* ===== LOGOUT ===== */}
            <li className="nav-item">
              <a href="/logout" className="nav-link text-dark">
                <i className="material-symbols-rounded opacity-5">logout</i>
                <span className="nav-link-text ms-1">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        {/* TOP NAV */}
        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-3 shadow-none border-radius-xl">
          <div className="container-fluid py-1 px-3">
            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
              <div
                className="d-xl-none pe-3 d-flex align-items-center"
                onClick={toggleSidenav}
                style={{ cursor: "pointer" }}
              >
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line bg-dark"></i>
                  <i className="sidenav-toggler-line bg-dark"></i>
                  <i className="sidenav-toggler-line bg-dark"></i>
                </div>
              </div>
            </div>

            <ul className="navbar-nav justify-content-end align-items-center">
              <li className="nav-item px-2">
                <i className="material-symbols-rounded cursor-pointer">
                  notifications
                </i>
              </li>
              <li className="nav-item px-2">
                <i className="material-symbols-rounded cursor-pointer">
                  account_circle
                </i>
              </li>
            </ul>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <div className="container-fluid py-4">{children}</div>
      </main>

      {/* MOBILE OVERLAY */}
      {isSidenavOpen && (
        <div
          className="sidenav-overlay d-xl-none"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 1040,
          }}
          onClick={toggleSidenav}
        />
      )}
    </div>
  );
};

export default DashboardWrapper;
