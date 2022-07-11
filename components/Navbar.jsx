import logo from "../img/nakama-logo.png";
import Image from "next/image";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { useState } from "react";
import { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";


export default function Navigation() {
    const router = useRouter();

    const { data: session, status } = useSession();

    const [orderid, setOrderid] = useState();
    useEffect(() => {
        setOrderid(getCookie("orderid"));
    }, [router]);

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
                {status === "authenticated" && (
                    <>
                        <NavDropdown title="Admin">
                            <Link href="/admin/order" passHref>
                                <NavDropdown.Item>
                                    Order
                                </NavDropdown.Item>
                            </Link>
                            <Link href="/admin/menu" passHref>
                            <NavDropdown.Item href="#action/3.2">
                               Menu
                            </NavDropdown.Item>
                            </Link>
                            <Link href="/admin/coupon" passHref>
                            <NavDropdown.Item href="#action/3.3">
                                Coupon
                            </NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider />

                            <NavDropdown.Item onClick={signOut} className="text-danger">
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </>
                )}
            </Container>
        </Navbar>
    );
}
