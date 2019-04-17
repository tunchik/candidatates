import React from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import {ListItem, Avatar} from "@material-ui/core";



export default class CandidateListItems extends React.Component{


    state={
        edit:false
    };

    changeEdit=()=>{
        this.setState(({edit})=>{
            return{
                edit:!false
            }
        })
    };

    render(){
        const { name , age, country} = this.props;
        return(
            <React.Fragment>
             <ListItem className="col-2">
              <Avatar>
             </Avatar>
            </ListItem>
            <ListItem className="col-2">{ name }</ListItem>
            <ListItem className="col-2">{ age }</ListItem>
            <ListItem className="col-2">{ country }</ListItem>
            <ListItem className="col-2">
                <Dropdown >
                        <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" onClick={this.changeEdit}>Edit</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                        </Dropdown.Menu>
                </Dropdown>
            </ListItem>
            </React.Fragment>
        );
    };
}

