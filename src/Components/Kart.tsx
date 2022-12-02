import React from "react";
import "../Styles/Kart.css"
import "../Styles/App.css"

const Kart = () => {
    return (
        <div className="karts">
            <h2 className="karts__title">PRAGA RACING KARTS</h2>
            <div className="karts__carousel">
                <a href="https://pragaglobal.com/racing-karts/baby/">
                    <div className="kart_card">
                        <div>
                            <img className="kart_card__image" src={require("../Img/baby.png")} alt="baby" />
                            <h3 className="kart_card__title">Baby</h3>
                        </div>
                        <div>
                            <p className="kart_card__desc">The kart that starts your career</p>
                        </div>
                    </div>
                </a>
                <a href="https://pragaglobal.com/racing-karts/mini/">
                    <div className="kart_card">
                        <div>
                            <img className="kart_card__image" src={require("../Img/mini.png")} alt="Mini kart"/>
                            <h3 className="kart_card__title">Mini</h3>
                        </div>
                        <div>
                            <p className="kart_card__desc">The top product for young drivers.</p>
                        </div>
                    </div>
                </a>
                <a href="https://pragaglobal.com/racing-karts/dark/">
                    <div className="kart_card">
                        <div>
                            <img className="kart_card__image" src={require("../Img/dark.png")} alt="Dark kart"/>
                            <h3 className="kart_card__title">Dark</h3>
                        </div>
                        <div>
                            <p className="kart_card__desc">Entry level kart with high performance.</p>
                        </div>
                    </div>
                </a>
                <a href="https://pragaglobal.com/racing-karts/maxi/">
                    <div className="kart_card">
                        <div>
                            <img className="kart_card__image" src={require("../Img/dragon.png")} alt="Dragon kart"/>
                            <h3 className="kart_card__title">Dragon Evo 2 Invictus Evo Tacho Evo</h3>
                        </div>
                        <div>
                            <p className="kart_card__desc">Best racing experience for senior, junior, shifter and DD2 categories.</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Kart;