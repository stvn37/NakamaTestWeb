import { signIn, signOut } from "next-auth/react";
import { Button } from "react-bootstrap";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useState } from "react";

export default function admin() {
  const { data: session, status } = useSession();
  console.log(session); 
  const [uniqueid, setUniqueId] = useState("");
  async function createOrder() {
    await axios.post("/api/order").then(response => setUniqueId(response.data.uniqueid))
  }
  return (
    <section
      style={{ backgroundColor: "white", height: "800px", padding: "50px" }}
    >
      <div className="notoSansJP">
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
        {status == "unauthenticated" && (
          <div className="mb-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => signIn("google")}
            >
              Login
            </Button>{" "}
          </div>
        )}
        {status == "authenticated" && (
          <div className="mb-2">
            <Button variant="primary" size="lg" onClick={() => signOut()}>
              Logout
            </Button>{" "}
          </div>
        )}

        {session && session.user.name}

        <Button onClick={createOrder}  variant="primary" size="lg">
          Create Order
        </Button>{" "}

        {uniqueid}
        
      </div>
    </section>
  );
}
