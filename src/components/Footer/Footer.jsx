import { Container, Grid, Image, Text } from "@nextui-org/react";

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
      <Container>
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
            >
              <Text color="white">
                HelpMode - POMOC DROGOWA LAWETA | HOLOWANIE | AUTO POMOC |
                AUTOLAWETA
              </Text>
              <Text color="white">Obszar dzialania: Zywiec i okolice</Text>
              <Text color="white">tel. +48 999-999-999</Text>
              <Text color="white">e-mail: kontakt@kontakt.pl</Text>
            </Container>
          </Grid>
          <Grid xs={12} justify="center" css={{ py: 15 }}>
            <Text small color="white">
              Designed and created by Filip Sojecki
            </Text>
          </Grid>
        </Grid.Container>
      </Container>
    </footer>
  );
};

export default Footer;
