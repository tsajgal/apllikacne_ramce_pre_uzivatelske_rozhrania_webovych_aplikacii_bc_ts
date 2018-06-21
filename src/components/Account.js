import React from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

const AccountPage = () =>
    <div className="main container">
        <AuthUserContext.Consumer>
            {authUser =>
                <div>
                    <h1>Account: {authUser.email}</h1>
                    <PasswordForgetForm />
                    <PasswordChangeForm />
                </div>
            }
        </AuthUserContext.Consumer>
    </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);