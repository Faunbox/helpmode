import { Col, Container, Grid, Image, Link, Text } from "@nextui-org/react";
import { motion } from "framer-motion";

const DesktopNavbar = ({ menu }) => {
  return (
    <nav
      className="navbar"
      data-scroll-header
      style={{
        backgroundColor: "#333",
        position: "sticky",
        top: -1,
        left: "0",
        zIndex: "500",
        borderBottom: "10px solid black",
        borderImage:
          "repeating-linear-gradient(-45deg, #000, #000 10px,  #ffb101 10px,    #ffb101 20px  ) 10",
      }}
    >
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
              {menu?.map((nav) => (
                <Link data-scroll href={nav.scrollToId} key={nav.navLinkId}>
                  <Text color="white" h4 css={{ cursor: "pointer" }}>
                    {nav.navLinkId}
                  </Text>
                </Link>
              ))}
              
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
