import { getSession } from "next-auth/react";
import {  Table } from "react-bootstrap";
import prisma from "../../prisma/client";


export default function admin({ feedbacks }) {
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
                        Admin Feedbacks
                    </h1>
                </div>

                <Table bordered hover>
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbacks.map((feedback) => (
                            <tr>
                                <td>{feedback.id}</td>
                                <td>{feedback.firstName}</td>
                                <td>{feedback.lastName}</td>
                                <td>{feedback.email}</td>
                                <td>{feedback.subject}</td>
                                <td>{feedback.message}</td>
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
    if (!session) {
        return {
            redirect: {
                destination: "/api/auth/signin",
            },
        };
    }

    const feedbacks = await prisma.feedback.findMany();

    return {
        props: { feedbacks },
    };
}
