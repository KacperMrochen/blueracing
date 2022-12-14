import * as React from 'react';
import '../Styles/Footer.css';

const Footer = ():any => {
    return (
            <footer>
                <div className="footer__container">
                    <div className="footer__content">
                        <div className="footer__company">
                            <div className="footer__company__content">
                                <div className="footer__company__logo">
                                    <a href="https://pragaglobal.com/">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 93.37" width="100">
                                            <g id="Layer_2" data-name="Layer 2">
                                                <path d="M169.31 54.34c-1.49 2.93-3.53 6-6.72 6a4.77 4.77 0 01-4.77-4.78c0-7.5 9-17.23 19.5-17l-8 15.77m-36.13 0c-1.49 2.93-3.53 6-6.72 6a4.78 4.78 0 01-4.77-4.77c0-7.5 9.05-17.23 19.49-17l-8 15.76M122.54 75h-17.79c-1.57-2.24-4.54-3.76-8.44-3.76-4.12 0-7.57 1.3-9.5 3.76H23.93a1 1 0 01-.93-1.46l13.67-27a99.92 99.92 0 0018.84-4 1.09 1.09 0 01.26 0 1 1 0 011 1 1.06 1.06 0 01-.11.48L49.19 59a4.12 4.12 0 003.64 6 4.25 4.25 0 001.29-.2l23.35-6.78c.08 8.86 12.24 9.83 17 3.38a4.13 4.13 0 005.3 3.42h.07l14.38-4.7c1.54 5.84 9.38 7 14.4 3.55A56.83 56.83 0 01122.54 75M89.8 80h28.5c-13.09 13.08-28.35 7.53-28.5 0M8 29.43C7.14 18 22.67 8.06 39.68 4.55 56.19 1.14 67.55 7.46 68.1 15S63 27.45 53.61 29a15 15 0 01-7.78-.47l9.74-19.24-12.18 4c-7.12 2.49-8.86 8.27-6.55 13L28 43.62c-11-.33-19.32-5-20-14.19m96.66 9.12l-8 15.76c-1.49 2.93-3.52 6-6.71 6a4.78 4.78 0 01-4.78-4.77c0-7.5 9-17.23 19.5-17M188 57.74h-.2l-11 2.07a1.06 1.06 0 01-.31.05 1 1 0 01-1-1 .94.94 0 01.12-.47c3-5.82 11.3-22 11.3-22C170 35 159.26 38.08 152.6 50a16.61 16.61 0 00-2.46 8l-12.44 3.26c5.18-9.87 13.05-24.92 13.05-24.92C133.82 35 123.14 38.07 116.48 50a16.85 16.85 0 00-2.48 8l-9.83 1.85a1 1 0 01-.3.05 1 1 0 01-1-1 1 1 0 01.11-.47c3-5.82 11.29-22 11.29-22C97.3 35 86.62 38.07 80 50a19.64 19.64 0 00-2.28 5.91l-19.27 3.87a1.06 1.06 0 01-.31 0 1 1 0 01-1-1 .94.94 0 01.12-.47l2.65-5.42c2.21-4.31 4.3-9.3 11.08-11.83a5.05 5.05 0 00-.06.68 4.11 4.11 0 007.75 1.93 14.47 14.47 0 00.75-1.47 4.33 4.33 0 00.42-1.8 4.12 4.12 0 00-4.12-4.11 4.37 4.37 0 00-1.15.16l-7.4 2.39.54-1a1 1 0 00.1-.45 1 1 0 00-1-1 1.07 1.07 0 00-.41.08C60 38.2 48.53 41.53 38.51 43L44 32.13a19.3 19.3 0 009.39.61c15.45-2.51 23.76-10.1 22.93-19.14-.85-9.26-14.9-16.48-37.18-12.46C14.32 5.61-1.18 18 .07 31c1 10.23 11.9 16.66 26.18 16.16l-13 25.63A4.13 4.13 0 019.62 75H4.83l-2.55 5h82.9c0 16.81 27.2 18.62 42 0h56.23l2.59-5h-55.42a39.9 39.9 0 001.83-3.64c5.21-9.54 18-11.07 18-11.07 1.93 6.74 12.35 7 16.71 1.18a4.12 4.12 0 004.08 3.6 4 4 0 001.22-.18h.08l15.78-5.26a1 1 0 00-.28-1.9" fill="#fff" id="Layer_1-2" data-name="Layer 1"/>
                                            </g>
                                        </svg>
                                    </a>
                                    <img src={require("../Img/blue_transp_white_200.png")} width="100" alt="logo"/>
                                </div>
                                <div className="footer__company__desc">
                                    <p>
                                        Ipsum diam odio velit vero illum delenit dolore aliquam consectetuer laoreet ullamcorper in feugait facilisi.
                                    </p>
                                </div>
                            </div>
                            <div className="footer__company__socials">
                                <img src={require("../Img/icons/facebook.png")} alt="facebook"/>
                                <img src={require("../Img/icons/instagram.png")} alt="instagram"/>
                                <img src={require("../Img/icons/email.png")} alt="facebook"/>
                            </div>
                        </div>
                            <div className="footer__links">
                                <div className="footer__link__list category-list">
                                    <h5>Category</h5>
                                    <ul>
                                        <li>item</li>
                                        <li>item</li>
                                        <li>item</li>
                                    </ul>
                                </div>
                                <div className="footer__link__list karts-list">
                                    <h5>Racing Karts</h5>
                                    <ul>
                                        <li>Baby</li>
                                        <li>Mini</li>
                                        <li>Maxi</li>
                                        <li>Dark</li>
                                        <li>Team</li>
                                    </ul>
                                </div>
                                <div className="footer__link__list company-list">
                                    <h5>Company</h5>
                                    <ul>
                                        <li>Praga history</li>
                                        <li>Place an order</li>
                                    </ul>
                                </div>
                        </div>
                        <div className="footer__link__list contact-list">
                            <h5>Contact</h5>
                            <ul>
                                <li>team@blueracing.pl</li>
                                <li>Gminna 36G 05-506 Lesznowola</li>
                                <li>+48 793 133 224</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__copyright">Copyright ?? 2022 blueracing</div>
                </div>
            </footer>
    )
}

export default Footer;