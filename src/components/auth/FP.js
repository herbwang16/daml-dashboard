import React from 'react';
import { Form, Input, Button} from 'antd';
import "../../css/Landing.css";

import "antd/dist/antd.css";

const layout = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 24,
  },
}
const tailLayout = {
  wrapperCol: {
    span: 24,
  },
}



class ForgotPassword extends React.Component {

    state = {
        email: 'root'
    }

    onChangeEmail = e => {
        this.setState({
            email: e.target.value
        });
        console.log(this.state.email);
    }

    onFinish = values => {
        this.setState({
            email: values.email
        })
        console.log(this.state.email)
    }

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    render (){
        return (
            <>
                <div>
                    <p class="maintext">Forgot your password?</p>
                    <p class="secondarytext"> Enter your email below to reset your password..</p>
                </div>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                    remember: true,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
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
                        <Input placeholder="Email address"/>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" shape="round">
                            Submit
                        </Button>
                    </Form.Item>

                </Form>
            </>
        )
    }
}

export default ForgotPassword;
