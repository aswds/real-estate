import HeroHouse from "src/assets/houses/hero_house.png";
import Button from "src/styled/Button";
import Container from "src/styled/Flex";
import styled from "styled-components";

const Text = styled.p.attrs({ className: `text-sm md:text-sm` })``;

function Hero() {
  return (
    <Container
      className="w-full flex-1 md:overflow-visible noiseBg relative overflow-hidden rounded-3xl   gap-20 "
      backgroundColor="transparent"
    >
      <Container
        direction="column"
        justifyContent="center"
        className="flex-1 pl-10 py-14"
      >
        <Text>Welcome to Realstate</Text>
        <h1 className="font-bold text-6xl my-5 ">Manage Your Property</h1>
        <Text className="mb-5 max-w-[90%]">
          Your will have everything nearby supermarket, buses , station, the
          carmen neighborhood, etc
        </Text>
        <Container
          justifyContent="center"
          alignItems="center"
          className="relative w-full rounded-full overflow-hidden "
        >
          <input
            placeholder="Enter your email"
            className="p-4 w-full h-[60px] outline-none"
          />
          <Button className="absolute right-0 " isDark>
            Get a Quote
          </Button>
        </Container>
      </Container>
      <Container className=" relative overflow-visible">
        <img
          className="group -mb-10 w-auto h-auto overflow-visible object-cover"
          alt="Group"
          src={HeroHouse}
        />
      </Container>

      {/* <Flex className="hidden md:flex"> */}
      {/* </Flex> */}
    </Container>
  );
}

export default Hero;
