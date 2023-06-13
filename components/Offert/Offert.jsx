import {
  Card,
  Container,
  Grid,
  Button,
  Text,
  Link,
  Col,
  Spacer,
} from "@nextui-org/react";
import { motion } from "framer-motion";

const Offert = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Container
        display="flex"
        justify="center"
        alignItems="center"
        gap={2}
        id="offert"
      >
        <Text
          h2
          css={{
            borderBottom: "10px solid black",
            borderImage:
              "repeating-linear-gradient(-55deg, #000, #000 10px,  #ffb101 10px,    #ffb101 20px  ) 10",
            padding: "5px",
          }}
        >
          Nasza Oferta
        </Text>
        <Grid.Container gap={2} justify={"center"}>
          <Grid xs={12} sm={6} md={4} lg={3} justify="center">
            <Card css={{ mw: "330px" }} isHoverable isPressable>
              <Card.Header>
                <Text h1 size={"$lg"}>
                  Pomoc drogowa
                </Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>
                  Nasza firma świadczy usługi pomocy drogowej. Zapewniamy
                  całodobową Pomoc Drogową i holowanie pojazdów na terenie
                  Polski w szczególności województwie śląskim i najbliższych
                  okolic Żywiecczyzny. Oferujemy pomoc przy wymianie koła lub
                  dowóz do wulkanizacji 24/7, dowóz paliwa, wyciąganie z rowów,
                  śniegu lub błota
                </Text>
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Link href={"/#contact"}>
                  <Button color={"warning"}>Dowiedz sie wiecej</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3} justify="center">
            <Card css={{ mw: "330px" }} isHoverable>
              <Card.Header>
                <Text h1 size={"$lg"}>
                  Transport
                </Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>
                  Holujemy samochód do najbliższego zakładu naprawy lub
                  wskazanego miejsca. Zajmujemy się przewozem samochodów
                  osobowych, motocykli, a także maszyn budowlanych oraz
                  rolniczych. Przetransportujemy Twój pojazd tanio, szybko i
                  przede wszystkim bezpiecznie.
                </Text>
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Link href={"/#contact"}>
                  <Button color={"warning"}>Dowiedz sie wiecej</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3} justify="center">
            <Card css={{ mw: "330px" }} isHoverable isPressable>
              <Card.Header>
                <Text h1 size={"$lg"}>
                  Przewóz osób
                </Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>
                  Nasza laweta mieści 6 osób przetransportujemy bezpiecznie całą
                  rodzinę na wskazane miejsce. Zapewniamy szybkie wsparcie w
                  nagłych sytuacjach oraz zdarzeniach drogowych.
                </Text>
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Link href={"/#contact"}>
                  <Button color={"warning"}>Dowiedz sie wiecej</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3} justify="center">
            <Card css={{ mw: "330px" }} isHoverable isPressable>
              <Card.Header>
                <Text h1 size={"$lg"}>
                  Quad na wynajem
                </Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10", justifyContent: "space-between" }}>
                <Text>
                  Oferujwmy wynajem quada, idealnego dla wszystkich miłośników
                  przygody i adrenaliny! Jeśli marzysz o wyprawie w góry,
                  przejażdżce po lesie lub zwiedzaniu pięknych miejsc wokół to
                  quad będzie dla Ciebie idealny.{" "}
                  <Text b>
                    Przy najmie na dobę - gratis, w innym przypadku 3zł/km
                  </Text>
                </Text>
                <Container
                  direction="column"
                  gap={2}
                  justify="center"
                  alignItems="center"
                >
                  <Text small>
                    QuadCf moto 520, wyciągarka, skrzynia automatyczna
                  </Text>
                  <Spacer y={0.1} />
                  <Text small>Doba: 500zł | 8h: 400zł | 1h: 150zł</Text>
                </Container>
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Link href={"/#contact"}>
                  <Button color={"warning"}>Dowiedz sie wiecej</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
    </motion.div>
  );
};

export default Offert;
