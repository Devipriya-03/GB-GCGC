import React, { Component } from 'react';
import { Card, Table, Button } from "react-bootstrap";
import { Form, FormGroup,Label,Input} from "reactstrap";
import {Redirect} from 'react-router';
import Axios from 'axios';

class EditStaff extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            edit:[],
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
      
          this.onChangeemail=this.onChangeemail.bind(this);
          this.onChangemobileno=this.onChangemobileno.bind(this);
          this.onChangedesignation=this.onChangedesignation.bind(this);
          this.onChangecampus=this.onChangecampus.bind(this);
          this.onChangeinstitution=this.onChangeinstitution.bind(this);
          this.onChangedepartment=this.onChangedepartment.bind(this);
          this.onChangeEname=this.onChangeEname.bind(this);
          this.handleSubmit=this.handleSubmit.bind(this);
      
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

        componentDidMount(){
          Axios.get("http://localhost/Admin-backend/EditTraining.php?id="+this.props.match.params.id)
          .then(response=>{
            this.setState({
              edit: response.data,
              Emp_Id: response.data[0].Emp_Id,
              Emp_Name:response.data[0].Emp_Name,
              Email_id:response.data[0].Email_id,
              Campus:response.data[0].Campus,
              Department:response.data[0].Department,
              Designation:response.data[0].Designation,
              Mobile_No:response.data[0].Mobile_No,
              Institution:response.data[0].Institution
            })
            console.log(this.response.data)
          })
          .catch(err=>console.log(err))
        }
    handleSubmit(e){
        e.preventDefault();
        const obj={
          Emp_Id:this.props.match.params.Emp_Id,
          Emp_Name:this.state.Emp_Name,
          Email_id:this.state.Email_id,
          Campus:this.state.Campus,
          Department:this.state.Department,
          Mobile_No:this.state.Mobile_No,
          Designation:this.state.Designation,
          Institution:this.state.Institution
        };
    console.log(obj);
    Axios.post("http://localhost:80/Admin-backend/TrainingBoardUpdate.php",obj)
      .then(res=>alert(res.data+"Updated Sucessfully"))
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
     return (
        <div className="container">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlfor="username">Employee Name</Label>
                <Input type="text" id="Emp_Name"  value ={this.state.Emp_Name} name="Emp_Name" onChange={this.onChangeEname} />
              </FormGroup>
              <FormGroup>
                <Label htmlfor="email">Email </Label>
                <Input type="text" id="Email_id" value={this.state.Email_id} name="Email_id" onChange={this.onChangeemail} />
              </FormGroup>
              <FormGroup>
                <Label htmlfor="Phone Number">Phone Number</Label>
                <Input type="text" id="Mobile_No" value={this.state.Mobile_No} name="Mobile_No" onChange={this.onChangemobileno} />
              </FormGroup>
              <FormGroup>
                <Label htmlfor="Gender">Gender</Label>
                
                <input type="radio" id="male" name="gender" value={this.state.Gender}/>
                <label for="male">Male</label>
                <input type="radio" id="female" name="gender" value={this.state.Gender}/>
                <label for="female">Female</label>
              </FormGroup>
              <FormGroup>
                <Label htmlfor="Designation">Designation</Label>
                <Input type="text" id="Designation" value={this.state.Designation} name="Designation" onChange={this.onChangedesignation} />
              </FormGroup>
              <FormGroup>
                <Label htmlfor="Campus">Campus</Label>
                <Input type="text" id="Campus" value={this.state.Campus} name="Campus" onChange={this.onChangecampus} />
              </FormGroup>
              <FormGroup>
                <Label htmlfor="Institution">Institution</Label>
                <Input type="text" id="Institution" value={this.state.Institution} name="Institution" onChange={this.onChangeinstitution} />
              </FormGroup>
              <FormGroup>
                <Label htmlfor="Department">Department</Label>
                <Input type="text" id="Department" value={this.state.Department} name="Department" onChange={this.onChangedepartment} />
              </FormGroup>
              <FormGroup>
                <Label htmlfor="image">Image</Label>
                <Input type="file" id="image"  name="image"  />
              </FormGroup>
              
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </Form>
        </div>
     )
    }
}

export default EditTraining
