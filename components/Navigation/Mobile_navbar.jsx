import {
  Col,
  Container,
  Dropdown,
  Grid,
  Image,
  Link,
  Text,
} from "@nextui-org/react";
import { motion } from "framer-motion";

const MobileNavbar = ({ menu }) => {
  return (
    <nav
      className="navbar-mobile"
      style={{
        backgroundColor: "#333",
        position: "sticky",
        top: "0",
        left: "0",
        zIndex: "500",
        borderBottom: "10px solid black",
        borderImage:
          "repeating-linear-gradient(-45deg, #000, #000 10px,  #ffb101 10px,    #ffb101 20px  ) 10",
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
          <Grid xs={4} justify={"flex-end"} alignItems="center">
            <Link href="tel:501509756">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: [1, 1.1] }}
                exit={{ scale: 0.95 }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeOut",
                }}
              >
                <Col>
                  <Image src="images/phone.svg" width={50} height={50} />
                  <Text b color={"white"}>
                    501-509-756
                  </Text>
                </Col>
              </motion.div>
            </Link>
          </Grid>
          <Grid xs={4} justify={"flex-end"} alignItems="center">
            <Dropdown>
              <Dropdown.Button color={"warning"}> </Dropdown.Button>
              <Dropdown.Menu>
                {menu?.map((nav) => (
                  <Dropdown.Item key={nav.scrollToId}>
                    <Link data-scroll href={nav.scrollToId} color={"white"}>
                      <Text color={"#333"} b>
                        {nav.navLinkId}
                      </Text>
                    </Link>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Grid>
        </Grid.Container>
      </Container>
    </nav>
  );
};

export default MobileNavbar;
