import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Button from "react-bootstrap/Button";
import Link from "next/link"
import { useRouter } from 'next/router'


import {
  Card,
  ListGroupItem,
  ListGroup,
  InputGroup,
  FormControl,
  Nav,
  Pagination,
} from "react-bootstrap";
import {
  faThumbsUp,
  faMagnifyingGlass,
  faPepperHot,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import itemOne from "../img/item-01.jpg";
import prisma from "../prisma/client";

export default function Menu({ menu, category }) {
  const router = useRouter ()


  
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
          <div className="App" style={{ margin: "20px" }}>
            <div class="container h-100">
              <div class="row h-100 justify-content-center align-items-center"></div>
              <InputGroup className="col-6">
                <FormControl
                  placeholder="Search..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Search
                </Button>
              </InputGroup>
            </div>
          </div>

          <Nav style={{
            backgroundColor:"#B7A57B",
            textAlign:"center",

            }} variant="pills" defaultActiveKey={router.query.cat ? router.query.cat :category[0].id}>
          {category.map((cat) => (
            <Nav.Item style={{flexGrow:1 }} key={cat.id}>
              <Link replace passHref href={`/menu?cat=${cat.id}`}><Nav.Link style={{color:"#ffffff"}} eventKey={cat.id}>{cat.name}</Nav.Link></Link>
            </Nav.Item>
            ))}
          </Nav> 
          

          <div className="row ">
            {menu.map((item) => (
              <div
                className="col-12 col-sm-6 col-lg-4 col-xl-3 p-3"
                key={item.id}
              >
                <Card>
                  <Image
                    width={500}
                    height={500}
                    className="my-3 p-3 card-img-top"
                    src={item.image}
                    objectFit='contain'
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text style={{ fontStyle: "italic" }}>
                      {item.caption}
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        {item.recommend && (
                          <FontAwesomeIcon
                            style={{ color: "#352E1D" }}
                            className="me-2"
                            size="2x"
                            icon={faThumbsUp}
                          />
                        )}
                        {item.spicy && (
                          <FontAwesomeIcon
                            style={{ color: "red" }}
                            className="me-2"
                            size="2x"
                            icon={faPepperHot}
                          />
                        )}
                        {item.vege && (
                          <FontAwesomeIcon
                            style={{ color: "green" }}
                            className="me-2"
                            size="2x"
                            icon={faLeaf}
                          />
                        )}
                      </ListGroupItem>
                      <ListGroupItem style={{ fontWeight: "bold" }}>
                        RM {item.price}
                      </ListGroupItem>
                    </ListGroup>
                    <Button className='w-100' variant={item.available ? "primary":"danger"} disabled={!item.available}>{item.available ? "Add": "Sold Out"}</Button>
                  </Card.Body>
                </Card>
              </div>
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
  const {cat} = context.query
  const category = await prisma.category.findMany({});
  const menu = await prisma.menu.findMany({
    where: {
      categoryid:cat ? parseInt(cat) : category[0].id
    }
  });
  

  return {
    props: { menu, category },
  };
}
