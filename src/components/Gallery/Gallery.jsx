import { Container, Grid, Image, Text } from "@nextui-org/react";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Container id="gallery">
        <Grid.Container justify="space-around" gap={2}>
          <Grid xs={12} justify="center">
            <Text
              h2
              css={{
                borderBottom: "10px solid black",
                borderImage:
                  "repeating-linear-gradient(-55deg, #000, #000 10px,  #ffb101 10px,    #ffb101 20px  ) 10",
                padding: "5px",
              }}
            >
              Galeria
            </Text>
          </Grid>
          <Grid xs={12} sm={4} md={3} justify="center">
            <Image
              showSkeleton
              src="images/pomoc.jpeg"
              alt="laweta"
              objectFit="cover"
              width={300}
              height={300}
            />
          </Grid>
          <Grid xs={12} sm={4} md={3} justify="center">
            <Image
              showSkeleton
              src="images/insignia.jpg"
              alt="laweta"
              objectFit="cover"
              width={300}
              height={300}
            />
          </Grid>
          <Grid xs={12} sm={4} md={3} justify="center">
            <Image
              showSkeleton
              src="images/merc.jpg"
              alt="laweta"
              objectFit="cover"
              width={300}
              height={300}
            />
          </Grid>
          <Grid xs={12} sm={4} md={3} justify="center">
            <Image
              showSkeleton
              src="images/transport.jpg"
              alt="laweta"
              objectFit="cover"
              width={300}
              height={300}
            />
          </Grid>
        </Grid.Container>
      </Container>
    </motion.div>
  );
};

export default Gallery;
