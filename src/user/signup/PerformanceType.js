import React, {Component} from 'react';
import './Signup.css';
import {Form} from 'antd';
import {PERFORMANCE_TYPE_STEP} from "../../constants";

const FormItem = Form.Item;

class PerformanceType extends Component {

    render() {
        if (this.props.currentStep !== PERFORMANCE_TYPE_STEP) {
            return null;
        }

        return (
            <div className="signup-container">
                <h1 className="page-title">Typ Performera</h1>
                <div className="signup-content">
                    <Form className="signup-form">
                        <FormItem>
                            <input
                               className="pt-checkbox"
                                onChange={this.props.checkIsSolo}
                                id={"isSolo"} type="checkbox"
                                checked={this.props.isSolo}/>
                            <label
                                htmlFor="isSolo">Sólista</label>

                        </FormItem>
                        {this.props.performanceTypes.map((type, index) => {
                            return (
                                <FormItem>
                                    <input
                                        className="pt-checkbox"
                                        onChange={(event) => this.props.performanceTypeCheck(index, event)}
                                        id={type.id} type="checkbox"
                                        checked={type.val}/>
                                    <label
                                        className="category-label"
                                        htmlFor={type.id}>{type.name}</label>

                                </FormItem>)
                        })}
                    </Form>
                </div>
            </div>
        );
    }
}

export default PerformanceType;
