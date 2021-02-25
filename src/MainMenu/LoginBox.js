import React, {Component} from 'react';
import {ReactComponent as AvatarSvg} from './img/avatar.svg';
import './style.css';

class LoginBox extends Component {
    render () {
        let iconSvg = "";
        if (this.props.icon === "Avatar") {
            iconSvg = <AvatarSvg className={`icon`} />;
        }
        return (
            <div class="loginBox">
                <div class="loginTextBox">
                    {this.props.text}
                </div>
                <div class="iconBox">
                    {iconSvg}
                </div>
            </div>
        )
    }
}

export default LoginBox;