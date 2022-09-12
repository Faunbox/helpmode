import { Col, Container, Grid, Image, Link, Text } from "@nextui-org/react";

const DesktopNavbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: "#333" }}>
      <Container>
        <Grid.Container direction="row" gap={1}>
          <Grid xs={12} justify="center" alignItems="center">
            <Grid xs={2} direction="row">
              <Image
                src="/images/logo.png"
                alt="laweta żywiec"
                objectFit="cover"
                height={80}
                width={80}
              />
              {/* <Text h1 color="yellow">
                Help<span style={{ color: "white" }}>Mode</span>
              </Text> */}
            </Grid>

            <Grid xs={7} justify="space-around" alignItems="center">
              <Text color="white" h4 css={{ cursor: "pointer" }}>
                <Link data-scroll href="#hero">
                  Laweta
                </Link>
              </Text>
              <Text color="white" h4>
                <Link data-scroll href="#offert">
                  Usługi
                </Link>
              </Text>
              <Text color="white" h4>
                <Link data-scroll href="#gallery">
                  Galeria
                </Link>
              </Text>
              <Text color="white" h4>
                <Link data-scroll href="#contact">
                  Kontakt
                </Link>
              </Text>
            </Grid>
            <Grid xs={3} sm={6} justify="flex-end">
              <Link href="phone:99999999">
                <Col>
                  <Text h4 color="#F5A524">
                    Telefon czynny 24/7:
                  </Text>
                  <Text h4 color="#F5A524">
                    604-181-632
                  </Text>
                </Col>
              </Link>
            </Grid>
          </Grid>
        </Grid.Container>
      </Container>
    </nav>
  );
};

export default DesktopNavbar;
