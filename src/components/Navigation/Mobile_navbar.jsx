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

const MobileNavbar = () => {
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
                <Dropdown.Item key={"laweta"}>
                  <Link data-scroll href="#hero" color={"white"}>
                    <Text color={"#333"} b>
                      Laweta
                    </Text>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item key={"uslugi"}>
                  <Link data-scroll href="#offert" color={"white"}>
                    <Text color={"#333"} b>
                      Usługi
                    </Text>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item key={"pricing"} color={"white"}>
                  <Link data-scroll href="#gallery">
                    <Text color={"#333"} b>
                      Galeria
                    </Text>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item key={"contact"}>
                  {" "}
                  <Link data-scroll href="#contact" color={"black"}>
                    <Text color={"#333"} b>
                      Kontakt
                    </Text>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid>
        </Grid.Container>
      </Container>
    </nav>
  );
};

export default MobileNavbar;
