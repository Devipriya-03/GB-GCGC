import React,{Component} from 'react'
import {Form} from "reactstrap";
import {Button,Row,Col,Table} from "react-bootstrap";
import {BrowserRouter as Router,Route,Redirect,Switch,NavLink,Link} from "react-router-dom";
import {Nav} from "reactstrap";
import Axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@material-ui/core/Tooltip";
import ReactHTMLTableToExcel from 'react-html-table-to-excel'; 
import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas';  
import  EditStaff from './edituserstaff';
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
	      staff:[],
	      recordListuserstaff:[],
	      search:""
	    };
	}
	

	componentDidMount()  {

		const obj={
		      Emp_Id:this.state.Emp_Id,
		      Emp_Name:this.state.Emp_Name,
		      Email_id:this.state.Email_id,
		      Campus:this.state.Campus,
		      Department:this.state.Department,
		      Mobile_No:this.state.Mobile_No

		    };

		    console.log(obj);
    	Axios.get("http://localhost:80/Admin-backend/userstaff.php",obj)
    	.then(response=>{
      	this.setState({
        	recordListuserstaff:response.data,
        	Emp_Id: response.data[0]["Emp_Id"],
        	Emp_Name: response.data[0]["Emp_Name"],
        	Email_id:response.data[0]["Email_id"],
        	Campus: response.data[0]["Campus"],
        	Department: response.data[0]["Department"],
        	Mobile_No: response.data[0]["Mobile_No"]
      	})
      	console.log(this.state.recordListuserstaff)
    })
    
    }



    StaffList(){
        return this.state.recordListuserstaff.map(function(object,i){
            return <RecordListuserstaff obj={object} key={i}/>;
        });
    }

    printDocument() {  
    const input = document.getElementById('Data');  
    html2canvas(input)  
      .then((canvas) => {  
        var imgWidth = 200;  
        var pageHeight = 290;  
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
        const imgData = canvas.toDataURL('image/png');  
        const pdf = new jsPDF('p', 'mm', 'a4')  
        var position = 0;  
        var heightLeft = imgHeight;  
        pdf.addImage(imgData, 'png', 0, position, imgWidth, imgHeight);  
        pdf.save("download.pdf");  
      });  
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
                      					style={{backgroundColor: "#6c757d",color: "white",borderColor: "#6c757d"}}>
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
		                <Col md="2"></Col>
		                <Col md="1">Search</Col>
		                <Col md="2"><input type="text"/></Col>

		            </Row>
		           	<Row >
	            		
	            		<Col md="2">
		            		<Form >
								<ReactHTMLTableToExcel  
		                    			className="btn btn-secondary"  
		                    			table="Data"  
		                    			filename="Filtered Students"  
		                    			sheet="Sheet1"  
		                    			buttonText="Generate Excel"
		                    			style={{backgroundColor:"#2A324B",color:"white",borderColor:"#2A324B"}} 
		                    		/>
				            </Form>
				        </Col>
	            	</Row>
	            	<br/>
		            <Row className="p-2">
		            	<Col md="12">
			            	<Table id="Data" responsive striped style={{backgroundColor:'white'}}>
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
				                	{this.StaffList()}
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