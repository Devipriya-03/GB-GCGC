import React from "react";
import { Container, Row, Col, Card,Form, FormGroup,Label,Input } from "reactstrap";
import { Button } from "react-bootstrap";
import Axios from "axios";

class userstaffAdd extends React.Component {

  constructor(props){
        super(props);
        this.state = {
            
            Emp_Id:"",
            Emp_Name:"",
            Email_id:"",
            Campus:"",
            Department:"",
            Mobile_No:"",
            Institution:"",
            Designation:"",
            Gender:""
            
          };
      
          this.onChangeempid=this.onChangeempid.bind(this);
          this.onChangeemail=this.onChangeemail.bind(this);
          this.onChangemobileno=this.onChangemobileno.bind(this);
          this.onChangedesignation=this.onChangedesignation.bind(this);
          this.onChangecampus=this.onChangecampus.bind(this);
          this.onChangeinstitution=this.onChangeinstitution.bind(this);
          this.onChangedepartment=this.onChangedepartment.bind(this);
          this.onChangeEname=this.onChangeEname.bind(this);
          this.handleSubmit=this.handleSubmit.bind(this);
      
        }

        onChangeempid(e){
          this.setState({
            Emp_Id:e.target.value
          });
        }

        onChangeemail(e){
          this.setState({
            Email_id:e.target.value
          });
        }
        onChangemobileno(e){
          this.setState({
            Mobile_No:e.target.value
          });
        }
        onChangedesignation(e){
          this.setState({
            Designation:e.target.value
          });
        }
        onChangecampus(e){
          this.setState({
          Campus:e.target.value
          });
        }
        onChangeinstitution(e){
          this.setState({
            Institution:e.target.value
          });
        }
        onChangedepartment(e){
          this.setState({
            Department:e.target.value
          });
        }
        onChangeEname(e){
          this.setState({
          Emp_Name:e.target.value
          });
        }


  handleSubmit(e){
    e.preventDefault();
    const obj={
          Emp_Id:this.state.Emp_Id,
          Emp_Name:this.state.Emp_Name,
          Email_id:this.state.Email_id,
          Campus:this.state.Campus,
          Department:this.state.Department,
          Mobile_No:this.state.Mobile_No,
          Designation:this.state.Designation,
          Institution:this.state.Institution
    };
    console.log(obj);
    Axios.post("http://localhost:80/Admin-backend/userstaffadd.php",obj)
      .then(res=>alert(res.data+"Sucessfully Added"))
      .catch(err=>console.log(err))
      this.setState({
        Emp_Id:"",
        Emp_Name:"",
        Email_id:"",
        Campus:"",
        Department:"",
        Mobile_No:"",
        Designation:"",
        Institution:""
      })
  }


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
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col lg="2"></Col>
                <Col lg="8">
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Employee ID:</Col>
                    <Col lg="8">
                      <input type="text" id="Emp_Id" value={this.state.Emp_Id} className="form-control" name="Emp_Id" onChange={this.onChangeempid} />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Employee Name</Col>
                    <Col lg="8">
                      <Input type="text" id="Emp_Name"  value ={this.state.Emp_Name} name="Emp_Name" onChange={this.onChangeEname} />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Email ID:</Col>
                    <Col lg="8">
                      <Input type="text" id="Email_id" value={this.state.Email_id} name="Email_id" onChange={this.onChangeemail} />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Phone Number</Col>
                    <Col lg="8">
                      <Input type="text" id="Mobile_No" value={this.state.Mobile_No} name="Mobile_No" onChange={this.onChangemobileno} />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Gender</Col>
                    <Col lg="8">
                        <input type="radio" id="male" name="gender" value={this.state.Gender}/>
                        <label for="male">Male</label>
                        <input type="radio" id="female" name="gender" value={this.state.Gender}/>
                        <label for="female">Female</label>
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Designation</Col>
                    <Col lg="8">
                      <Input type="text" id="Designation" value={this.state.Designation} name="Designation" onChange={this.onChangedesignation} />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Campus</Col>
                    <Col lg="8">
                      <Input type="text" id="Campus" value={this.state.Campus} name="Campus" onChange={this.onChangecampus} />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Institution</Col>
                    <Col lg="8">
                      <Input type="text" id="Institution" value={this.state.Institution} name="Institution" onChange={this.onChangeinstitution} />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Department</Col>
                    <Col lg="8">
                      <Input type="text" id="Department" value={this.state.Department} name="Department" onChange={this.onChangedepartment} />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Image</Col>
                    <Col lg="8">
                      <input type="file" className="form-control" />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4"></Col>
                    <Col lg="8">
                      <Button type="submit" value="submit" color="primary">
                        Upload
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        </Container> 
      </div>
      );
  }
}
export default userstaffAdd;
