import { React, useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  ProgressBar,
  Button,
  InputGroup,
} from "react-bootstrap";
import { FaArrowLeft, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SlOptionsVertical } from "react-icons/sl";

const Progress = () => {
  const [formData, setFormData] = useState({
    assemblyType: localStorage.getItem("assemblyType") || "complete door",
    widthFeet: localStorage.getItem("widthFeet") || "8 feet",
    widthInch: localStorage.getItem("widthInch") || "2 inch",
    heightFeet: localStorage.getItem("heightFeet") || "10 feet",
    heightInch: localStorage.getItem("heightInch") || "0 inch",
    windcode: localStorage.getItem("windcode") || "windcode w1",
    design: localStorage.getItem("design") || "CC",
    color: localStorage.getItem("color") || "dark finish",
    glassType: localStorage.getItem("glassType") || "solid",
    sectionsGlazed: localStorage.getItem("sectionsGlazed") || "section 4",
    framing: localStorage.getItem("framing") || "arch 1 design",
    spring: localStorage.getItem("spring") || "Galvanized Torsion",
    trackSize: localStorage.getItem("trackSize") || '2" flag and jamb brackets loose',
    trackMount: localStorage.getItem("trackMount") || "Bracket",
    trackLift: localStorage.getItem("trackLift") || "Standard",
    trackRadius: localStorage.getItem("trackRadius") || '12" Radius',
    lock: localStorage.getItem("lock") || "slide first lock",
    miscLockOptions: localStorage.getItem("miscLockOptions") || "No lock hole",
    packaging: localStorage.getItem("packaging") || "distributor",
    additionalOptions: JSON.parse(localStorage.getItem("additionalOptions")) || [],
    extrastruts: localStorage.getItem("extrastruts") || "5 Extra struts"
  });

  useEffect(() => {
    localStorage.setItem("assemblyType", formData.assemblyType);
    localStorage.setItem("widthFeet", formData.widthFeet);
    localStorage.setItem("widthInch", formData.widthInch);
    localStorage.setItem("heightFeet", formData.heightFeet);
    localStorage.setItem("heightInch", formData.heightInch);
    localStorage.setItem("windcode", formData.windcode);
    localStorage.setItem("design", formData.design);
    localStorage.setItem("color", formData.color);
    localStorage.setItem("glassType", formData.glassType);
    localStorage.setItem("sectionsGlazed", formData.sectionsGlazed);
    localStorage.setItem("framing", formData.framing);
    localStorage.setItem("spring", formData.spring);
    localStorage.setItem("trackSize", formData.trackSize);
    localStorage.setItem("trackMount", formData.trackMount);
    localStorage.setItem("trackLift", formData.trackLift);
    localStorage.setItem("trackRadius", formData.trackRadius);
    localStorage.setItem("lock", formData.lock);
    localStorage.setItem("miscLockOptions", formData.miscLockOptions);
    localStorage.setItem("packaging", formData.packaging);
    localStorage.setItem("additionalOptions", JSON.stringify(formData.additionalOptions));
    localStorage.setItem("extrastruts", formData.extrastruts);
  }, [formData]);

  const handleInputChange = (e, key) => {
    setFormData({
      ...formData,
      [key]: e.target.value,
    });
  };

  const handleCheckboxChange = (e, label) => {
    const isChecked = e.target.checked;
    let updatedOptions;
    if (isChecked) {
      updatedOptions = [...formData.additionalOptions, label];
    } else {
      updatedOptions = formData.additionalOptions.filter(
        (option) => option !== label
      );
    }
    setFormData({
      ...formData,
      additionalOptions: updatedOptions,
    });
  };

  const handleAddToCart = () => {
    console.log(formData);
  };

  const calculateProgress = () => {
    const totalFields = Object.keys(formData).length;
    const filledFields = Object.values(formData).filter(
      (value) => value !== ""
    ).length;
    return Math.round((filledFields / totalFields) * 100);
  };

  return (
    <Container fluid style={{ marginBottom: "65px" }}>
      <Row className="mt-0 p-2" style={{ backgroundColor: "#34495E" }}>
        <Col xs={12}>
          <div className="position:fixed d-flex align-items-center">
            <Link to="/configuredoor">
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
              Configure a new door
            </h5>
            <SlOptionsVertical
              className="float-right"
              style={{ color: "#fff" }}
            />
          </div>
        </Col>
      </Row>
      <Row
        style={{
          justifyContent: "center",
          marginLeft: "5%",
          marginRight: "5%",
        }}
      >
        <Col>
          <div className="text-center mt-4">
            <ProgressBar style={{ height: "8px" }}
            variant="success" 
            now={calculateProgress()}
            />
            <p style={{ fontSize: "18px" }}>
              <span className="font-weight-bold">{calculateProgress()}% </span>Completed!
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-4 shadow mr-5 ml-5">
        <Col className=" justify-content-space-between">
          <Row className="pt-2 mb-4" style={{ backgroundColor: "#E4E4E4" }}>
            <h5 style={{ color: "#34495E" }}>Layout Options</h5>
          </Row>

          <Row
            style={{
              fontSize: "18px",
              justifyContent: "center",
              marginLeft: "5%",
              marginRight: "5%",
              color: "#34495E",
            }}
          >
            <Row className="mb-3">
              <Col xs={6}>
                <label className="mr-2">Assembly type:</label>
              </Col>
              <Col xs={6}>
                <InputGroup>
                  <Form.Control
                    style={{ fontSize: "20px" }}
                    type="text"
                    defaultValue={formData.assemblyType}
                    onChange={(e) => handleInputChange(e, "assemblyType")}
                  ></Form.Control>
                  <InputGroup.Text>
                    <FaAngleDown />
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={6}>
                <label className="mr-2">Measure:</label>
              </Col>
              <Col xs={6}>
                <div className="mb-3 d-flex align-items-center">
                  <label className="mr-2">Width:</label>
                  <InputGroup className="m-2">
                    <Form.Control
                      style={{ fontSize: "20px" }}
                      type="text"
                      defaultValue={formData.widthFeet}
                      onChange={(e) => handleInputChange(e, "widthFeet")}
                    ></Form.Control>
                    <InputGroup.Text>
                      <FaAngleDown />
                    </InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="m-2">
                    <Form.Control
                      style={{ fontSize: "20px" }}
                      type="text"
                      defaultValue={formData.widthInch}
                      onChange={(e) => handleInputChange(e, "widthInch")}
                    ></Form.Control>
                    <InputGroup.Text>
                      <FaAngleDown />
                    </InputGroup.Text>
                  </InputGroup>
                </div>
                <div className="d-flex align-items-center">
                  <label className="mr-2">Height:</label>
                  <InputGroup className="m-2">
                    <Form.Control
                      style={{ fontSize: "20px" }}
                      type="text"
                      defaultValue={formData.heightFeet}
                      onChange={(e) => handleInputChange(e, "heightFeet")}
                    ></Form.Control>
                    <InputGroup.Text>
                      <FaAngleDown />
                    </InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="m-2">
                    <Form.Control
                      style={{ fontSize: "20px" }}
                      type="text"
                      defaultValue={formData.heightInch}
                      onChange={(e) => handleInputChange(e, "heightInch")}
                    ></Form.Control>
                    <InputGroup.Text>
                      <FaAngleDown />
                    </InputGroup.Text>
                  </InputGroup>
                </div>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={6}>
                <label className="mr-2">Windcode:</label>
              </Col>
              <Col xs={6}>
                <InputGroup>
                  <Form.Control
                    style={{ fontSize: "20px" }}
                    type="text"
                    defaultValue={formData.windcode}
                    onChange={(e) => handleInputChange(e, "windcode")}
                  ></Form.Control>
                  <InputGroup.Text>
                    <FaAngleDown />
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={6}>
                <label className="mr-2">Design:</label>
              </Col>
              <Col xs={6}>
                <InputGroup>
                  <Form.Control
                    style={{ fontSize: "20px" }}
                    type="text"
                    defaultValue={formData.design}
                    onChange={(e) => handleInputChange(e, "design")}
                  ></Form.Control>
                  <InputGroup.Text>
                    <FaAngleDown />
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={6}>
                <label className="mr-2">Color:</label>
              </Col>
              <Col xs={6}>
                <InputGroup>
                  <Form.Control
                    style={{ fontSize: "20px" }}
                    type="text"
                    defaultValue={formData.color}
                    onChange={(e) => handleInputChange(e, "color")}
                  ></Form.Control>
                  <InputGroup.Text>
                    <FaAngleDown />
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
      <Row className="mt-4 shadow mr-5 ml-5">
        <Col>
          <Row className="pt-2 mb-4" style={{ backgroundColor: "#E4E4E4" }}>
            <h5 style={{ color: "#34495E" }}>Window Options</h5>
          </Row>
          <Row
            style={{
              fontSize: "18px",
              justifyContent: "center",
              marginLeft: "5%",
              marginRight: "5%",
              color: "#34495E",
            }}
          >
            <Row className="mb-3">
              <Col xs={6}>
                <label className="mr-2">Glass type:</label>
              </Col>
              <Col xs={6}>
                <InputGroup>
                  <Form.Control
                    style={{ fontSize: "20px" }}
                    type="text"
                    defaultValue={formData.glassType}
                    onChange={(e) => handleInputChange(e, "glassType")}
                  ></Form.Control>
                  <InputGroup.Text>
                    <FaAngleDown />
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={6}>
                <label className="mr-2">Sections glazed:</label>
              </Col>
              <Col xs={6}>
                <InputGroup>
                  <Form.Control
                    style={{ fontSize: "20px" }}
                    type="text"
                    defaultValue={formData.sectionsGlazed}
                    onChange={(e) => handleInputChange(e, "sectionsGlazed")}
                  ></Form.Control>
                  <InputGroup.Text>
                    <FaAngleDown />
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={6}>
                <label className="mr-2">Framing:</label>
              </Col>
              <Col xs={6}>
                <InputGroup>
                  <Form.Control
                    style={{ fontSize: "20px" }}
                    type="text"
                    defaultValue={formData.framing}
                    onChange={(e) => handleInputChange(e, "framing")}
                  ></Form.Control>
                  <InputGroup.Text>
                    <FaAngleDown />
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
      <Row className="mt-4 shadow mr-5 ml-5">
        <Col>
          <Row className="pt-2 mb-4" style={{ backgroundColor: "#E4E4E4" }}>
            <h5 style={{ color: "#34495E" }}>Track Options</h5>
          </Row>
          <Row
            style={{
              fontSize: "18px",
              justifyContent: "center",
              marginLeft: "5%",
              marginRight: "5%",
              color: "#34495E",
            }}
          >
            <Row className="mb-3">
              <Col xs={6}>
                <label className="mr-2">Spring</label>
              </Col>
              <Col xs={6}>
                <InputGroup>
                  <Form.Control
                    style={{ fontSize: "20px" }}
                    type="text"
                    defaultValue={formData.spring}
                    onChange={(e) => handleInputChange(e, "spring")}
                  ></Form.Control>
                  <InputGroup.Text>
                    <FaAngleDown />
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col xs={6}>
                <label className="mr-2">Track size:</label>
              </Col>
              <Col xs={6}>
                <InputGroup>
                  <Form.Control
                    style={{ fontSize: "20px" }}
                    type="text"
                    defaultValue={formData.trackSize}
                    onChange={(e) => handleInputChange(e, "trackSize")}
                  ></Form.Control>
                  <InputGroup.Text>
                    <FaAngleDown />
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={6}>
                <label className="mr-2">Track Mount</label>
              </Col>
              <Col xs={6}>
                <InputGroup>
                  <Form.Control
                    style={{ fontSize: "20px" }}
                    type="text"
                    defaultValue={formData.trackMount}
                    onChange={(e) => handleInputChange(e, "trackMount")}
                  ></Form.Control>
                  <InputGroup.Text>
                    <FaAngleDown />
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={6}>
                <label className="mr-2">Track Lift</label>
              </Col>
              <Col xs={6}>
                <InputGroup>
                  <Form.Control
                    style={{ fontSize: "20px" }}
                    type="text"
                    defaultValue={formData.trackLift}
                    onChange={(e) => handleInputChange(e, "trackLift")}
                  ></Form.Control>
                  <InputGroup.Text>
                    <FaAngleDown />
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={6}>
                <label className="mr-2">Track Radius</label>
              </Col>
              <Col xs={6}>
                <InputGroup>
                  <Form.Control
                    style={{ fontSize: "20px" }}
                    type="text"
                    defaultValue={formData.trackRadius}
                    onChange={(e) => handleInputChange(e, "trackRadius")}
                  ></Form.Control>
                  <InputGroup.Text>
                    <FaAngleDown />
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
      <Row className="mt-4 shadow mr-5 ml-5">
        <Col>
          <Row className="pt-2 mb-4" style={{ backgroundColor: "#E4E4E4" }}>
            <h5 style={{ color: "#34495E" }}>Other Options</h5>
          </Row>
          <Row
            style={{
              fontSize: "18px",
              justifyContent: "center",
              marginLeft: "5%",
              marginRight: "5%",
              color: "#34495E",
            }}
          >
            <Row className="mb-3">
              <Col xs={6}>
                <label className="mr-2">Lock:</label>
              </Col>
              <Col xs={6}>
                <InputGroup>
                  <Form.Control
                    style={{ fontSize: "20px" }}
                    type="text"
                    defaultValue={formData.lock}
                    onChange={(e) => handleInputChange(e, "lock")}
                  ></Form.Control>
                  <InputGroup.Text>
                    <FaAngleDown />
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={6}>
                <label className="mr-2">MISC Lock Options:</label>
              </Col>
              <Col xs={6}>
                <Form.Check type="radio" label="No lock hole" defaultChecked />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={6}>
                <label className="mr-2">Packaging:</label>
              </Col>
              <Col xs={6}>
                <InputGroup>
                  <Form.Control
                    style={{ fontSize: "20px" }}
                    type="text"
                    defaultValue={formData.packaging}
                    onChange={(e) => handleInputChange(e, "packaging")}
                  ></Form.Control>
                  <InputGroup.Text>
                    <FaAngleDown />
                  </InputGroup.Text>
                </InputGroup>
                <div className="text-danger mt-1" style={{ fontSize: "14px" }}>
                  <i className="bi bi-exclamation-triangle-fill mr-1"></i>
                  clopay CWD models excludes packaging options
                </div>
              </Col>
            </Row>
          </Row>
          <Row className="mb-3">
            <Col xs={6}>
              <label
                className="mr-2"
                style={{ marginLeft: "83px", fontSize: "18px" }}
              >
                Additional Options:
              </label>
            </Col>
            <Col xs={6}>
              <Row>
                <Col>
                  <div style={{ fontSize: "18px" }}>
                    <Form.Check
                      type="checkbox"
                      label="Extra Struts"
                      checked={formData.additionalOptions.includes(
                        "Extra Struts"
                      )}
                      onChange={(e) => handleCheckboxChange(e, "Extra Struts")}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Spade Straps"
                      checked={formData.additionalOptions.includes(
                        "Spade Straps"
                      )}
                      onChange={(e) => handleCheckboxChange(e, "Spade Straps")}
                    />
                    <Form.Check
                      type="checkbox"
                      label="14 ga Quiet Hinge"
                      checked={formData.additionalOptions.includes(
                        "14 ga Quiet Hinge"
                      )}
                      onChange={(e) => handleCheckboxChange(e, "14 ga Quiet Hinge")}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Less Bottom Astragal"
                      checked={formData.additionalOptions.includes(
                        "Less Bottom Astragal"
                      )}
                      onChange={(e) => handleCheckboxChange(e, "Less Bottom Astragal")}
                    />
                    <Form.Check type="checkbox" label="Gold Bar Guarantee" />
                    <Form.Check
                      type="checkbox"
                      label="Medallion Hardware Upgrade"
                      checked={formData.additionalOptions.includes(
                        "Medallion Hardware Upgrade"
                      )}
                      onChange={(e) =>
                        handleCheckboxChange(e, "Medallion Hardware Upgrade")
                      }
                    />
                    <Form.Check
                      type="checkbox"
                      label="Light Seal Kit"
                      checked={formData.additionalOptions.includes(
                        "Light Seal Kit"
                      )}
                      onChange={(e) => handleCheckboxChange(e, "Light Seal Kit")}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Slide Lock Mounted"
                      checked={formData.additionalOptions.includes(
                        "Slide Lock Mounted"
                      )}
                      onChange={(e) => handleCheckboxChange(e, "Slide Lock Mounted")}
                    />
                    <Form.Check
                      type="checkbox"
                      label="2 Spear Lift Handles"
                      checked={formData.additionalOptions.includes(
                        "2 Spear Lift Handles"
                      )}
                      onChange={(e) => handleCheckboxChange(e, "2 Spear Lift Handles")}
                    />
                  </div>
                </Col>
                <Col style={{marginRight: '83px'}}>
                  <div style={{ width: "fit-content" }}>
                    <InputGroup>
                      <Form.Control
                        style={{ fontSize: "18px" }}
                        type="text"
                        defaultValue={formData.extrastruts}
                        onChange={(e) =>
                          handleInputChange(e, "extrastruts")
                        }
                      ></Form.Control>
                      <InputGroup.Text>
                        <FaAngleDown />
                      </InputGroup.Text>
                    </InputGroup>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Container>
        <Row
          className="flex position-fixed bottom-0 d-flex justify-content-center"
          style={{ width: "85%" }}
        >
          <div className="bg-white rounded col d-flex justify-content-between align-items-center">
            <div className="p-2 me-auto text-white">
              {" "}
              <p className="m-0 font-weght-bold" style={{ fontSize: "12px" }}>
                1 ITEM
              </p>
              <p className="m-0 font-weight-bolder">$589</p>
            </div>
            <div className="d-flex">
              {" "}
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
                PREVIEW
              </Button>
              <Link to="/addtocart">
                <Button
                  onClick={handleAddToCart}
                  style={{
                    backgroundColor: "#66332B",
                    borderColor: "#66332B",
                    fontWeight: "600",
                  }}
                >
                  ADD TO CART
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default Progress;
