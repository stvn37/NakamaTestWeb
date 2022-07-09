import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div style={{ backgroundColor: "#352E1D", padding: "25px" }}>
            <div className="notoSansJP">
                <div className="container">
                    <div className="row">
                        {/* Column 1 */}
                        <div
                            className="col-4"
                            style={{
                                color: "#B7A57B",
                                fontWeight: "bolder",
                            }}
                        >
                            <div style={{ fontSize: "20px" }}>Follow Us</div>
                            <ul className="list-unstyled">
                                <a
                                    style={{ color: "#B7A57B" }}
                                    href="https://www.instagram.com/nakamajp.id/"
                                >
                                    <FontAwesomeIcon
                                        className="me-2"
                                        size="2x"
                                        icon={faInstagram}
                                    />
                                </a>
                                <a
                                    style={{ color: "#B7A57B" }}
                                    href="https://www.facebook.com"
                                >
                                    <FontAwesomeIcon
                                        className="me-2"
                                        size="2x"
                                        icon={faFacebookSquare}
                                    />
                                </a>
                                <a>
                                    <li>
                                        <br></br>Opening Hours
                                    </li>
                                    <li style={{ fontSize: "12px" }}>
                                        <br></br>Monday - Sunday<br></br>
                                        11:00am - 23:00pm
                                    </li>
                                </a>
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div
                            className="col-8"
                            style={{
                                color: "#B7A57B",
                                fontWeight: "bolder",
                                textAlign: "right",
                            }}
                        >
                            <div style={{ fontSize: "20px" }}>Contact</div>
                            <ul className="list-unstyled">
                                <a
                                    style={{
                                        color: "#B7A57B",
                                        fontSize: "13px",
                                    }}
                                    href="tel:+011234567890"
                                >
                                    <li>+011234567890</li>
                                </a>
                                <li style={{ wordWrap: "break-word" }}>
                                    <a
                                        style={{
                                            color: "#B7A57B",
                                            fontSize: "13px",
                                        }}
                                        href="mailto:+nakamajprestaurant@gmail.com"
                                    >
                                        nakamajprestaurant@gmail.com
                                    </a>
                                </li>

                                <li style={{ fontSize: "11px" }}>
                                    <br></br>
                                    <br></br>Jalan Teknologi 5, Taman Teknologi
                                    Malaysia, 57000<br></br>Kuala Lumpur,
                                    Malaysia
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div
                    style={{
                        color: "#B7A57B",
                        textAlign: "center",
                        fontWeight: "lighter",
                        fontSize: "14px",
                    }}
                >
                    <p
                        className="text-xs-center"
                        style={{ fontSize: "11px", fontStyle: "italic" }}
                    >
                        &copy;{new Date().getFullYear()} Nakama Japanese
                        Restaurant
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
