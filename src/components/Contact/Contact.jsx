import {
  Button,
  Card,
  Checkbox,
  Container,
  Grid,
  Input,
  Link,
  Row,
  Spacer,
  Text,
  Textarea,
} from "@nextui-org/react";

const Contact = () => {
  return (
    <Container display="flex" justify="center" alignItems="center" id="contact">
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
          <Text h3>Masz pytania?</Text>
          <Text>
            Chcialbys dowiedziec sie wiecej na temat wypozyczenia przyczepy?
          </Text>
          <Text>Chcialbys zamowic lawete do przewozu swojego samochodu?</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            asperiores.
          </Text>
        </Grid>
        <Grid xs={12} sm={5}>
          <Card variant="bordered">
            <Card.Body>
              <Input placeholder="Imie" aria-label="name" />
              <Spacer y={2} />
              <Input placeholder="Adres email" aria-label="email" />
              <Spacer y={2} />
              <Textarea placeholder="Tresc wiadomosci" aria-label="message" />
              <Spacer y={1} />
              <Checkbox size="sm" defaultSelected={false} isRequired={true}>
                Wyrażam zgodę na przetwarzanie podanych w formularzu kontaktowym
                danych w celu nawiązania kontaktu, odpowiedzi na zadane pytania
                i przesłanie oferty turystycznej środkami komunikacji
                elektronicznej i telefonicznie (zgoda konieczna dla odpowiedzi
                na zadane pytania i wysłania żądanej oferty)
              </Checkbox>
            </Card.Body>
            <Card.Footer>
              <Button color={"warning"}>Wyslij wiadomosc</Button>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default Contact;
