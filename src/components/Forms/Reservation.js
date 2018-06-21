import React from 'react';
import './Reservation.css';
import {auth, db} from "../../firebase";
import * as routes from "../../constants/routes";
import AuthUserContext from "../AuthUserContext";
import newId from '../utils/newid';

const INITIAL_STATE = {
    users: null,
    send: false,
    id: '',
    username: '',
    year: '',
    tel: '',
    email: '',
    number_people: '',
    day_com: '',
    day_end: '',
    error: null,
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const authCondition = (authUser) => !!authUser;

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };

        this.handleChange = this.handleChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    componentDidMount() {
        if (authCondition){
            this.setState({
                username: auth.name,
                year: auth.year,
                tel: auth.tel,
                email: auth.email,
            });
        }
        this.setState({id: newId()});
        db.onceGetReservation().then(snapshot =>
            this.setState(() => ({ users: snapshot.val() }))
        );
    }



    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    onSubmit = (event) => {
        this.setState({send: true});
        const {
            id,
            username,
            year,
            tel,
            email,
            number_people,
            day_com,
            day_end,
        } = this.state;

        // Create a user in your own accessible Firebase Database too
        db.doCreateReservation(id, username, year, tel, email, number_people, day_com, day_end)
            .catch(error => {
                this.setState(byPropKey('error', error));
            });


        db.onceGetReservation().then(snapshot =>
            this.setState(() => ({ users: snapshot.val() }))
        );

        event.preventDefault();
    }

    render() {
        const {
            username,
            send,
            year,
            tel,
            email,
            number_people,
            day_com,
            day_end,
            error,
        } = this.state;

        // noinspection JSAnnotator
        const isInvalid =
            username === '' ||
            year === ''  ||
            tel === '' ||
            email === '' ||
            number_people === '' ||
            day_com === '' ||
            day_end === ''

        const { users } = this.state;

        return (
            <div className={"main container"}>
                { !this.state.send &&
                <form className="" method="post" onSubmit={this.onSubmit}>
                    <div className="osobne_udaje ">
                        <h1>Osobné údaje</h1>
                        <div className="vstupy">
                            <p>Meno</p><input id="username" type="text" name="username" placeholder="Celé meno"
                                              value={this.state.username} onocus="" onChange={this.handleInputChange}/><br/>
                        </div>
                        <div className="vstupy">
                            <p>Rok narodenia</p><input id="rok_narodenia" type="text" name="year" placeholder="1998"
                                                       value={this.state.year} onfocus="" onChange={this.handleInputChange}/><br/>
                        </div>
                        <div className="vstupy">
                            <p>Telefón</p><input id="tel" type="text" name="tel" placeholder="0908 000 000" value={this.state.tel}
                                                 onfocus="" onChange={this.handleInputChange}/><br/>
                        </div>
                        <div className="vstupy">
                            <p>Email</p><input id="email" type="text" name="email" placeholder="chata.ladmar@gmail.com"
                                               value={this.state.email} onfocus="" onChange={this.handleInputChange}/><br/>
                        </div>
                    </div>
                    <div className="udaje_ubytovanie ">
                        <h1>Údaje o ubytovaní</h1>
                        <div className="vstupy">
                            <p>Počet osôb</p><input id="pocet_osob" type="number" min="2" max="9" name="number_people"
                                                    placeholder="2" value={this.state.number_people} onfocus=""
                                                    onChange={this.handleInputChange}/>
                        </div>
                        <div className="vstupy">
                            <p>Deň nástupu</p><input id="nastup" type="date" name="day_com" onChange={this.handleInputChange}/>
                        </div>
                        <div className="vstupy">
                            <p>Ďeň odchodu</p><input id="odchod" type="date" name="day_end" onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="tlacidla">
                        <input id={"uloz"} disabled={isInvalid} type="submit" value="Odoslat"/>
                    </div>
                </form>
                }
                {error && <p>{error.message}</p>}
                { this.state.send && !!users && <ResList users={users} /> }

            </div>
        );
    }
}


const ResList = ({ users }) =>
    <div className="vysledok">
        <h1 id="vasa_objednavka">Vaša objednávka:</h1>
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


export default Reservation;