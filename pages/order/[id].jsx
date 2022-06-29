import prisma from "../../prisma/client"

export default function order() {
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
          TEST<br></br>TEST
        </h1>
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  console.log(context.params.id)
  const order = await prisma.order.findFirst({
    where:{
      uniqueid:parseInt (context.params.id),
      finish:false
    }
  })
  console.log(order)
  return {
    props:{}
  }
}
