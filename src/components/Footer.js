import React, { Component } from 'react';
import './css/App.css';
import "./css/Footer.css";
import {
    NavLink,
} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div className="footer container-fluid">
                <hr/>
                <div className="container">
                    <div className="footerUp">
                        <div className="footerColumn">
                            <h3>AKO ZAČAŤ</h3>
                            <hr/>
                            <p>
                                <NavLink to="/obsadenost">OBSADENOSŤ</NavLink><br/>
                                <NavLink to="/ubytovanie">OBJEDNÁVKA</NavLink><br/>
                                <NavLink to="/blog">DOTAZNÍK</NavLink><br/>
                                <NavLink to="/blog">SPOKOJNOSŤ</NavLink><br/>
                                <NavLink to="/inf">ČO JE TO LADMAR</NavLink><br/>
                            </p>
                        </div>
                        <div className="footerColumn">
                            <h3>INFORMÁCIE</h3>
                            <hr/>
                            <p>
                                <NavLink to="/inf">O NÁS</NavLink><br/>
                                <NavLink to="/blog">AKCIE</NavLink><br/>
                                <NavLink to="/blog">NOVINKY</NavLink><br/>
                                <NavLink to="/blog">DOBRODRUŽSTVO</NavLink><br/>
                                <NavLink to="/blog">ZÁBAVA</NavLink><br/>
                            </p>
                        </div>
                        <div className="footerColumn">
                            <h3>KONTAKT</h3>
                            <hr/>
                            <p>
                                Chata Ladmar<br/>
                                Dolina Široká 5/9, Jarabá<br/>
                                Tel: +421 908 351 194<br/>
                                ladmar@ladmar.sk<br/>
                                Moyzesova 23, 97701 Brezno<br/>
                            </p>
                        </div>
                        <div className="footerMap">
                            <iframe className={"google_map"} title=" Mapa chaty Ladmar " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8322.506517895128!2d19.711248856437468!3d48.89651576107281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47157964e104a3d5%3A0xefa38e560e26ea88!2sChata+Ladmar!5e1!3m2!1ssk!2ssk!4v1529260658798"></iframe>
                        </div>
                    </div>
                    <hr className="hr2"/>
                    <div className="footerBottom">
                        <div className="footerLeft">
                            <button type="button" name="button">Prihlásiť sa</button>
                            <input type="" name="name" value="váš email"/>
                            <h3>HĽADÁTE NIEČO?</h3>
                        </div>
                        <div className="footerRight">
                            <div className="footerButton">
                                <i className="sprite sprite-footerFacebook"></i>
                                <i className="sprite sprite-footerGoogle"></i>
                                <i className="sprite sprite-footerImstagram"></i>
                                <i className="sprite sprite-footerPocasie"></i>
                                <i className="sprite sprite-footerSkype"></i>
                                <i className="sprite sprite-footerWhatApp"></i>
                                <i className="sprite sprite-footerWifi"></i>
                                <i className="sprite sprite-footerYouTube"></i>
                            </div>
                            <div className="copiright">
                                <p>
                                    copirright© 2016 Chata Ladmar. All right reserved. Tvorba stránky -@Tomáš Šajgal ladmar.sk
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;

