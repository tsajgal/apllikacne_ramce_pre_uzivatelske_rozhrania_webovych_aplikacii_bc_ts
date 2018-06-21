import React, { Component } from 'react';
import './Recenzia.css';

class Recenzia extends Component{
    render(){
        return(
            <div className="recenzia">
                <h2>Recenzia od: Meno</h2>
                <ul className={"row"}>
                    <li className={"col-xs-6 col-sm-6 col-md-6 col-lg-6"}>Celková spokojnosť:</li><li className={'odpoved col-xs-6 col-sm-6 col-md-6 col-lg-6'}>*****</li>
                    <div class="clearfix visible-xs-block"></div>
                    <li className={"col-xs-6 col-sm-6 col-md-6 col-lg-6"}>Čistota:</li><li className={'odpoved col-xs-6 col-sm-6 col-md-6 col-lg-6'}>*****</li>
                    <li className={"col-xs-6 col-sm-6 col-md-6 col-lg-6"}>Ruch:</li><li className={'odpoved col-xs-6 col-sm-6 col-md-6 col-lg-6'}>*****</li>
                    <li className={"col-xs-6 col-sm-6 col-md-6 col-lg-6"}>Pohodlie</li><li className={'odpoved col-xs-6 col-sm-6 col-md-6 col-lg-6'}>*****</li>
                </ul>
                <p>Popis. Popis. Popis. Popis. Popis. Popis. Popis. Popis. Popis. Popis. Popis. Popis. Popis. Popis. <br/>
                    Popis. Popis. Popis. Popis. Popis. Popis. Popis. Popis. Popis. Popis. Popis. Popis. Popis. Popis. </p>
            </div>
        );
    }
}
export default Recenzia;