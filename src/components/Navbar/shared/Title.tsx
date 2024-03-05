import { CSSProperties } from "react";
import styled from "styled-components";

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
  textAlign?: string;
  flexColumnReverse?: boolean;
  descriptionProps?: CSSProperties;
}) {
  return (
    <div
      className={`flex  ${
        flexColumnReverse ? "flex-col-reverse" : "flex-col"
      }  mb-5`}
    >
      {/* @ts-ignore */}
      <Text style={{ textAlign, ...descriptionProps }}>{description}</Text>
      <h1
        className={`${titleClassName} text-4xl font-semibold  md:text-6xl my-5 `}
        //@ts-ignore
        style={{ textAlign, fontSize }}
      >
        {title}
      </h1>
    </div>
  );
}

export default Title;
