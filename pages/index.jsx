import { useRouter } from "next/router";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Slider from "../components/Slider";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import {
    faUserCheck,
    faBowlFood,
    faCartShopping,
    faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from 'framer-motion'
import Image from "next/image";
import chefImage from '../img/nakama-chef.png'
import {setCookie, getCookie} from 'cookies-next'

export default function order() {
    const router = useRouter();

    const [uniqueid, setUniqueId] = useState("");
    const [error, setError] = useState("")

    async function newOrder(e) {
        e.preventDefault();
        await axios.post("/api/getorderid", { uniqueid }).then((response) => {
            if (response.data.found) {
                setCookie('orderid', response.data.id)
                router.push("/menu");
            } else {
                setError("ID Invalid! Please ask Admin!");
            }
        });
    }

    return (
        <section style={{ backgroundColor: "white" }}>
            <div className="notoSansJP">
                <Slider />
                <h1
                    class="entry-title"
                    itemProp="headline"
                    style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "28px",
                        margin: "15px",
                    }}
                >
                    Welcome to Nakama Japanese Restaurant
                </h1>
                <div className="text-center">
                    Please Enter Order ID to Continue
                </div>

                <Container>
                    <Form onSubmit={newOrder}>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                            required
                        >
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                            <Form.Label></Form.Label>
                            <Form.Control
                                value={uniqueid}
                                onChange={(e) => {
                                    setError('')
                                    setUniqueId(e.target.value)
                                }}
                                type="number"
                                placeholder="Enter ID"
                            />
                            <Form.Text className="text-danger">
                                {error}
                            </Form.Text>
                        </Form.Group>

                        <div className="text-center">
                            <Button variant="primary" type="submit">
                                Start Order
                            </Button>
                        </div>
                    </Form>
                </Container>

                <div className="bg-light p-5 mt-5">
                    <Container className="text-center">
                        <h2 style={{ fontWeight: "bold" }}>How to Order?</h2>
                        <Row className="mt-5 g-5">
                            <Col md={3} className="d-flex flex-column gap-3">
                                <FontAwesomeIcon icon={faUserCheck} size="2x" />
                                <h3>Step 1</h3>
                                <p>Get order ID from our staff</p>
                            </Col>
                            <Col md={3} className="d-flex flex-column gap-3">
                                <FontAwesomeIcon icon={faBowlFood} size="2x" />
                                <h3>Step 2</h3>
                                <p>
                                    Start order and choose your favorite foods &
                                    drinks
                                </p>
                            </Col>
                            <Col md={3} className="d-flex flex-column gap-3">
                                <FontAwesomeIcon
                                    icon={faCartShopping}
                                    size="2x"
                                />
                                <h3>Step 3</h3>
                                <p>Check your cart and go checkout</p>
                            </Col>
                            <Col md={3} className="d-flex flex-column gap-3">
                                <FontAwesomeIcon icon={faUtensils} size="2x" />
                                <h3>Step 4</h3>
                                <p>
                                    Order is prepared and wait for a while,
                                    enjoy your meal!
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Container className="p-5">
                    <h1
                        class="entry-title"
                        itemProp="headline"
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: "34px",
                            padding: "25px",
                        }}
                    >
                        About Nakama 仲間
                    </h1>
                    <div
                        className="notoSansJP row"
                        style={{
                            backgroundColor: "#352E1D",
                            minHeight: "550px",
                            margin: "20px",
                        }}
                    >
                        <motion.div
                            className="col-12 col-md-5"
                            transition={{ duration: 2 }}
                            whileInView={{ y: 30 }}
                        >
                            <Image src={chefImage}></Image>
                        </motion.div>
                        <div className="col-12 col-md-7">
                            <h2
                                class="entry-title"
                                style={{
                                    color: "#B7A57B",
                                    height: "5px",
                                    padding: "50px",
                                    textAlign: "right",
                                    fontWeight: "bold",
                                }}
                            >
                                Our Mission & Vision
                            </h2>

                            <ul
                                className="list-unstyled"
                                style={{
                                    color: "#B7A57B",
                                    margin: "50px",
                                    textAlign: "right",
                                    fontWeight: "lighter",
                                }}
                            >
                                <li>
                                    We aim to set the standards of excellence in
                                    Japanese cuisine & service,
                                    <br></br>by offering an extensive menu
                                    selection at affordable prices & convenient
                                    locations.
                                </li>
                            </ul>

                            <h2
                                class="entry-title"
                                style={{
                                    color: "#B7A57B",
                                    height: "5px",
                                    padding: "50px",
                                    textAlign: "right",
                                    fontWeight: "bold",
                                }}
                            >
                                About Us
                            </h2>

                            <ul
                                className="list-unstyled"
                                style={{
                                    color: "#B7A57B",
                                    margin: "50px",
                                    textAlign: "right",
                                    fontWeight: "lighter",
                                }}
                            >
                                <li>
                                    Nakama was established in June 2022, where
                                    we opened the doors of our first restaurant
                                    in Indonesia.
                                    <br></br>We serve an extensive variety of
                                    Japanese food & beverages
                                    <br></br>that includes fresh sashimi, sushi,
                                    donburi, noodles, bento boxes and so on.
                                    <br></br>We prioritize affordability,
                                    quality and freshness with our ingredients,
                                    <br></br>and only serve value-for-money
                                    products which are primarily air-flown from
                                    Japan.
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export async function getServerSideProps({req, res}) {
    const orderid = getCookie('orderid', {req, res})
    if(orderid) {
        return {
            props: {},
            redirect: {
                destination: '/menu'
            }
        }
    }

    return {
        props: {}
    }
}