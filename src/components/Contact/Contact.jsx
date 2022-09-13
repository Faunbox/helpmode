import {
  Button,
  Card,
  Checkbox,
  Container,
  Grid,
  Input,
  Spacer,
  Text,
  Textarea,
} from "@nextui-org/react";
import { motion } from "framer-motion";

const Contact = () => {
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
        id="contact"
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
          Kontakt
        </Text>
        <Grid.Container gap={2}>
          <Grid
            xs={12}
            sm={7}
            justify="center"
            alignItems="center"
            direction="column"
          >
            <Text h2>Masz pytania?</Text>
            <Text size={"large"}>
              Chcialbys dowiedziec sie wiecej na temat wypozyczenia przyczepy?
            </Text>
            <Text size={"large"}>
              Chcialbys zamowic lawete do przewozu swojego samochodu?
            </Text>
            <Text size={"large"}>Zapraszamy do napisania wiadomości!</Text>
            <Text size={"large"}>
              W celu przyspieszenia kontaktu zapraszamy również do kontaktu
              telefonicznego.
            </Text>
          </Grid>
          <Grid xs={12} sm={5}>
            <Card variant="bordered">
              <form
                name="sentMessage"
                validate="true"
                method="POST"
                action="https://formsubmit.io/send/kontakt@zywiec-laweta.pl"
              >
                <Card.Body>
                  <Input
                    placeholder="Imie"
                    aria-label="name"
                    type={"text"}
                    name="name"
                  />
                  <Spacer y={2} />
                  <Input
                    placeholder="Adres email"
                    aria-label="email"
                    type={"email"}
                    name="email"
                  />
                  <Spacer y={2} />
                  <Textarea
                    placeholder="Tresc wiadomosci"
                    aria-label="message"
                    name="message"
                  />
                  <Spacer y={1} />
                  <Checkbox size="sm" defaultSelected={false} isRequired={true}>
                    Wyrażam zgodę na przetwarzanie podanych w formularzu
                    kontaktowym danych w celu nawiązania kontaktu, odpowiedzi na
                    zadane pytania i przesłanie oferty środkami komunikacji
                    elektronicznej (zgoda konieczna dla odpowiedzi na zadane
                    pytania i wysłania żądanej oferty)
                  </Checkbox>
                  <input
                    type="hidden"
                    name="_next"
                    value="https://yourdomain.co/thanks.html"
                  ></input>
                  <input
                    type="text"
                    name="_honey"
                    style={{ display: "none" }}
                  ></input>
                </Card.Body>
                <Card.Footer>
                  <Button color={"warning"} type="submit">
                    Wyslij wiadomosc
                  </Button>
                </Card.Footer>
              </form>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
    </motion.div>
  );
};

export default Contact;
