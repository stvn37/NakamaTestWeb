import { getSession } from "next-auth/react";
import { Button, Table, Modal, Alert } from "react-bootstrap";
import axios from "axios";
import prisma from "../../../prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function admin({ menus }) {
    const router = useRouter();

    return (
        <section
            style={{
                backgroundColor: "white",
                padding: "50px",
            }}
        >
            <div className="notoSansJP text-center">
                <div className="text-center mb-3">
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
                        Admin Menus
                    </h1>
                    <Button
                        onClick={() => router.push("/admin/menu/create")}
                        variant="primary"
                        size="lg"
                    >
                        Create New Menu
                    </Button>{" "}
                </div>

                {router.query.success && (
                    <Alert variant="success">
                        {router.query.success}
                    </Alert>
                )}

                <Table bordered hover>
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Recommend</th>
                            <th>Spicy</th>
                            <th>Vege</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menus.map((menu) => (
                            <tr
                                onClick={() =>
                                    router.push(`/admin/menu/${menu.id}`)
                                }
                                style={{ cursor: "pointer" }}
                            >
                                <td>{menu.id}</td>
                                <td>{menu.title}</td>
                                <td>{menu.category.name}</td>
                                <td>RM {menu.price}</td>
                                <td>{menu.recommend ? "Yes" : "No"}</td>
                                <td>{menu.spicy ? "Yes" : "No"}</td>
                                <td>{menu.vege ? "Yes" : "No"}</td>
                                <td>
                                    {menu.available
                                        ? "Available"
                                        : "Not Available"}
                                </td>
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

    const menus = await prisma.menu.findMany({
        include: {
            category: true,
        },
    });

    return {
        props: { menus },
    };
}
