import React,{Component} from 'react'
import {Form} from "reactstrap";
import {Button,Row,Col,Table} from "react-bootstrap";
import {BrowserRouter as Router,Route,Redirect,Switch,NavLink,Link} from "react-router-dom";
import {Nav} from "reactstrap";
import Axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@material-ui/core/Tooltip";
import RecordListuserstaff from './RecordListuserstaff';

class  UserStaff extends Component { 
	constructor(props) {
	    super(props);
	    this.state = {
	      Emp_Id:"",
      	  Emp_Name:"",
      	  Email_id:"",
      	  Campus:"",
      	  Department:"",
      	  Mobile_No:"",
	      staff:[]
	    };
	}
	

	componentDidMount()  {
    	Axios.get("http://localhost:80/Admin-backend/userstaff.php")
    	.then(response=>{
      	this.setState({
        	staff:response.data,
        	Email_id: response.data[0]["Emp_Id"],
        	Emp_Name: response.data[0]["Emp_Name"],
        	Email_id:response.data[0]["Email_id"],
        	Campus: response.data[0]["Campus"],
        	Department: response.data[0]["Department"],
        	Mobile_No: response.data[0]["Mobile_No"]
      	})
      	console.log(this.state.staff[1])
    })
    
    }

    deletestaff(){
    	if(window.confirm('Are you sure to DELETE?'))
    	{
    		fetch({
    			method:'DELETE',
    			header:{'Accept':'application/json',
    			'Content-Type':'application/json'
    			}
    		})
    	}
    }

	render(){
	    return (
	        <div>
	        	<Row style={{backgroundColor: "#2A324B",color: "white",fontSize: "14px",fontFamily: "Segoe UI",fontWeight: "700"}}>
		            <Col xs="12" className="p-2" align="center">
		              <div>Staff Details</div>
		            </Col>
	          	</Row>
	            <Row style={{ backgroundColor: "white" }} className="p-2 ">
	            	<Row >
	            	
	            		<Col md="2" >
		            		<Form >
				            	<NavLink tag={Redirect} to={"/userstaffAdd"}>
				              		<Button
                      					style={{backgroundColor: "#2A324B",color: "white",borderColor: "#2A324B"}}>
					                      Add Staff
					                </Button>
			              		</NavLink>
				            </Form>
				        </Col>
	            	</Row>
		            <Row className="p-3">
		            	<Col md="1">Show</Col>
		            		<select>
		                    	<option value="nill">All</option>
		                        <option value="1">10</option>
		                        <option value="2">20</option>
		                        <option value="3">50</option>
		                        <option value="4">100</option>
		                        <option value="5">150</option>
		                        <option value="6">200</option>
		                        <option value="7">250</option>
		                        <option value="8">300</option>
		                        <option value="9">350</option>
		                    </select>  
		                
		                <Col md="1">
		                	Entities
		                </Col>
		            </Row>
		           	<Row >
	            		
	            		<Col md="2">
		            		<Form >
								<Button style={{backgroundColor: "#2A324B",color: "white",borderColor: "#2A324B"}}>
					                Generate Excel
					            </Button>
				            </Form>
				        </Col>
	            	</Row>
	            	<br/>
		            <Row className="p-2">
		            	<Col md="12">
			            	<Table  responsive striped style={{backgroundColor:'white'}}>
				                <thead style={{backgroundColor:'#2A324B',color:'white'}}>
				                  <tr>
				                    <th>Emp_Id</th>
				                    <th>Emp_Name</th>
				                    <th>Email</th>
				                    <th>Campus</th>
				                    <th>Department</th>
				                    <th>Mobile</th>
				                    <th>Action</th>
				                  </tr>
				                </thead>
				                <tbody>
			                      {this.state.staff.map((item =>
			                      <tr>
			                        <td>{item.Email_id}</td>
			                        <td>{item.Emp_Name}</td>
			                        <td>{item.Email_id}</td>
			                        <td>{item.Campus}</td>
			                        <td>{item.Department}</td>
			                        <td>{item.Mobile_No}</td>
			                        <td>
					                    <Tooltip title="Edit" placement="left">
					                        <FontAwesomeIcon icon={faEdit} className="ml-2 p-1 fa-lg" style={{backgroundColor:'#2A324B',color:'white',fontSize:'20',borderRadius:'10'}}/>
					                    </Tooltip>
					                    <Tooltip title="Delete" placement="right">
					                        <FontAwesomeIcon icon={faTrash} onClick={()=>this.deletestaff()} className="ml-2 p-1" style={{backgroundColor:'#2A324B',color:'white',fontSize:'20',borderRadius:'10'}}/>
					                    </Tooltip>
					                </td>
			                        </tr>
			                        ))}
			                    </tbody>
			              	</Table>
		              	</Col>
		            </Row>
	            </Row>
	        </div>
	    )
	}
}

export default UserStaff;