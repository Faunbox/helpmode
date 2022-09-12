import { Container, Dropdown, Grid, Image } from "@nextui-org/react";

const MobileNavbar = () => {
  return (
    <nav
      className="navbar-mobile"
      style={{
        backgroundColor: "#333",
      }}
    >
      <Container>
        <Grid.Container>
          <Grid xs={4}>
            <Image
              src="/images/logo.png"
              alt="laweta żywiec"
              objectFit="cover"
              className="navbar_logo-mobile"
              height={80}
              width={80}
            />
          </Grid>
          <Grid xs={8} justify={"flex-end"} alignItems="center">
            <Dropdown>
              <Dropdown.Button color={"warning"}>Menu</Dropdown.Button>
              <Dropdown.Menu>
                <Dropdown.Item key={"laweta"}>Laweta</Dropdown.Item>
                <Dropdown.Item key={"uslugi"}>Usługi</Dropdown.Item>
                <Dropdown.Item key={"pricing"}>Galeria</Dropdown.Item>
                <Dropdown.Item key={"contact"}>Kontakt</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid>
        </Grid.Container>
      </Container>
    </nav>
  );
};

export default MobileNavbar;
