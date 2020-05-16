import React from 'react';
import Login from './Login';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { Row, Col, Divider } from 'antd';
import '../css/Landing.css';
import "antd/dist/antd.css";


class LoginPage extends React.Component {
    render () {
        return (

            <div class="container">
                <Row  justify="center" align="middle">
                    <Col xs={{span:20, offset: 0}} sm={{span:16, offset: 0}} md={{span:11, offset: 0}} lg={{span:9, offset: 10}} xl={{span:7, offset: 10}}>
                        <Login />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default LoginPage;
