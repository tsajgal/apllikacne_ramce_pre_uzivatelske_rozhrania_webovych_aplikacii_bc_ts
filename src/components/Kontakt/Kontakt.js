import React, { Component } from 'react';
import './Kontakt.css';
import Otazka from "../Forms/Otazka";

class Kontakt extends Component{
    render(){
        // noinspection JSAnnotator
        return(
            <div className="main container">
                <div className="row kontakt">
                    <h1 className={"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>Chata Ladmar</h1>
                    <div  className={"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <hr/>
                    </div>
                    <div  className={"col-xs-12 col-sm-12 col-md-12 col-lg-12 row"}>
                        <ul className={"col-xs-6 col-sm-6 col-md-6 col-lg-6"}>
                            <li>Adresa:</li>
                            <li>Telefón:</li>
                            <li>Email:</li>
                            <li>Kontaktná adr.:</li>
                        </ul>
                        <ul  className={"col-xs-6 col-sm-6 col-md-6 col-lg-6 inf"}>
                            <li>Dolina Široká 5/9, Jarabá<br/></li>
                            <li>+421 908 351 194<br/></li>
                            <li>chataLadmar@chataladmar.sk<br/></li>
                            <li>Moyzesova 23, 97701 Brezno<br/></li>
                        </ul>
                    </div>
                    <div  className={"col-xs-12 col-sm-12 col-md-12 col-lg-12 row"}>
                        <div className={"col-xs-1 col-sm-1 col-md-3 col-lg-3"}></div>
                        <div className={"col-xs-10 col-sm-10 col-md-6 col-lg-6"}>
                            <Otazka/>
                        </div>
                        <div className={"col-xs-1 col-sm-1 col-md-3 col-lg-3"}></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Kontakt;