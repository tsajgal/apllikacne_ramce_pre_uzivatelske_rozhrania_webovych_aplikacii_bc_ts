import React, { Component } from 'react';

import { auth } from '../firebase';

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const { passwordOne } = this.state;

        auth.doPasswordUpdate(passwordOne)
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
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '';

        return (
            <div className="main_form container">
                <div className={'col-md-4 col-lg-4'}></div>
                <div className={'col-xs-12 col-sm-12 col-md-4 col-lg-4 sing_in'}>
                    <h1>Zmena hesla</h1>
                    <form onSubmit={this.onSubmit}>
                        <input
                            value={passwordOne}
                            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                            type="password"
                            placeholder="Nové heslo"
                        />
                        <input
                            value={passwordTwo}
                            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                            type="password"
                            placeholder="Potvrďte nové heslo"
                        />
                        <button disabled={isInvalid} type="submit">
                            Obnovyť moje heslo
                        </button>

                        { error && <p>{error.message}</p> }
                    </form>
                </div>
                <div className={'col-md-4 col-lg-4'}></div>
            </div>
        );
    }
}

export default PasswordChangeForm;