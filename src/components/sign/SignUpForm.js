import React, { Component } from 'react';
import '../../../semantic/components/form.css';
import '../../../semantic/components/button.css';
import '../../../semantic/components/grid.css';
import '../../../semantic/components/segment.css';
import PropTypes from 'prop-types';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            passwordConfirmation: '',
            phone: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        this.props.userSignupRequest(this.state);
    }

    render() {
      return (
        <div class="ui middle aligned center aligned grid">
        <form onSubmit={this.handleSubmit} class="ui large form">
            <div class="ui stacked segment">
                <div class="field">
                    <div class="ui left icon input">
                        <i class="user icon"></i>
                        <input
                        value={this.setState.email}
                        onChange={this.handleChange}                    
                        type="text" name="email" placeholder="E-mail address" />
                    </div>
                </div>
                <div class="field">
                    <div class="ui left icon input">
                        <i class="lock icon"></i>
                        <input 
                        value={this.setState.password}
                        onChange={this.handleChange} 
                        type="password" name="password" placeholder="Password" />
                    </div>
                </div>
                <div class="field">
                    <div class="ui left icon input">
                        <i class="lock icon"></i>
                        <input 
                        value={this.setState.passwordConfirmation}
                        onChange={this.handleChange} 
                        type="password" name="passwordConfirmation" placeholder="PasswordConfirmation" />
                    </div>
                </div>
                <div class="field">
                    <div class="ui left icon input">
                        <i class="user icon"></i>
                        <input 
                        value={this.setState.username}
                        onChange={this.handleChange} 
                        type="text" name="username" placeholder="Username" />
                    </div>
                </div>
                <div class="field">
                    <div class="ui left icon input">
                        <i class="user icon"></i>
                        <input 
                        value={this.setState.phone}
                        onChange={this.handleChange} 
                        type="text" name="phone" placeholder="Phone Number" />
                    </div>
                </div>
                <div class="field">
                    <button class="ui fluid large teal submit button">Sgin_Up</button>
                </div>
            </div>
        </form>
        </div>
        );
    }
    }

SignUpForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default SignUpForm;
  