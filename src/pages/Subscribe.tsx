import React from "react";
import Title from "src/components/Navbar/shared/Title";
import Container from "src/styled/Flex";
import SubHouse from "src/assets/houses/house4.svg";
import Button from "src/styled/Button";
function SubscribeSection() {
  return (
    <Container
      className="noiseBg min-h-[450px] md:h-[450px] w-full rounded-lg md:gap-10 flex-col-reverse md:flex-row overflow-visible"
      justifyContent="space-around"
      alignItems="center"
    >
      <Container className=" py-5 ml-10" direction="column">
        <div className="mb-10">
          <Title
            title="Subscribe Our Newsletter"
            description="Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc."
            flexColumnReverse
            descriptionProps={{
              maxWidth: "90%",
            }}
          />
        </div>

        <Container
          justifyContent="center"
          alignItems="center"
          className="relative w-[85%] rounded-full overflow-hidden "
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

      <Container className=" w-full relative overflow-visible ">
        <img
          className="group h-[120%] w-auto overflow-visible hidden md:flex"
          alt="Group"
          src={SubHouse}
        />
      </Container>
    </Container>
  );
}

export default SubscribeSection;
