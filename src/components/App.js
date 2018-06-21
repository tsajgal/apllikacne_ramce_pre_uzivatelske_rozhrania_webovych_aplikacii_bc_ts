import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import withAuthentication from './withAutentification';
import Footer from './Footer';

import Inf from "./Inf/Inf";
import Kontakt from "./Kontakt/Kontakt";
import Reservation from "./Forms/Reservation";
import Cenik from "./Cenik/Cenik";
import Blog from "./Blog/Blog";

import * as routes from '../constants/routes';

const App = () =>
    <Router>
        <div>
            <Navigation />

            <div className={"content  container"}>
                <Route exact path={routes.INF} component={() => <Inf />} />
                <Route exact path={routes.BLOG} component={() => <Blog />} />
                <Route exact path={routes.CENIK} component={() => <Cenik />} />
                <Route exact path={routes.RESERVATION} component={() => <Reservation />} />
                <Route exact path={routes.KONTAKT} component={() => <Kontakt />} />
                <Route exact path={routes.LANDING} component={() => <LandingPage />} />
                <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
                <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
                <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
                <Route exact path={routes.HOME} component={() => <HomePage />} />
                <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
            </div>

            <Footer/>
        </div>
    </Router>

export default withAuthentication(App);