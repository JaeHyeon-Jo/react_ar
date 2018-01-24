import React, { Component } from 'react';
import '../../../semantic/components/form.css'
import '../../../semantic/components/button.css'
import '../../../semantic/components/grid.css'
import '../../../semantic/components/segment.css'


class SignInForm extends Component {
    render() {
      return (
        <div class="ui middle aligned center aligned grid">
        <form class="ui large form">
            <div class="ui stacked segment">
                <div class="field">
                    <div class="ui left icon input">
                        <i class="user icon"></i>
                        <input type="text" name="email" placeholder="E-mail address" />
                    </div>
                </div>
                <div class="field">
                    <div class="ui left icon input">
                        <i class="lock icon"></i>
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                </div>
                <div class="field">
                <button class="ui fluid large teal submit button">Login</button>
                </div>
            </div>
        </form>
        </div>
      );
    }
  }
  export default SignInForm;
  