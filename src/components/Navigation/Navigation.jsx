import DesktopNavbar from "./Desktop_navbar";
import MobileNavbar from "./Mobile_navbar";

const Navigation = ({ data }) => {
  return (
    <>
      <DesktopNavbar menu={data} />
      <MobileNavbar menu={data} />
    </>
  );
};

export default Navigation;
