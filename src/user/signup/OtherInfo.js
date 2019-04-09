import React, {Component} from 'react';
import './Signup.css';
import {OTHER_INFO_STEP} from "../../constants";
import {Form, Input} from 'antd';
import TextArea from "antd/es/input/TextArea";

const FormItem = Form.Item;


class OtherInfo extends Component {
    render() {
        if (this.props.currentStep !== OTHER_INFO_STEP) {
            return null;
        }

        return (
            <div className="signup-container">
                <h1 className="page-title">Other information</h1>
                <div className="signup-content">
                    <Form onSubmit={this.handleSubmit} className="signup-form">
                        <FormItem label="Webpage">
                            <Input
                                size="large"
                                name="webPage"
                                id="webPage"
                                autoComplete="off"
                                placeholder="Your webpage address"
                                value={this.props.webPage.value}
                                onChange={this.props.handleChange}
                            />
                        </FormItem>
                        <FormItem label="Youtube Link">
                            <Input
                                type="text"
                                size="large"
                                name="youtube"
                                id="youtube"
                                autoComplete="off"
                                placeholder="Youtube link"
                                value={this.props.youtube.value}
                                onChange={this.props.handleChange}
                            />
                        </FormItem>
                        <FormItem
                            label="Other information">
                            <TextArea
                                type="text"
                                autosize="true"
                                size="large"
                                name="otherInfo"
                                id="otherInfo"
                                autoComplete="off"
                                placeholder="Additional information"
                                value={this.props.otherInfo.value}
                                onChange={this.props.handleChange}/>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

export default OtherInfo;