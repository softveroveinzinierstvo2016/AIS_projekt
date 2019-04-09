import React, {Component} from 'react';
import './Signup.css';
import {Form, Input} from 'antd';
import {PRICE_CONFIG_STEP} from "../../constants";

const FormItem = Form.Item;

class PriceConfiguration extends Component {

    render() {

        if (this.props.currentStep !== PRICE_CONFIG_STEP) {
            return null;
        }

        return (
            <div className="signup-container">
                <h1 className="page-title">Price congifuration</h1>
                <div className="signup-content">
                    <Form onSubmit={this.handleSubmit} className="signup-form">
                        {this.props.performanceCategories.map((cat, index) => {
                            if (!cat.val) {
                                return null;
                            }
                            return (
                                <FormItem>

                                    <label
                                        className="category-label"
                                        htmlFor={cat.id}>{cat.name}</label>
                                    <div hidden={!cat.val}>
                                        {cat.subcategories.map((subcat, index2) => {
                                            if (!subcat.val) {
                                                return null;
                                            }

                                            return (
                                                <div>
                                                    <label
                                                        className="category-label"
                                                        htmlFor={subcat.id}>{subcat.name}</label>
                                                    <Input
                                                        type="text"
                                                        size="large"
                                                        name={"price" + subcat.name}
                                                        id={"price" + subcat.id}
                                                        autoComplete="off"
                                                        placeholder="cena v EUR"
                                                        value={subcat.price}
                                                        onChange={(event) => this.props.updateSubcategoryPrice(index, index2, event)}
                                                    />
                                                    <Input
                                                        type="text"
                                                        size="large"
                                                        name={"name" + subcat.name}
                                                        id={"desc" + subcat.id}
                                                        autoComplete="off"
                                                      //  placeholder="viac info o cene"
                                                        value={subcat.desc}
                                                        onChange={(event) => this.props.updateSubcategoryPriceDescription(index, index2, event)}
                                                    />
                                                </div>)
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

export default PriceConfiguration;