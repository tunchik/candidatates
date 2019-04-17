import React from 'react';
import {ListGroup} from 'react-bootstrap'
import CandidateListItems from './CandidateListItems';
import Col from "react-bootstrap/Col";



const CandidateList = ( {data} ) => {

    const elements = data.map((item) => {
        const {id,...itemProps} = item;
        return(
            <ListGroup as={Col} key={id} className="d-flex justify-content-between mt-5">
                    <ListGroup.Item  className="d-flex mr-2 justify-content-between col-11" >
                        <CandidateListItems {...itemProps} className="d-flex"/>
                    </ListGroup.Item>
            </ListGroup>
        );
    });

    return (
        <ul className={"d-flex"}>
            { elements }
        </ul>
    );
};

export default CandidateList;
