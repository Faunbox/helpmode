import { Container, Grid, Text } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Gallery = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

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
                overflow: "auto",
              },
            }}
          >
            {data.map((image, id) => (
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
                    width={300}
                    height={300}
                    style={{ borderRadius: "20px", objectFit: "cover" }}
                  />
                </motion.div>
              </Grid>
            ))}
          </Container>
        </Grid.Container>
      </Container>

      {isOpen && (
        <Lightbox
          mainSrc={data[photoIndex].src}
          nextSrc={data[(photoIndex + 1) % data.length].src}
          prevSrc={data[(photoIndex + data.length - 1) % data.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + data.length - 1) % data.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % data.length)
          }
        />
      )}
    </motion.div>
  );
};

export default Gallery;
