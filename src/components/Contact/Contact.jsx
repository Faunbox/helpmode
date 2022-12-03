import { Container, Grid, Text } from "@nextui-org/react";
import { motion } from "framer-motion";
import ContactFormComponent from "./FormComponent";
import ContactInfoComponent from "./InfoComponent";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Container
        display="flex"
        justify="center"
        alignItems="center"
        id="contact"
      >
        <Text
          h2
          css={{
            borderBottom: "10px solid black",
            borderImage:
              "repeating-linear-gradient(-55deg, #000, #000 10px,  #ffb101 10px,    #ffb101 20px  ) 10",
            padding: "5px",
          }}
        >
          Kontakt
        </Text>
        <Grid.Container gap={2}>
          <ContactInfoComponent />
          <ContactFormComponent />
        </Grid.Container>
      </Container>
    </motion.div>
  );
};

export default Contact;
