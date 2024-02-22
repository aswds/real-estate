import { CSSProperties } from "react";
import Container from "src/styled/Flex";
import styled from "styled-components";
import { Stringifier } from "styled-components/dist/types";

const Text = styled.p.attrs({ className: `text-md md:text-lg` })``;

function Title({
  description,
  title,
  textAlign = "start",
  flexColumnReverse = false,
  fontSize,
  descriptionProps,
  titleClassName,
}: {
  title: string;
  titleClassName?: string;
  fontSize?: number;
  description: string;
  textAlign: string;
  flexColumnReverse?: boolean;
  descriptionProps?: CSSProperties;
}) {
  return (
    <div
      className={`flex  ${
        flexColumnReverse ? "flex-col-reverse" : "flex-col"
      }  mb-5`}
    >
      <Text style={{ textAlign, ...descriptionProps }}>{description}</Text>
      <h1
        className={`${titleClassName} text-4xl font-semibold  md:text-6xl my-5 `}
        style={{ textAlign, fontSize }}
      >
        {title}
      </h1>
    </div>
  );
}

export default Title;
