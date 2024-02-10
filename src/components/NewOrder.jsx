import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowLeft, FaAngleRight } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { Link } from "react-router-dom";

const NewOrder = () => {
  return (
    <Container fluid>
      <Row className="mt-0 p-2" style={{ backgroundColor: "#34495E" }}>
        <Col xs={12}>
          <div className="d-flex align-items-center ">
            <Link to="/">
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
              Create new order
            </h5>
            <SlOptionsVertical style={{ color: "#fff" }} />
          </div>
        </Col>
      </Row>

      <Row className="mb-2 mt-5 mr-5 ml-5">
        <Col className="mx-3">
          <Row className="shadow p-4">
            <Col>
              <h5 style={{ fontSize: "22px" }}>
                Configure your door from scratch
              </h5>
              <Link to="/configuredoor">
                <FaAngleRight
                  className="float-right"
                  style={{ color: "#66332B", fontSize: "25px" }}
                />
              </Link>
              <h6 style={{ color: "#8894A0" }}>
                Residential, Commercial, Entry doors
              </h6>
            </Col>
          </Row>
          <Row className="shadow p-4">
            <Col>
              <h5 style={{ fontSize: "22px" }}>Parts / Openers</h5>
              <Link to="/configuredoor">
                <FaAngleRight
                  className="float-right"
                  style={{ color: "#66332B", fontSize: "25px" }}
                />
              </Link>
              <h6 style={{ color: "#8894A0" }}>Order Parts and Openers</h6>
            </Col>
          </Row>
          <Row className="mt-2 shadow p-4">
            <Col>
              <h5 style={{ fontSize: "22px" }}>Direct Item Entry</h5>
              <Link to="/configuredoor">
                <FaAngleRight
                  className="float-right"
                  style={{ color: "#66332B", fontSize: "25px" }}
                />
              </Link>
              <h6 style={{ color: "#8894A0" }}>
                Order Parts / Openers using a Product ID
              </h6>
            </Col>
          </Row>
          <Row className="mt-2 shadow p-4">
            <Col>
              <h5 style={{ fontSize: "22px" }}>Choose from favourites</h5>
              <Link to="/configuredoor">
                <FaAngleRight
                  className="float-right"
                  style={{ color: "#66332B", fontSize: "25px" }}
                />
              </Link>
              <h6 style={{ color: "#8894A0" }}>
                Re-order door from your favourites{" "}
              </h6>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default NewOrder;
