import logo from "../assets/logo.svg";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./navbar.css";

function NavbarComponent() {
  return (
    <Navbar expand="lg">
      <div className="container-fluid mx-lg-5 mt-lg-4 ">
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" className="w-75" />
        </Navbar.Brand>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Navbar.Collapse id="navbarTogglerDemo02">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Item className="nav-item mx-lg-3 text-center fw-semibold">
              <Nav.Link href="/">Beranda</Nav.Link>
            </Nav.Item>
            <NavDropdown
              title="Tentang Kami"
              id="about-us-dropdown font-general"
              className="text-decoration-none text-center text-dark fw-semibold custom-dropdown"
            >
              <NavDropdown.Item className="text-light link-dark fw-semibold text-center">
                Visi dan Misi
              </NavDropdown.Item>
              <NavDropdown.Item className="text-light link-dark fw-semibold text-center">
                Tim LiterasiKita
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Program Kami"
              id="our-programs-dropdown"
              className="text-decoration-none text-center text-dark fw-semibold custom-dropdown"
            >
              <NavDropdown.Item
                href="/halaman-buku"
                className="text-light link-dark fw-semibold text-center"
              >
                BukuPedia
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/halaman-video"
                className="text-light link-dark fw-semibold text-center"
              >
                NontonPintar
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="d-flex navbar-nav">
            <NavDropdown
              className="nav-item dropdown mx-lg-5 mt-lg-3 text-center custom-dropdown fw-semibold"
              id="font-general"
              title="Bahasa Indonesia"
            >
              <NavDropdown.Item
                className="dropdown-item text-white bg-transparent fw-semibold"
                id="font-general"
                href="#"
              >
                Bahasa Indonesia
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdown-item text-white bg-transparent fw-semibold"
                id="font-general"
                href="#"
              >
                English
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item
              className="nav-item mt-3 text-center font-general"
              id="login"
            >
              <Nav.Link
                className="btn btn-link text-decoration-none text-primary fw-bold"
                href="/login"
              >
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              className="nav-item mt-3 text-center font-general btn btn-sm btn-primary"
              id="register"
            >
              <Nav.Link
                className="btn btn-primary text-center text-light fs-6 fw-bold position-absolute top-50"
                href="/register"
                role="button"
              >
                Daftar
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              className="nav-item dropdown rounded-5 text-center"
              id="profil-dropdown"
              style={{ display: "none" }}
            >
              <Nav.Link
                className="nav-link fw-semibold active dropdown-toggle text-white"
                role="button"
                id="font-general"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  id="user-avatar"
                  className="img-fluid border border-white border-2 rounded-circle"
                  src=""
                  alt="user"
                />
                <span id="user-name"></span>
              </Nav.Link>
              <NavDropdown title="Profil" id="profil-menu">
                <NavDropdown.Item className="text-center text-white bg-transparent">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider className="border border-white my-lg-1" />
                <NavDropdown.Item
                  id="logout-button"
                  className="text-center text-white bg-transparent"
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;
