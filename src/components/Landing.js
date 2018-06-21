import React from 'react';
import Otazka from "./Forms/Otazka";

const LandingPage = () =>
    <div className="main row">
        <div className="contentText col-sm-6 col-md-6 col-lg-6">
            <h1>Príjemné prostredie les, potôčik a kľud.</h1>
            <p>Chata Ladmar sa nachádza v peknom prostredí Nízkych Tatier, priamo pod Čertovicou v doline Široká v katastri obce Jarabá. Aj keď je chata umiestnená v centrálnej turistickej oblasti Nízkych Tatier, dolinka je bokom od turistického ruchu a poskytuje nerušenú dovolenku počas celého roka. Chatu nájdete priamo v prírode, na malej čistinke pod lesom. Pred chatou tečie horská bystrinka. Výborná poloha ponúka mnoho možností na turistiku po hrebeňoch Nízkych Tatier. Z hlavného hrebeňa sa dá Kumštovou dolinou (medzi Ďumbierom a Čertovicou) zísť až k chate.<br/><br/></p>
        </div>
        <div className={"col-sm-4 col-md-4 col-lg-4"}>
            <div className="news">
                <h2>Lavičky</h2>
                <p>
                    Nové lavičky pri ohni.
                    plánujeme aj krb z masívneho kameňa. K nemu dva kamenné stoly.
                </p>
            </div>
            <Otazka/>
        </div>
    </div>

export default LandingPage;