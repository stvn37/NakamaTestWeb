import { getSession, signOut } from "next-auth/react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import prisma from "../../prisma/client";
import { useRouter } from "next/router";

export default function admin({ orders }) {
    const router = useRouter();

    async function createOrder() {
        await axios
            .post("/api/order")
            .then((response) =>
                router.replace(
                    {
                        pathname: "/admin",
                        query: { uniqueid: response.data.uniqueid },
                    },
                    '/admin'
                )
            );
    }
    return (
        <section
            style={{
                backgroundColor: "white",
                padding: "50px",
            }}
        >
            <div className="notoSansJP text-center">
                <h1
                    class="entry-title"
                    itemProp="headline"
                    style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "28px",
                        padding: "5px",
                    }}
                >
                    Admin Login
                </h1>

                <div className="mb-2">
                    <Button
                        variant="danger"
                        size="lg"
                        onClick={() => signOut()}
                    >
                        Logout
                    </Button>{" "}
                </div>
                <div className="text-center">
                    <h1
                        class="entry-title"
                        itemProp="headline"
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: "28px",
                            padding: "5px",
                        }}
                    >
                        Create New Order ID
                    </h1>
                    <Button onClick={createOrder} variant="primary" size="lg">
                        Set New ID
                    </Button>{" "}
                    {router.query.uniqueid}
                </div>

                <Table bordered hover>
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>Order ID</th>
                            <th>Unique ID</th>
                            <th>Finished</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr onClick={() => router.push(`/admin/${order.id}`)} style={{cursor: 'pointer'}}>
                                <td>{order.id}</td>
                                <td>{order.uniqueid}</td>
                                <td>{order.finish ? "Finished" : "Active"}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </section>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    console.log(session);
    if (!session) {
        return {
            redirect: {
                destination: "/api/auth/signin",
            },
        };
    }

    const orders = await prisma.order.findMany({
        orderBy: {
            finish: "asc",
        },
    });

    return {
        props: { orders },
    };
}
