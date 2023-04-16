import {
  Button,
  Card,
  Checkbox,
  Grid,
  Input,
  Spacer,
  Textarea,
} from "@nextui-org/react";
import { useState } from "react";

const ContactFormComponent = () => {
  const [emailAccept, setEmailAccept] = useState(false);
  return (
    <>
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
                Wyrażam zgodę na przetwarzanie podanych w formularzu kontaktowym
                danych w celu nawiązania kontaktu, odpowiedzi na zadane pytania
                i przesłanie oferty środkami komunikacji elektronicznej (zgoda
                konieczna dla odpowiedzi na zadane pytania i wysłania żądanej
                oferty)
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
    </>
  );
};

export default ContactFormComponent;
