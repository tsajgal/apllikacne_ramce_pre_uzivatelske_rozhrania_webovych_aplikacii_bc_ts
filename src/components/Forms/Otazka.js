import React from 'react';
import './Otazka.css';
import {db} from "../../firebase";
import newId from "../utils/newid";

const INITIAL_STATE = {
    id: '',
    email: '',
    username: '',
    question_text: '',
    error: null,

};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class Otazka extends React.Component{
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        this.setState({id: newId()});
    }

    onSubmit = (event) => {
        const {
            id,
            username,
            email,
            question_text,
        } = this.state;

        // Create a user in your own accessible Firebase Database too
        db.doCreateQuestion(id, username, email, question_text)
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    render(){
        const {
            error,
        } = this.state;

        return(
                <form action="" onSubmit={this.onSubmit}  className={"row"}>
                    <h2  className={"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>Máte otázku?</h2>
                    <h2  className={"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>Kontaktujte nás.</h2>
                    <hr  className={"col-xs-12 col-sm-12 col-md-12 col-lg-12"}/>

                        <div className="input col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <p>Meno *</p><input type="text" name="username" placeholder="Celé meno"  value={this.state.username} onocus="" onChange={this.handleInputChange}  /><br/>
                        </div>
                        <div className="input col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <p>Email *</p><input type="email" name="email" placeholder="ladmar@gmail.com"  value={this.state.email} onocus="" onChange={this.handleInputChange}  /><br/>
                        </div>
                        <div className="input col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <p className="textOtazka">Vaša otázka.</p><textarea name="question_text" placeholder="Čo vás zaujíma?" cols="30" rows="5"  value={this.state.question_text} onocus="" onChange={this.handleInputChange} /><br/>
                        </div>
                        <div className="input col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <input  type="submit" value="Odoslat" />
                        </div>
                    {error && <p>{error.message}</p>}
                </form>
        );
    }
}

export default Otazka;