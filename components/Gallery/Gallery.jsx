import { Container, Grid, Text } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const Gallery = ({ data }) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number + 1,
    });
  }

  const images = data.map((image) => image.src);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{
        background: 'url("/images/wickedbackground.svg") no-repeat center',
        backgroundSize: "cover",
        scrollSnapType: "y mendatory",
      }}
    >
      <Container id="gallery" css={{ scrollSnapAlign: "center" }}>
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
          <Container
            display="flex"
            css={{
              "@xsMax": {
                overflow: "auto",
                maxHeight: "100vh",
                flexDirection: "column",
                flexWrap: "wrap",
                height: "fit-content",
              },
            }}
          >
            {data.map((image, id) => (
              <Grid
                xs={12}
                sm={4}
                md={3}
                justify="center"
                onClick={() => openLightboxOnSlide(id)}
                css={{ cursor: "pointer" }}
                key={id}
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={300}
                    loading="lazy"
                    
                    blurDataURL="/images/logo.png"
                    style={{
                      borderRadius: "20px",
                      objectFit: "cover",
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </motion.div>
              </Grid>
            ))}
          </Container>
        </Grid.Container>
      </Container>

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={images}
        slide={lightboxController.slide}
      />
    </motion.div>
  );
};

export default Gallery;
