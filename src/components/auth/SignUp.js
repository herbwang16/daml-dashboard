import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col, Divider, Space } from 'antd';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import "../css/Landing.css";
import "antd/dist/antd.css";


const layout = {
  labelCol: {
    span: 0
  },
  wrapperCol: {
    span: 24
  },
};
const tailLayout = {
  wrapperCol: {
    span: 24
  },
};




class SignUp extends React.Component {

    state = {
        username: "root",
        email: "email",
        password: "pass",
        passwordV: "passV"
    }


    onFinish = values => {
      this.setState({
          username: values.username,
          email: values.email,
          password: values.password,
          passwordV: values.passwordV
      });
      if (this.state.password !== this.state.passwordV){
          alert("Passwords must match!");
      }
    };

    onChangeUsername = e => {
        this.setState({
            username: e.target.value
        });
        console.log(this.state.username);
    }

    onChangeEmail = e => {
        this.setState({
            username: e.target.value
        });
        console.log(this.state.email);
    }

    onChangePassword = e => {
        this.setState({
            password: e.target.value
        });
        console.log(this.state.password);
    }
    onChangePasswordV = e => {
        this.setState({
            passwordV: e.target.value
        });
        console.log(this.state.passwordV);
    }

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <>

            <div>
                <p class="maintext">Welcome to Peagle</p>
                <p class="secondarytext">Sign up with your information below.</p>
            </div>

            <Form
                {...layout}
                name="basic"
                onFinish = {this.onFinish}
                onFinishFailed = {this.onFinishFailed}
            >
                <Form.Item
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Username required.',
                    },
                    ]}
                    onChange={this.onChangeUsername}

                >
                    <Input placeholder='Username'/>
                </Form.Item>

                <Form.Item
                    name="email"
                    rules={[
                    {
                        required: true,
                        message: 'Email required.',
                    },
                    ]}
                    onChange={this.onChangeEmail}

                >
                    <Input placeholder='Email'/>
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                    {
                    required: true,
                    message: 'Password required.',
                    },
                    ]}
                    onChange={this.onChangePassword}

                >
                    <Input.Password placeholder='Password' class="form-input"/>
                </Form.Item>

                <Form.Item
                    name="passwordV"
                    rules={[
                    {
                    required: true,
                    message: 'Password verification required.',
                    },
                    ]}
                    onChange={this.onChangePasswordV}

                >
                    <Input.Password placeholder='Verify Password' class="form-input"/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <div class="tail">
                        <Space>
                            <Button type="primary" htmlType="submit" size="medium"  shape="round" class="submit-button">
                                Sign Up!
                            </Button>

                        </Space>
                    </div>
                </Form.Item>
            </Form>

            </>
        )
    }
}

export default SignUp;
