import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import * as routes from '../constants/routes';
import { auth, db } from '../firebase';

const SignUpPage = ({ history }) =>
    <div>
        <SignUpForm history={history} />
    </div>

const INITIAL_STATE = {
    username: '',
    email: '',
    tel: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const {
            username,
            email,
            tel,
            passwordOne,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doCreateUserWithEmailAndPassword(email, passwordOne, tel)
            .then(authUser => {
                // Create a user in your own accessible Firebase Database too
                db.doCreateUser(authUser.user.uid, username, email, tel)
                    .then(() => {
                        this.setState(() => ({ ...INITIAL_STATE }));
                        history.push(routes.HOME);
                    })
                    .catch(error => {
                        this.setState(byPropKey('error', error));
                    });
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {
        const {
            username,
            email,
            tel,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            tel === '' ||
            username === '';

        return (
            <div className="row container main_form">
                <div className={'col-md-4 col-lg-4'}></div>
                <div className={'col-xs-12 col-sm-12 col-md-4 col-lg-4 sing_in'}>
                    <form onSubmit={this.onSubmit}>
                        <h1>Registrácia</h1>
                        <input
                            value={username}
                            onChange={event => this.setState(byPropKey('username', event.target.value))}
                            type="text"
                            placeholder="Celé Meno"
                        />
                        <input
                            value={email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            type="text"
                            placeholder="Emailová adresa"
                        />
                        <input
                            value={tel}
                            onChange={event => this.setState(byPropKey('tel', event.target.value))}
                            type="tel"
                            placeholder="0900 000 000"
                        />
                        <input
                            value={passwordOne}
                            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                            type="password"
                            placeholder="Heslo"
                        />
                        <input
                            value={passwordTwo}
                            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                            type="password"
                            placeholder="Potvrdenie hesla"
                        />
                        <button disabled={isInvalid} type="submit">
                            Zaregistrujte sa
                        </button>

                        { error && <p>{error.message}</p> }
                    </form>
                </div>
                <div className={'col-md-4 col-lg-4'}></div>
            </div>
        );
    }
}

const SignUpLink = () =>
    <p className={'zab_heslo'}>
        Vy ešte nemáte učet?
        {' '}
        <Link to={routes.SIGN_UP}><p className={'sing_out'}>Zaregistrujte sa</p></Link>
    </p>

export default withRouter(SignUpPage);

export {
    SignUpForm,
    SignUpLink,
};