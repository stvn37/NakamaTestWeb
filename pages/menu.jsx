import Button from "react-bootstrap/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuComponent from "../components/Page/Menu/Menu";

import { InputGroup, FormControl, Nav } from "react-bootstrap";
import {
    faThumbsUp,
    faPepperHot,
    faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import prisma from "../prisma/client";
import { useLocalStorage } from "@mantine/hooks";
import { useEffect } from "react";
import { deleteCookie, getCookie } from "cookies-next";

export default function Menu({ menu, category }) {
    const router = useRouter();

    return (
        <section style={{ backgroundColor: "white" }}>
            <div className="notoSansJP">
                <h1
                    class="entry-title"
                    itemProp="headline"
                    style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "38px",
                        padding: "10px",
                    }}
                >
                    Our Menu | メニュー
                </h1>

                <div style={{ padding: "20px", margin: "25px" }}>
        
                    <Nav
                        style={{
                            backgroundColor: "#B7A57B",
                            textAlign: "center",
                        }}
                        variant="pills"
                        defaultActiveKey={
                            router.query.cat ? router.query.cat : category[0].id
                        }
                    >
                        {category.map((cat) => (
                            <Nav.Item style={{ flexGrow: 1 }} key={cat.id}>
                                <Link
                                    replace
                                    passHref
                                    href={`/menu?cat=${cat.id}`}
                                >
                                    <Nav.Link
                                        style={{ color: "#ffffff" }}
                                        eventKey={cat.id}
                                    >
                                        {cat.name}
                                    </Nav.Link>
                                </Link>
                            </Nav.Item>
                        ))}
                    </Nav>

                    <div className="row ">
                        {menu.map((item) => (
                            <MenuComponent item={item} />
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ textAlign: "left", padding: "30px" }}>
                <FontAwesomeIcon
                    style={{ color: "#352E1D" }}
                    className="me-2"
                    size="1x"
                    icon={faThumbsUp}
                />{" "}
                <span>
                    : Chef's Recommend<br></br>
                </span>
                <FontAwesomeIcon
                    style={{ color: "red" }}
                    className="me-2"
                    size="1x"
                    icon={faPepperHot}
                />{" "}
                <span>
                    : Spicy<br></br>
                </span>
                <FontAwesomeIcon
                    style={{ color: "green" }}
                    className="me-2"
                    size="1x"
                    icon={faLeaf}
                />{" "}
                <span>
                    : Vegetarian<br></br>
                </span>
            </div>
        </section>
    );
}

export async function getServerSideProps(context) {
    const {req, res} = context
    const orderid = getCookie('orderid', {req, res})
    if(!orderid) {
        return {
            props: {},
            redirect: {
                destination: '/'
            }
        }
    }

    const order = await prisma.order.findUnique({
        where: {
            id: parseInt(orderid)
        },
    })
    if(order.finish) {
        deleteCookie('orderid', {req, res})
        return {
            props: {},
            redirect: {
                destination: '/'
            }
        }
    }

    const { cat } = context.query;
    
    const category = await prisma.category.findMany({});
    const menu = await prisma.menu.findMany({
        where: {
            categoryid: cat ? parseInt(cat) : category[0].id,
        },
        include: {
            category: true,
        },
    });

    return {
        props: { menu, category },
    };
}
