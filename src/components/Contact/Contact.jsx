import {
  Button,
  Card,
  Checkbox,
  Container,
  Grid,
  Image,
  Input,
  Link,
  Spacer,
  Text,
  Textarea,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [emailAccept, setEmailAccept] = useState(false);

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
            <Spacer y={1} />
            <Text h3>Dane kontaktowe:</Text>
            <Link href={"tel:501509756"}>
              <Text b size={"large"}>
                Numer telefonu: 501 509 756
              </Text>
            </Link>{" "}
            <Link href="https://api.whatsapp.com/send?phone=501509756">
              <Text b size={"large"}>
                Whatsapp: 501 509 767
              </Text>
            </Link>
            <Link href={"mailto:kontakt@zywiec-laweta.pl"}>
              <Text b size={"large"}>
                Adres Email: kontakt@zywiec-laweta.pl
              </Text>
            </Link>
            <Text b size={"large"}>
              NIP: 5532408141
            </Text>
            <Spacer y={1} />
            <Text h3>Zapraszamy również na nasz fanpage!</Text>
            <Link
              href={"https://www.facebook.com/profile.php?id=100084846997298"}
              target={"_blank"}
            >
              <Image src={"/images/facebook.svg"} alt={"facebook_icon"} />
            </Link>
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
                    placeholder="Imie lub nazwa firmy"
                    aria-label="name"
                    type={"text"}
                    name="name"
                    required
                    clearable
                  />
                  <Spacer y={2} />
                  <Input
                    placeholder="Adres email"
                    aria-label="email"
                    type={"email"}
                    name="email"
                    required
                    clearable
                    
                  />
                  <Spacer y={2} />
                  <Textarea
                    placeholder="Tresc wiadomosci"
                    aria-label="message"
                    name="message"
                    required
                    minLength={5}
                  />
                  <Spacer y={1} />
                  <Checkbox
                    size="sm"
                    defaultSelected={false}
                    isRequired={true}
                    onChange={() => setEmailAccept(!emailAccept)}
                  >
                    Wyrażam zgodę na przetwarzanie podanych w formularzu
                    kontaktowym danych w celu nawiązania kontaktu, odpowiedzi na
                    zadane pytania i przesłanie oferty środkami komunikacji
                    elektronicznej (zgoda konieczna dla odpowiedzi na zadane
                    pytania i wysłania żądanej oferty)
                  </Checkbox>
                  <input
                    type="text"
                    name="_honey"
                    style={{ display: "none" }}
                  ></input>
                </Card.Body>
                <Card.Footer>
                  {emailAccept ? (
                    <Button color={"warning"} type="submit">
                      Wyslij wiadomosc
                    </Button>
                  ) : (
                    <Button color={"warning"} type="submit" disabled>
                      Wyslij wiadomosc
                    </Button>
                  )}
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
