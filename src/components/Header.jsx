import React from "react";

const Header = () => {
  return (
    <div className="m-0 px -0 px-sm-3 w-auto" id="header">
      <header className="d-flex flex-wrap align-items-center justify-content-between justify-content-md-between py-3 mx-2 mx-sm-4 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            Logo
          </a>
        </div>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-light me-2">
            Login
          </button>
          <button type="button" className="btn btn-dark">
            Sign-up
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
