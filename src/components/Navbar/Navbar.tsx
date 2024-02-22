import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "src/assets/Logo.svg";
import SearchIcon from "src/assets/icons/search-normal.svg";
import Container from "src/styled/Flex";
import styled from "styled-components";
import { links } from "./Links";
const ContainerNav = styled(Container)`
  background-color: ${(props) => props.theme.gray2};
`;

const LinksContainer = styled(Container)``;

const Button = styled.button`
  padding: 15px 35px;
  height: 60px;
  background-color: white;
  border-radius: 90px;
`;

function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  return (
    <>
      <ContainerNav
        border="none"
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        className="navbar z-10"
      >
        <img src={Logo} alt="Logo" style={{ marginBottom: "10px" }} />

        <Container
          backgroundColor="transparent"
          border="none"
          justifyContent="flex-end"
        >
          <LinksContainer
            justifyContent="space-evenly"
            border="none"
            alignItems="center"
            width="580px"
            className="hidden md:flex w-full gap-4 rounded-full px-7"
            backgroundColor="white"
          >
            {links.map((link) => {
              return (
                <Link
                  to={link.path}
                  style={{ textDecoration: "none", whiteSpace: "nowrap" }}
                >
                  <p style={{ fontSize: 16, color: "black" }}>{link.title}</p>
                </Link>
              );
            })}
            <img src={SearchIcon} alt="Search" />
          </LinksContainer>
          <div className="hidden md:flex justify-center items-center">
            <Link
              to={"otherServices"}
              style={{ whiteSpace: "nowrap", margin: "0px 20px" }}
            >
              Other Services
            </Link>
            <Button className="border-2 whitespace-nowrap">
              <p style={{ fontSize: 16, color: "black" }}>Contact us</p>
            </Button>
          </div>
          <div
            className="flex md:hidden justify-center items-center rounded-lg cursor-pointer"
            onClick={() => {
              setShowMobileNav((prevState) => !prevState);
            }}
          >
            <IoMdMenu
              size={25}
              className={`${
                showMobileNav ? "rotate-90" : "rotate-0"
              } transition-all`}
            />
          </div>
        </Container>
      </ContainerNav>
      <div
        className={`${
          showMobileNav ? "flex translate-y-0" : "hidden"
        } md:hidden h-screen w-full bg-white  flex-col items-center justify-start p-5 overflow-scroll transition-all ease-in-out`}
      >
        {links.map((link) => {
          return (
            <Link
              to={link.path}
              style={{ textDecoration: "none", whiteSpace: "nowrap" }}
              className=" w-full p-5 text-center"
            >
              <p className="text-3xl">{link.title}</p>
            </Link>
          );
        })}
        <Link to={"otherServices"} className="my-5">
          Other Services
        </Link>
        <Button className="border-2 whitespace-nowrap">
          <p style={{ fontSize: 16, color: "black" }}>Contact us</p>
        </Button>
      </div>
    </>
  );
}

export default Navbar;
