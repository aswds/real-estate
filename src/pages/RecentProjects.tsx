import { ElementRef, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { house1, house2, house3 } from "src/assets/houses";
import Title from "src/components/Navbar/shared/Title";
import ProjectBox, { ProjectBoxProps } from "src/components/ProjectBox";
import Container from "src/styled/Flex";
import styled from "styled-components";

const RecentProjectsButton = styled.div`
  padding: 7px;
  cursor: pointer;
  border-radius: 100%;

  &.available {
    background-color: #000;
  }
  &.not-available {
    background-color: white;
  }
`;

function RecentProjects() {
  const projectsContainerRef = useRef<ElementRef<"div">>(null);
  const boxRef = useRef<ElementRef<"div">>(null);
  const projects: ProjectBoxProps[] = [
    {
      title: "Sobha Hearland II Villas",
      description:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
      imgSrc: house1,
      rating: 4.83,
    },
    {
      title: "Sobha Hearland II Villas",
      description:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
      imgSrc: house2,
      rating: 4.83,
    },
    {
      title: "Sobha Hearland II Villas",
      description:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
      imgSrc: house3,
      rating: 4.83,
    },
  ];

  const [page, setPage] = useState(0);

  function slideNext() {
    const containerWidth = projectsContainerRef.current?.clientWidth;

    const boxWidth = boxRef.current?.clientWidth;
    console.log(containerWidth, boxWidth);
  }

  return (
    <Container direction="column">
      <Container justifyContent="space-between" alignItems="center">
        <Title
          description="Best Project of the Years"
          textAlign="start"
          title="Our recent projects"
        />
        <div className="flex flex-row gap-5">
          <RecentProjectsButton
            className={page > 0 ? `available` : "not-available"}
            onClick={() =>
              setPage((pageNum) => {
                if (pageNum >= 0) return pageNum - 1;
                return 0;
              })
            }
          >
            <FaChevronLeft color={page > 0 ? "white" : "black"} />
          </RecentProjectsButton>
          <RecentProjectsButton
            className={page > 0 ? `available` : "not-available"}
            onClick={() => slideNext()}
          >
            <FaChevronRight color={page > 0 ? "white" : "black"} />
          </RecentProjectsButton>
        </div>
      </Container>

      <div
        className="flex flex-row overflow-scroll  gap-10 "
        ref={projectsContainerRef}
      >
        {projects.map(() => {
          return (
            <>
              {projects.map((projectData, index) => {
                return <ProjectBox {...projectData} key={index} ref={boxRef} />;
              })}

              {/* {index === 0 && (
                <ProjectBox {...project} key={index} ref={boxRef} />
              )}
              {index > 0 && <ProjectBox {...project} key={index} />} */}
            </>
          );
        })}
      </div>
    </Container>
  );
}

export default RecentProjects;
