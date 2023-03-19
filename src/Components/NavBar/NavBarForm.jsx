import { Container, Navbar } from "react-bootstrap";

const NavBarForm = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#!">
            Dynamic <b>Form</b>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as:{" "}
              <a
                href="https://www.cgomezdev.com"
                target="_blank"
                rel="noreferrer"
              >
                Cristhian Gomez
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarForm;
