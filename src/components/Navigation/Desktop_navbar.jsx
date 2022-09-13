import { Col, Container, Grid, Image, Link, Text } from "@nextui-org/react";
import { motion } from "framer-motion";

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
              <Link data-scroll href="#hero">
                <Text color="white" h4 css={{ cursor: "pointer" }}>
                  Laweta
                </Text>
              </Link>
              <Link data-scroll href="#offert">
                <Text color="white" h4>
                  Usługi
                </Text>
              </Link>
              <Link data-scroll href="#gallery">
                <Text color="white" h4>
                  Galeria
                </Text>
              </Link>
              <Link data-scroll href="#contact">
                <Text color="white" h4>
                  Kontakt
                </Text>
              </Link>
            </Grid>
            <Grid xs={3} sm={6} justify="flex-end">
              <Link href="tel:501509756">
                <Col>
                  <Text h4 color="#F5A524">
                    Telefon czynny 24/7:
                  </Text>
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: [1, 1.1] }}
                    exit={{ scale: 0.95 }}
                    transition={{
                      duration: 0.8,
                      yoyo: Infinity,
                      ease: "easeOut",
                    }}
                  >
                    <Text h4 color="#F5A524">
                      501-509-756
                    </Text>
                  </motion.div>
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
