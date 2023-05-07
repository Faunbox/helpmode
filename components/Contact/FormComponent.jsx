import {
  Button,
  Card,
  Checkbox,
  Grid,
  Input,
  Loading,
  Popover,
  Spacer,
  Text,
  Textarea,
} from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";

const ContactFormComponent = () => {
  const [emailAccept, setEmailAccept] = useState(false);

  const [emailContent, setEmailContent] = useState({
    name: "",
    email: "",
    message: "",
    honey: false,
    isSend: false,
    isOk: "",
    isError: "",
  });

  const handleOnChange = (e) => {
    setEmailContent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const contactFormEmailToOwner = async () => {
    await axios({
      method: "POST",
      url: "/api/email/contactform ",
      data: {
        name: emailContent.name,
        email: emailContent.email,
        message: emailContent.message,
      },
    })
      .then(
        (response) =>
          response.status === 250 &&
          setEmailContent((prevState) => ({
            ...prevState,
            isOk: true,
            // isSend: true,
            isError: false,
          }))
      )
      .catch(
        setEmailContent((prevState) => ({
          ...prevState,
          // isSend: true,
          isOk: true,
          isError: true,
        }))
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Spambot check
    if (emailContent.honey) return;

    setEmailContent((prevState) => ({
      ...prevState,
      isSend: true,
    }));

    setTimeout(() => {
      setEmailAccept(false);
    }, 500);

    //email send function

    await contactFormEmailToOwner(emailContent);
  };

  return (
    <>
      <Grid xs={12} sm={5}>
        <Card variant="bordered">
          <form
            name="sentMessage"
            aria-label="contact form"
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
                isDisabled={!emailContent.isSend ? false : true}
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
              <Popover placement="top" isOpen={emailContent.isOk}>
                <Popover.Trigger>
                  <Button
                    color={"warning"}
                    type="submit"
                    disabled={!emailAccept}
                  >
                    Wyślij wiadomość
                  </Button>
                </Popover.Trigger>
                <Popover.Content
                  css={
                    !emailContent.isError
                      ? { backgroundColor: "$green500" }
                      : { backgroundColor: "$yellow600" }
                  }
                >
                  {!emailContent.isError ? (
                    <Text css={{ p: "$8" }}>Wiadomość wysłana</Text>
                  ) : (
                    <Loading css={{ p: "$8" }}>Wysyłanie</Loading>
                  )}
                </Popover.Content>
              </Popover>
            </Card.Footer>
          </form>
        </Card>
      </Grid>
    </>
  );
};

export default ContactFormComponent;
