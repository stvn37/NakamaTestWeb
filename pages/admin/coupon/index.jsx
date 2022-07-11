import { getSession } from "next-auth/react";
import { Button, Table, Modal, Alert } from "react-bootstrap";
import axios from "axios";
import prisma from "../../../prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function admin({ coupons }) {
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
                        Admin Coupons
                    </h1>
                    <Button onClick={() => router.push('/admin/coupon/create')} variant="primary" size="lg">
                        Create New Coupon
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
                            <th>Code</th>
                            <th>Discount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coupons.map((coupon) => (
                            <tr onClick={() => router.push(`/admin/coupon/${coupon.id}`)} style={{cursor: 'pointer'}}>
                                <td>{coupon.id}</td>
                                <td>{coupon.code}</td>
                                <td>RM {coupon.discount}</td>
                                <td>{coupon.active ? 'Active' : 'Not Active'}</td>
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

    const coupons = await prisma.coupon.findMany();

    return {
        props: { coupons },
    };
}
