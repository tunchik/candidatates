import React from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import {List, ListItem, Avatar} from "@material-ui/core";



const CandidateListItems = ({ name , age, country}) => {



        return(
            <List className={"d-flex justify-content:center"}>
             <ListItem>
              <Avatar>
             </Avatar>
            </ListItem>
                <ListItem>{ name }</ListItem>
                <ListItem>{ age }</ListItem>
                    <ListItem>{ country }</ListItem>
                    <ListItem>
                        <Dropdown >
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                                </Dropdown.Menu>
                        </Dropdown>
                    </ListItem>
            </List>)
};
export default CandidateListItems;
