import React from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { PlusSquare } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";

const AddToCart = () => {

  const handleDelete = () => {
    const keysToDelete = [
      "assemblyType",
      "widthFeet",
      "widthInch",
      "heightFeet",
      "heightInch",
      "windcode",
      "design",
      "color",
      "glassType",
      "sectionsGlazed",
      "framing",
      "spring",
      "trackSize",
      "trackMount",
      "trackLift",
      "trackRadius",
      "lock",
      "miscLockOptions",
      "packaging",
      "additionalOptions",
      "extrastruts",
      "category",
      "series",
      "doorType"
    ];
    keysToDelete.forEach(key => {
      localStorage.removeItem(key);
    });
  };
  return (
    <>
      <Container fluid style={{ marginBottom: "65px", color: "#34495E" }}>
        <Row className="mt-0 p-2" style={{ backgroundColor: "#34495E" }}>
          <Col xs={12}>
            <div className="position:fixed d-flex align-items-center">
              <Link to="/progress">
                <FaArrowLeft style={{ color: "#fff" }} />
              </Link>
              <h5
                className="ml-2 mt-2 text-white"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  marginRight: "auto",
                }}
              >
                Classic_John45012
                <span
                  style={{
                    fontSize: "16px",
                    marginLeft: "20px",
                    color: "#E4E4E4",
                  }}
                >
                  Cart #12345678123
                </span>
              </h5>
              <SlOptionsVertical
                className="float-right"
                style={{ color: "#fff" }}
              />
            </div>
          </Col>
        </Row>
        <Row className="shadow p-2 mt-3 mr-3 ml-3">
          <Row>
            <Col xs={12}>
              <div style={{ lineHeight: "10px" }}>
                <h6 className="font-weight-bold" style={{ color: "#34495E" }}>
                  10' 0'' X 10' 0.0'' CAN211 CC W1 COMPLETE DOOR INTELLICORE
                  OBSCURE, 5TH GENERATION FINISH WALDER DOOR
                </h6>
                <p
                  className="text-muted"
                  style={{ fontSize: "18px", fontWeight: "400" }}
                >
                  Job name: front door with glass{" "}
                  <span
                    className="font-weight-bold"
                    style={{ color: "#66332B" }}
                  >
                    Change
                  </span>
                </p>
                <p
                  className="text-muted"
                  style={{ fontSize: "18px", fontWeight: "400" }}
                >
                  Product #CWD . Garage door
                </p>
                <p
                  className="text-muted"
                  style={{ fontSize: "18px", fontWeight: "400" }}
                >
                  Availability:{" "}
                  <span
                    className="font-weight-bold"
                    style={{ color: "#17A85F" }}
                  >
                    IN STOCK
                  </span>{" "}
                  (Available for pickup)
                </p>
              </div>
            </Col>
          </Row>
          <Container>
            <Row className="mt-4">
              {/* Column 1 - Adjusted for Extra Small and Small screens */}
              <Col xs={12} sm={4}>
                <div className="d-flex justify-content-center justify-content-sm-start">
                  <Button
                    style={{
                      width: "44px",
                      height: "44px",
                      color: "#8894A0",
                      backgroundColor: "#fff",
                      borderColor: "#E4E4E4",
                      fontWeight: "700",
                      fontSize: "20px",
                    }}
                    className="me-sm-2"
                  >
                    -
                  </Button>
                  <Button
                    style={{
                      width: "66px",
                      height: "44px",
                      color: "#8894A0",
                      backgroundColor: "#fff",
                      borderColor: "#E4E4E4",
                      fontWeight: "700",
                      fontSize: "20px",
                    }}
                    className="me-sm-2"
                  >
                    1
                  </Button>
                  <Button
                    style={{
                      width: "44px",
                      height: "44px",
                      color: "#8894A0",
                      backgroundColor: "#fff",
                      borderColor: "#E4E4E4",
                      fontWeight: "700",
                      fontSize: "20px",
                    }}
                  >
                    +
                  </Button>
                </div>
              </Col>
              {/* Column 2 */}
              <Col xs={12} sm={4} className="text-center fs-5 lh-sm">
                <p style={{ color: "#17A85F" }}>Standard multiplier: 332</p>
                <p style={{ color: "#17A85F" }}>
                  Secondary multipliers applied
                </p>
                <p className="font-weight-bold" style={{ color: "#66332B" }}>
                  Apply MPQ
                </p>
              </Col>
              {/* Column 3 */}
              <Col xs={12} sm={4} className="text-end fs-5 lh-sm">
                <p>
                  Net Price:{" "}
                  <span
                    className="font-weight-bold"
                    style={{ fontSize: "20px" }}
                  >
                    $4500.00
                  </span>
                </p>
                <p>Unit Price: $4800.00</p>
                <p style={{ color: "#66332B", fontSize: "14px" }}>
                  View Price Details
                </p>
              </Col>
              <Col xs={12}>
                <div className="d-flex justify-content-space-between">
                  <Button
                    style={{
                      color: "#66332B",
                      borderColor: "#E4E4E4",
                      fontSize: "18px",
                      fontWeight: "500",
                      backgroundColor: "#fff",
                    }}
                    className="w-100 font-weight-bold"
                  >
                    <i className="bi bi-heart"></i> FAVORITES
                  </Button>
                  <Link to="/progress" className="w-100">
                    <Button
                      style={{
                        color: "#66332B",
                        borderColor: "#E4E4E4",
                        fontSize: "18px",
                        fontWeight: "500",
                        backgroundColor: "#fff",
                      }}
                      className="w-100 font-weight-bold"
                    >
                      <i className="bi bi-pencil font-weight-bold"></i> EDIT
                    </Button>
                  </Link>

                  <Button
                    style={{
                      color: "#66332B",
                      borderColor: "#E4E4E4",
                      fontSize: "18px",
                      fontWeight: "500",
                      backgroundColor: "#fff",
                    }}
                    className="w-100 font-weight-bold"
                  >
                    <i className="bi bi-files font-weight-bold"></i> COPY
                  </Button>
                  <Link to="/" className="w-100">
                  <Button onClick={handleDelete}
                    style={{
                      color: "#66332B",
                      borderColor: "#E4E4E4",
                      fontSize: "18px",
                      fontWeight: "500",
                      backgroundColor: "#fff",
                    }}
                    className="w-100 font-weight-bold"
                  >
                    <i className="bi bi-trash font-weight-bold"></i> DELETE
                  </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </Row>

        <div className="d-md-flex align-items-center">
          {/* for screen size large or normal */}
          <div className="d-none d-md-flex">
            <Row
              className="mt-4 mr-3 ml-3"
              style={{ fontSize: "18px", fontWeight: "400" }}
            >
              <Col xs={12} sm={6} style={{ lineHeight: "40px" }}>
                <div className="shadow p-3">
                  <h6 style={{ fontSize: "18px" }}>Change Delivery Date</h6>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Example: 31-DEC-1999"
                    />
                    <InputGroup.Text>
                      <i className="bi bi-calendar"></i>
                    </InputGroup.Text>
                  </InputGroup>
                  <p style={{ fontSize: "18px" }}>
                    Standard Delivery: Tue May 28 - 2019
                  </p>
                </div>
                <div className="shadow p-3 mt-2">
                  <h6 style={{ fontSize: "18px" }}>Purchase Order Number</h6>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Enter PO Number" />
                  </Form.Group>
                  <p style={{ fontSize: "18px" }}>
                    This PO will be useful to track this order items{" "}
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={6} className="shadow">
                <div style={{ lineHeight: "18px", fontSize: "18px" }}>
                  <h5>Bill Summary</h5>
                  <p className="d-flex justify-content-between">
                    Sub total: <span>$4566</span>
                  </p>
                  <p className="d-flex justify-content-between">
                    Energy subcharge: <span>$78</span>
                  </p>
                  <p className="d-flex justify-content-between">
                    Sales tax: <span>$456</span>
                  </p>
                  <p className="d-flex justify-content-between font-weight-bold">
                    TOTAL: <span>$5766</span>
                  </p>
                </div>
                <hr />
                <Form.Check
                  type="checkbox"
                  className="font-weight-bold"
                  label="Apply Tax"
                />
                <p style={{ color: "#8894A0" }}>
                  (The 1% iStore discount is calculated into the total price for
                  all doors and door parts. Please refer to the quote or order
                  acknowledgment for details.){" "}
                </p>
              </Col>
            </Row>
          </div>

          {/* for screen size less than 768px */}
          <div className="d-md-none">
            <Row className="mt-4">
              <Col xs={12}>
                <div className="shadow p-3">
                  <h6 style={{ fontSize: "18px" }}>Change Delivery Date</h6>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Example: 31-DEC-1999"
                    />
                    <InputGroup.Text>
                      <i className="bi bi-calendar"></i>
                    </InputGroup.Text>
                  </InputGroup>
                  <p style={{ fontSize: "18px" }}>
                    Standard Delivery: Tue May 28 - 2019
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xs={12}>
                <div className="shadow p-3 mt-2">
                  <h6 style={{ fontSize: "18px" }}>Purchase Order Number</h6>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Enter PO Number" />
                  </Form.Group>
                  <p style={{ fontSize: "18px" }}>
                    This PO will be useful to track this order items{" "}
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xs={12}>
                <div className="shadow p-3">
                  <h5>Bill Summary</h5>
                  <p className="d-flex justify-content-between">
                    Sub total: <span>$4566</span>
                  </p>
                  <p className="d-flex justify-content-between">
                    Energy subcharge: <span>$78</span>
                  </p>
                  <p className="d-flex justify-content-between">
                    Sales tax: <span>$456</span>
                  </p>
                  <p className="d-flex justify-content-between font-weight-bold">
                    TOTAL: <span>$5766</span>
                  </p>
                </div>
                <hr />
                <Form.Check
                  type="checkbox"
                  className="font-weight-bold"
                  label="Apply Tax"
                />
                <p style={{ color: "#8894A0" }}>
                  (The 1% iStore discount is calculated into the total price for
                  all doors and door parts. Please refer to the quote or order
                  acknowledgment for details.){" "}
                </p>
              </Col>
            </Row>
          </div>
        </div>

        <div className="d-none d-md-flex align-items-center">
          <Row
            style={{ fontSize: "18px", lineHeight: "18px" }}
            className="mt-3 mr-3 ml-3"
          >
            {/* Billing Information */}
            <Col xs={12} sm={6} className="shadow p-3">
              <div style={{ color: "#2A292A" }}>
                <h5 className="text-start">Billing To</h5>
                <p>Bement Jared</p>
                <p>
                  144 curt shores, 50, madison avenue
                  <span className="text-end" style={{ marginLeft: "400px" }}>
                    Change
                  </span>
                </p>
                <p>Hixson - 42040</p>
                <p>Contact: 0422-354-9876</p>
              </div>
            </Col>
            {/* Shipping Information */}
            <Col xs={12} sm={6} className="shadow p-3">
              <div style={{ color: "#2A292A" }}>
                <h5 className="text-start">Shipping To</h5>
                <p>Bement Jared</p>
                <p>
                  144 curt shores, 50, madison avenue
                  <span className="text-end" style={{ marginLeft: "400px" }}>
                    Change
                  </span>
                </p>
                <p>Hixson - 42040</p>
                <p>Contact: 0422-354-9876</p>
              </div>
            </Col>
          </Row>
        </div>

        {/* for screen size less than 768px */}
        <div className="d-md-none justify-content-center">
          <Row
            style={{ fontSize: "18px", lineHeight: "18px" }}
            className="mt-3 mr-3 ml-3"
          >
            {/* Billing Information */}
            <Row className="shadow p-3">
              <div style={{ color: "#2A292A" }}>
                <h5 className="text-start">Billing To</h5>
                <p>Bement Jared</p>
                <p>
                  144 curt shores, 50, madison avenue
                  <span className="text-end" style={{ marginLeft: "400px" }}>
                    Change
                  </span>
                </p>
                <p>Hixson - 42040</p>
                <p>Contact: 0422-354-9876</p>
              </div>
            </Row>
            {/* Shipping Information */}
            <Row className="shadow p-3">
              <div style={{ color: "#2A292A" }}>
                <h5 className="text-start">Shipping To</h5>
                <p>Bement Jared</p>
                <p>
                  144 curt shores, 50, madison avenue
                  <span className="text-end" style={{ marginLeft: "400px" }}>
                    Change
                  </span>
                </p>
                <p>Hixson - 42040</p>
                <p>Contact: 0422-354-9876</p>
              </div>
            </Row>
          </Row>
        </div>
      </Container>
      <Container>
        <Row
          className="flex position-fixed bottom-0 d-flex justify-content-center"
          style={{ width: "85%" }}
        >
          <div className="bg-white rounded col d-flex justify-content-between align-items-center">
            <div className="p-2 me-auto">
              {" "}
              <p className="m-0 font-weght-bold" style={{ fontSize: "12px" }}>
                1 ITEM
              </p>
              <p className="m-0 font-weight-bolder">$589</p>
            </div>
            <div className="d-flex">
              {" "}
              <Link to = "/configuredoor">
              <Button
                style={{
                  backgroundColor: "#fff",
                  borderColor: "#66332B",
                  color: "#66332B",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
                className="me-3"
              >
                <PlusSquare
                  size={18}
                  style={{
                    backgroundColor: "#66332B",
                    color: "#fff",
                    fontSize: "14px",
                  }}
                  className="me-1"
                />
                Add More
              </Button>
              </Link>
              <Link to="/carttable">
                <Button
                  style={{
                    backgroundColor: "#66332B",
                    borderColor: "#66332B",
                    fontWeight: "600",
                  }}
                >
                  Place Order
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default AddToCart;
