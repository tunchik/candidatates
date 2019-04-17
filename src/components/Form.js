import React from 'react';
import {Form ,Col, Button, Dropdown,} from 'react-bootstrap'
import Card from "react-bootstrap/es/Card";

class CandidatesForm extends React.Component{

    state={
        edit:false
    };


    render() {
        return(
            <Card border="secondary" className="mt-5 col-11 ">
                <Form className ="d-flex justify-content-center mt-5">
                    <Form.Group className ="col-5">
                        <Form.Control placeholder="Full Name"  />
                    </Form.Group>

                    <Form.Group className="d-flex col-5 justify-content-between">
                        <Form.Control className="col-5" placeholder="Project Name"/>
                        <Form.Control className="col-3" placeholder="Date"/>
                        <Form.Control className="col-3" placeholder="Date"/>
                    </Form.Group>

                </Form>
                <Form className="d-flex justify-content-center">
                    <div  className="col-5">
                        <Form.Group  className="d-flex justify-content-between">
                            <Form.Control placeholder="Street" className="col-8"/>
                            <Form.Control placeholder="Number" className="col-3"/>
                        </Form.Group>

                        <Form.Group  className="d-flex justify-content-between">
                            <Form.Control placeholder="Postalcode" className="col-3"/>
                            <Form.Control placeholder="City " className="col-8"/>
                        </Form.Group>
                    </div>

                    <div className="col-5">
                        <Form.Control as="textarea" rows={3}   placeholder="Text"/>
                    </div>
                </Form>

                <Form className="d-flex justify-content-center">
                    <Form.Group as={Col} md={5}>
                        <Form.Control placeholder="E-mail" className="mb-3"/>
                        <Dropdown >
                            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic" className="mb-3 col-12 justify-content-between font-weight-bold">Country
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">UK</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">USA</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Ukraine</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control placeholder="Profile-image" className="mb-3"/>
                    </Form.Group>

                    <Form.Group as={Col} md={5} >
                        <div className="mb-3 d-flex justify-content-end">
                            <Button variant="outline-primary" className="col-5 text-capitalize font-weight-bold">add more experience</Button>
                        </div>
                        <Form.Control as="textarea" rows={3} />
                        <div className="mt-3 d-flex justify-content-end">
                            <Button className="col-5 text-capitalize font-weight-bold">add candidate</Button>
                        </div>
                    </Form.Group>
                </Form>
            </Card>
        )
    }
}

export default CandidatesForm;
