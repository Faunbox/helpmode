import { Button, Container, Grid, Image, Link, Text } from "@nextui-org/react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div
        style={{
          borderTop: "10px solid black",
          borderImage:
            "repeating-linear-gradient(-55deg, #000, #000 10px,  #ffb101 10px,    #ffb101 20px  ) 10",
        }}
      >
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
                <Text h1>Potrzebujesz lawety?</Text>
              </Grid>
              <Grid xs={12} alignItems={"center"} justify={"center"}>
                <Text size="$2xl">
                  Firma Helpmode świadczy profesjonalne usługi związane z{" "}
                  <Text b>całodobową pomocą drogową.</Text> Jesteśmy do Państwa
                  dyspozycji przez{" "}
                  <Text b>24 godziny na dobę, 7 dni w tygodniu.</Text> Sprawdź
                  jak możemy Ci pomóc!
                </Text>
              </Grid>
              <Grid xs={12} alignItems={"center"} justify="center">
                <Grid.Container justify="center" alignItems="center" gap={2}>
                  <Grid xs={12} sm={6} justify={"center"}>
                    <motion.div
                      transition={{
                        duration: 0.6,
                        yoyo: Infinity,
                        ease: "easeOut",
                      }}
                      animate={{ y: ["20%", "-20%"] }}
                    >
                      <Button color={"warning"}>
                        <Link css={{ color: "white" }} href="tel:999999999">
                          Wezwij pomoc
                        </Link>
                      </Button>
                    </motion.div>
                  </Grid>
                  <Grid xs={12} sm={6} justify={"center"}>
                    <Button color={"warning"}>Wypozyczenie przyczepy</Button>
                  </Grid>
                </Grid.Container>
              </Grid>
            </Grid>
          </Grid.Container>
        </Container>
      </div>
    </>
  );
};

export default Hero;
