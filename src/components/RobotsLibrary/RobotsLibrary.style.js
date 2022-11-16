// import styled, {createGlobalStyle} from "styled-components";

// export const StyledEntryCard = styled.div`
//   width: 100%;
//   height: 100%;
//   padding: 74px;
//   margin-bottom: 40px;
//   background-color: #0f1519;
//   box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 0 rgba(0, 0, 0, 0.06);
//   text-align: center;
//   h2 {
//     font-weight: 500;
//     margin-bottom: 50px;
//   }
//   span {
//     display: block;
//     margin-top: 40px;
//     color: #888888;
//     font-size: 14px;
//   }
//   a {
//     margin-left: 4px;
//     color: #fff;
//   }
// `;

// export const Container = styled.div`
//   width: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   flex-direction: column;
//   gap: 20px;
// `;

// export const Title = styled.p`
//   color: #fff;
//   font-size: 30px;
// `;

// export const Table = styled.table`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: "auto";
//   background-color: #0f1519;
//   margin-left: auto;
//   margin-right: auto;
//   text-align: center;
//   font-size: 22px;
// `;

// export const Thead = styled.thead`
//   width: 100%;
//   min-height: 60px;
//   display: flex;
//   background-color: #000;
//   text-align: center;
//   align-items: center;
//   align-content: center;
//   column-span: "3";
//   tr {
//     &:hover {
//       background-color: #000;
//       cursor: auto;
//     }
//   }
// `;

// export const Column = styled.td`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-left: 30px;
// `;

// export const Tbody = styled.tbody`
//   width: 100%;
//   height: 100%;
//   height: 300px;
//   display: flex;
//   flex-direction: column;
//   overflow-y: auto;
//   border: 1px solid #00c8c8;
//   border-radius: 4px;
//   padding: 0 5px;

//   &::-webkit-scrollbar {
//     appearance: none;
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: #252c32;
//     border-radius: 10px;
//   }

//   &::-webkit-scrollbar-track {
//     width: 10px;
//     margin: 3px 0px;
//   }

//   &::-webkit-scrollbar:vertical {
//     width: 8px;
//   }
// `;

// export const Row = styled.tr`
//   width: 100%;
//   min-height: 60px;
//   display: flex;
//   border-bottom: 1px solid #252c32;
//   color: #fff;
//   &:hover {
//     background-color: #ff4655;
//     background-color: #0a0e13;
//   }
//   cursor: pointer;
// `;

// export const Feedback = styled.tr`
//   width: 100%;
//   min-height: 100%;
//   display: flex;
//   color: #fff;
// `;

// export const Ellipsis = styled.p`
//   max-width: 120px;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
// `;

// export const Refresh = styled.button`
//   width: 300px;
//   height: 25px;
// `;

// export const StyledButton = styled.button`
//   width: ${(props) => (props.full ? "100%" : null)};
//   min-width: 64px;
//   border: 0;
//   border-radius: 4px;
//   padding: 8px 16px;
//   outline: none;
//   background-color: #00c8c8;
//   //color: #252c32;
//   font-size: 0.875rem;
//   font-weight: 500;
//   line-height: 1.5;
//   letter-spacing: 0.02857rem;
//   cursor: pointer;
//   transition: all 0.2s;
//   margin-left: 484px;
//   &:hover {
//     background-color: #009595;
//   }
// `;

// export const GlobalStyle = createGlobalStyle`
//     * {
//         margin: 0;
//         padding: 0;
//         outline: 0;
//         text-decoration: none;
//         box-sizing: border-box;
//     }

//     body {
//         font-size: 16px;
//         font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//         color: #333;
//         -webkit-font-smoothing: antialised;
//         -moz-osx-font-smoothing: grayscale;
//     }
// `;

// export const EntryPage = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   min-height: 100vh;
//   background-color: #0f1519;
// `;

import styled from "styled-components";

export const PadreContainer = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f1519;
`;

export const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.p`
  color: #fff;
  font-size: 30px;
`;

export const Table = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #252c32;
`;

export const Thead = styled.thead`
  width: 100%;
  min-height: 60px;
  display: flex;
  background-color: #000;
  text-align: center;

  tr {
    &:hover {
      background-color: #000;
      cursor: auto;
    }
  }
`;

export const Column = styled.td`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${(props) => (props.name ? `start` : `center`)};
  align-items: center;
  overflow: hidden;
  /* min-width: auto;
  max-width: auto; */
`;

export const Tbody = styled.tbody`
  width: 100%;
  height: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  border: 1px;
  padding: 0 5px;
  text-align: center;

  &::-webkit-scrollbar {
    appearance: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #252c32;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    width: 10px;
    margin: 3px 0px;
  }

  &::-webkit-scrollbar:vertical {
    width: 8px;
  }
`;

export const Row = styled.tr`
  width: 100%;
  min-height: 60px;
  display: flex;
  border-bottom: 1px solid #252c32;
  color: #fff;
  &:hover {
    background-color: #ff4655;
    background-color: #0a0e13;
  }
`;

export const Feedback = styled.tr`
  width: 100%;
  min-height: 100%;
  display: flex;
  color: #fff;
`;

export const Ellipsis = styled.p`
  max-width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledButton = styled.button`
  width: ${(props) => (props.full ? "100%" : null)};
  min-width: 64px;
  border: 0;
  border-radius: 4px;
  padding: 8px 16px;
  outline: none;
  background-color: #00c8c8;
  //color: #252c32;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02857rem;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  margin-left: 83.6%;
  margin-top: -3%;
  &:hover {
    background-color: #009595;
  }
`;

export const StyledInput = styled.input`
  width: 40%;
  outline: none;
  padding: 8px 16px;
  border: 1px solid #00c8c8;
  border-radius: 4px;
  font-size: 1rem;
  -webkit-text-fill-color: #dedede;
  transition: box-shadow 0.2s;
  background-color: #252c32;
  &::placeholder {
    color: blue;
    -webkit-text-fill-color: #b8b8b8;
  }
  &:focus {
    box-shadow: 0 0 0 2px rgb(0, 200, 200, 0.5);
    color: #0f1519;
  }
`;
