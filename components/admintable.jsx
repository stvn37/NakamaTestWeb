export default function admintable() {
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
          Admin Table
        </h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </section>
  );
}
