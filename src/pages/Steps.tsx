import React from "react";
import StepBox from "src/components/Navbar/StepBox";
import Title from "src/components/Navbar/shared/Title";
import Container from "src/styled/Flex";
import Grid from "src/styled/Grid";
import QuoteIcon from "src/assets/icons/vuesax/linear/sms-tracking.svg";
import AnswerIcon from "src/assets/icons/vuesax/linear/messages.svg";
import RegIcon from "src/assets/icons/vuesax/linear/edit-2.svg";
import { theme } from "src/Theme";

function Steps() {
  return (
    <Container
      alignItems="center"
      justifyContent="center"
      direction="column"
      className="md:evenSectionPadding px-3"
    >
      <Title
        textAlign="center"
        description="Three steps. Three minutes."
        title="Everything should be this easy."
      />
      <Grid className=" w-full items-center grid-cols-1 md:grid-cols-3 gap-10 ">
        <StepBox
          iconSrc={AnswerIcon}
          description="Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. "
          title="Answer questions"
        />
        <StepBox
          iconSrc={QuoteIcon}
          description="Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. "
          title="Select a quote"
        />
        <StepBox
          iconSrc={RegIcon}
          description="Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. "
          title="Get registered"
        />
      </Grid>
    </Container>
  );
}

export default Steps;
