import React from 'react';
import CandidateList from './CandidateList'
import Button from "react-bootstrap/es/Button";

class Main extends React.Component{
    render() {
        return(
            <div >
                <CandidateList/>
                <Button className={"item-align:center"}>
                    Add
                </Button>
            </div>
        )
    }
}


export default Main;
