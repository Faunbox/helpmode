import { Container, Grid, Image, Text } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const imageGallery = [
    { src: "images/pomoc.jpeg", alt: "pomoc drogowa" },
    { src: "images/insignia.jpg", alt: "laweta" },
    { src: "images/merc.jpg", alt: "laweta" },
    { src: "images/transport.jpg", alt: "laweta" },
    { src: "images/laweta.jpg", alt: "laweta" },
    { src: "images/przyczepa.jpg", alt: "laweta" },
  ];

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
          {imageGallery.map((image, id) => (
            <Grid
              xs={12}
              sm={4}
              md={3}
              justify="center"
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(id);
              }}
              css={{ cursor: "pointer" }}
              key={id}
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <Image
                  showSkeleton
                  src={image.src}
                  alt={image.alt}
                  objectFit="cover"
                  width={300}
                  height={300}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid.Container>
      </Container>

      {isOpen && (
        <Lightbox
          mainSrc={imageGallery[photoIndex].src}
          nextSrc={imageGallery[(photoIndex + 1) % imageGallery.length].src}
          prevSrc={
            imageGallery[
              (photoIndex + imageGallery.length - 1) % imageGallery.length
            ].src
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + imageGallery.length - 1) % imageGallery.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imageGallery.length)
          }
        />
      )}
    </motion.div>
  );
};

export default Gallery;
