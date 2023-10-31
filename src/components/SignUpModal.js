import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function SignUpModal() {
  const { modalState, toggleModals } = useContext(UserContext);
  console.log(modalState, toggleModals);
  return (
    <>
      {modalState.signUpModal && (
        <div className="position-fixed top-0 vw-100 vh-100 ">
          <div
            className="w-100 h-100 bg-dark bg-opacity-75 "
            onClick={() => toggleModals("close")}
          >
            {" "}
          </div>
          <div
            className="position-absolute top-50 start-50 translate-middle "
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog bg-white">
              <div className="modal-content" style={{ padding: "10px" }}>
                <div className="modal-header ">
                  <h5 className="modal-title">Sign Up</h5>
                  <button
                    onClick={() => toggleModals("close")}
                    className="btn-close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form className="sign-up-from">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="signUpEmail">
                        Email Adress
                      </label>
                      <input
                        name="email"
                        required
                        type="email"
                        className="form-control"
                        id="signUpEmail"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="repeatUpPwd">
                        Password
                      </label>
                      <input
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="signUpPwd"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="repeatPwd">
                        Repeat Password
                      </label>
                      <input
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="repeatPwd"
                      />
                      <p className="text-danger mt-1"></p>
                    </div>

                    <button className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
