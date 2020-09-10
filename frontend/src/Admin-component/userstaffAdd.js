import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";

class userstaffAdd extends React.Component {
  render(){
    return(
      <div>
        <Container>
          <Row style={{backgroundColor: "#2A324B",color: "white",fontSize: "14px",fontFamily: "Segoe UI",fontWeight: "700"}}>
            <Col xs="12" className="p-2" align="center">
              <div>Add Staff</div>
            </Col>
          </Row>
          <Row style={{ backgroundColor: "white" }}>
          <Col>
            <form>
              <Row>
                <Col lg="2"></Col>
                <Col lg="8">
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Employee ID:</Col>
                    <Col lg="8">
                      <input type="text" className="form-control" />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Employee Name</Col>
                    <Col lg="8">
                      <input type="text" className="form-control" />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Email ID:</Col>
                    <Col lg="8">
                      <input type="text" className="form-control" />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Phone Number</Col>
                    <Col lg="8">
                      <input type="text" className="form-control" />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Gender</Col>
                    <Col lg="8">
                        <input type="radio" id="male" name="gender" value="male"/>
                        <label for="male">Male</label>
                        <input type="radio" id="female" name="gender" value="female"/>
                        <label for="female">Female</label>
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Designation</Col>
                    <Col lg="8">
                      <input type="text" className="form-control" />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Campus</Col>
                    <Col lg="8">
                      <input type="text" className="form-control" />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Institution</Col>
                    <Col lg="8">
                      <input type="text" className="form-control" />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Department</Col>
                    <Col lg="8">
                      <input type="text" className="form-control" />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Image</Col>
                    <Col lg="8">
                      <input type="file" className="form-control" />
                      <Button>
                        Upload
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Button>Upload</Button>
              </Row>
            </form>
          </Col>
        </Row>

        </Container> 
      </div>
      );
  }
}
export default userstaffAdd;
