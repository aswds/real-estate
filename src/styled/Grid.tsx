import styled from "styled-components";

interface GridProps {
  gridTemplateColumns?: string;
  gridGap?: string;
  tailwind?: string;
}

const Grid = styled.div.attrs<GridProps>((props) => ({
  className: `${props.className}`,
  gridTemplateColumns: props.gridTemplateColumns,
  gridGap: props.gridGap,
}))`
  display: grid;

  /* Set default grid options */

  // Allow passing custom grid options as props
`;

export default Grid;
