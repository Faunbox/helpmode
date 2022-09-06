import { Container, Dropdown, Grid, Image } from "@nextui-org/react";

const MobileNavbar = () => {
  return (
    <nav
      className="navbar-mobile"
      style={{
        backgroundColor: "#333",
        borderBottom: "4px solid yellow",
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
              <Dropdown.Button>Menu</Dropdown.Button>
              <Dropdown.Menu>
                <Dropdown.Item key={"yes"}>Tak</Dropdown.Item>
                <Dropdown.Item key={"no"}>no</Dropdown.Item>
                <Dropdown.Item key={"maybe"}>mb</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid>
        </Grid.Container>
      </Container>
    </nav>
  );
};

export default MobileNavbar;
