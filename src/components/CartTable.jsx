import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { Badge } from "react-bootstrap";
import { SlOptionsVertical } from "react-icons/sl";
import "./CartTable.css";
import {
  Container,
  Form,
  Row,
  Col,
  FormControl,
  Button,
  Table,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const defaultData = [
  {
    id: 1,
    productInfo: "2 Classic Collection Garage Door, 2 Entry Door",
    cartName: "Johnson_Classic14209123",
    shippingPoint: "Russia Plant",
    createdBy: "Manoj Bajpayee",
    expiry: "Expires in 90 days",
  },
  {
    id: 2,
    productInfo: "10' 0'' X 10' 0.0'' CAN211CCW1 COMPLETE DOOR INTELLICORE",
    cartName: "Carter_Classic14209123",
    shippingPoint: "Russia Plant",
    createdBy: "Steve Benneth...",
    expiry: "Expires in 4 days",
  },
  {
    id: 3,
    productInfo:
      "Canyon Ridge® Collection Ultra-Grain® Series with Intellicore®",
    cartName: "Michigan_Classic14209123",
    shippingPoint: "ABC Plant",
    createdBy: "Steve Benneth...",
    expiry: "Expires in 90 days",
  },
  {
    id: 4,
    productInfo:
      "Hardware Special - Stock. W4.HB.8.0.7.0.None.Sol - WH.9.G.2J.B..S",
    cartName: "JohnDavid_Classic14209123",
    shippingPoint: "Russia Plant",
    createdBy: "Manhatton Cree...",
    expiry: "Expires in 6 days",
  },
  {
    id: 5,
    productInfo: "8’ 8’’ X 8’ 6’’ CAN211CCW1 Commercial DOOR INTELLICORE",
    cartName: "Michigan_Classic14209123",
    shippingPoint: "ABC Plant",
    createdBy: "Cristine Agape",
    expiry: "Expires in 90 days",
  },
  {
    id: 6,
    productInfo: "2 Classic Collection Garage Door, 2 Entry Door",
    cartName: "Chiristopher_Classic14209123",
    shippingPoint: "ABC Plant",
    createdBy: "Jamie Sunshine",
    expiry: "Expires in 5 days",
  },
];

const CartTable = () => {
  const [activeTab, setActiveTab] = useState("carts");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const filteredData = defaultData.filter((item) => {
    return (
      (item.cartName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.productInfo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.createdBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.shippingPoint.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterOption === "" || item.status === filterOption)
    );
  });

  return (
    <Container fluid>
      <Row className="mt-0 p-2" style={{ backgroundColor: "#34495E" }}>
        <Col xs={12}>
          <div className="d-flex align-items-center">
            <Link to="/addtocart" style={{ color: "#fff" }}>
              <FaArrowLeft />
            </Link>
            <h5
              onClick={() => handleTabChange("carts")}
              className="mt-2 text-white"
              style={{
                fontWeight: "600",
                fontSize: "20px",
                marginRight: "10px",
                marginLeft: "auto",
                cursor: "pointer",
              }}
            >
              Carts
            </h5>
            <h5
              onClick={() => handleTabChange("favorites")}
              className="mt-2 text-white"
              style={{
                fontWeight: "600",
                fontSize: "20px",
                marginRight: "auto",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              Favorites
            </h5>
            <SlOptionsVertical style={{ color: "#fff" }} />
          </div>
        </Col>
      </Row>
      {activeTab === "carts" && (
        <div>
          <div className="d-flex justify-content-between mt-3">
            {/* Displaying buttons in center for smaller screens */}
            <div className="d-md-none d-flex justify-content-center align-items-center">
              <Button
                style={{
                  backgroundColor: "#fff",
                  borderColor: "#fff",
                  color: "#34495E",
                  fontWeight: "600",
                }}
                className="mr-2"
              >
                Active Carts
              </Button>
              <Button
                onClick={() => handleTabChange("archived")}
                style={{
                  backgroundColor: "#fff",
                  borderColor: "#fff",
                  color: "#8894A0",
                  fontWeight: "600",
                }}
              >
                Archived Carts
              </Button>
            </div>
            {/* Displaying buttons at their original position for larger screens */}
            <div className="d-none d-md-flex">
              <Button
                style={{
                  backgroundColor: "#fff",
                  borderColor: "#fff",
                  color: "#34495E",
                  fontWeight: "600",
                }}
                className="mr-2"
              >
                Active Carts
              </Button>
              <Button
                onClick={() => handleTabChange("archived")}
                style={{
                  backgroundColor: "#fff",
                  borderColor: "#fff",
                  color: "#8894A0",
                  fontWeight: "600",
                }}
              >
                Archived Carts
              </Button>
            </div>

            <div className="d-md-flex align-items-center">
              {/* Displaying search and filter icons only when screen size reduces */}
              <div className="d-md-none">
                <FaSearch
                  style={{
                    fontSize: "20px",
                    color: "#8894A0",
                    marginRight: "5px",
                  }}
                />
                <IoFilter style={{ fontSize: "20px", color: "#8894A0" }} />
              </div>
              {/* Displaying search and filter fields for larger screens */}
              <div className="d-none d-md-flex align-items-center">
                <Form.Group className="mr-2">
                  <InputGroup>
                    <FormControl
                      style={{ fontSize: "18px" }}
                      type="text"
                      placeholder="Search"
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <InputGroup.Text>
                      <FaSearch style={{ color: "#66332B" }} />
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mr-2">
                  <InputGroup>
                    <Form.Control
                      style={{ fontSize: "18px", color: "#66332B" }}
                      as="select"
                      onChange={(e) => setFilterOption(e.target.value)}
                    >
                      <option value="">Filter</option>
                    </Form.Control>
                    <InputGroup.Text>
                      <IoFilter style={{ color: "#66332B" }} />
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </div>
            </div>
          </div>

          {/* Displaying data in cards only when screen size reduces */}
          <div className="d-md-none">
            {filteredData.map((item) => (
              <div key={item.id} className="card mt-3">
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ color: "#2A292A", fontSize: "18px" }}
                  >
                    {item.cartName}
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      color: "#34495E",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    {item.productInfo}
                  </p>
                  <p
                    className="card-text fs-6 d-flex align-items-center"
                    style={{ color: "#8894A0" }}
                  >
                    {item.expiry === "Expires in 90 days" ? (
                      <span style={{ color: "gray" }}>{item.expiry}</span>
                    ) : (
                      item.expiry
                    )}
                    <span> . Shared</span>
                    {item.expiry === "Expires in 90 days" && (
                      <div className="ms-auto d-flex justify-content-between align-items-center">
                        <span></span>{" "}
                        <Badge pill className="ms-2 bg-success">
                          New
                        </Badge>
                      </div>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Displaying data in table for larger screens */}
          <Table striped bordered hover className="mt-3 d-none d-md-table">
            <thead>
              <tr>
                <th style={{ color: "#8894A0", fontWeight: "600" }}>
                  Product Information
                </th>
                <th style={{ color: "#8894A0", fontWeight: "600" }}>
                  Cart Name
                </th>
                <th style={{ color: "#8894A0", fontWeight: "600" }}>
                  Shipping Point
                </th>
                <th style={{ color: "#8894A0", fontWeight: "600" }}>
                  Created By
                </th>
                <th style={{ color: "#8894A0", fontWeight: "600" }}>Expiry</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td style={{ color: "#212931", fontWeight: "600" }}>
                    {item.productInfo}
                  </td>
                  <td style={{ color: "#212931", fontSize: "18px" }}>
                    {item.cartName}
                  </td>
                  <td style={{ color: "#2A292A", fontSize: "18px" }}>
                    {item.shippingPoint}
                  </td>
                  <td style={{ color: "#2A292A", fontSize: "18px" }}>
                    {item.createdBy}
                  </td>
                  <td style={{ color: "#E67E22", fontSize: "18px" }}>
                    {item.expiry === "Expires in 90 days" ? (
                      <span style={{ color: "gray" }}>{item.expiry}</span>
                    ) : (
                      item.expiry
                    )}
                    {item.expiry === "Expires in 90 days" && (
                      <Badge pill className="ms-2 bg-success">
                        New
                      </Badge>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
      {activeTab === "archived" && (
        <div
          className="text-center justify-content-center mt-3"
          style={{
            height: "calc(100vh - 60px)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h5 style={{ fontWeight: "bold", fontSize: "40px" }}>No Data</h5>
        </div>
      )}
      {activeTab === "favorites" && (
        <div
          className="text-center justify-content-center mt-3"
          style={{
            height: "calc(100vh - 60px)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h5 style={{ fontWeight: "bold", fontSize: "40px" }}>No Data</h5>
        </div>
      )}{" "}
    </Container>
  );
};

export default CartTable;
