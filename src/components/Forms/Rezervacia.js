import React, { Component } from 'react';
import './Rezervacia.css';

class Rezervacia extends Component{
    render(){
        return(
            <form className=""  method="post">
                <div className="osobne_udaje ">
                    <h1>Osobné údaje</h1>
                    <div className="vstupy">
                        <p>Meno *</p><input id="meno" type="text" name="input" value="Meno" onfocus="" /><br/>
                    </div>
                    <div className="vstupy">
                        <p>Priezvisko *</p><input id="priezvysko" type="text" name="input" value="Priezvisko" onfocus="" /><br/>
                    </div>
                    <div className="vstupy">
                        <p>Rok narodenia</p><input id="rok_narodenia" type="text" name="input" value="1998" onfocus="" /><br/>
                    </div>
                    <div className="vstupy">
                        <p>Telefón *</p><input id="tel" type="text" name="input" value="0900 000 000" onfocus="" /><br/>
                    </div>
                    <div className="vstupy">
                        <p>Email</p><input id="email" type="text" name="input" value="chata.ladmar@ladmar.sk"  onfocus="" /><br/>
                    </div>
                </div>
                <div className="udaje_ubytovanie ">
                    <h1>Údaje o ubytovaní</h1>
                    <div className="vstupy">
                        <p>Počet osôb *</p><input id="pocet_osob" type="number" min="2" max="9" name="input" value="0"   onfocus="" />
                    </div>
                    <div className="vstupy">
                        <p>Deň nástupu *</p><input id="nastup" type="date" name="input" value=""/>
                    </div>
                    <div className="vstupy">
                        <p>Ďeň odchodu *</p><input id="odchod" type="date" name="input" value=""/>
                    </div>
                </div>
                <hr/>
                <div className="tlacidla">
                    <h1 id="vasa_objednavka">Vaša objednávka:</h1>
                    <button id="uloz" type="button" name="uloz">Odoslať</button>
                    <button id="objednavky" type="button" name="zobraz_objednavky">Vaše objednávky</button>
                </div>
            </form>
         );
    }
}

export default Rezervacia;