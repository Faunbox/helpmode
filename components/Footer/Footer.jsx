import { Container, Grid, Image, Link, Spacer, Text } from "@nextui-org/react";
import GoogleMapsComponent from "./GoogleMaps";
import PrivacyPolicyModal from "./PrivactPoliticsModal";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        borderTop: "10px solid black",
        borderImage:
          "repeating-linear-gradient(-55deg, #000, #000 10px,  #ffb101 10px,    #ffb101 20px  ) 10",
      }}
    >
      <Container direction="column">
        <GoogleMapsComponent />

        <Grid.Container>
          <Grid
            xs={12}
            direction="column"
            css={{ "@xs": { flexDirection: "row" } }}
          >
            <Image
              src="/images/logo.png"
              alt="laweta 24h"
              width={200}
              height={160}
            />
            <Container
              display="flex"
              justify="center"
              alignItems="center"
              direction="column"
              css={{ textAlign: "center" }}
            >
              <Text color="white">
                HelpMode - POMOC DROGOWA LAWETA | HOLOWANIE | AUTO POMOC |
                AUTOLAWETA
              </Text>
              <Text color="white">NIP: 5532408141</Text>
              <Text color="white">Obszar dzialania: Zywiec i okolice</Text>
              <Link href="tel:501509756">
                <Text color="white">tel. +48 501-509-756</Text>
              </Link>
              <Link href="mailto:kontakt@zywiec-laweta.pl">
                <Text color="white">e-mail: kontakt@zywiec-laweta.pl</Text>
              </Link>
              {/* <Spacer y={1} /> */}
            </Container>
            {/* Oferteo */}
            <Link
              href="https://www.oferteo.pl/help-mode-autoholowanie-lukasz-borak/firma/5673386"
              target="blank"
            >
              <Image
                src="https://www.oferteo.pl/images/buttons/ps_brown_big.png?customerId=5673386"
                border="0"
                showSkeleton
                alt="Help Mode-autoholowanie Lukasz Borak - Profesjonalny Sprzedawca Oferteo.pl"
                title="Help Mode-autoholowanie Lukasz Borak - Profesjonalny Sprzedawca Oferteo.pl"
              />
            </Link>
          </Grid>
          <Grid xs={12} justify="center" css={{ textAlign: "center" }}>
            <Spacer y={2} />
            <PrivacyPolicyModal />
          </Grid>
          <Grid xs={12} justify="center" css={{ py: 15 }}>
            <Text small color="white">
              Created by Filip Sojecki
            </Text>
          </Grid>
        </Grid.Container>
      </Container>
    </footer>
  );
};

export default Footer;
