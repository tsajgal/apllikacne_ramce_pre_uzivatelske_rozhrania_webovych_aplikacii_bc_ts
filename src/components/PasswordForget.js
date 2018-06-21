import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../firebase';

const PasswordForgetPage = () =>
    <div className="main_form container">
        <div className={'col-md-4 col-lg-4'}></div>
        <div className={'col-xs-12 col-sm-12 col-md-4 col-lg-4 sing_in'}>
            <h1>Obnovenie hesla</h1>
            <PasswordForgetForm />
        </div>
        <div className={'col-md-4 col-lg-4'}></div>
    </div>

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const { email } = this.state;

        auth.doPasswordReset(email)
            .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }));
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {
        const {
            email,
            error,
        } = this.state;

        const isInvalid = email === '';

        return (
                <div className={'sing_in'}>
                    <form onSubmit={this.onSubmit}>
                        <input
                            value={this.state.email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            type="text"
                            placeholder="Emailová adresa"
                        />
                        <button disabled={isInvalid} type="submit">
                            Odoslať heslo na email
                        </button>

                        { error && <p>{error.message}</p> }
                    </form>
                </div>
        );
    }
}

const PasswordForgetLink = () =>
    <p className={'zab_heslo'}>
        <Link to="/pw-forget">Zabudli ste heslo?</Link>
    </p>

export default PasswordForgetPage;

export {
    PasswordForgetForm,
    PasswordForgetLink,
};