import { Grid, Image, Link, Spacer, Text } from "@nextui-org/react";

const ContactInfoComponent = () => {
  return (
    <>
      <Grid
        xs={12}
        sm={7}
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Text h2>Masz pytania?</Text>
        <Text size={"large"}>
          Chciałbyś dowiedzieć się więcej na temat wypożyczenia przyczepy?
        </Text>
        <Text size={"large"}>
          Chciałbyś zamowić lawete do przewozu swojego samochodu?
        </Text>
        <Text size={"large"}>Zapraszamy do napisania wiadomości!</Text>
        <Text size={"large"}>
          W celu przyspieszenia kontaktu zapraszamy również do kontaktu
          telefonicznego.
        </Text>
        <Spacer y={1} />
        <Text h3>Dane kontaktowe:</Text>
        <Link href={"tel:501509756"}>
          <Image
            src="/images/phonenumer.svg"
            alt="numer telefonu"
            width={40}
            height={40}
            css={{ paddingRight: "10px" }}
          />
          <Text b size={"large"}>
            Numer telefonu: 501 509 756
          </Text>
        </Link>{" "}
        <Link href="https://api.whatsapp.com/send?phone=501509756">
          <Image
            src="/images/whatsapp.svg"
            alt="numer telefonu"
            width={40}
            height={40}
            css={{ paddingRight: "10px" }}
          />
          <Text b size={"large"}>
            Whatsapp: 501 509 756
          </Text>
        </Link>
        <Link href={"mailto:kontakt@zywiec-laweta.pl"}>
          <Image
            src="/images/email.svg"
            alt="numer telefonu"
            width={40}
            height={40}
            css={{ paddingRight: "10px" }}
          />
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
    </>
  );
};

export default ContactInfoComponent;
