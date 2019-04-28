import React, {Component} from 'react';
import './Signup.css';
import {Form} from 'antd';
import { PERFORMANCE_STYLE_STEP} from "../../constants";
const FormItem = Form.Item;

class PerformanceStyle extends Component {

    render() {
        if (this.props.currentStep !== PERFORMANCE_STYLE_STEP) {
            return null;
        }

        return (
            <div className="signup-container">
                <h1 className="page-title">Štýl performera</h1>
                <div className="signup-content">
                    <Form className="signup-form">
                        {this.props.performanceStyles.map((style, index) => {
                            return (
                                <FormItem>
                                    <input
                                        onChange={(event) => this.props.performanceStyleCheck(index, event)}
                                        id={style.id} type="checkbox"
                                        checked={style.val}/>
                                    <label
                                        className="category-label"
                                        htmlFor={style.id}>{style.name}</label>
                                </FormItem>)
                        })}
                    </Form>
                </div>
            </div>
        );
    }
}

export default PerformanceStyle;