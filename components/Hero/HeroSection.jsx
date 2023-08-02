import { Button, Container, Grid, Link, Text } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      style={{
        background: 'url("/images/wickedbackground.svg") no-repeat center',
        backgroundSize: "cover",
      }}
    >
      <Container
        css={{
          minHeight: "90vh",
          position: "relative",
        }}
        justify="center"
        alignItems="center"
        display="flex"
        id="hero"
      >
        <Grid.Container
          gap={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            xs={12}
            sm={6}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid xs={12} alignItems={"center"} justify={"center"}>
              <Text h1>Pomoc drogowa</Text>
            </Grid>

            <Grid xs={0} sm={12} role="section">
              <Image
                src="/images/hero2.webp"
                alt="pomoc drogowa"
                height={300}
                width={450}
                className="hero-image"
                style={{ borderRadius: "20px", objectFit: "cover" }}
              />
            </Grid>
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
                  <Button color={"error"} ghost>
                    <Link css={{ color: "black" }} href="tel:501509756">
                      Wezwij pomoc
                    </Link>
                  </Button>
                </motion.div>
              </Grid>
            </Grid.Container>
            <Grid
              xs={12}
              direction={"column"}
              role="section"
              aria-roledescription="article"
              justify="center"
              alignItems="center"
            >
              <Grid
                xs={12}
                alignItems={"center"}
                justify={"center"}
                role="section"
              >
                <Text size="$2xl">
                  Firma Helpmode świadczy profesjonalne usługi związane z{" "}
                  <Text b>
                    całodobową pomocą drogową jak i wynajmowaniem quada.
                  </Text>{" "}
                  Działamy na terenie Żywiecczyzny i okolic. Jesteśmy do Państwa
                  dyspozycji przez{" "}
                  <Text b>24 godziny na dobę, 7 dni w tygodniu.</Text> Sprawdź
                  jak możemy Ci pomóc!
                </Text>
              </Grid>
              <Grid
                xs={12}
                alignItems={"center"}
                justify="center"
                role="section"
                aria-roledescription="button"
              ></Grid>
            </Grid>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid xs={12} alignItems={"center"} justify={"center"}>
              <Text h1>Wypożyczalnia quadów</Text>
            </Grid>
            <Grid
              xs={0}
              sm={12}
              role="section"
              justify="center"
              alignItems="center"
            >
              <Image
                src="/images/quady-800.webp"
                srcset="quady-450 300w,
                quady-800 800w,
                quady-1400 1200w"
                alt="pomoc drogowa"
                height={300}
                width={450}
                className="hero-image"
                style={{ borderRadius: "20px", objectFit: "cover" }}
              />
            </Grid>
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
                  <Button color={"error"} ghost>
                    <Link
                      css={{ color: "black" }}
                      href="#contact"
                      aria-roledescription="button to contact form"
                      color={"#845306"}
                    >
                      Wypozyczenie quada
                    </Link>
                  </Button>
                </motion.div>
              </Grid>
            </Grid.Container>
            <Grid
              xs={12}
              direction={"column"}
              role="section"
              aria-roledescription="article"
              justify="center"
              alignItems="center"
            >
              <Grid alignItems={"center"} justify={"center"} role="section">
                <Text size="$2xl">
                  Jeśli jesteś osobą poszukującym nowych, niekonwencjonalnych
                  atrakcji, nasza wypożyczalnia quadów jest idealnym
                  rozwiązaniem dla Ciebie. Niezależnie od tego, czy wybierasz
                  się na prywatną przejażdżkę z przyjaciółmi, możemy dostosować
                  naszą ofertę do Twoich potrzeb.
                </Text>
              </Grid>
              <Grid
                xs={12}
                alignItems={"center"}
                justify="center"
                role="section"
                aria-roledescription="button"
              ></Grid>
            </Grid>
          </Grid>
        </Grid.Container>
      </Container>
    </div>
  );
};

export default Hero;
