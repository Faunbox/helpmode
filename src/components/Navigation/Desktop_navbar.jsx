import { Container, Grid, Image, Link, Text } from "@nextui-org/react";

const DesktopNavbar = () => {
  return (
    <nav
      className="navbar"
      style={{ backgroundColor: "#333", borderBottom: "4px solid yellow" }}
    >
      <Container>
        <Grid.Container direction="column" gap={1}>
          <Grid xs={12} justify="center" alignItems="center">
            <Grid xs={4} direction="row">
              <Image
                src="/images/logo.png"
                alt="laweta żywiec"
                objectFit="cover"
                height={80}
                width={80}
              />
              <Text h1 color="yellow">
                Help<span style={{ color: "white" }}>Mode</span>
              </Text>
            </Grid>
            <Grid xs={8} justify="flex-end">
              <Link href="phoneto:99999999">
                <Text h3 color="yellow">
                  Telefon czynny 24/7:
                  <Text h3 color="yellow">
                    604-181-632
                  </Text>
                </Text>
              </Link>
            </Grid>
          </Grid>
          <Grid xs={12} justify="space-around" alignItems="center">
            <Text color="white" h4>
              Strona główna
            </Text>
            <Text color="white" h4>
              Usługi
            </Text>
            <Text color="white" h4>
              Cennik
            </Text>
            <Text color="white" h4>
              Kontakt
            </Text>
          </Grid>
        </Grid.Container>
      </Container>
    </nav>
  );
};

export default DesktopNavbar;
