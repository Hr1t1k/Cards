import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Subscription = (props) => {
  function handleClose() {
    props.setShow(false);
  }
  return (
    <>
      <Modal
        show={props.show}
        onHide={handleClose}
        centered
        // size="sm"
        dialogClassName="modal-90w"
      >
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <div className="position-absolute" style={{ right: "20px" }}>
              <Modal.Header closeButton></Modal.Header>
            </div>
            <div className=" premium-card justify-content-center text-center w-100">
              <div className="card-body-subs">
                <h5 className="card-title-subs">Premium Subscription</h5>
                <p className="card-text-subs">
                  Upgrade to premium and enjoy the following features:
                </p>
                <ul className="list-group list-group-flush text-start">
                  <li className="list-group-item">Unlimited Searches</li>
                  <li className="list-group-item">
                    Personalized Search Results
                  </li>
                  <li className="list-group-item">High Availability</li>
                  <li className="list-group-item">Faster Response Time</li>
                  {/* Add more features as needed */}
                </ul>
              </div>
              <div className="card-footer-subs">
                <button className="btn btn-primary">Upgrade Now</button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Subscription;
