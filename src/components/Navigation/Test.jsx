import { Navbar, Text } from "@nextui-org/react";

const Test = () => {
  return (
    <Navbar css={{ background: "green" }}>
      <Navbar.Brand>
        <Text h2>Test</Text>
      </Navbar.Brand>
      <Navbar.Content hideIn={"xs"} css={{ background: "green" }}>
        <Text h3>Strona główna</Text>
        <Text h3>Usługi</Text>
        <Text h3>Cennik</Text>
        <Text h3>Kontakt</Text>
      </Navbar.Content>
      <Navbar.Toggle showIn={"xs"} />
      <Navbar.Collapse>
        <Navbar.CollapseItem>Strona główna</Navbar.CollapseItem>
        <Navbar.CollapseItem>Usługi</Navbar.CollapseItem>
        <Navbar.CollapseItem>Cennik</Navbar.CollapseItem>
        <Navbar.CollapseItem>Kontakt</Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Test;
