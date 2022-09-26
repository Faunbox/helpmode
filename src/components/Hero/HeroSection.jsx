import { Button, Container, Grid, Image, Link, Text } from "@nextui-org/react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <Container
        css={{
          minHeight: "80vh",
        }}
        justify="center"
        alignItems="center"
        display="flex"
        id="hero"
      >
        <Grid.Container gap={2} direction="row">
          <Grid xs={0} sm={6}>
            <Image
              showSkeleton
              src="/images/hero.jpg"
              alt="laweta"
              objectFit="cover"
              height={600}
              className="hero-image"
            />
          </Grid>
          <Grid xs={12} sm={6} direction={"column"}>
            <Grid xs={12} alignItems={"center"} justify={"center"}>
              <Text h1>Potrzebujesz pomocy drogowej ?</Text>
            </Grid>
            <Grid xs={12} alignItems={"center"} justify={"center"}>
              <Text size="$2xl">
                Firma Helpmode świadczy profesjonalne usługi związane z{" "}
                <Text b>
                  całodobową pomocą drogową jak i wypożyczaniem przyczep.
                </Text>{" "}
                Działamy na terenie Śląska oraz Żywiecczyzny i okolic. Jesteśmy
                do Państwa dyspozycji przez{" "}
                <Text b>24 godziny na dobę, 7 dni w tygodniu.</Text> Sprawdź jak
                możemy Ci pomóc!
              </Text>
            </Grid>
            <Grid xs={12} alignItems={"center"} justify="center">
              <Grid.Container justify="center" alignItems="center" gap={2}>
                <Grid xs={12} sm={6} justify={"center"}>
                  <motion.div
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeOut",
                    }}
                    animate={{ y: ["20%", "-20%"] }}
                  >
                    <Button color={"warning"}>
                      <Link css={{ color: "white" }} href="tel:501509756">
                        Wezwij pomoc
                      </Link>
                    </Button>
                  </motion.div>
                </Grid>
                <Grid xs={12} sm={6} justify={"center"}>
                  <Link data-scroll href="#contact">
                    <Button color={"warning"}>Wypozyczenie przyczepy</Button>
                  </Link>
                </Grid>
              </Grid.Container>
            </Grid>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
};

export default Hero;
