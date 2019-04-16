import React from 'react';
import {ListGroup} from 'react-bootstrap'
import CandidateListItems from './CandidateListItems';
import Col from "react-bootstrap/Col";
import Data from "../data";

const candidatedata = Data;
const CandidateList = ({ candidatedata }) => {


    const elements = candidatedata.map((item) => {
        return (
                <Col xs={6} md={4} className={"d-flex"}>
                    <ListGroup.Item >
                        <CandidateListItems {...item } />
                    </ListGroup.Item>
                </Col>
        );
    });

    return (
        <ul className={"d-flex justify-ck"}>
            { elements }
        </ul>
    );
};

export default CandidateList;
