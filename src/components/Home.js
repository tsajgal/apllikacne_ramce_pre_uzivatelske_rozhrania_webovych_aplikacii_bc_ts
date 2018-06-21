import React, { Component } from 'react';

import withAuthorization from './withAuthorization';
import { db } from '../firebase';
import AdminPage from './AdminPage';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null,
        };
    }

    componentDidMount() {
        db.onceGetUsers().then(snapshot =>
            this.setState(() => ({ users: snapshot.val() }))
        );
    }

    render() {
        const { users } = this.state;

        return (
            <div className="main container">
                <AdminPage/>
                <div>
                    {!!users && <ResList users={users} />}
                </div>
            </div>
        );
    }
}

const ResList = ({ users }) =>
    <div className="vysledok">
        <h1 id="vasa_objednavka">Vaše objednávky:</h1>
        {Object.keys(users).map(key =>
            <div className={'vysledok'}>
                <div className="vysledok_udaje">
                    <h2>Osobné údaje:</h2>
                    <ul>
                        <li>Meno:</li>
                        <li>Rok narodenia:</li>
                    </ul>
                    <ul>
                        <li id="u1" key={key}>{users[key].username}</li>
                        <li id="u2" key={key}>{users[key].year}</li>
                    </ul>
                </div>
                <div className="vysledok_udaje">
                    <h2>Kontaktné údaje:</h2>
                    <ul>
                        <li>Telefón:</li>
                        <li>Email:</li>
                    </ul>
                    <ul>
                        <li id="u4" key={key}>{users[key].tel}</li>
                        <li id="u5" key={key}>{users[key].email}</li>
                    </ul>
                </div>
                <div className="vysledok_udaje">
                    <h2>Údaje o ubytovaní:</h2>
                    <ul>
                        <li>Pocet osôb:</li>
                        <li>Deň nástupu:</li>
                        <li>Deň odchodu:</li>
                    </ul>
                    <ul>
                        <li id="u6" key={key}>{users[key].number_people}</li>
                        <li id="u7" key={key}>{users[key].day_com}</li>
                        <li id="u8" key={key}>{users[key].day_end}</li>
                    </ul>
                </div>
                <div id="eror1"></div>
            </div>
        )}
    </div>


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);