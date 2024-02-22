import React, { ReactNode } from "react";
import styled from "styled-components";

interface FlexProps extends React.PropsWithChildren {
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

const StyledFlex = styled.div.attrs<FlexProps>((props) => {
  return {
    className: `flex ${props.className}`,
    margin: props.margin,
    padding: props.padding,

    style: { flexDirection: props.direction, alignItems: props.alignItems },
  };
})`
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
