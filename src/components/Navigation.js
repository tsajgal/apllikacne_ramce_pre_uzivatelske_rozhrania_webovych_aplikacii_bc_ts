import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SingOut';
import * as routes from '../constants/routes';
import './css/Navigation.css';
import './css/App.css';

const Navigation = () =>
    <AuthUserContext.Consumer>
        {authUser => authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </AuthUserContext.Consumer>

const NavigationAuth = () =>
    <div className="upper container-fluid" id="navigation">
        <div className={"row"}>
            <div className="upper_logo col-sm-2 col-md-2 col-lg-2">
                <Link to={routes.LANDING}><div className="logo"></div></Link>
            </div>
            <div className={"upper_menu row col-sm-8 col-md-8 col-lg-8"}>
                <ul className="menu_contact col-sm-12 col-md-12 col-lg-12 hidden-xs">
                    <li><Link to={routes.KONTAKT}><i className="sprite sprite-upperFacebook"></i>Chata Ladmar</Link></li>
                    <li><Link to={routes.KONTAKT}><i className="sprite sprite-upperGmail"></i>chata.ladmar@gmail.com</Link></li>
                    <li><Link to={routes.KONTAKT}><i className="sprite sprite-upperPhone"></i>0908  351  194</Link></li>
                </ul>
                <hr className="navigationHr hidden-xs"/>
                <ul className="navigation col-sm-12 col-md-12 col-lg-12">
                    <li id="button1" ><Link to={routes.INF}>O nás</Link></li>
                    <li>/</li>
                    <li id="button2"><Link to={routes.BLOG}>Blog</Link></li>
                    <li>/</li>
                    <li id="button3"><Link to={routes.CENIK}>Cenník</Link></li>
                    <li>/</li>
                    <li id="button4"><Link to={routes.LANDING}>Obsadenosť</Link></li>
                    <li>/</li>
                    <li id="button5"><Link to={routes.RESERVATION}>Ubytovanie</Link></li>
                    <li>/</li>
                    <li id="button6"><Link to={routes.KONTAKT}>Kontakt</Link></li>
                </ul>
            </div>
            <div className={"login row col-sm-2 col-md-2 col-lg-2"}>
                <Link to={routes.SIGN_IN}><div className={'col-xs-4 col-sm-4 col-md-4 col-lg-4'}>Prihlásiť sa</div></Link>
                <Link to={routes.HOME}><div className={'col-xs-4 col-sm-4 col-md-4 col-lg-4'}>Správa</div></Link>
                <Link to={routes.ACCOUNT}><div className={'col-xs-4 col-sm-4 col-md-4 col-lg-4'}>Mój účet</div></Link>
                <SignOutButton />
            </div>
        </div>
        <hr/>
    </div>

const NavigationNonAuth = () =>
    <div className="upper container-fluid" id="navigation">
        <div className={"row"}>
            <div className="upper_logo col-sm-2 col-md-2 col-lg-2">
                <Link to={routes.LANDING}><div className="logo"></div></Link>
            </div>
            <div className={"upper_menu row col-sm-8 col-md-8 col-lg-8"}>
                <ul className="menu_contact col-sm-12 col-md-12 col-lg-12 hidden-xs">
                    <li><Link to={routes.KONTAKT}><i className="sprite sprite-upperFacebook"></i>Chata Ladmar</Link></li>
                    <li><Link to={routes.KONTAKT}><i className="sprite sprite-upperGmail"></i>chata.ladmar@gmail.com</Link></li>
                    <li><Link to={routes.KONTAKT}><i className="sprite sprite-upperPhone"></i>0908  351  194</Link></li>
                </ul>
                <hr className="navigationHr hidden-xs"/>
                <ul className="navigation col-sm-12 col-md-12 col-lg-12">
                    <li id="button1" ><Link to={routes.INF}>O nás</Link></li>
                    <li>/</li>
                    <li id="button2"><Link to={routes.SIGN_IN}>Blog</Link></li>
                    <li>/</li>
                    <li id="button3"><Link to={routes.CENIK}>Cenník</Link></li>
                    <li>/</li>
                    <li id="button4"><Link to={routes.LANDING}>Obsadenosť</Link></li>
                    <li>/</li>
                    <li id="button5"><Link to={routes.SIGN_IN}>Ubytovanie</Link></li>
                    <li>/</li>
                    <li id="button6"><Link to={routes.KONTAKT}>Kontakt</Link></li>
                </ul>
            </div>
            <div className={"login row col-sm-2 col-md-2 col-lg-2"}>
                <Link to={routes.SIGN_IN}><div className={'col-xs-4 col-sm-4 col-md-4 col-lg-4'}>Prihlásiť sa</div></Link>
            </div>
        </div>
        <hr/>
    </div>

export default Navigation;