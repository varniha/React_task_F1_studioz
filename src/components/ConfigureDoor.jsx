import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaArrowLeft, FaAngleDown } from 'react-icons/fa';
import { SlOptionsVertical } from "react-icons/sl";
import { Link } from 'react-router-dom';

const ConfigureDoor = () => {

  const [data, setData] = useState({
    category: localStorage.getItem("category") || "Residential Door",
    series: localStorage.getItem("series") || "Canony Ridge Collections",
    doorType: localStorage.getItem("doorType") || "Can 212"
  })

  useEffect(() => {
    localStorage.setItem("category", data.category);
    localStorage.setItem("series", data.series);
    localStorage.setItem("doorType", data.doorType);
  }, [data]);

  const handleInputChange = (e,key) => {
    setData({
      ...data, 
      [key]: e.target.value,
    });
  };

  const handleConfigure = () => {
    console.log(data);
  }

  return (
    <Container fluid>
      <Row className="mt-0 p-2" style={{ backgroundColor: '#34495E' }}>
        <Col xs={12}>
          <div className="position:fixed d-flex align-items-center">
            <Link to="/">
              <FaArrowLeft style={{ color: '#fff' }} />
            </Link>
            <h5 className="ml-2 mt-2 text-white" style={{ fontWeight: '600', fontSize: '20px', marginRight: 'auto' }}>Configure a new door</h5>
            <SlOptionsVertical className='float-right' style={{ color: '#fff' }} />
          </div>
        </Col>
      </Row>
      <Row className="mt-4 ml-5 mr-5 shadow p-5 justify-content-center">
        <Row className="mb-3">
          <Col>
            <Form.Group as={Row} className="mb-0">
              <Form.Label style={{ color: '#34495E', fontSize: '18px' }} column sm={4}>Select Category:</Form.Label>
              <Col sm={8}>
                <InputGroup>
                  <Form.Control style={{ color: '#2A292A', fontSize: '20px' }} 
                  type="text"
                  defaultValue={data.category}
                  onChange={(e) => handleInputChange(e, "category")}>
                  </Form.Control>
                  <InputGroup.Text><FaAngleDown /></InputGroup.Text>
                </InputGroup>
              </Col>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group as={Row} className="mb-0">
              <Form.Label style={{ color: '#34495E', fontSize: '18px' }} column sm={4}>Select Series:</Form.Label>
              <Col sm={8}>
                <InputGroup>
                  <Form.Control style={{ color: '#2A292A', fontSize: '20px' }} 
                   type="text"
                   defaultValue={data.series}
                   onChange={(e) => handleInputChange(e, "series")}>
                  </Form.Control>
                  <InputGroup.Text><FaAngleDown /></InputGroup.Text>
                </InputGroup>
              </Col>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group as={Row} className="mb-0">
              <Form.Label style={{ color: '#34495E', fontSize: '18px' }} column sm={4}>Door Type:</Form.Label>
              <Col sm={8}>
                <InputGroup>
                  <Form.Control style={{ color: '#2A292A', fontSize: '20px' }} 
                   type="text"
                   defaultValue={data.doorType}
                   onChange={(e) => handleInputChange(e, "doorType")}
                  >
                  </Form.Control>
                  <InputGroup.Text><FaAngleDown /></InputGroup.Text>
                </InputGroup>
              </Col>
            </Form.Group>
          </Col>
        </Row>
      </Row>
      <div className="position-fixed bottom-0 end-0 mb-4 me-4">
        <Link to="/progress">
          <Button onClick={handleConfigure} style={{ backgroundColor: '#66332B', borderColor: '#66332B', fontWeight: '600' }}>Configure</Button>
        </Link>
      </div>
    </Container>
  );
};

export default ConfigureDoor;
