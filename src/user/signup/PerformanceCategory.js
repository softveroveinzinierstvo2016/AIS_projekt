import React, { Component } from 'react';
import './Signup.css';

import { Form } from 'antd';
import{ PERFORMANCE_CATEGORY_STEP} from "../../constants";

const FormItem = Form.Item;
class PerformanceCategory extends Component {

    render() {
        if (this.props.currentStep !== PERFORMANCE_CATEGORY_STEP) {
            return null;
        }

        return (
            <div className="signup-container">
                <h1 className="page-title">Typ produkcie</h1>
                <div className="signup-content">
                    <Form className="signup-form">
                        {this.props.performanceCategories.map((cat, index) => {
                            return (
                                <FormItem>
                                    <input
                                        onChange={(event) => this.props.performanceCategoryCheck(index, event)}
                                        id={cat.id} type="checkbox"
                                        checked={cat.val}/>
                                    <label
                                        className="category-label"
                                        htmlFor={cat.id}>{cat.name}</label>
                                    <div
                                        hidden ={!cat.val}>
                                        {cat.subcategories.map((subcat, index2) => {
                                            return (
                                                <FormItem>
                                                    <input
                                                        validation={this.props.validateCategorySelection}
                                                        className="subcategory-checkbox"
                                                        type="checkbox"
                                                        onChange={(event) => this.props.performanceSubcategoryCheck(index, index2, event)}
                                                        id= {"sub" + subcat.id}
                                                        checked={subcat.val}/>
                                                    <label
                                                        className="category-label"
                                                        htmlFor={"sub" + subcat.id}>{subcat.name}</label>
                                                    <div>

                                                    </div>
                                                </FormItem>)
                                        })}
                                    </div>
                                </FormItem>)
                        })}
                    </Form>
                </div>
            </div>
        );
    }
}

export default PerformanceCategory;