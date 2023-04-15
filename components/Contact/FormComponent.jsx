import {
  Button,
  Card,
  Checkbox,
  Grid,
  Input,
  Spacer,
  Textarea,
  Popover,
  Text,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";

const ContactFormComponent = () => {
  const [emailAccept, setEmailAccept] = useState(false);
  const [emailDelivered, setEmailDelivered] = useState(false);

  useEffect(() => {
    setTimeout((setEmailDelivered(false), setEmailAccept(false)), 5000);
  }, [emailDelivered]);

  const [emailContent, setEmailContent] = useState({
    name: "",
    email: "",
    message: "",
    honey: false,
    isSend: false,
  });

  const handleOnChange = (e) => {
    setEmailContent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const contactFormEmailToOwner = async () => {
    setEmailContent((prevState) => ({
      ...prevState,
      isSend: true,
    }));
    await axios({
      method: "POST",
      url: "/api/email/contactform",
      data: {
        name: emailContent.name,
        email: emailContent.email,
        message: emailContent.message,
      },
    })
      .then((response) => response.status === 250 && setEmailDelivered(true))
      .catch(
        (err) => alert(err.error),
        setEmailContent((prevState) => ({
          ...prevState,
          isSend: false,
        }))
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Spambot check
    if (emailContent.honey) return;

    //email send function
    contactFormEmailToOwner(emailContent);
  };

  return (
    <>
      <Grid xs={12} sm={5}>
        <Card variant="bordered">
          <form
            name="sentMessage"
            validate="true"
            method="POST"
            onSubmit={handleSubmit}
          >
            <Card.Body>
              <Input
                placeholder="Imie lub nazwa firmy"
                aria-label="name"
                type={"text"}
                name="name"
                required
                clearable
                onChange={handleOnChange}
              />
              <Spacer y={2} />
              <Input
                placeholder="Adres email"
                aria-label="email"
                type={"email"}
                name="email"
                required
                onChange={handleOnChange}
                clearable
              />
              <Spacer y={2} />
              <Textarea
                placeholder="Tresc wiadomosci"
                aria-label="message"
                name="message"
                required
                minLength={5}
                onChange={handleOnChange}
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
              <Checkbox
                defaultSelected={false}
                isRequired={false}
                name="_honey"
                css={{ display: "none" }}
                onChange={() =>
                  setEmailContent((prevState) => ({
                    ...prevState,
                    honey: !prevState.honey,
                  }))
                }
              ></Checkbox>
            </Card.Body>
            <Card.Footer>
              {emailAccept ? (
                <Button color={"warning"} type="submit">
                  Wyslij wiadomosc
                </Button>
              ) : (
                <Popover placement="top">
                  <Popover.Trigger>
                    <Button color={"warning"} type="submit" disabled>
                      {emailContent.isSend ? "Wysłano" : "Wyslij wiadomosc"}
                    </Button>
                  </Popover.Trigger>
                  <Popover.Content css={{ background: "#a2c11c" }}>
                    <Text css={{ p: "$10" }}>Wiadomość wysłana!</Text>
                  </Popover.Content>
                </Popover>
              )}
            </Card.Footer>
          </form>
        </Card>
      </Grid>
    </>
  );
};

export default ContactFormComponent;
