import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";


const App = () => {


    return (
        <Router>
            <div className={"background-color:#dadfe4"}>
                <Route exact path="/main" component={Main} />
                <Route exact path="/(login)?" component={LoginForm} />
            </div>
        </Router>
    );
};

ReactDOM.render(<App />,
    document.getElementById('root'));
