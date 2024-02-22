import Title from "src/components/Navbar/shared/Title";
import Button from "src/styled/Button";
import Container from "src/styled/Flex";
import Grid from "src/styled/Grid";
import People from "src/assets/People.png";
import TransferInfo from "src/components/TransferInfo";
function BookTransfer() {
  return (
    <Container
      direction="column"
      alignItems="center"
      className=" md:evenSectionPadding "
    >
      <div className="md:max-w-[80%] mb-5">
        <Title
          description=""
          textAlign="center"
          title="We are a global, boutique real estate brokerage"
        />
      </div>

      <Grid className="grid-cols-1 md:grid-cols-2 md:gap-10">
        <>
          <img
            src={People}
            alt="book now!"
            className="h-full object-cover overflow-hidden rounded-xl"
          />
        </>
        <>
          <Container direction="column" className="">
            <Title
              description="Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc. Tellus consequat nisl quis nisl justo."
              textAlign="start"
              title="The transfer of real estate"
              flexColumnReverse
              titleClassName="text-3xl"
            />
            <Container className="gap-10 my-5">
              <Button title="Book Now!" isDark>
                Book Now!
              </Button>
              <Button title="Book Now!">Book Now!</Button>
            </Container>
            <TransferInfo />
          </Container>
        </>
      </Grid>
    </Container>
  );
}

export default BookTransfer;
