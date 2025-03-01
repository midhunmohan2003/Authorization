import React, { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import "./auth.css";

function Auth({ register }) {
  const isRegisterForm = register ? true : false;
  const location = useLocation();

  // Animate the entire container when the page loads or changes
  useEffect(() => {
    gsap.fromTo(
      ".auth-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, [location.pathname]);

  return (
    <div className="d-flex justify-content-center align-items-center mt-5 auth-container">
      <div className="container w-75">
        <div className="card shadow p-3" style={{ backgroundColor: "#2C2638" }}>
          <div className="row align-items-center">
            {isRegisterForm ? (
              <div className="col-lg-6 position-relative">
                {/* Top-left text */}
                <div className="text-overlay">
                  Friskence <span className="black-text">AI</span>
                </div>

                {/* Image */}
                <img
                  className="image"
                  height="500px"
                  src="https://s3-alpha-sig.figma.com/img/6b8e/55a0/4b921f46e392e93559c88ef1b8298066?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E5J0eRBYdLe00c--ZP2WuIpegtOeiCiOZguDLnGIKBa6~rV0PfLgE0gge5zbDoY-zeE8aUKlbmF-jZce4fU-V5PthK~GFG~zPTVIMvsU1uKtnKlfVM8FRaNVDNkSlDaziSeU0Cv5qp9~6qmDXr-xjFlRHvRxUIAFUW9CBtV0jKSPM248YwU5uBB4adxcCemXsjD2Zp2cWyn9CJHhuhp6YJgr3cGyxWvdVpU67XzEIRX68~WKOSuRlhssI2dPv~ebXGBb6sm4EMG8WfEH5QBTIAkQuIuATdMYfT8CEUyMQAEwSHExeLL3Gxd5kJ7ljw84J3OpyoY4XzHYNuMSDmU7QQ__"
                  width="100%"
                  alt=""
                />

                {/* Bottom-center text */}
                <div className="bottom-text">
                  Capturing Moments,
                  <br /> Creating Memories
                </div>
              </div>
            ) : null}

            <div className="col-lg-6 order-lg-1 order-2">
              <div className="d-flex align-items-center flex-column">
                <h2 className="fw-bolder text-light text-light mt-2">
                  {isRegisterForm ? "Create an account" : "Welcome Back!"}
                </h2>

                {isRegisterForm ? (
                  <p
                    className="text-light para"
                    style={{ marginRight: "77px" }}
                  >
                    Already have an account?{" "}
                    <Link to={"/login"} className="link-text">
                      Login
                    </Link>
                  </p>
                ) : (
                  <p
                    className="text-light para"
                    style={{ marginRight: "120px" }}
                  >
                    New User?{" "}
                    <Link to={"/"} className="link-text">
                      Sign Up
                    </Link>
                  </p>
                )}

                <Form className="mt-2 text-dark">
                  {isRegisterForm && (
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        className="form-control-custom"
                      />
                    </Form.Group>
                  )}
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      className="form-control-custom"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      className="form-control-custom"
                    />
                  </Form.Group>

                  <div className="text-light" style={{ fontSize: "small" }}>
                    <input type="checkbox" /> I agree to the{" "}
                    <a href="#terms" className="terms-link">
                      Terms and Conditions
                    </a>
                  </div>
                  <br />
                  <button
                    className="btn-ok w-100"
                    style={{ backgroundColor: "#6D54B5" }}
                  >
                    {isRegisterForm ? "Create Account" : "Login"}
                  </button>
                  <br />

                  <div className="separator">
                    <hr />
                    {isRegisterForm ? (
                      <p>Or Register with</p>
                    ) : (
                      <p>Or Login with</p>
                    )}
                    <hr />
                  </div>
                  <br />
                  <Row className="justify-content-center">
                    <Col xs="auto">
                      <Button variant="" className="btn-social border-white">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/281/281764.png"
                          alt="Google"
                          width={20}
                          className="me-2 btn-img"
                        />
                        Google
                      </Button>
                    </Col>
                    <Col xs="auto">
                      <Button variant="" className="btn-social border-white">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/731/731985.png"
                          alt="Apple"
                          width={20}
                          className="me-2 btn-img"
                        />
                        Apple
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>

            {!isRegisterForm ? (
              <div className="col-lg-6 order-lg-2 order-1 position-relative">
                <div className="text-overlay">
                  Friskence <span className="black-text">AI</span>
                </div>
                <img
                  className="image"
                  height="500px"
                  src="https://s3-alpha-sig.figma.com/img/edfe/aee2/4243a5f94f3c9541841edbf55589fd55?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SZYnjpX4zyJhdmkAKATpMmpJLBIadtPjk9QrCKpq90ju8-ZSiM72JAge-tuPC5I6nrXNkoqcc9w6PjyDxcAOJ0RalCq3y87-wWuUg6bQbs47C6K6lYCCryKUOnaGYSN6c5lxvHlzc1YHlfc4XYE34hKGOztVRes9UXoGFsew08EXuDqflpimKPe-hIbyBQOC~Vwp4UJGlW16Ju9ysWG4rekmQiJ8REtXeUyIS9BVKjqswIPsO1fc9vGllB7tDPdtCEGyNcFe9d7fp7e1675TIsBQz56GezGFVs8btuAzdt1C4upBRxdLvilpHyEfGYxewjadtiBmMFn~luDJ4wwkTw__"
                  width="100%"
                  alt=""
                />
                <div className="bottom-text">
                  Frame Life's <br />
                  Best Moments
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
