import React from 'react';
import CandidateList from './CandidateList';
import CandidatesForm from "./Form";
import Data from "../data";

class Main extends React.Component{

    state = {
        data:Data
};

    render() {

        return(
            <div className="d-flex flex-column align-items-center">
                <CandidateList data={this.state.data} className="d-flex"/>
                <CandidatesForm />
            </div>
        )
    }
}


export default Main;
