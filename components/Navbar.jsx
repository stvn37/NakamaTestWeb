import logo from "../img/nakama-logo.png";
import Image from "next/image";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useLocalStorage } from "@mantine/hooks";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { useState } from "react";
import { useEffect } from "react";

export default function Navigation() {
    const router = useRouter();

    const [orderid, setOrderid] = useState()
    useEffect(() => {
        setOrderid(getCookie('orderid'))
    }, [router])

    return (
        <Navbar
            sticky="top"
            style={{ backgroundColor: "#ededed", fontWeight: "bold" }}
            expand="lg"
            className="notoSansJP"
        >
            <Container>
                <Navbar.Brand href="/">
                    <div>
                        <Image src={logo} alt="" width="150" height="48" />
                    </div>
                </Navbar.Brand>

                {orderid && (
                    <Nav.Link>
                        <Button
                            onClick={() => router.push(`/cart/${orderid}`)}
                            variant="outline-secondary"
                            id="button-addon2"
                        >
                            Cart
                        </Button>
                    </Nav.Link>
                )}
            </Container>
        </Navbar>
    );
}
    