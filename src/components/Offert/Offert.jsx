import { Card, Container, Grid, Button, Text, Modal } from "@nextui-org/react";
import { useState } from "react";
import { motion } from "framer-motion";

const Offert = () => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

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
            <Card
              css={{ mw: "330px" }}
              isHoverable
              isPressable
              onPress={handler}
            >
              <Card.Header>
                <Text h1 size={"$lg"}>
                  Laweta
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
                  śniegu, błota lub zablokowanych kół (na wózkach)
                </Text>
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Button color={"warning"} onPress={handler}>
                  Dowiedz sie wiecej
                </Button>
                <Modal
                  closeButton
                  aria-labelledby="modal-title"
                  open={visible}
                  onClose={closeHandler}
                >
                  <Modal.Header>
                    <Text id="modal-title" size={18}>
                      Wiecej informacji
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Text>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Architecto amet incidunt eum numquam quae autem? Repellat
                      saepe enim, unde consequatur eos, sint omnis, ipsam harum
                      dolor illo est deserunt ipsum.
                    </Text>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3} justify="center">
            <Card
              css={{ mw: "330px" }}
              isHoverable
              isPressable
              onPress={handler}
            >
              <Card.Header>
                <Text h1 size={"$lg"}>
                  Holowanie
                </Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>
                  Holujemy samochód do najbliższego zakładu naprawy lub
                  wskazanego miejsca. Zajmujemy się przewozem samochodów
                  osobowych, motocykli, a także maszyn budowlanych oraz
                  rolniczych. Nasza pomoc drogowa przetransportuje Twój pojazd
                  tanio, szybko i przede wszystkim bezpiecznie.
                </Text>
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Button color={"warning"} onPress={handler}>
                  Dowiedz sie wiecej
                </Button>
                <Modal
                  closeButton
                  aria-labelledby="modal-title"
                  open={visible}
                  onClose={closeHandler}
                >
                  <Modal.Header>
                    <Text id="modal-title" size={18}>
                      Wiecej informacji
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Text>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Architecto amet incidunt eum numquam quae autem? Repellat
                      saepe enim, unde consequatur eos, sint omnis, ipsam harum
                      dolor illo est deserunt ipsum.
                    </Text>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3} justify="center">
            <Card
              css={{ mw: "330px" }}
              isHoverable
              isPressable
              onPress={handler}
            >
              <Card.Header>
                <Text h1 size={"$lg"}>
                  Przewoz osob
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
                <Button color={"warning"} onPress={handler}>
                  Dowiedz sie wiecej
                </Button>
                <Modal
                  closeButton
                  aria-labelledby="modal-title"
                  open={visible}
                  onClose={closeHandler}
                >
                  <Modal.Header>
                    <Text id="modal-title" size={18}>
                      Wiecej informacji
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Text>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Architecto amet incidunt eum numquam quae autem? Repellat
                      saepe enim, unde consequatur eos, sint omnis, ipsam harum
                      dolor illo est deserunt ipsum.
                    </Text>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3} justify="center">
            <Card
              css={{ mw: "330px" }}
              isHoverable
              isPressable
              onPress={handler}
            >
              <Card.Header>
                <Text h1 size={"$lg"}>
                  Wypożyczalnia przyczep
                </Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>
                  W naszej ofercie można skorzystać również z wypożyczalni
                  przyczep do …t. Staramy się dostosować termin do wymagań
                  klienta.
                </Text>
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Button color={"warning"} onPress={handler}>
                  Dowiedz sie wiecej
                </Button>
                <Modal
                  closeButton
                  aria-labelledby="modal-title"
                  open={visible}
                  onClose={closeHandler}
                >
                  <Modal.Header>
                    <Text id="modal-title" size={18}>
                      Wiecej informacji
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Text>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Architecto amet incidunt eum numquam quae autem? Repellat
                      saepe enim, unde consequatur eos, sint omnis, ipsam harum
                      dolor illo est deserunt ipsum.
                    </Text>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
    </motion.div>
  );
};

export default Offert;
