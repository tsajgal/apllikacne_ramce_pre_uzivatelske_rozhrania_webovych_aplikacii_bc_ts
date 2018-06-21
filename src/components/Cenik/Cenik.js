import React, { Component } from 'react';
import './Cenik.css';

class Cenik extends Component{
    render(){
        return(
            <div className="main container">
                <h1>Ceník ubytovania.</h1>
                <table>
                    <tr><th>Osoby</th><th>Cena</th></tr>
                    <tr><td>2-4 Osoby</td><td>40€</td></tr>
                    <tr><td>5-6 Osoby</td><td>55€</td></tr>
                    <tr><td>7-8 Osoby</td><td>70€</td></tr>
                    <tr><th>Energie</th><th>Cena</th></tr>
                    <tr><td>Energie</td><td>20€</td></tr>
                    <tr><td>Drevo</td><td>Podľa spotreby</td></tr>
                </table>
            </div>
        );
    }
}

export default Cenik;