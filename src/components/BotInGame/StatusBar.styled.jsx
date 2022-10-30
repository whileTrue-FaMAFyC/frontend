import styled from "styled-components";

export const ContainerStyle = styled.div`
  height: 1px;
  width: 200px;
  background-color: #e0e0d0;
  border-radius: 50px;
  margin: 5px;
  display: table;
`;

export const FillerStyles = styled.div`
  //height: 100%;
  width: ${(props) => props.width}%;
  background-color: ${(props) => props.bgcolor};
  border-radius: inherit;
  text-align: right;
  transition: width 1s ease-in-out;
`;

export const LabelStyles = styled.span`
  padding: 3px;
  color: white;
  font-weight: bold;
  font-size: 10px;
  text-align: right;
  color: white;
  display: table-cell;
  vertical-align: middle;
`;

export const Name = styled.p`
  font-size: 15px;
  padding: 3px;
  color: white;
`;

export const StyledEntryCard = styled.div`
  //display: inline-block;
  align-items: flex-start;
  display: inline-block;
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
  padding: 50px;
  margin: auto;
  background-color: #252c32;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 0 rgba(0, 0, 0, 0.06);
  //text-align: center;
`;
