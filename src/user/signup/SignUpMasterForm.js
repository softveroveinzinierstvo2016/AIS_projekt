import React, {Component} from 'react';
import LoginInfo from './LoginInfo';
import PerformanceType from '../signup/PerformanceType';
import PerformanceCategory from '../signup/PerformanceCategory';
import PerformanceStyle from '../signup/PerformanceStyle';
import PriceConfiguration from './PriceConfiguration';
import OtherInfo from '../signup/OtherInfo';
import './Signup.css';
import {Button, notification} from "antd";
import {
    EMAIL_MAX_LENGTH,
    NAME_MAX_LENGTH,
    NAME_MIN_LENGTH,
    PASSWORD_MAX_LENGTH,
    PASSWORD_MIN_LENGTH,
    USERNAME_MAX_LENGTH,
    USERNAME_MIN_LENGTH
} from "../../constants";
import {
    checkEmailAvailability,
    checkUsernameAvailability,
    getRegistrationFormData,
    signup
} from "../../util/APIUtils";

class SignUpMasterForm extends Component {
    constructor(props) {
        super(props);
        // Set the initial input values
        this.state = {
            currentStep: 1, // Default is Step 1
            fullName: {value: ''},
            email: {value: ''},
            username: {value: ''},
            password: {value: ''},
            webPage: {value: ''},
            youtube: {value: ''},
            otherInfo: {value: ''},
            isSolo: false,
            performanceTypes: [],
            performanceStyles: [],
            performanceCategories: []
        }

        // Bind the submission to handleChange()
        this.validateUsernameAvailability = this.validateUsernameAvailability.bind(this);
        this.validateEmailAvailability = this.validateEmailAvailability.bind(this);
        this.validateCategorySelection = this.validateCategorySelection.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isFormInvalid = this.isFormInvalid.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.performanceTypeCheck = this.performanceTypeCheck.bind(this)
        this.performanceStyleCheck = this.performanceStyleCheck.bind(this)
        this.performanceCategoryCheck = this.performanceCategoryCheck.bind(this)
        this.performanceSubcategoryCheck = this.performanceSubcategoryCheck.bind(this)
        this.updateSubcategoryPrice = this.updateSubcategoryPrice.bind(this)
        this.updateSubcategoryPriceDescription = this.updateSubcategoryPriceDescription.bind(this)
        this.checkIsSolo = this.checkIsSolo.bind(this)
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
    }

    componentDidMount() {
        this.loadData();
    }

// Use the submitted data to set the state
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: {value: value}
        })
    }

    performanceTypeCheck(index, newValue) {
        //copy the array first
        const updatedArray = [...this.state.performanceTypes];
        updatedArray[index].val = !updatedArray[index].val;
        this.setState({
            performanceTypes: updatedArray,
        });
    }

    performanceStyleCheck(index, newValue) {
        //copy the array first
        const updatedArray = [...this.state.performanceStyles];
        updatedArray[index].val = !updatedArray[index].val;
        this.setState({
            performanceStyles: updatedArray,
        });
    }

    performanceCategoryCheck(index, newValue) {
        //copy the array first
        const updatedArray = [...this.state.performanceCategories];
        updatedArray[index].val = !updatedArray[index].val;
        this.setState({
            performanceCategories: updatedArray,
        });
        this.validateCategorySelection();
    }

    performanceSubcategoryCheck(index, index2, newValue) {
        //copy the array first
        const updatedArray = [...this.state.performanceCategories];
        updatedArray[index].subcategories[index2].val = !updatedArray[index].subcategories[index2].val;
        this.setState({
            performanceCategories: updatedArray,
        });
        this.validateCategorySelection();
    }

    updateSubcategoryPrice(index, index2, newValue) {
        //copy the array first
        const updatedArray = [...this.state.performanceCategories];

        if (!isNaN(newValue.target.value)) {

            updatedArray[index].subcategories[index2].price = newValue.target.value;
            this.setState({
                performanceCategories: updatedArray,
            });
        }
    }

    updateSubcategoryPriceDescription(index, index2, newValue) {
        const updatedArray = [...this.state.performanceCategories];
        updatedArray[index].subcategories[index2].desc = newValue.target.value;
        this.setState({
            performanceCategories: updatedArray,
        });
    }

    checkIsSolo() {
        const wasSolo = this.state.isSolo;
        this.setState({
            isSolo: !wasSolo,
        });
    }


// Test current step with ternary
// _next and _previous functions will be called on button click
    _next() {
        let currentStep = this.state.currentStep
        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 5 ? 6 : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev() {
        let currentStep = this.state.currentStep
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="signup-container">
                    <div className="signup-content">
                        <React.Fragment>
                            <LoginInfo
                                currentStep={this.state.currentStep}
                                handleUsernameChange={(name) => this.handleInputChange(name, this.validateUsername)}
                                handleNameChange={(name) => this.handleInputChange(name, this.validateName)}
                                handleEmailChange={(email) => this.handleInputChange(email, this.validateEmail)}
                                handlePasswordChange={(password) => this.handleInputChange(password, this.validatePassword)}
                                fullName={this.state.fullName}
                                username={this.state.username}
                                email={this.state.email}
                                password={this.state.password}
                                handleChange={this.handleChange}

                                setState={this.setState}
                            />
                            <PerformanceType
                                checkIsSolo={this.checkIsSolo}
                                isSolo={this.state.isSolo}
                                currentStep={this.state.currentStep}
                                handleChange={this.handleChange}
                                performanceTypes={this.state.performanceTypes}
                                performanceTypeCheck={this.performanceTypeCheck}
                            />
                            <PerformanceStyle
                                currentStep={this.state.currentStep}
                                handleChange={this.handleChange}
                                performanceStyles={this.state.performanceStyles}
                                performanceStyleCheck={this.performanceStyleCheck}
                            />
                            <PerformanceCategory
                                validateCategorySelection={this.validateCategorySelection()}
                                currentStep={this.state.currentStep}
                                handleChange={this.handleChange}
                                performanceCategories={this.state.performanceCategories}
                                performanceCategoryCheck={this.performanceCategoryCheck}
                                performanceSubcategoryCheck={this.performanceSubcategoryCheck}
                            />
                            <PriceConfiguration
                                currentStep={this.state.currentStep}
                                handleChange={this.handleChange}
                                performanceCategories={this.state.performanceCategories}
                                updateSubcategoryPrice={this.updateSubcategoryPrice}
                                updateSubcategoryPriceDescription={this.updateSubcategoryPriceDescription}
                            />
                            <OtherInfo
                                currentStep={this.state.currentStep}
                                webPage={this.state.webPage}
                                youtube={this.state.youtube}
                                otherInfo={this.state.otherInfo}
                                handleChange={this.handleChange}
                            />

                        </React.Fragment>
                        <div className="buttons-container">
                            <div className="left-button">
                                <Button type="primary"
                                        onClick={this._prev}
                                        size="large"
                                        className="signup-form-button"
                                        disabled={this.state.currentStep <= 1}>Späť</Button>
                            </div>
                            <div className="right-button">
                                <Button type="primary"
                                        onClick={this._next}
                                        size="large"
                                        className="signup-form-button"
                                        disabled={this.state.currentStep >= 6}>Ďalej</Button>
                            </div>
                        </div>
                        <Button type="primary"
                                htmlType="submit"
                                size="large"
                                className="signup-form-button"
                                hidden={this.state.currentStep < 6}
                                disabled={this.isFormInvalid()}>Registrovať</Button>
                    </div>
                </div>
            </form>
        )
    }

// Functions
    isFormInvalid() {
        return !(this.state.fullName.validateStatus === 'success' &&
            this.state.username.validateStatus === 'success' &&
            this.state.email.validateStatus === 'success' &&
            this.state.password.validateStatus === 'success'
        );
    }


    handleSubmit(event) {
        event.preventDefault();
        var types = [];
        this.state.performanceTypes.forEach((type) => {
            if (type.val === true) {
                types.push(type.id);
            }
        });

        var styles = [];
        this.state.performanceStyles.forEach((style) => {
            if (style.val === true) {
                styles.push(style.id);
            }
        });

        var subcategories = [];
        this.state.performanceCategories.forEach((category) => {
            if (category.val === true) {
                category.subcategories.forEach(subcat => {
                    if (subcat.val === true) {
                        subcategories.push({
                            "userId": null,
                            "performanceSubcategory": subcat.id,
                            "informativePrice": subcat.price,
                            "priceDescription": subcat.desc
                        })
                    }
                })
            }
        })


        const signupRequest = {
            username: this.state.username.value,
            password: this.state.password.value,
            name: this.state.fullName.value,
            email: this.state.email.value,
            isSolo: this.state.isSolo,
            performerTypes: types,
            performerStyles: styles,
            pricedPerformanceSubcategory: subcategories,
            web: this.state.webPage.value,
            youtubeLink: this.state.youtube.value,
            otherPerformerInfo: this.state.otherInfo.value
        };

        console.log(signupRequest)

        signup(signupRequest)
            .then(response => {
                notification.success({
                    message: 'Polling App',
                    description: "Thank you! You're successfully registered. Please Login to continue!",
                });
                this.props.history.push("/login");
            }).catch(error => {
            notification.error({
                message: 'Polling App',
                description: error.message || 'Sorry! Something went wrong. Please try again!'
            });
        });
    }


    handleInputChange(event, validationFun) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: {
                value: inputValue,
                ...validationFun(inputValue)
            }
        });
    }

// Validation Functions

    validateName = (name) => {
        if (name.length < NAME_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Name is too short (Minimum ${NAME_MIN_LENGTH} characters needed.)`
            }
        } else if (name.length > NAME_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Name is too long (Maximum ${NAME_MAX_LENGTH} characters allowed.)`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };
        }
    }

    validateEmail = (email) => {
        if (!email) {
            return {
                validateStatus: 'error',
                errorMsg: 'Email may not be empty'
            }
        }

        const EMAIL_REGEX = RegExp('[^@ ]+@[^@ ]+\\.[^@ ]+');
        if (!EMAIL_REGEX.test(email)) {
            return {
                validateStatus: 'error',
                errorMsg: 'Email not valid'
            }
        }

        if (email.length > EMAIL_MAX_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Email is too long (Maximum ${EMAIL_MAX_LENGTH} characters allowed)`
            }
        }

        return {
            validateStatus: 'success',
            errorMsg: null
        }
    }

    validateUsername = (username) => {
        if (username.length < USERNAME_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Username is too short (Minimum ${USERNAME_MIN_LENGTH} characters needed.)`
            }
        } else if (username.length > USERNAME_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Username is too long (Maximum ${USERNAME_MAX_LENGTH} characters allowed.)`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null
            }
        }
    }

    validateUsernameAvailability() {
        // First check for client side errors in username
        const usernameValue = this.state.username.value;
        const usernameValidation = this.validateUsername(usernameValue);

        if (usernameValidation.validateStatus === 'error') {
            this.setState({
                username: {
                    value: usernameValue,
                    ...usernameValidation
                }
            });
            return;
        }

        this.setState({
            username: {
                value: usernameValue,
                validateStatus: 'validating',
                errorMsg: null
            }
        });

        checkUsernameAvailability(usernameValue)
            .then(response => {
                if (response.available) {
                    this.setState({
                        username: {
                            value: usernameValue,
                            validateStatus: 'success',
                            errorMsg: null
                        }
                    });
                } else {
                    this.setState({
                        username: {
                            value: usernameValue,
                            validateStatus: 'error',
                            errorMsg: 'This username is already taken'
                        }
                    });
                }
            }).catch(error => {
            // Marking validateStatus as success, Form will be recchecked at server
            this.setState({
                username: {
                    value: usernameValue,
                    validateStatus: 'success',
                    errorMsg: null
                }
            });
        });
    }

    validateEmailAvailability() {
        // First check for client side errors in email
        const emailValue = this.state.email.value;
        const emailValidation = this.validateEmail(emailValue);

        if (emailValidation.validateStatus === 'error') {
            this.setState({
                email: {
                    value: emailValue,
                    ...emailValidation
                }
            });
            return;
        }

        this.setState({
            email: {
                value: emailValue,
                validateStatus: 'validating',
                errorMsg: null
            }
        });

        checkEmailAvailability(emailValue)
            .then(response => {
                if (response.available) {
                    this.setState({
                        email: {
                            value: emailValue,
                            validateStatus: 'success',
                            errorMsg: null
                        }
                    });
                } else {
                    this.setState({
                        email: {
                            value: emailValue,
                            validateStatus: 'error',
                            errorMsg: 'This Email is already registered'
                        }
                    });
                }
            }).catch(error => {
            // Marking validateStatus as success, Form will be recchecked at server
            this.setState({
                email: {
                    value: emailValue,
                    validateStatus: 'success',
                    errorMsg: null
                }
            });
        });
    }

    validatePassword = (password) => {
        if (password.length < PASSWORD_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Password is too short (Minimum ${PASSWORD_MIN_LENGTH} characters needed.)`
            }
        } else if (password.length > PASSWORD_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Password is too long (Maximum ${PASSWORD_MAX_LENGTH} characters allowed.)`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };
        }
    }

    validateCategorySelection() {
        this.state.performanceCategories.forEach(category => {
            if (category.val) {
                let count = 0;
                category.subcategories.forEach(subcategory => {
                    if (subcategory.val) {
                        count++;
                    }
                });
                if (count === 0) {
                    return {
                        validateStatus: 'error',
                        errorMsg: 'You must check at least one subcategory in checked category.',
                    };
                }
            }
        });
        return {
            validateStatus: 'success',
            errorMsg: null,
        };
    }


    loadData() {
        let promise = getRegistrationFormData();

        if (!promise) {
            return;
        }

        promise
            .then(response => {
                var types = [];
                response.performerTypes.map((type) => types.push({"id": type.id, "name": type.name, "val": false}));

                var styles = [];
                response.performerStyles.map((style) => styles.push({
                    "id": style.id,
                    "name": style.name,
                    "val": false
                }));

                var categories = [];
                response.performerCategories.forEach((cat) => {
                    var sub = [];
                    cat.performanceSubcategories.map((subcat) => sub.push({
                        "id": subcat.id,
                        "name": subcat.name,
                        "val": false,
                        "price": null,
                        "desc": null
                    }))
                    categories.push({"id": cat.id, "name": cat.name, "val": false, "subcategories": sub})
                });
                console.log(response.performer_styles)

                this.setState({
                    performanceTypes: types,
                    performanceStyles: styles,
                    performanceCategories: categories,
                    loaded: true,
                    isLoading: false
                });
                console.log(this.state.performanceCategories)
            }).catch(error => {
            console.log(error)
            this.setState({
                isLoading: false
            })
        });
        this.setState({
            isLoading: true
        });
    }
}

export default SignUpMasterForm;