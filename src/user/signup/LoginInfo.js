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
                <h1 className="page-title">Základné informácie</h1>
                <div className="signup-content">
                    <Form onSubmit={this.props.handleSubmit} className="signup-form">
                        <FormItem
                            label="Názov"
                            validateStatus={this.props.fullName.validateStatus}
                            help={this.props.fullName.errorMsg}>
                            <Input
                                size="large"
                                name="fullName"
                                id="fullName"
                                autoComplete="off"
                                placeholder="Názov performera/skupiny"
                                value={this.props.fullName.value}
                                onChange={(event) => this.props.handleNameChange(event)}/>
                        </FormItem>
                        <FormItem label="Prihlasovacie meno"
                                  hasFeedback
                                  validateStatus={this.props.username.validateStatus}
                                  help={this.props.username.errorMsg}>
                            <Input
                                size="large"
                                name="username"
                                id="username"
                                autoComplete="off"
                                placeholder="Prihlasovacie meno"
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
                                placeholder="Email"
                                value={this.props.email.value}
                                onBlur={this.validateEmailAvailability}
                                onChange={(event) => this.props.handleEmailChange(event)}
                            />
                        </FormItem>
                        <FormItem
                            label="Heslo"
                            validateStatus={this.props.password.validateStatus}
                            help={this.props.password.errorMsg}>
                            <Input
                                size="large"
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="off"
                                placeholder="Heslo 6 - 20 znakov"
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
