import React, { ComponentProps } from "react";
import styled from "styled-components";

interface FlexProps extends React.PropsWithChildren, ComponentProps<"div"> {
  direction?: string;
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  border?: string;
  padding?: string;
  margin?: string;
  className?: string;
}
//@ts-ignore
const StyledFlex = styled.div.attrs((props: FlexProps) => {
  return {
    className: `flex ${props.className}`,
    margin: props.margin,
    padding: props.padding,

    style: { flexDirection: props.direction, alignItems: props.alignItems },
  };
})<FlexProps>`
  align-items: ${(props) => props.alignItems || "stretch"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  /* Add your other default styling here */
  background-color: ${(props) => props.backgroundColor || "transparent"};
  border: ${(props) => props.border || ""};
  padding: ${(props) => props.padding || ""};
  box-sizing: border-box;
`;

const Container: React.FC<FlexProps> = (props) => {
  return <StyledFlex {...props} />;
};

export default Container;
