import React, { Ref, forwardRef } from "react";
import Container from "src/styled/Flex";

export interface ProjectBoxProps {
  imgSrc: string;
  title: string;
  description: string;
  rating: number;
}

const ProjectBox = forwardRef(function ProjectBoxRender(
  { description, imgSrc, rating, title }: ProjectBoxProps,
  ref
) {
  return (
    <div
      className="border-2 rounded-2xl flex-column md:min-w-[410px] min-w-full"
      ref={ref}
    >
      <Container
        className="w-full bg-gray-500 overflow-hidden rounded-t-2xl"
        style={{ height: 250 }}
      >
        <img src={imgSrc} alt="House" className="w-full h-full object-cover" />
      </Container>
      <Container className="gap-5 p-5" direction="column">
        <h1 className="font-semibold text-xl">{title}</h1>
        <p className="text-sm">{description}</p>
        <div>{rating}</div>
      </Container>
    </div>
  );
});

export default ProjectBox;
