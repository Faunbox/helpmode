import { Container, Loading } from "@nextui-org/react";

const LoadingComponent = () => {
  return (
    <Container
      display="flex"
      justify="center"
      alignItems="center"
      css={{ minHeight: "80vh" }}
    >
      <Loading size="lg" color="warning">
        Wczytywanie...
      </Loading>
    </Container>
  );
};

export default LoadingComponent;
