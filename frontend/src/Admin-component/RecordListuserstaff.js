import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Redirect} from "react-router";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@material-ui/core/Tooltip";
import Axios from 'axios';

export default class RecordListuserstaff extends Component {
    render(){
    return (
          <tr>
                <td>
                    hi
                </td>
                <td>
                    hello              
                </td>
                <td>
                    hi
                </td>
                <td>
                    hi
                </td>
                <td>
                    <Tooltip title="Edit" placement="left">
                        <FontAwesomeIcon icon={faEdit} className="ml-2 p-1 fa-lg" style={{backgroundColor:'#2A324B',color:'white',fontSize:'20',borderRadius:'10'}}/>
                    </Tooltip>
                    <Tooltip title="Delete" placement="right">
                        <FontAwesomeIcon icon={faTrash} onClick={this.delete} className="ml-2 p-1" style={{backgroundColor:'#2A324B',color:'white',fontSize:'20',borderRadius:'10'}}/>
                    </Tooltip>
                </td>
            </tr>  
        )
    }
}