import React from "react";

const Kart = () => {

    return (
        <div className="karts">
            <h2>PRAGA RACING KARTS</h2>
            <div className="karts__carousel">
                <div className="kart1">
                    <div className="kart1__title">Baby</div>
                    <div className="kart1__image"></div>
                    <div className="kart1__desc">The kart that starts your career</div>
                </div>
                <div className="kart1">
                    <div className="kart1__title">Mini</div>
                    <div className="kart1__image"></div>
                    <div className="kart1__desc">The top product for young drivers.</div>
                </div>
                <div className="kart1">
                    <div className="kart1__title">Dark</div>
                    <div className="kart1__image"></div>
                    <div className="kart1__desc">Entry level kart with high performance.</div>
                </div>
                <div className="kart1">
                    <div className="kart1__title">Dragon Evo 2 Invictus Tacho Evo</div>
                    <div className="kart1__image"></div>
                    <div className="kart1__desc">Best racing experience for senior, junior, shifter and DD2 categories.</div>
                </div>
            </div>
        </div>
    )
}

export default Kart;