import React, {Component} from 'react';
import './Signup.css';
import {Form, Input} from 'antd';
import {BASIC_INFO_STEP} from "../../constants";

const FormItem = Form.Item;

class LoginInfo extends Component {
    render() {
        if (this.props.currentStep !== BASIC_INFO_STEP) {
            return null;
        }

        return (
            <div className="signup-container">
                <h1 className="page-title">Sign Up</h1>
                <div className="signup-content">
                    <Form onSubmit={this.props.handleSubmit} className="signup-form">
                        <FormItem
                            label="Full Name"
                            validateStatus={this.props.fullname.validateStatus}
                            help={this.props.fullname.errorMsg}>
                            <Input
                                size="large"
                                name="fullname"
                                id="fullname"
                                autoComplete="off"
                                placeholder="Your full name"
                                value={this.props.fullname.value}
                                onChange={(event) => this.props.handleNameChange(event)}/>
                        </FormItem>
                        <FormItem label="Username"
                                  hasFeedback
                                  validateStatus={this.props.username.validateStatus}
                                  help={this.props.username.errorMsg}>
                            <Input
                                size="large"
                                name="username"
                                id="username"
                                autoComplete="off"
                                placeholder="A unique username"
                                value={this.props.username.value}
                                onBlur={this.props.validateUsernameAvailability}
                                onChange={(event) => this.props.handleUsernameChange(event)}
                            />
                        </FormItem>
                        <FormItem
                            label="Email"
                            hasFeedback
                            validateStatus={this.props.email.validateStatus}
                            help={this.props.email.errorMsg}>
                            <Input
                                size="large"
                                name="email"
                                type="email"
                                id="email"
                                autoComplete="off"
                                placeholder="Your email"
                                value={this.props.email.value}
                                onBlur={this.validateEmailAvailability}
                                onChange={(event) => this.props.handleEmailChange(event)}
                            />
                        </FormItem>
                        <FormItem
                            label="Password"
                            validateStatus={this.props.password.validateStatus}
                            help={this.props.password.errorMsg}>
                            <Input
                                size="large"
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="off"
                                placeholder="A password between 6 to 20 characters"
                                value={this.props.password.value}
                                onChange={(event) => this.props.handlePasswordChange(event)}
                            />
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }

}

export default LoginInfo;