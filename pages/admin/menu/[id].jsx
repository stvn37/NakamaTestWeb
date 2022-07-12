import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import prisma from "../../../prisma/client";
import { IKContext, IKUpload } from "imagekitio-react";
import Image from "next/image";

export default function createMenu({ menu, categories }) {
    const router = useRouter();
    const [title, setTitle] = useState(menu.title);
    const [categoryId, setCategoryId] = useState(menu.category.id);
    const [price, setPrice] = useState(menu.price);
    const [recommend, setRecommend] = useState(menu.recommend);
    const [spicy, setSpicy] = useState(menu.spicy);
    const [vege, setVege] = useState(menu.vege);
    const [available, setAvailable] = useState(menu.available);
    const [image, setImage] = useState(undefined);

    const [show, setShow] = useState(false);

    async function create(e) {
        e.preventDefault();
        await axios
            .post("/api/updatemenu", {
                id: menu.id,
                title,
                categoryId,
                price,
                recommend,
                spicy,
                vege,
                available,
                imageUrl: image ? image.url : undefined
            })
            .then((response) =>
                router.push(
                    {
                        pathname: "/admin/menu",
                        query: { success: "Menu Updated Successfully" },
                    },
                    "/admin/menu"
                )
            )
            .catch((error) => {
                setShow(true);
            });
    }

    return (
        <section
            style={{
                backgroundColor: "white",
                minHeight: "100vh",
                padding: "50px",
            }}
        >
            <div className="notoSansJP">
                <h1
                    class="entry-title"
                    style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "36px",
                        padding: "5px",
                    }}
                >
                    Update Menu
                </h1>

                <Form onSubmit={create}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Menu Title</Form.Label>
                        <Form.Control
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category</Form.Label>
                        <Form.Select
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}
                        >
                            {categories.map((category) => (
                                <option value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </Form.Select>
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            step={0.01}
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Check
                            checked={recommend}
                            onChange={(e) => setRecommend(e.target.checked)}
                            type="switch"
                            label="Recommend"
                        />
                        <Form.Check
                            checked={spicy}
                            onChange={(e) => setSpicy(e.target.checked)}
                            type="switch"
                            label="Spicy"
                        />
                        <Form.Check
                            checked={vege}
                            onChange={(e) => setVege(e.target.checked)}
                            type="switch"
                            label="Vege"
                        />
                        <Form.Check
                            checked={available}
                            onChange={(e) => setAvailable(e.target.checked)}
                            type="checkbox"
                            label="Available"
                        />
                    </Form.Group>

                    <Image
                        src={image ? image.url : menu.image}
                        alt={menu.title}
                        width={200}
                        height={200}
                        objectFit="contain"
                    />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <IKContext
                            publicKey={
                                process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY
                            }
                            urlEndpoint={
                                process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
                            }
                            authenticationEndpoint={
                                process.env.NEXT_PUBLIC_IMAGEKIT_AUTH_ENDPOINT
                            }
                        >
                            <IKUpload
                                onError={(error) => console.log(error)}
                                onSuccess={(response) => setImage(response)}
                            />
                        </IKContext>
                        {image && (
                            <>
                                <p className="text-success">
                                    New Image Uploaded
                                </p>
                                <Button variant="warning" onClick={() => setImage(undefined)}>
                                    Undo New Image
                                </Button>
                            </>
                        )}
                    </Form.Group>

                    <div className="text-center">
                        <Button
                            style={{ backgroundColor: "#352E1D" }}
                            type="submit"
                        >
                            Update
                        </Button>
                    </div>
                </Form>

                <Modal show={show} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Error</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>An unknown error has occured</Modal.Body>

                    <Modal.Footer>
                        <Button
                            onClick={() => setShow(false)}
                            variant="primary"
                        >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </section>
    );
}

export async function getServerSideProps(context) {
    const menu = await prisma.menu.findUnique({
        where: {
            id: parseInt(context.params.id),
        },
        include: {
            category: true,
        },
    });
    const categories = await prisma.category.findMany();
    return {
        props: { menu, categories },
    };
}
